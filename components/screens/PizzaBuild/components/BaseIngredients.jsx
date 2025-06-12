import PropTypes from 'prop-types'
import IngredientImage from './IngredientImage'

export default function BaseIngredients({ options }) {
  return (
    <div className="container flex flex-col gap-4 mb-16">
      <h2 className="font-display font-bold text-4xl uppercase">Ingredientes Base</h2>
      <div className="flex flex-col md:flex-row gap-4">
        {options.map(ingredient => (
          <IngredientImage key={ingredient.name} ingredient={ingredient} />
        ))}
      </div>
    </div>
  )
}

BaseIngredients.propTypes = {
  options: PropTypes.array.isRequired
}
