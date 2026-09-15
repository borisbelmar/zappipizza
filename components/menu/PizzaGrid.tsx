import PizzaCard from '@/components/common/PizzaCard'
import type { MenuPizza, PizzaGroup } from '@/utils/menu'

type Props = { pizzas: MenuPizza[]; groups: PizzaGroup[] }

export default function PizzaGrid({ pizzas, groups }: Props) {
  return (
    <div
      className="bg-black text-white "
      style={{ backgroundImage: 'url("/images/bg-food-light.png")' }}
    >
      <div className="container py-16 px-8 flex flex-col gap-16">
        {groups.map(group => (
          <div key={group.id}>
            <h2 className="text-4xl font-display mb-8 font-bold">{group.name}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {pizzas
                .filter(pizza => pizza.group === group.id)
                .map(item => (
                  <PizzaCard
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    ingredients={item.ingredients}
                    price={group.price}
                    priceTwice={group.priceTwice}
                    priceXl={group.priceXl}
                    image={item.image}
                    secondary={item.group % 2 === 0}
                  />
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
