import clsx from 'clsx'
import Image from 'next/image'
import formatPrice from '@/utils/formatPrice'

type Props = {
  id: number
  name: string
  ingredients: string
  price: number
  priceTwice?: number
  priceXl: number
  image: string
  secondary?: boolean
  priority?: boolean
}

export default function PizzaCard({
  id,
  name,
  ingredients,
  price,
  priceTwice,
  priceXl,
  image,
  secondary = false,
  priority = false
}: Props) {
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
        <div className="mb-4 flex gap-8">
          <div>
            <h6 className={clsx('uppercase text-xs', titleColor)}>Familiar:</h6>
            <p className="text-2xl font-bold">{formatPrice(price)}</p>
            {priceTwice ? (
              <p className="text-sm font-semibold">
                2x <span className={titleColor}>{formatPrice(priceTwice)}</span>
              </p>
            ) : null}
          </div>
          <div>
            <h6 className={clsx('uppercase text-xs', titleColor)}>XL (38cm):</h6>
            <p className="text-2xl font-bold">{formatPrice(priceXl)}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
