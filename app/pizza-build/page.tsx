import type { Metadata } from 'next'
import BaseIngredients from '@/components/pizza-build/BaseIngredients'
import ChoiceIngredients from '@/components/pizza-build/ChoiceIngredients'
import Hero from '@/components/pizza-build/Hero'
import { pizzaBuild } from '@/utils/menu'

export const metadata: Metadata = { title: 'Arma tu pizza - Zappipizza' }

export default function PizzaBuildPage() {
  const { ingredients } = pizzaBuild

  return (
    <>
      <Hero />
      <div
        className="text-white bg-dark-700 py-16"
        style={{ backgroundImage: 'url("/images/bg-food-light.png")' }}
      >
        <BaseIngredients options={ingredients.base.options} />
        <div className="container flex flex-col gap-4">
          <h2 className="font-display font-bold text-4xl uppercase">INGREDIENTES A ELECCIÓN</h2>
          <div className="flex gap-4 flex-col md:flex-row">
            <ChoiceIngredients
              ingredients={ingredients.vegetal.options}
              title={ingredients.vegetal.title}
              price={ingredients.vegetal.price}
            />
            <ChoiceIngredients
              ingredients={ingredients.meat.options}
              title={ingredients.meat.title}
              price={ingredients.meat.price}
            />
            <div className="flex w-full flex-col gap-5">
              <ChoiceIngredients
                ingredients={ingredients.sauce.options}
                title={ingredients.sauce.title}
                price={ingredients.sauce.price}
              />
              <ChoiceIngredients
                ingredients={ingredients.special.options}
                title={ingredients.special.title}
                price={ingredients.special.price}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
