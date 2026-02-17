import Header from '@components/common/Header'
import PropTypes from 'prop-types'
import DefaultLayout from '../../layouts/DefaultLayout'
import PizzaGrid from './components/PizzaGrid'

export default function Menu({ pizzas, groups }) {
  return (
    <DefaultLayout>
      <Header title="Menu" />
      <PizzaGrid pizzas={pizzas} groups={groups} />
    </DefaultLayout>
  )
}

Menu.propTypes = {
  pizzas: PropTypes.array.isRequired,
  groups: PropTypes.array.isRequired
}
