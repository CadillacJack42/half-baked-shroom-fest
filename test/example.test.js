// IMPORT MODULES under test here:

import { renderMushroom } from '../render-utils.js';

// import { example } from '../example.js';


const test = QUnit.test;

test('time to test a function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = true;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = true;

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('Should verify function returns an Object with a class of "mushroom"', (expect) => {
    const expected = 'object';
    const actual = typeof renderMushroom();
    expect.equal(expected, actual);

    const expected1 = 'mushroom';
    const actual1 = renderMushroom();
    expect.equal(expected1, actual1.classList);
});
