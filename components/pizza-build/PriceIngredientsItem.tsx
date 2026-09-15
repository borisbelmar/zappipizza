import formatPrice from '@/utils/formatPrice'

type Props = {
  qty: number
  price: number
  priceTwice: number
  priceXl: number
  priceXlTwice: number
}

export default function PriceIngredientsItem({
  price,
  qty,
  priceTwice,
  priceXl,
  priceXlTwice
}: Props) {
  return (
    <li className="w-full">
      <h6 className="font-display font-bold text-xl">{qty} INGREDIENTES</h6>
      <p className="font-bold text-primary text-2xl">
        {formatPrice(price)} 32cm / {formatPrice(priceXl)} 38cm
      </p>
      <p className="font-bold text-secondary text-2xl">
        2X {formatPrice(priceTwice)} 32cm / {formatPrice(priceXlTwice)} 38cm
      </p>
      <p className="font-bold text-xl">+ Bebida 1.5 Litros</p>
    </li>
  )
}
