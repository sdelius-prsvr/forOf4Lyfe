/******************
 * YOUR CODE HERE *
 ******************/
 
const addAll = function(num){
  let sum = 0
  for(let value of num){
     sum += value
  }
  return sum
}

const countSpaces = function(str){
  let spaceCount = 0
  for(let char of str){
    if (char === ' '){
      spaceCount ++
    }
  }
  return spaceCount
}

const countTrues = function(arr){
  let trueCount = 0
  for(let boolVal of arr){
    if (boolVal === true){
      trueCount ++
    }
  }
  return trueCount
}

const makeFriendly = function(paragraph){
  let newParagraph = ''
  for(let char of paragraph){
    if (char !== '.'){
      newParagraph = (newParagraph + char)
    }else if(char === '.'){
      let char = '!'
      newParagraph = (newParagraph + char)
    }
  }
  return newParagraph
}

// const kylesMakeFriendly = function(str){
//   let result = ''
//   for(let char of str){
//     if(char === '.'){
//       result += '!'
//     }else{
//       result += char
//     }
//   }
//   return result
// }

const cubeAll = function(numArr){
  const newNumArray = []
  for(const num of numArr){
    newNum = num ** 3
    newNumArray.push(newNum)
  }
  return newNumArray
}

const dogs = [
  'Fido',
  'Rolph',
  'Maisie',
];

const cats = [
  'Garfield',
  'Heathcliff',
]

const dinos = [
  'Barnie',
  'Sharp Tooth',
]

// const addNoises = function(noisyAnimals){
//   let statement = []
//   for(let noisyName of noisyAnimals){
//     for(let name of dogs){
//       if(noisyName === name){
//     statement.push(noisyName + ' says "Woof!"')
//       }
//     }
//     for(let name of cats){
//       if(noisyName === name){
//         statement.push(noisyName + ' says "Meow!"')
//       }
//     }
//     for(let name of dinos){
//       if(noisyName === name){
//         statement.push(noisyName + ' says "ROWR."')
//       }
//     }
//   }
//   return statement
// }

const addNoises = function(animalArr){
  let statementArr = []
  for (let name of animalArr){
      if (dogs.includes(name)){
          statementArr.push(name + ' says "Woof!"');
      }
      if (cats.includes(name)){
          statementArr.push(name + ' says "Meow!"');
      }
      if (dinos.includes(name)){
          statementArr.push(name + ' says "ROWR."');
      }
    }
   return statementArr
}

// const addNoises = function(arr){
//   let newArr = []
//   for(let str of arr){
//     switch(true){
//       case dogs.includes(str):{
//         newArr.push(str + ' says "Woof!"')
//         break;
//       }
//       case cats.includes(str):{
//         newArr.push(str + ' says "Meow!"')
//         break;
//       }
//       case dinos.includes(str):{
//         newArr.push(str + ' says "ROWR."')
//         break;
//       }
//     }
//   }
//   return newArr
// }

// const newArray = []
// for(const name of arr){
//   switch(true){
//     case dogs.includes(name):{
//       newArray.push(name + ' says "Woof!"')
//       break;
//     }
//     case cats.includes(name):{
//       newArray.push(name + ' says "Meow!"')
//       break;
//     }
//     case dinos.includes(name):{
//       newArray.push(name + ' says "ROWR."')
//       break;
//     }
//   }
// }
// return newArray
// }


const womenOnly = function(namesArr){
  let womenArr = []
  for (let name of namesArr){
    if (name.endsWith('F')){
      womenArr.push(name);
    }
  }
  return womenArr
}

const integersOnly = function(numArr){
  let intArr = []
  for (let num of numArr){
    if (num % 1 === 0){
      intArr.push(num)
    }
  }
  return intArr
}

/*********************************
 * OUR CODE BELOW; DO NOT TOUCH! *
 *********************************/



if (typeof addAll === 'undefined') {
  addAll = undefined;
}

if (typeof countSpaces === 'undefined') {
  countSpaces = undefined;
}

if (typeof countTrues === 'undefined') {
  countTrues = undefined;
}

if (typeof makeFriendly === 'undefined') {
  makeFriendly = undefined;
}

if (typeof cubeAll === 'undefined') {
  cubeAll = undefined;
}

if (typeof addNoises === 'undefined') {
  addNoises = undefined;
}

if (typeof womenOnly === 'undefined') {
  womenOnly = undefined;
}

