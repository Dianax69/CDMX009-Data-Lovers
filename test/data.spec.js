// importamos la función `example`
import { sum } from '../src/data.js';

test('sumar 5 + 6 da 11', () => {
  expect(sum(5, 6)).toBe(11);
});

// describe('example', () => {

//   it('debería ser una función', () => {
//     expect(typeof example).toBe('function');
//   });

//   describe('example', () => {
//     // escribe aquí tu test
//   });
// });
