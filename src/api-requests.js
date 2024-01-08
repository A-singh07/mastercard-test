import axios from 'axios'
import { AUTH_TOKEN, HOSTED_URL, MERCHANT_ID, MERCHANT_NAME, PG_BASE_URL } from './config'

const axiosInterceptorInstance = axios.create({
  baseURL: `${PG_BASE_URL}/merchant/${MERCHANT_ID}`
})

export const requestCheckoutSession = async (payload) => {
  axiosInterceptorInstance
    .post(
      `/session`,
      {
        apiOperation: 'INITIATE_CHECKOUT',
        interaction: {
          operation: 'PURCHASE',
          cancelUrl: `${HOSTED_URL}/cart`,
          // returnUrl: `${HOSTED_URL}/cart`,
          merchant: {
            name: `${MERCHANT_NAME}`,
            url: 'https://payrx-uat.bajajfinservhealth.in'
          },
          displayControl: {
            billingAddress: 'HIDE'
          }
        },
        order: {
          amount: payload.amount,
          currency: payload.currency,
          id: payload.orderId,
          description: payload.orderDescription
        }
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Basic ${AUTH_TOKEN}`
        }
      }
    )
    .then((res) => {})
    .catch((error) => {
      console.log('Error while initiating checkout session: ', error)
    })
}
