import formatPrice from '@/utils/formatPrice'
import type { Ingredient } from '@/utils/menu'
import IngredientImage from './IngredientImage'

type Props = { ingredients: Ingredient[]; title: string; price: number }

export default function ChoiceIngredients({ ingredients, title, price }: Props) {
  return (
    <div className="w-full">
      <h3 className="font-display font-bold text-3xl uppercase mb-4 ">
        {title} | {formatPrice(price)}
      </h3>
      <div className="flex flex-col gap-3">
        {ingredients.map(ingredient => (
          <IngredientImage key={ingredient.name} ingredient={ingredient} />
        ))}
      </div>
    </div>
  )
}
