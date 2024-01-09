'use client'

import { useState } from 'react'
import { requestCheckoutSession } from '@/api-requests'
import Cart from '@/components/Cart'
import { CHECKOUT_SESSION_KEY } from '@/config'
import { useRouter } from 'next/navigation'

const HostedCartPage = () => {
  const router = useRouter()
  const [totalAmount, setTotalAmount] = useState(0)
  const [loading, setLoading] = useState(false)

  const handleProceedToCheckout = () => {
    const orderId = `test-order-${Math.floor(1000 + Math.random() * 9000)}`

    setLoading(true)
    requestCheckoutSession({
      amount: totalAmount,
      currency: 'USD'
    }).then((res) => {
      sessionStorage.setItem(CHECKOUT_SESSION_KEY, res.data?.session?.id)
      setLoading(false)
      router.push(`/hosted/checkout?orderId=${orderId}`)
    })
  }

  return (
    <>
      <h3 className="text-2xl font-semibold mb-5">Hosted Checkout Journey</h3>
      <Cart
        checkoutFun={handleProceedToCheckout}
        loading={loading}
        setTotalAmount={setTotalAmount}
        totalAmount={totalAmount}
      />
    </>
  )
}

export default HostedCartPage
