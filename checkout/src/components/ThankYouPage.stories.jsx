import React from 'react';
import ThankYouPage from './ThankYouPage';

export default {
  title: 'Checkout/ThankYouPage',
  component: ThankYouPage,
  parameters: {
    layout: 'fullscreen',
  },
};

export const WithOrder = {
  name: 'With completed order',
  beforeEach: () => {
    localStorage.setItem(
      'orders',
      JSON.stringify([
        {
          name: 'Jane Smith',
          location: 'New York, NY',
          shippingDetails: '123 Main St, Apt 4B',
          items: [
            { id: 1, title: 'Losing Hansley Manor', price: 20.99, quantity: 1 },
          ],
          date: Date.now(),
        },
      ])
    );
  },
};

export const NoOrder = {
  name: 'No prior order (fresh state)',
  beforeEach: () => {
    localStorage.removeItem('orders');
  },
};
