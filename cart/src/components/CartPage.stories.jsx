import React from 'react';
import CartPage from './CartPage';

export default {
  title: 'Cart/CartPage',
  component: CartPage,
  parameters: {
    layout: 'fullscreen',
  },
};

export const EmptyCart = {
  name: 'Empty cart',
  beforeEach: () => {
    localStorage.removeItem('cartItems');
  },
};

export const WithItems = {
  name: 'With items',
  beforeEach: () => {
    localStorage.setItem(
      'cartItems',
      JSON.stringify([
        {
          id: 1,
          title: 'Losing Hansley Manor',
          author: 'M.Y. Storie',
          price: 20.99,
          quantity: 2,
          image: 'https://via.placeholder.com/80x80?text=Book+1',
        },
        {
          id: 2,
          title: 'The Summer Heist',
          author: 'M.Y. Storie',
          price: 35.75,
          quantity: 1,
          image: 'https://via.placeholder.com/80x80?text=Book+2',
        },
      ])
    );
  },
};

export const SingleItem = {
  name: 'Single item',
  beforeEach: () => {
    localStorage.setItem(
      'cartItems',
      JSON.stringify([
        {
          id: 3,
          title: 'Whispers of a Town called Luna',
          author: 'M.Y. Storie',
          price: 65.45,
          quantity: 1,
          image: 'https://via.placeholder.com/80x80?text=Book+3',
        },
      ])
    );
  },
};
