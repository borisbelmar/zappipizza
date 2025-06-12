import formatPrice from '@utils/formatPrice'
import PropTypes from 'prop-types'

export default function PriceIngredientsItem({
  price,
  qty,
  priceTwice,
}) {
  return (
    <li className="w-full">
      <h6 className="font-display font-bold text-3xl">{qty} INGREDIENTES</h6>
      <p className="font-bold text-primary text-5xl">{formatPrice(price)}</p>
      <p className="font-bold text-secondary text-5xl">2X {formatPrice(priceTwice)}</p>
      <p className="font-bold text-3xl">+ Bebida 1.5 Litros</p>
    </li>
  )
}
PriceIngredientsItem.propTypes = {
  qty: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  priceTwice: PropTypes.number.isRequired,
}
