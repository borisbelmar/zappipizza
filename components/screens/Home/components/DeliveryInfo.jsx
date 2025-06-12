export default function DeliveryInfo() {
  return (
    <div className="text-white bg-secondary">
      <div className="container text-center flex flex-col gap-4 py-8">
        <p className="text-2xl">Delivery a domicilio</p>
        <div className="flex flex-col justify-center items-center">
          <a href="tel:+56227499394" className="text-4xl font-display font-semibold hover:opacity-50 transition">+562 2749 9394</a>
          <a href="tel:+56949724480" className="text-4xl font-display font-semibold hover:opacity-50 transition">+569 4972 4480</a>
        </div>
        <p className="text-2xl">Solo Pudahuel Sur vía telefónica</p>
      </div>
    </div>
  )
}
