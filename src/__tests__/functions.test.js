import {add} from '../utils/functions';


//TEST UTILITY FUNCTIONS
//Create a test that checks whether add correctly adds 2 integers together
test('add returns the sum of two numbers', () => {
    expect(add(1, 2)).toBe(3);
  });
  
//Create a test that checks whether add will add a string and number together
test('add handles string inputs that are numbers', () => {
    expect(add('3', '4')).toBe(7);
  });

//Create a test to check if add returns NaN if non numbers are passed
test(`add returns NaN if non numbers are passed`, () => {
    expect(add('hello', 'world')).toBeNaN();
  });

