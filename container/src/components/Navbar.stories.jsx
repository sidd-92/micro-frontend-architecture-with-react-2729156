import React from 'react';
import Navbar from './Navbar';

export default {
  title: 'Global/Navbar',
  component: Navbar,
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
  name: 'With cart items',
  beforeEach: () => {
    localStorage.setItem(
      'cartItems',
      JSON.stringify([
        { id: 1, title: 'Losing Hansley Manor', price: 20.99, quantity: 2 },
        { id: 2, title: 'The Summer Heist', price: 35.75, quantity: 1 },
      ])
    );
  },
};
