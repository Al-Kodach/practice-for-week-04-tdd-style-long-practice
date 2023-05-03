class Triangle {
   constructor(side1, side2, side3) {
      this.side1 = side1;
      this.side2 = side2;
      this.side3 = side3;
   }

   getParameter() {
      let parameter = this.side1 + this.side2 + this.side3;
      return parameter;
   }

   hasValidSideLengths() {
      let twoSides = this.side1 + this.side2;
      return twoSides > this.side3;
   }

   validate() {
      this.isValid = this.hasValidSideLengths();
   }

   static getValidTriangles(arr) {
      const valid = arr.flatMap(el => el.hasValidSideLengths() ? el : []);
      return valid;
   }
}

class Scalene extends Triangle {

   constructor(side1, side2, side3) {
      super(side1, side2, side3);
      this.isValidTriangle = this.hasValidSideLengths();
   }

   isScalene() {
      if (this.side1 !== this.side2 || this.side1 !== this.side3) {
         if (this.side2 !== this.side3) {
            return true;
         }
      }

      return false;
   }

   isValidScalene() {
      this.isValidScalene = this.isScalene();
   }
}

class Isosceles extends Triangle {
   constructor(side1, side2, side3) {
      super(side1, side2, side3);
      this.isValidTriangle = this.hasValidSideLengths();
   }

   isIsosceles() {
      if (this.side1 == this.side2) {
         return true;
      } else if (this.side1 == this.side3) {
         return true;
      } else if (this.side2 == this.side3) {
         return true;
      }

      return false;
   }

   isValidIsosceles() {
      this.isValidIsosceles = this.isIsosceles();
   }
}

module.exports = { Triangle, Scalene, Isosceles };
