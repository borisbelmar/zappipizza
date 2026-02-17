import formatPrice from '@utils/formatPrice'
import PropTypes from 'prop-types'

export default function PriceIngredientsItem({
  price,
  qty,
  priceTwice,
  priceXl,
  priceXlTwice
}) {
  return (
    <li className="w-full">
      <h6 className="font-display font-bold text-xl">{qty} INGREDIENTES</h6>
      <p className="font-bold text-primary text-2xl">{formatPrice(price)} 32cm / {formatPrice(priceXl)} 38cm</p>
      <p className="font-bold text-secondary text-2xl">2X {formatPrice(priceTwice)} 32cm / {formatPrice(priceXlTwice)} 38cm</p>
      <p className="font-bold text-xl">+ Bebida 1.5 Litros</p>
    </li>
  )
}
PriceIngredientsItem.propTypes = {
  qty: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  priceTwice: PropTypes.number.isRequired,
  priceXl: PropTypes.number.isRequired,
  priceXlTwice: PropTypes.number.isRequired
}