if (typeof integersOnly === 'undefined') {
  integersOnly = undefined;
}

describe('addAll', () => {
  it(`adds all the numbers in the array`, () => {
    const nums1 = [5, 3, 7, -11, 1003];
    const nums2 = [8, 1, 2, -53, -812];

    expect(addAll(nums1)).toBe(1007);
    expect(addAll(nums2)).toBe(-854);
  })

  it(`isn't reassignable`, () => {
    expect(() => addAll = 500).toThrow();
  })
})

describe(`countSpaces`, () => {
  it(`counts all the spaces in a multi-space string`, () => {
    const sentence1 = 'well hello there my crumpet';
    const sentence2 = 'strings 4 eva';

    expect(countSpaces(sentence1)).toBe(4);
    expect(countSpaces(sentence2)).toBe(2);
  })

  it(`correctly identifies strings with no spaces`, () => {
    const sentence1 = 'supercalifragilisticexpialidocious';
    const sentence2 = 'antidisestablishmentarianism';
    const sentence3 = 'pneunultramicroscopicsilicovulcanoconiosis';

    expect(countSpaces(sentence1)).toBe(0);
    expect(countSpaces(sentence2)).toBe(0);
    expect(countSpaces(sentence3)).toBe(0);
  })

  it(`doesn't count all non-letters as spaces`, () => {
    const sentence1 = 'how now, brown cow';
    const sentence2 = '@(*@ are you even talking about?';

    expect(countSpaces(sentence1)).toBe(3);
    expect(countSpaces(sentence2)).toBe(5);
  })

  it(`isn't reassignable`, () => {
    expect(() => countSpaces = 500).toThrow();
  })
})

describe(`countTrues`, () => {
  it(`counts all the trues in a true-only array`, () => {
    const bools1 = [true, true, true];
    const bools2 = [true, true, true, true, true];

    expect(countTrues(bools1)).toBe(3);
    expect(countTrues(bools2)).toBe(5);
  })

  it(`counts all the trues in an array of assorted booleans`, () => {
    const bools1 = [true, false, true, false];
    const bools2 = [true, false, false, true, true, false, false, true];

    expect(countTrues(bools1)).toBe(2);
    expect(countTrues(bools2)).toBe(4);
  })

  it(`doesn't confuse truthy values with true values`, () => {
    const values1 = [true, 'hello', 3, true, []]

    expect(countTrues(values1)).toBe(2);
  })

  it(`doesn't confuse the string 'true' with the boolean true`, () => {
    const values1 = [true, 'true', 'true', true, 'true'];
    const values2 = [true, 'true', 'true', true, true, 'true', 'true', true];

    expect(countTrues(values1)).toBe(2);
    expect(countTrues(values2)).toBe(4);
  })

  it(`isn't reassignable`, () => {
    expect(() => countTrues = 500).toThrow();
  })
})

describe('makeFriendly', () => {
  it(`given a paragraph, returns a paragraph where each sentence ends with an exclamation point instead of the period it held before.`, () => {
    const paragraph1 = `Do you see the story. Do you see anything. It seems to me I am trying to tell you a dream.`;
    const paragraph2 = `Like a running blaze on a plain, like a flash of lightning in the clouds. We live in the flicker.`;
      const paragraph3 = `What is that feeling when you’re driving away from people and they recede on the plain till you see their specks dispersing. It’s the too-huge world vaulting us, and it’s good-bye. But we lean forward to the next crazy venture beneath the skies. Nothing behind me, everything ahead of me, as is ever so on the road.`;

    const friendly1 = `Do you see the story! Do you see anything! It seems to me I am trying to tell you a dream!`;
    const friendly2 = `Like a running blaze on a plain, like a flash of lightning in the clouds! We live in the flicker!`;
    const friendly3 = `What is that feeling when you’re driving away from people and they recede on the plain till you see their specks dispersing! It’s the too-huge world vaulting us, and it’s good-bye! But we lean forward to the next crazy venture beneath the skies! Nothing behind me, everything ahead of me, as is ever so on the road!`;

    expect(makeFriendly(paragraph1)).toEqual(friendly1);
    expect(makeFriendly(paragraph2)).toEqual(friendly2);
    expect(makeFriendly(paragraph3)).toEqual(friendly3);
  })

  it(`isn't reassignable`, () => {
    expect(() => makeFriendly = 500).toThrow();
  })
})

