const Header = () => {
  return (
    <header className="bg-black text-white">
      <nav className="mx-auto flex max-w-7xl p-6 lg:px-8 gap-10" aria-label="Global">
        <a href="/" className="-m-1.5 p-1.5 cursor-pointer">
          <span className="">Home</span>
        </a>
        <a href="/cart" className="-m-1.5 p-1.5 cursor-pointer">
          <span className="">Cart</span>
        </a>
      </nav>
    </header>
  )
}

export default Header
