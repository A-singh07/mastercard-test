import { HOSTED_URL } from './config'

// Initiate Checkout session
export const requestCheckoutSession = async (payload) => {
  const response = await fetch(`${HOSTED_URL}/api/checkout`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      amount: payload.amount,
      currency: payload.currency,
      orderId: payload.orderId,
      orderDescription: payload.orderDescription
    })
  })

  const result = await response.json()
  return result.data
}
