import React from 'react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import BookDetails from './BookDetails';

export default {
  title: 'Listing/BookDetails',
  component: BookDetails,
  parameters: {
    layout: 'fullscreen',
  },
};

// Each story uses its own MemoryRouter with initialEntries so that
// useParams() inside BookDetails receives the correct bookId.
const withRoute = (path) => ({
  decorators: [
    () => (
      <MemoryRouter initialEntries={[path]}>
        <Routes>
          <Route path="/listing/:bookId" element={<BookDetails />} />
        </Routes>
      </MemoryRouter>
    ),
  ],
});

export const LossingHansleyManor = {
  name: 'Losing Hansley Manor (id: 1)',
  ...withRoute('/listing/1'),
};

export const TheSummerHeist = {
  name: 'The Summer Heist (id: 2)',
  ...withRoute('/listing/2'),
};

export const WhispersOfLuna = {
  name: 'Whispers of a Town called Luna (id: 3)',
  ...withRoute('/listing/3'),
};

export const NotFound = {
  name: 'Book not found',
  ...withRoute('/listing/999'),
};
