import axios from 'axios'
import { AUTH_TOKEN, HOSTED_URL, MERCHANT_ID, MERCHANT_NAME, PG_BASE_URL } from '@/config'
import { NextResponse } from 'next/server'

const axiosInterceptorInstance = axios.create({
  baseURL: `${PG_BASE_URL}/merchant/${MERCHANT_ID}`
})

export const POST = async (request) => {
  const payload = await request.json()
  const response = await axiosInterceptorInstance.post(
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

  const result = NextResponse.json(
    {
      data: { ...response.data, orderId: payload.orderId },
      is_success: true
    },
    {
      status: 200
    }
  )
  return result
}
