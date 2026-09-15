import buildData from '@/data/build.json'
import groupsData from '@/data/groups.json'
import pizzasData from '@/data/pizzas.json'

export type PizzaGroup = {
  id: number
  name: string
  slug: string
  price: number
  priceTwice: number
  priceXl: number
}

export type MenuPizza = {
  id: number
  name: string
  ingredients: string
  image: string
  group: number
  featured?: boolean
  price: number
  priceXl: number
}

export type Ingredient = { name: string; image: string }

export type IngredientGroup = { title: string; price: number; options: Ingredient[] }

export type PriceByQty = {
  qty: number
  price: number
  priceTwice: number
  priceXl: number
  priceXlTwice: number
}

export type PizzaBuild = {
  priceByQty: PriceByQty[]
  ingredients: {
    base: { title: string; options: Ingredient[] }
    vegetal: IngredientGroup
    meat: IngredientGroup
    sauce: IngredientGroup
    special: IngredientGroup
  }
}

export const menuGroups: PizzaGroup[] = groupsData

export const menuPizzas: MenuPizza[] = pizzasData.map((pizza, idx) => {
  const group = menuGroups.find(item => item.id === pizza.group)
  if (!group) {
    throw new Error(`Pizza "${pizza.name}" apunta al grupo inexistente ${pizza.group}`)
  }
  return { ...pizza, id: idx + 1, price: group.price, priceXl: group.priceXl }
})

export const featuredPizzas: MenuPizza[] = menuPizzas.filter(pizza => pizza.featured).slice(0, 4)

export const pizzaBuild: PizzaBuild = buildData
