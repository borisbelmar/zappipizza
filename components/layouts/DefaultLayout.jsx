import PropTypes from 'prop-types'
import Footer from '../common/Footer'
import Navigation from '../common/Navigation'

export default function DefaultLayout({ children }) {
  return (
    <main className="flex flex-col min-h-screen w-full font-body">
      <Navigation />
      <div className="flex-1">{children}</div>
      <Footer />
    </main>
  )
}

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired
}
