import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function GET() {
  try {
    console.log('Testing SMTP configuration...')
    console.log('SMTP_HOST:', process.env.SMTP_HOST)
    console.log('SMTP_PORT:', process.env.SMTP_PORT)
    console.log('SMTP_USER:', process.env.SMTP_USER)
    console.log('ADMIN_EMAIL:', process.env.ADMIN_EMAIL)

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    })

    // Проверяем соединение
    await transporter.verify()
    console.log('SMTP connection verified')

    // Отправляем тестовое письмо
    const result = await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: process.env.ADMIN_EMAIL,
      subject: 'Тест SMTP - Автосервис',
      html: `
        <h2>Тестовое письмо</h2>
        <p>Если вы получили это письмо, значит SMTP настроен правильно!</p>
        <p>Время отправки: ${new Date().toLocaleString('ru-RU')}</p>
      `,
    })

    return NextResponse.json({ 
      success: true, 
      messageId: result.messageId,
      message: 'Тестовое письмо отправлено успешно'
    })

  } catch (error) {
    console.error('SMTP test failed:', error)
    return NextResponse.json({ 
      success: false, 
      error: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 })
  }
} 