const formatPrice = (price: number) =>
  price.toLocaleString('es-CL', {
    style: 'currency',
    currency: 'CLP'
  })

export default formatPrice
