import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Counter from './Counter';

const { checkWin } = require("./Board")

test('', () =>{
    const { getByText } = render(<Counter />);
    const incrementButton = getByText('Increment');
    const countText = getByText('Count: 0');

    expect();

});