'use client'

import { requestCheckoutSession } from '@/api-requests'
import Button from '@/components/Button'
import { CHECKOUT_SESSION_KEY } from '@/config'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { CartItems } from './constant'

const CartPage = () => {
  const router = useRouter()
  const [totalAmount, setTotalAmount] = useState(0)
  const [loading, setLoading] = useState(false)

  const handleProceedToCheckout = () => {
    setLoading(true)
    const orderId = `test-order-${Math.floor(1000 + Math.random() * 9000)}`
    requestCheckoutSession({
      amount: totalAmount,
      currency: 'USD',
      orderId: orderId,
      orderDescription: `Test Order for OrderId: ${orderId}`
    }).then((res) => {
      sessionStorage.setItem(CHECKOUT_SESSION_KEY, res.session.id)
      setLoading(false)
      router.push('/checkout')
    })
  }

  return (
    <>
      <h3 className="text-4xl mb-5">Cart</h3>
      <div className="max-w-xl mx-auto">
        {CartItems.map((item, i) => (
          <div
            key={i}
            className="flex justify-between w-full py-3 border-b border-slate-200 text-sm">
            <div>{item.name}</div>
            <div>{item.price}</div>
          </div>
        ))}
        <div className="flex justify-between my-5 text-xl">
          <p className="font-bold">Total Amount</p>
          <div>
            $&nbsp;
            <input
              type="number"
              className="border border-slate-500 rounded-md text-base px-2 py-1"
              onChange={(e) => setTotalAmount(e.target.value)}
            />
          </div>
        </div>
        <Button
          type={'submit'}
          onClick={() => {
            handleProceedToCheckout()
          }}
          loading={loading}
          disabled={loading || !totalAmount}
          className={'w-full'}>
          Proceed to Checkout
        </Button>
      </div>
    </>
  )
}

export default CartPage
