// IMPORT MODULES under test here:

import { renderMushroom, renderFriend } from '../render-utils.js';

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
    const div = document.createElement('div');
    div.classList.add('mushroom');
    const expected = div;
    const actual = renderMushroom();
    expect.deepEqual(expected, actual);

    const expected1 = 'mushroom';
    const actual1 = renderMushroom();
    expect.equal(expected1, actual1.classList);
});

test('should do a thing', (expect) => {

    let obj = {
        name: 'Jack',
        satisfaction: 2,
    };
    
    const div = document.createElement('div');
    div.classList.add('friend');
    const nameSpan = document.createElement('span');
    nameSpan.textContent = 'Jack';
    const faceSpan = document.createElement('span');
    faceSpan.textContent = '😐';
    div.append(nameSpan, faceSpan);

    const expected = div;
    const actual = renderFriend(obj);
    expect.deepEqual(expected, actual);
});
