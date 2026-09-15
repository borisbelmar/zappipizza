import DeliveryInfo from '@/components/home/DeliveryInfo'
import FeaturedPizzas from '@/components/home/FeaturedPizzas'
import Location from '@/components/home/Location'
import Promo from '@/components/home/Promo'
import ServiceHours from '@/components/home/ServiceHours'
import { featuredPizzas } from '@/utils/menu'

export default function HomePage() {
  return (
    <>
      <Promo />
      <DeliveryInfo />
      <FeaturedPizzas pizzas={featuredPizzas} />
      <ServiceHours />
      <Location />
    </>
  )
}
