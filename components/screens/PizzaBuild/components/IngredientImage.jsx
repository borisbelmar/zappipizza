import Image from 'next/image'
import PropTypes from 'prop-types'

export default function IngredientImage({ ingredient }) {
  return (
    <div className="w-full relative aspect-[100/12]">
      <Image src={ingredient.image} alt={ingredient.name} width={1000} height={120} />
    </div>
  )
}
IngredientImage.propTypes = {
  ingredient: PropTypes.object.isRequired
}
