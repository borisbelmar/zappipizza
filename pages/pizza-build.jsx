import PropTypes from 'prop-types'
import Head from 'next/head'
import PizzaBuild from '../components/screens/PizzaBuild'
import pizzaBuildData from '../data/build.json'

export async function getServerSideProps() {
  return {
    props: {
      pizzaBuild: pizzaBuildData
    }
  }
}

export default function PizzaBuildPage({ pizzaBuild }) {
  return (
    <>
      <Head>
        <title>Arma tu pizza - Zappipizza</title>
      </Head>
      <PizzaBuild data={pizzaBuild} />
    </>
  )
}

PizzaBuildPage.propTypes = {
  pizzaBuild: PropTypes.object.isRequired
}