describe('cubeAll', () => {
  it(`given an array of numbers, returns an array where each number has been cubed`, () => {
    const nums1 = [3, 2, 5];
    const cubes1 = [27, 8, 125];
    const nums2 = [1, 10, -2];
    const cubes2 = [1, 1000, -8];

    expect(cubeAll(nums1)).toEqual(cubes1);
    expect(cubeAll(nums2)).toEqual(cubes2);
  })

  it(`doesn't modify the original array`, () => {
    const nums1 = [3, 2, 5];
    const nums2 = [1, 10, -2];
    const originalNums1 = [3, 2, 5];
    const originalNums2 = [1, 10, -2];

    cubeAll(nums1);
    cubeAll(nums2);

    expect(nums1).toEqual(originalNums1);
    expect(nums2).toEqual(originalNums2);
  })

  it(`isn't reassignable`, () => {
    expect(() => cubeAll = 500).toThrow();
  })
})

describe('addNoises', () => {
    it('adds the appropriate noises for each animal in the given array', () => {
    const dogs = [
      'Fido',
      'Rolph',
      'Maisie',
    ];

    const cats = [
      'Garfield',
      'Heathcliff',
    ]

    const dinos = [
      'Barnie',
      'Sharp Tooth',
    ]

    const animals1 = ['Fido', 'Garfield', 'Sharp Tooth'];
    const withNoises1 = ['Fido says "Woof!"', 'Garfield says "Meow!"', 'Sharp Tooth says "ROWR."'];
    const animals2 = ['Rolph', 'Maisie', 'Barnie', 'Heathcliff'];
    const withNoises2 = ['Rolph says "Woof!"', 'Maisie says "Woof!"', 'Barnie says "ROWR."', 'Heathcliff says "Meow!"'];

    expect(addNoises(animals1)).toEqual(withNoises1);
    expect(addNoises(animals2)).toEqual(withNoises2);
  })

  it(`doesn't modify the original array`, () => {
    const animals1 = ['Fido', 'Garfield', 'Sharp Tooth'];
    const animals2 = ['Rolph', 'Maisie', 'Barnie', 'Heathcliff'];
    const originalAnimals1 = ['Fido', 'Garfield', 'Sharp Tooth'];
    const originalAnimals2 = ['Rolph', 'Maisie', 'Barnie', 'Heathcliff'];

    addNoises(animals1);
    addNoises(animals2);

    expect(animals1).toEqual(originalAnimals1);
    expect(animals2).toEqual(originalAnimals2);
  })

  it(`isn't reassignable`, () => {
    expect(() => addNoises = 500).toThrow();
  })
})


describe('womenOnly', () => {
  it('should return an empty array if the input is an empty array', () => {
    const input = [];
    const result = womenOnly(input);
    expect(result).toEqual([]);
  });

  it('should return an empty array if there are no female names', () => {
    const input = ['John', 'Robert', 'Michael'];
    const result = womenOnly(input);
    expect(result).toEqual([]);
  });

  it('should return an array with female names only', () => {
    const input = ['Alice F', 'Bob M', 'Charlie F', 'David M', 'Eve F'];
    const result = womenOnly(input);
    expect(result).toEqual(['Alice F', 'Charlie F', 'Eve F']);
  });
});

describe('integersOnly', () => {
  it('should return an empty array if the input is an empty array', () => {
    const input = [];
    const result = integersOnly(input);
    expect(result).toEqual([]);
  });

  it('should return an empty array if there are no integers in the input', () => {
    const input = [1.5, 2.25, 3.75];
    const result = integersOnly(input);
    expect(result).toEqual([]);
  });

  it('should return an array with only integers', () => {
    const input = [1, 2, 3.0, 4.5, 5, 6.0];
    const result = integersOnly(input);
    expect(result).toEqual([1, 2, 3.0, 5, 6.0]); // 3.0 and 6.0 are considered integers
  });

  it('should handle negative integers', () => {
    const input = [-1, -2, 3, -4.0, 5.5];
    const result = integersOnly(input);
    expect(result).toEqual([-1, -2, 3, -4.0]); // -4.0 is considered an integer
  });

  it('should handle a mix of integers and non-integers', () => {
    const input = [2.75, 4, -3.8, 6, 9.0, 11];
    const result = integersOnly(input);
    expect(result).toEqual([4, 6, 9.0, 11]); // 9.0 is considered an integer
  });
});