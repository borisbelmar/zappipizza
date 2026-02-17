import PropTypes from 'prop-types'
import pizzas from '../data/pizzas.json'
import groups from '../data/groups.json'
import Home from '../components/screens/Home'

export async function getServerSideProps() {
  return {
    props: {
      featuredPizzas: pizzas
        .filter(pizza => pizza.featured)
        .map((pizza, idx) => ({
          ...pizza,
          id: idx + 1,
          price: groups.find(group => group.id === pizza.group)?.price || pizza.price || 0,
          priceXl: groups.find(group => group.id === pizza.group)?.priceXl || pizza.priceXl || 0
        }))
        .slice(0, 4)
    }
  }
}

export default function HomePage({ featuredPizzas }) {
  return (
    <Home featuredPizzas={featuredPizzas} />
  )
}

HomePage.propTypes = {
  featuredPizzas: PropTypes.array.isRequired
}
