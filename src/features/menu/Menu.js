import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import {
  decrement,
  increment,
  selectPizzas,
} from './menuSlice';
import './menu.css'

function Menu() {
  const pizzas = useSelector(selectPizzas);
  const dispatch = useDispatch();
  return (
    <div>
        <div class="flex-container">
          {pizzas.map((element, index) => {
            return (
              <div class="pizza-container">
                <img src={element.image} alt='pizza' />
                <div class="pizza-text">
                  <h2>{element.pizza}</h2>
                  <p>{element.description}</p>
                </div>
                <div class="add-container">
                  <div class="add-size">
                    <div class="add-singlesize-container">
                      <p>small</p>
                      <div class="add-unit">
                        <button onClick={() => dispatch(decrement([index, 0]))}>-</button>
                        <p>{element.quantity[0]}</p>
                        <button onClick={() => dispatch(increment([index, 0]))}>+</button>
                      </div>
                    </div>
                    <div class="add-singlesize-container">
                      <p>medium</p>
                      <div class="add-unit">
                        <button onClick={() => dispatch(decrement([index, 1]))}>-</button>
                        <p>{element.quantity[1]}</p>
                        <button onClick={() => dispatch(increment([index, 1]))}>+</button>
                      </div>
                    </div>
                    <div class="add-singlesize-container">
                      <p>large</p>
                      <div class="add-unit">
                        <button onClick={() => dispatch(decrement([index, 2]))}>-</button>
                        <p>{element.quantity[2]}</p>
                        <button onClick={() => dispatch(increment([index, 2]))}>+</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>)
          })}
        </div>
    </div>
  )
}

export default Menu