import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

// Простой in-memory rate limiting (для продакшена лучше использовать Redis)
const requestCounts = new Map<string, { count: number; resetTime: number }>()

function checkRateLimit(identifier: string, limit: number = 5, windowMs: number = 60000): boolean {
  const now = Date.now()
  const userData = requestCounts.get(identifier)
  
  if (!userData || now > userData.resetTime) {
    requestCounts.set(identifier, { count: 1, resetTime: now + windowMs })
    return true
  }
  
  if (userData.count >= limit) {
    return false
  }
  
  userData.count++
  return true
}

// Валидация телефона
function validatePhone(phone: string): boolean {
  const phoneRegex = /^(\+7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/
  return phoneRegex.test(phone.replace(/\s/g, ''))
}

// Валидация даты
function validateDate(date: string): boolean {
  const selectedDate = new Date(date)
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  
  return selectedDate >= today
}

// Валидация времени
function validateTime(time: string): boolean {
  const [hours, minutes] = time.split(':').map(Number)
  return hours >= 9 && hours <= 21 && minutes >= 0 && minutes <= 59
}

export async function POST(request: Request) {
  try {
    // Получаем IP адрес для rate limiting
    const forwarded = request.headers.get('x-forwarded-for')
    const ip = forwarded ? forwarded.split(',')[0] : 'unknown'
    
    // Проверяем rate limit: 5 запросов в минуту с одного IP
    if (!checkRateLimit(ip, 5, 60000)) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      )
    }

    const data = await request.json()
    const { name, phone, car, service, date, time, comment } = data

    // Валидация обязательных полей
    if (!name || !phone || !car || !service) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Валидация данных
    if (!validatePhone(phone)) {
      return NextResponse.json(
        { error: 'Invalid phone number format' },
        { status: 400 }
      )
    }

    // if (!validateDate(date)) {
    //   return NextResponse.json(
    //     { error: 'Date cannot be in the past' },
    //     { status: 400 }
    //   )
    // }

    // if (!validateTime(time)) {
    //   return NextResponse.json(
    //     { error: 'Service hours: 9:00 - 21:00' },
    //     { status: 400 }
    //   )
    // }

    // Проверяем SMTP настройки
    if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASSWORD) {
      console.error('SMTP configuration missing')
      return NextResponse.json(
        { error: 'Service temporarily unavailable' },
        { status: 500 }
      )
    }

    // Создаем транспорт для отправки email
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    })

    // Проверяем соединение с SMTP
    try {
      await transporter.verify()
      console.log('SMTP connection verified successfully')
    } catch (verifyError) {
      console.error('SMTP verification failed:', verifyError)
      return NextResponse.json(
        { error: 'Email service unavailable. Please try again later.' },
        { status: 500 }
      )
    }

    // Формируем текст письма
    const mailOptions = {
      from: process.env.SMTP_USER,
      to: process.env.ADMIN_EMAIL,
      subject: 'Новая заявка на запись в автосервис',
      html: `
        <h2>Новая заявка на запись</h2>
        <p><strong>Имя:</strong> ${name}</p>
        <p><strong>Телефон:</strong> ${phone}</p>
        <p><strong>Автомобиль:</strong> ${car}</p>
        <p><strong>Услуга:</strong> ${service}</p>
        <p><strong>Комментарий:</strong> ${comment || 'Нет комментария'}</p>
        <p><strong>IP адрес:</strong> ${ip}</p>
        <p><strong>Время заявки:</strong> ${new Date().toLocaleString('ru-RU')}</p>
      `,
    }

    // Отправляем письмо
    console.log('Attempting to send email to:', process.env.ADMIN_EMAIL)
    const result = await transporter.sendMail(mailOptions)
    console.log('Email sent successfully:', result.messageId)

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error sending booking request:', error)
    
    // Логируем детали ошибки для отладки
    if (error instanceof Error) {
      console.error('Error details:', error.message)
    }
    
    return NextResponse.json(
      { error: 'Failed to send booking request. Please try again later.' },
      { status: 500 }
    )
  }
} 