import Image from 'next/image'
import type { Ingredient } from '@/utils/menu'

type Props = { ingredient: Ingredient }

export default function IngredientImage({ ingredient }: Props) {
  return (
    <div className="w-full relative aspect-[100/12]">
      <Image src={ingredient.image} alt={ingredient.name} width={1000} height={120} />
    </div>
  )
}
