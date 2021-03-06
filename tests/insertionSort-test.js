import { assert } from 'chai';
import insertionSort from '../lib/insertionSort.js';

describe('insertionSort', () => {

  it('it should sort a small array', () => {
    let numberArray = [5, 4, 3, 2, 1];

    assert.deepEqual(insertionSort(numberArray), [1, 2, 3, 4, 5]);
  });

  it('it should sort letters', () => {
    let lettersArray = ['e', 'b', 'a', 'd', 'c'];

    assert.deepEqual(insertionSort(lettersArray), ['a', 'b', 'c', 'd', 'e']);
  });

  it('it should sort + and - numbers', () => {
    let numberArray = [1, 2, 0, -1, -2];

    assert.deepEqual(insertionSort(numberArray), [-2, -1, 0, 1, 2]);
  });

  it('it should sort small random array', () => {
    const randomArray = [];

    for(let i = 0; i < 40 ; i++ ) {
      randomArray.push(Math.floor(Math.random() * (100 - 1)) + 1);
    }
    
    insertionSort(randomArray);
  
    assert.isAtLeast(randomArray[2], randomArray[1], 'index 2 is greater or equal to index 1');
  });

  it ('it should sort large random array', () => {
    const randomArray = [];
    const min = 1;
    const max = 30000;

     for(let i = 0; i < max ; i++ ) {
      randomArray.push(Math.floor(Math.random() * (max - min)) + 1);
    }
    
    const sortedArray = insertionSort(randomArray);
  
    assert.isAtLeast(sortedArray[2], sortedArray[1], 'index 2 is greater or equal to index 1');
  });
});