'use client'

import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()
  return (
    <div className="container mt-20">
      <button
        className="flex w-6/12 mx-auto justify-center rounded-md bg-black px-3 py-2 text-sm font-semibold leading-6 text-white hover:bg-white hover:text-black hover:border hover:border-black transition-all duration-200 disabled:cursor-not-allowed"
        onClick={() => {
          router.push('/cart')
        }}>
        Go to Cart
      </button>
    </div>
  )
}
