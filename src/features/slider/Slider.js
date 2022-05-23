import React from 'react'
import './slider.css'
import { useSelector, useDispatch } from 'react-redux'
import { selectAnimation, changeAnimation } from '../menu/menuSlice';

function Slider() {
  const animation = useSelector(selectAnimation);
  const dispatch = useDispatch();
  return (
    <div class="main">
        <img src="https://image.shutterstock.com/image-photo/tasty-pepperoni-pizza-cooking-ingredients-600w-1114907849.jpg" alt='pizza' class="pizza-head" />
        <div class="prices">
          <h2>Small: $5.99</h2>
          <h2>Medium: $7.99</h2>
          <h2>Large: $9.99</h2>
        </div>
        <div class={animation ? 'animation' : 'hidden'} onAnimationEnd={() => dispatch(changeAnimation(false))}>
          <img src="https://i.kym-cdn.com/entries/icons/mobile/000/028/223/hmlspst6qjo11.jpg" alt='pizza' class="pizza-delivery" />
          <h2 class="pizza-time">Pizza Time!</h2>
        </div>
    </div>
  )
}

export default Slider