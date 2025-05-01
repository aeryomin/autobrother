import Image from 'next/image'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Services from './components/Services/Services'
import Advantages from './components/Advantages/Advantages'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#111111] text-[#B0B0B0]">
      <Header />
      <Hero />
      <Services />
      <Advantages />
    </main>
  )
}

const services = [
  { icon: 'engine', title: 'Ремонт\nдвигателя' },
  { icon: 'oil', title: 'Замена\nмасла' },
  { icon: 'diagnostic', title: 'Компьютерная\nдиагностика' },
  { icon: 'tire', title: 'Шиномонтаж' },
  { icon: 'suspension', title: 'Ремонт\nподвески' },
  { icon: 'alignment', title: 'Сход-развал' },
  { icon: 'maintenance', title: 'Плановое ТО' },
  { icon: 'filter', title: 'Замена\nфильтров' }
]

const advantages = [
  { icon: 'masters', text: 'Опытные мастера с профильным образованием' },
  { icon: 'price', text: 'Прозрачные цены и официальные документы' },
  { icon: 'speed', text: 'Быстрое выполнение работ' },
  { icon: 'guarantee', text: 'Гарантия на все виды услуг' }
] 