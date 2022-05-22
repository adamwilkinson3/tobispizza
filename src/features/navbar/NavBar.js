import React, { useState } from 'react'
import { RiShoppingCartLine } from 'react-icons/ri'
import { useSelector, useDispatch } from 'react-redux'
import { selectCart, selectPizzas, selectPrice, changeAnimation } from '../menu/menuSlice'
import './navbar.css'

function NavBar() {

  const cart = useSelector(selectCart)
  const [dropdown, setDropdown] = useState(0)
  const pizzas = useSelector(selectPizzas)
  const priceTotal = useSelector(selectPrice)
  const dispatch = useDispatch();
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
  })

  return (
    <div class='NavBar'>
        <a href='./home' class='name'>Tobi's Pizza</a>
        <div class='navlinks'>
          <a href='./login'>Login/Register</a>
          <div class="dropdown">
            <button onClick={() => dropdown ? setDropdown(0) : setDropdown(1)} class="link"><RiShoppingCartLine /><span>{cart}</span></button>
            {dropdown ? 
              <div class="dropdown-menu">
                {cart ? 
                <>
                {pizzas.map((element) => {
                  if (element.quantity[0] + element.quantity[1] + element.quantity[2] === 0) {   
                  } else {
                    return (
                      <div class="cart-item">
                        <ul>
                          <li>{element.pizza}</li>
                          <li>
                            { element.quantity[0] ? <>Sm x{element.quantity[0]} </> : <></>}
                            { element.quantity[1] ? <>Med x{element.quantity[1]} </> : <></>}
                            { element.quantity[2] ? <>Lg x{element.quantity[2]}</> : <></>}
                          </li>
                        </ul>
                        <img src={element.image} />
                      </div>
                    )
                  }
                })}
                <div class="checkout">
                  <button onClick={() => dispatch(changeAnimation(true))}>Total: {formatter.format(priceTotal)} Checkout</button>
                </div>
                </>
                :
                <>Cart is empty</>
              }
              </div>
            : 
              <></>
            }
          </div>
        </div>
    </div>
  )
}

export default NavBar