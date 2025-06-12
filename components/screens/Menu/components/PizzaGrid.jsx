import PropTypes from 'prop-types'
import PizzaCard from '@components/common/PizzaCard'

export default function PizzaGrid({ pizzas }) {
  return (
    <div className="bg-black text-white " style={{ backgroundImage: 'url("/images/bg-food-light.png")' }}>
      <div className="container py-16 px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {pizzas.map(item => (
            <PizzaCard
              key={item.id}
              id={item.id}
              name={item.name}
              ingredients={item.ingredients}
              price={item.price}
              priceTwice={item.priceTwice}
              image={item.image}
              secondary={item.group % 2 === 0}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

PizzaGrid.propTypes = {
  pizzas: PropTypes.array.isRequired
}
