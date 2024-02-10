import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Board from './Board';
import { useChannelStateContext, useChatContext } from 'stream-chat-react';

// Mocking the external hooks and modules
jest.mock('stream-chat-react', () => ({
  useChannelStateContext: jest.fn(),
  useChatContext: jest.fn(),
}));

// Mock the WinningPatterns module if necessary
// jest.mock('../WinningPatterns', () => ({
//   Patterns: [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]],
// }));

describe('<Board />', () => {
  beforeEach(() => {
    useChannelStateContext.mockReturnValue({
      channel: {
        sendEvent: jest.fn(),
        on: jest.fn(),
      },
    });
    useChatContext.mockReturnValue({
      client: {
        userID: 'test-user-id',
      },
    });
  });

  it('should declare player X as the winner when X completes the top row', async () => {
    const mockSetResult = jest.fn();
    const button = await screen.findByRole('button', { hidden: true });
    const { findByRole, getAllByRole } = render(<Board result={{}} setResult={mockSetResult} />);
    
  

    // Simulate player X's moves to complete the top row
    const squares = getAllByRole('button');
    fireEvent.click(squares[0]); // X's turn
    fireEvent.click(squares[3]); // O's turn, just to change the player
    fireEvent.click(squares[1]); // X's turn
    fireEvent.click(squares[4]); // O's turn, again to change the player
    fireEvent.click(squares[2]); // X's turn, completing the top row

    expect(mockSetResult).toHaveBeenCalledWith({ winner: 'X', state: 'won' });
  });

  // You can add more tests here to cover tie conditions, ensuring turns alternate correctly, etc.
});