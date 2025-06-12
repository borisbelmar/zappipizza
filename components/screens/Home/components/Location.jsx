import Image from 'next/image'
import UberEatsButton from '@components/common/UberEatsButton'
import Map from './Map'

export default function Location() {
  return (
    <div className="text-white bg-dark-700" style={{ backgroundImage: 'url("/images/bg-food-light.png")' }}>
      <div className="container px-8 py-16 flex flex-col gap-16">
        <h3 className="text-3xl text-center">
          Nos puedes encontrar en <span className="font-bold">El Abeto #8524</span>, esquina La Estrella.
        </h3>
        <Image
          src="/images/zappi-noche.jpg"
          alt="Zappipizza de noche"
          width={640}
          height={480}
          className="rounded-lg mx-auto"
        />
        <Map />
        <div className="flex justify-center w-full">
          <UberEatsButton
            className="mx-auto md:text-lg px-8 md:px-12 w-full"
            logoClassName="md:h-8 h-4 w-full"
          />
        </div>
      </div>
    </div>
  )
}
