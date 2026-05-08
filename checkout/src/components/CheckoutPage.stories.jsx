import React from 'react';
import CheckoutPage from './CheckoutPage';

export default {
  title: 'Checkout/CheckoutPage',
  component: CheckoutPage,
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
  name: 'With items in cart',
  beforeEach: () => {
    localStorage.setItem(
      'cartItems',
      JSON.stringify([
        {
          id: 1,
          title: 'Losing Hansley Manor',
          author: 'M.Y. Storie',
          price: 20.99,
          quantity: 1,
          image: 'https://via.placeholder.com/80x80?text=Book+1',
        },
        {
          id: 2,
          title: 'The Summer Heist',
          author: 'M.Y. Storie',
          price: 35.75,
          quantity: 2,
          image: 'https://via.placeholder.com/80x80?text=Book+2',
        },
      ])
    );
  },
};
