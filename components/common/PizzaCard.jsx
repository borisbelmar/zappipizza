import clsx from 'clsx'
import Image from 'next/image'
import PropTypes from 'prop-types'
import formatPrice from '@utils/formatPrice'

export default function PizzaCard({
  id,
  name,
  ingredients,
  price,
  priceTwice,
  image,
  secondary,
  priority
}) {
  const separatorColor = secondary ? 'bg-secondary-500' : 'bg-primary-500'
  const titleColor = secondary ? 'text-secondary-500' : 'text-primary-500'

  return (
    <div className="w-full text-white bg-black min-h-[380px] rounded-xl overflow-hidden flex flex-col">
      <Image
        width={300}
        height={170}
        className="w-full aspect-video object-cover"
        src={image}
        alt={name}
        priority={priority}
      />
      <div className={clsx('h-1', separatorColor)} />
      <div className="p-4 flex flex-col flex-1 justify-between">
        <div>
          <h3 className={clsx('font-semibold font-display text-2xl', titleColor)}>
            {id}. {name}
          </h3>
          <p>{ingredients}</p>
        </div>
        <div className="mb-4">
          <p className="text-2xl">
            {formatPrice(price)}
          </p>
          <p className={clsx('text-2xl font-bold', titleColor)}>
            2x {formatPrice(priceTwice)}
          </p>
        </div>
      </div>
    </div>
  )
}

PizzaCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  ingredients: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  priceTwice: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  secondary: PropTypes.bool,
  priority: PropTypes.bool
}

PizzaCard.defaultProps = {
  secondary: false,
  priority: false
}
