import type { Metadata } from 'next'
import Header from '@/components/common/Header'
import PizzaGrid from '@/components/menu/PizzaGrid'
import { menuGroups, menuPizzas } from '@/utils/menu'

export const metadata: Metadata = { title: 'Menú - Zappipizza' }

export default function MenuPage() {
  return (
    <>
      <Header title="Menu" />
      <PizzaGrid pizzas={menuPizzas} groups={menuGroups} />
    </>
  )
}
