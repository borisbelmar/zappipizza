import PropTypes from 'prop-types'
import Head from 'next/head'
import pizzasData from '../data/pizzas.json'
import Menu from '../components/screens/Menu'

export default function MenuPage({ pizzas }) {
  return (
    <>
      <Head>
        <title>Menú - Zappipizza</title>
      </Head>
      <Menu pizzas={pizzas} />
    </>
  )
}

MenuPage.propTypes = {
  pizzas: PropTypes.array.isRequired
}
export async function getServerSideProps() {
  return {
    props: {
      pizzas: pizzasData.map((pizza, idx) => ({ ...pizza, id: idx + 1 }))
    }
  }
}
