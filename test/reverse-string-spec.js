const { expect } = require('chai');

const reverseString = require('../problems/reverse-string');

describe('reverseString', function () {
   context('valid input', function () {
      it('should reverse the string', function () {
         expect(reverseString('fun')).to.equals('nuf');
      });

      it('should retrun a reversed string if input is an array', function () {
         expect(reverseString(['fun'])).to.equal('nuf');
      })
   });

   context('invalid input', function () {
      it('should throw error if argument is not a string or array', function () {
         expect(() => reverseString(534)).to.throw(TypeError);
         expect(() => reverseString(null)).to.throw(TypeError);
         expect(() => reverseString({})).to.throw(TypeError);
      });
   });
});
