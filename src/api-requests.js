import { HOSTED_URL } from './config'

// Initiate Checkout session
export const requestCheckoutSession = async (payload) => {
  let response

  await fetch(`${HOSTED_URL}/api/checkout/session`, {
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
  }).then((res) =>
    res.json().then((data) => {
      if (!res.ok) throw data
      response = data
    })
  )

  return response
}

// Direct pay journey
export const createOrderTransaction = async (payload) => {
  let response

  await fetch(`${HOSTED_URL}/api/checkout/direct`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      authAmount: payload.amount,
      orderAmount: payload.amount,
      currency: payload.currency,
      orderId: payload.orderId,
      orderDescription: payload.orderDescription,
      paymentDetails: {
        card: {
          number: payload.paymentDetails?.number,
          securityCode: payload.paymentDetails?.securityCode,
          expiry: {
            month: payload.paymentDetails?.expiry?.month,
            year: payload.paymentDetails?.expiry.year
          },
          storedOnFile: 'TO_BE_STORED'
        }
      }
    })
  }).then((res) =>
    res.json().then((data) => {
      if (!res.ok) throw data
      response = data
    })
  )

  return response
}
