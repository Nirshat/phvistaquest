import '../../public/scss/header.scss'

const Header = () => {
  return (
    <div className="header-box">
      <div id='h'>
        <div className="logo-box">
          PhVQ
        </div>

        <ul className="navs">
          <li>Home</li>
          <li>News</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  )
}

export default Header