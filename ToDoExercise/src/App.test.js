import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe('App Container', () => {
  it('renders without crashing', () => {
    const { getByTestId } = render(<App />);
    const rootElement = getByTestId('root');

    expect(rootElement).toBeInTheDocument();
  });
});
