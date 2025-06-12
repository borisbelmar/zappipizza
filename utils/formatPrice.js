const formatPrice = price => price.toLocaleString('es-CL', {
  style: 'currency',
  currency: 'CLP'
})

export default formatPrice
