import {AiOutlineDown} from 'react-icons/ai'

import './index.css'

const Header = () => (
  <>
    <div className="mobile-container">
      <h1>Only desktop are visible the screen</h1>
    </div>

    <div className="app-container">
      <nav className="navbar-container">
        <img
          src="https://imageupload.io/ib/MrWDHhsm4loLVGi_1694459536.png"
          alt="shopify-favicon"
          className="logo"
        />

        <h1 className="brand-text">shopify</h1>
        <div className="nav-items-left">
          <p className="nav-items">
            Solutions
            <AiOutlineDown />
          </p>

          <p className="nav-items">Pricing</p>
          <p className="nav-items">
            Resources
            <AiOutlineDown />
          </p>
        </div>
        <div className="nav-items-right">
          <p className="nav-items">Log in</p>
          <button type="button">Start free trial</button>
        </div>
      </nav>
    </div>
  </>
)

export default Header
