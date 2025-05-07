import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: Request) {
  try {
    const data = await request.json()
    const { name, phone, car, service, date, time, comment } = data

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
        <p><strong>Дата:</strong> ${date}</p>
        <p><strong>Время:</strong> ${time}</p>
        <p><strong>Комментарий:</strong> ${comment || 'Нет комментария'}</p>
      `,
    }

    // Отправляем письмо
    await transporter.sendMail(mailOptions)

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error sending booking request:', error)
    return NextResponse.json(
      { error: 'Failed to send booking request' },
      { status: 500 }
    )
  }
} 