'use client'

import { useState } from 'react'
import Button from '@/components/Button'

const CartItems = [
  {
    name: 'Order Item 1',
    price: ''
  },
  {
    name: 'Order Item 2',
    price: ''
  },
  {
    name: 'Order Item 3',
    price: ''
  }
]

const Cart = ({ checkoutFun, loading, setTotalAmount = () => {}, totalAmount = 0 }) => {
  return (
    <>
      <div className="max-w-xl mx-auto mt-12">
        <p className="font-semibold mb-8 text-2xl text-center">Cart</p>
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
            checkoutFun()
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

export default Cart
