'use client'

import { CHECKOUT_SESSION_KEY } from '@/config'
import { useEffect } from 'react'

const CheckoutPage = () => {
  // Configure Checkout
  useEffect(() => {
    if (window) {
      setTimeout(() => {
        window.Checkout.configure({
          session: {
            id: sessionStorage.getItem(CHECKOUT_SESSION_KEY).toString()
          }
        })
        window.Checkout.showEmbeddedPage('#mpgs-embedded')
      }, 1000)
    }
  }, [])

  return <div id="mpgs-embedded"></div>
}

export default CheckoutPage
