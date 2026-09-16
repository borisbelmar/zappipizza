import Image from 'next/image'

export default function Hero() {
  return (
    <div className="relative">
      <Image
        src="/images/arma-tu-pizza-hero-desktop.webp"
        alt="Arma tu Pizza Familiar"
        width={1920}
        height={700}
        priority
        className="hidden w-full h-auto md:block"
      />
      <Image
        src="/images/arma-tu-pizza-hero-mobile.webp"
        alt="Arma tu Pizza Familiar"
        width={1469}
        height={1071}
        priority
        className="w-full h-auto md:hidden"
      />
    </div>
  )
}
