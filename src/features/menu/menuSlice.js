import { createSlice } from '@reduxjs/toolkit';

let order;
if (sessionStorage.getItem('order')) {
  order = JSON.parse(sessionStorage.getItem('order'));
} else {
  order = [[0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0]]
}

const pizzas = [
    {
        pizza: "Krusty Krab",
        quantity: [order[0][0], order[0][1], order[0][2]],
        description: "Shrimp, squid, mussels, fresh herbs and mozzarella",
        image: "https://image.shutterstock.com/image-photo/seafood-italian-pizza-shrimpsquid-mussels-600w-2096563243.jpg",
    },
    {
        pizza: "Chunky Cheese",
        quantity: [order[1][0], order[1][1], order[1][2]],
        description: "Sausage and cheese",
        image: "https://image.shutterstock.com/image-photo/hot-sausage-pizza-take-out-600w-743902048.jpg",
    },
    {
        pizza: "Meat Lover",
        quantity: [order[2][0], order[2][1], order[2][2]],
        description: "Meatatarian pizza",
        image: "https://image.shutterstock.com/image-photo/savory-homemade-meat-lovers-pizza-600w-1751836328.jpg",
    },
    {
      pizza: "Tree Hugger",
      quantity: [order[3][0], order[3][1], order[3][2]],
      description: "Vegetarian pizza",
      image: "https://image.shutterstock.com/image-photo/vegetarian-pizza-vegetables-on-white-600w-534552082.jpg",
    },
    {
      pizza: "Cocoa Platter",
      quantity: [order[4][0], order[4][1], order[4][2]],
      description: "White and dark Chocolate",
      image: "https://image.shutterstock.com/image-photo/chocolate-pizza-600w-174098354.jpg",
    },
    {
      pizza: "Berry Tropical",
      quantity: [order[5][0], order[5][1], order[5][2]],
      description: "Kewi, oranges, strawberries, and blueberries",
      image: "https://image.shutterstock.com/image-photo/large-fruit-tart-strawberry-kiwi-600w-81404653.jpg",
    },
]

const initialState = {
  value: JSON.parse(sessionStorage.getItem('total')) || 0,
  price: JSON.parse(sessionStorage.getItem('cost')) || 0,
  animation: false,
  pizzas,
};

export const menuSlice = createSlice({
  name: 'menu',
  initialState,

  reducers: {
    increment: (state, size) => {
      let pizzaIndex = size.payload[0];
      let pizzaSize = size.payload[1];
      if (state.value < 50) {
        state.pizzas[pizzaIndex].quantity[pizzaSize] += 1;
        state.value += 1;
        order[pizzaIndex][pizzaSize] = state.pizzas[pizzaIndex].quantity[pizzaSize];
        state.price += 5.99 + 2 * pizzaSize;
        sessionStorage.setItem('order', JSON.stringify(order))
        sessionStorage.setItem('total', JSON.stringify(state.value))
        sessionStorage.setItem('cost', JSON.stringify(state.price))
      }
    },
    decrement: (state, size) => {
      let pizzaIndex = size.payload[0];
      let pizzaSize = size.payload[1];
      if (state.pizzas[pizzaIndex].quantity[pizzaSize] > 0) {
        state.pizzas[pizzaIndex].quantity[pizzaSize] -= 1;
        state.value -= 1;
        order[pizzaIndex][pizzaSize] = state.pizzas[pizzaIndex].quantity[pizzaSize];
        state.price -= 5.99 + 2 * pizzaSize;
        sessionStorage.setItem('order', JSON.stringify(order))
        sessionStorage.setItem('total', JSON.stringify(state.value))
        sessionStorage.setItem('cost', JSON.stringify(state.price))
      }
    },
    changeAnimation: (state, action) => {
      state.animation = action.payload;
    },
  },
});

export const { increment, decrement, changeAnimation } = menuSlice.actions;

export const selectCart = (state) => state.menu.value;
export const selectPizzas = (state) => state.menu.pizzas;
export const selectPrice = (state) => state.menu.price;
export const selectAnimation = (state) => state.menu.animation;


export default menuSlice.reducer;