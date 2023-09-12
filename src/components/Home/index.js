import {useState} from 'react'
import Header from '../Header'
import './index.css'

const Home = () => {
  const [selectedOption, setSelectedOption] = useState('monthly')
  const [selectedOptionBtn, setSelectedOptionBtn] = useState('basic')

  const handleOptionChange = option => {
    setSelectedOption(option)
  }

  const handleOptionChangeBtn = option => {
    setSelectedOptionBtn(option)
  }

  return (
    <>
      <Header />
      <hr />
      <div className="bg">
        <div className="home-select1">
          <div className="home-select">
            <button
              className={`home-button ${
                selectedOption === 'monthly' ? 'selected' : ''
              }`}
              type="button"
              onClick={() => handleOptionChange('monthly')}
            >
              Pay Monthly
            </button>
            <button
              className={`home-button ${
                selectedOption === 'yearly' ? 'selected' : ''
              }`}
              type="button"
              onClick={() => handleOptionChange('yearly')}
            >
              Pay Yearly (Save 25%)
            </button>
          </div>
        </div>

        <div className="op">
          <div className="options">
            <p className="popular">MOST POPULAR</p>
            <h2>Basic</h2>
            <p>FOR INDIVIDUALS & SMALL BUSINESSES</p>
            <p>
              Everything you need to create your store, ship products,
              <br />
              and process payments
            </p>
            <div className="month-rate">
              <p className="p-font">₹1,994</p>

              <p className="p-font1">
                INR <br /> /mon{' '}
              </p>
            </div>
            <p className="bold back">Get your first 3 months for ₹20/mo</p>
            <p className="bold">What's included on Basic</p>
            <ul>
              <li>Basic reports </li>
              <li>Up to 1,000 inventory locations</li>
              <li>2 staff accounts</li>
            </ul>
            <button className="op-btn">Try for free</button>
          </div>

          <div className="options">
            <h2>Shopify</h2>
            <p>FOR SMALL BUSINESSES</p>
            <p>
              Level up your business with professional reporting and <br />
              more staff accounts
            </p>
            <div className="month-rate">
              <p className="p-font">₹7,447</p>

              <p className="p-font1">
                INR <br /> /mon
              </p>
            </div>
            <p className="bold back">Get your first 3 months for ₹20/mo</p>
            <p className="bold">What's included on Shopify</p>
            <ul>
              <li>Professional reports</li>
              <li>Up to 1,000 inventory locations</li>
              <li>5 staff accounts</li>
            </ul>
            <button className="op-btn">Try for free</button>
          </div>

          <div className="options">
            <h2>Advanced</h2>
            <p>FOR MEDIUM TO LARGE BUSINESSES</p>
            <p>
              Get the best of Shopify with custom reporting and our <br />
              lowest transaction fees
            </p>
            <div className="month-rate">
              <p className="p-font">₹30,164</p>

              <p className="p-font1">
                INR <br /> /mon
              </p>
            </div>
            <p className="bold back">Get your first 3 months for ₹20/mo</p>
            <p className="bold">What's included on Advanced</p>
            <ul>
              <li>Custom report builder</li>
              <li>Up to 1,000 inventory locations</li>
              <li>15 staff accounts</li>
            </ul>
            <button className="op-btn">Try for free</button>
          </div>
        </div>
      </div>

      <div className="mob">
        <div className="mob-btn">
          <button
            onClick={() => handleOptionChangeBtn('basic')}
            className="btn"
          >
            Basic
          </button>
          <button
            onClick={() => handleOptionChangeBtn('shopify')}
            className="btn"
          >
            Shopify
          </button>
          <button
            onClick={() => handleOptionChangeBtn('advance')}
            className="btn"
          >
            Advanced
          </button>
        </div>
      </div>
      {selectedOptionBtn === 'basic' && (
        <div className="btn-mob">
          <div className="month-rate">
            <p className="mob-p">₹1,994</p>
            <p>
              INR <br />
              /mo
            </p>
          </div>
          <p className="bold back back1">Get your first 3 months for ₹20/mo</p>
          <p className="bold">What's included on Basic</p>
          <ul>
            <li>Basic reports </li>
            <li>Up to 1,000 inventory locations</li>
            <li>2 staff accounts</li>
          </ul>
          <button type="button" className="mob-btn1">
            Try for free
          </button>
        </div>
      )}

      {selectedOptionBtn === 'shopify' && (
        <div className="btn-mob">
          <div className="month-rate">
            <p className="mob-p">₹7,447</p>
            <p>
              INR <br />
              /mo
            </p>
          </div>
          <p className="bold back back1">Get your first 3 months for ₹20/mo</p>
          <p className="bold">What's included on Shopify</p>
          <ul>
            <li>Professional reports </li>
            <li>Up to 1,000 inventory locations</li>
            <li>5 staff accounts</li>
          </ul>
          <button type="button" className="mob-btn1">
            Try for free
          </button>
        </div>
      )}

      {selectedOptionBtn === 'advance' && (
        <div className="btn-mob">
          <div className="month-rate">
            <p className="mob-p">₹30,164</p>
            <p>
              INR <br />
              /mo
            </p>
          </div>
          <p className="bold back back1">Get your first 3 months for ₹20/mo</p>
          <p className="bold">What's included on Advanced</p>
          <ul>
            <li>Custom report builder </li>
            <li>Up to 1,000 inventory locations</li>
            <li>15 staff accounts</li>
          </ul>
          <button type="button" className="mob-btn1">
            Try for free
          </button>
        </div>
      )}
    </>
  )
}

export default Home
