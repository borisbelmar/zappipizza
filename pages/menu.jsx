import PropTypes from 'prop-types'
import Head from 'next/head'
import pizzasData from '../data/pizzas.json'
import pizzaGroups from '../data/groups.json'
import Menu from '../components/screens/Menu'

export default function MenuPage({ pizzas, groups }) {
  return (
    <>
      <Head>
        <title>Menú - Zappipizza</title>
      </Head>
      <Menu pizzas={pizzas} groups={groups} />
    </>
  )
}

MenuPage.propTypes = {
  pizzas: PropTypes.array.isRequired,
  groups: PropTypes.array.isRequired
}
export async function getServerSideProps() {
  return {
    props: {
      pizzas: pizzasData.map((pizza, idx) => ({ ...pizza, id: idx + 1 })),
      groups: pizzaGroups.map((group, idx) => ({ ...group, id: idx + 1 }))
    }
  }
}
