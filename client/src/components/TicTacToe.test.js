// Board.test.js
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Board from './Board';

// Mock the dependencies
jest.mock('stream-chat-react', () => ({
  useChannelStateContext: jest.fn(),
  useChatContext: jest.fn(),
}));

describe('Board component', () => {
  test('renders the board with squares', () => {
    const { getByTestId } = render(<Board />);
    
    // Ensure the board renders correctly
    const boardElement = getByTestId('board');
    expect(boardElement).toBeInTheDocument();

    // Ensure all squares are rendered
    for (let i = 0; i < 9; i++) {
      const squareElement = getByTestId(`square-${i}`);
      expect(squareElement).toBeInTheDocument();
    }
  });

  test('player can make a move by clicking a square', () => {
    const { getByTestId } = render(<Board />);
    
    // Get the first square
    const squareElement = getByTestId('square-0');
    
    // Simulate a click on the square
    fireEvent.click(squareElement);
    
    // Ensure the square has been updated with player's mark (X or O)
    expect(squareElement.textContent).toBe('X');
  });

  // Add more tests as needed
});
