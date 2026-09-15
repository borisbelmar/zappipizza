import type { PriceByQty } from '@/utils/menu'
import PriceIngredientsItem from './PriceIngredientsItem'

type Props = { priceByQty: PriceByQty[] }

export default function PriceIngredients({ priceByQty }: Props) {
  return (
    <div className="container text-center flex flex-col gap-4 py-16">
      <ul className="text-2xl grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-6">
        {priceByQty.map(ingredient => (
          <PriceIngredientsItem
            key={ingredient.qty}
            qty={ingredient.qty}
            price={ingredient.price}
            priceTwice={ingredient.priceTwice}
            priceXl={ingredient.priceXl}
            priceXlTwice={ingredient.priceXlTwice}
          />
        ))}
      </ul>
    </div>
  )
}
