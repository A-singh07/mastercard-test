'use client'

import { requestCheckoutSession } from '@/api-requests'
import { useState } from 'react'
import { CartItems } from './constant'

const CartPage = () => {
  const [totalAmount, setTotalAmount] = useState(0)

  const handleProceedToCheckout = () => {
    const orderId = `test-order-${Math.floor(1000 + Math.random() * 9000)}`
    requestCheckoutSession({
      amount: totalAmount,
      currency: 'USD',
      orderId: orderId,
      orderDescription: `Test Order for OrderId = ${orderId}`
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
        <button
          type="submit"
          className="flex w-full justify-center rounded-md bg-black px-3 py-2 text-sm font-semibold leading-6 text-white hover:bg-white hover:text-black hover:border hover:border-black transition-all duration-200"
          onClick={() => {
            handleProceedToCheckout()
          }}>
          Proceed to Checkout
        </button>
      </div>
    </>
  )
}

export default CartPage
