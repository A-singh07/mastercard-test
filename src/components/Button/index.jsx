import Spinner from '../Spinner'

const Button = ({ onClick, type, loading, disabled, children, className }) => {
  return (
    <button
      type={type}
      className={`flex justify-center rounded-md bg-black px-3 py-2 text-sm font-semibold leading-6 text-white hover:bg-white hover:text-black hover:border hover:border-black transition-all duration-200 disabled:cursor-not-allowed ${className}`}
      onClick={() => {
        onClick()
      }}
      disabled={disabled}>
      {loading && <Spinner />}
      {children}
    </button>
  )
}

export default Button
