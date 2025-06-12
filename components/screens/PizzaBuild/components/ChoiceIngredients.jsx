import PropTypes from 'prop-types'
import formatPrice from '@utils/formatPrice'
import IngredientImage from './IngredientImage'

export default function ChoiceIngredients({ ingredients, title, price }) {
  return (
    <div className="w-full">
      <h3 className="font-display font-bold text-3xl uppercase mb-4 ">{title} | {formatPrice(price)}</h3>
      <div className="flex flex-col gap-3">
        {ingredients.map(ingredient => (
          <IngredientImage key={ingredient.name} ingredient={ingredient} />
        ))}
      </div>
    </div>
  )
}
ChoiceIngredients.propTypes = {
  ingredients: PropTypes.array.isRequired,
  price: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired
}
