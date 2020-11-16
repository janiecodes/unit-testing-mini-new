import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Counter from '../components/Counter';

//TEST COMPONENTS
//Create a test for Counter that checks the starting text of the p tag
//This counter will initialize at 0. Check the component for the jsx markup
test('Renders out starting text', () => {
    const { container } = render(<Counter />);
    expect(container.textContent).toContain(`You've clicked 0 times!`);
  });

//Create a second test for Counter that checks whether clicking the button actually increments the count
//There will be two assertions in here. One that checks the text content before clicking and the second for after
//Use the fireEvent method to simulate a button click
//get the button using the returned method from render
//getByTestId to retrieve the button and store to a variable

test('Clicking increments state count', () => {
    const { getByTestId, container } = render(<Counter />);
    const button = getByTestId('counter-button');
    expect(container.textContent).toContain(`You've clicked 0 times!`);
    fireEvent.click(button);
    expect(container.textContent).toContain(`You've clicked 1 times!`);
  });