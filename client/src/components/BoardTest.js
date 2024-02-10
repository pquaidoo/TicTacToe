import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Board from './Board';

describe('Board Component', () => {
  test('renders board correctly', () => {
    const { getByText } = render(<Board result={{ winner: '', state: '' }} />);

    expect(getByText('X')).toBeInTheDocument();
    expect(getByText('O')).toBeInTheDocument();
  });

  test('allows player to choose square', () => {
    const { getByText } = render(<Board result={{ winner: '', state: '' }} />);
    const square = getByText(''); 

    fireEvent.click(square);

    expect(square.textContent).toBe('X'); 
  });
});
