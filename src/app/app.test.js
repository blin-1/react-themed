import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from 'app/store';
import App from 'app/app';

test('renders learn react link', () => {
  const { getByText } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  expect(getByText(/Welcome to the Star Wars Fans Club/i)).toBeInTheDocument();
});
