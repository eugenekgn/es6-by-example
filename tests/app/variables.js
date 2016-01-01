if (typeof window === 'undefined') {
  var expect = require('chai').expect;
}

describe('variables ', () => {
  'use strict';
  var array = [];

  beforeEach(() => {
    array = [1, 2, 3, 4];
  });

  describe('block scoping', () => {
    it('should be undefined after block scope', () => {

      (()=> {
        for (let index = 0; index < 1; index++) {
          expect(index).to.not.be.undefined;
        }
      })();

    });
  });

  describe('destructuring assignment', () => {

    it('initialize two numbers and see if they are equal', () => {

      let getNums = () => {
        return [3, 2, 2];
      };

      let [,x,y,z] = getNums();

      expect(x).to.eql(2);
      expect(y).to.eql(2);
      expect(z).to.be.undefined;
    });

    it('initialize group of objects', () => {
      let getInfo = () => {
        return {
          name: 'Eugene',
          lastName: 'Kagan',
          occupation: 'developer',
          skills: {
            backend: '.Net',
            client: 'AngularJs',
            styles: 'less'
          }
        };
      };

      let {
        name,
        lastName,
        occupation,
        skills: {
          backend:backend
          }
        } = getInfo();


      expect(name).to.eql('Eugene');
      expect(lastName).to.eql('Kagan');
      expect(occupation).to.not.eql('cook');
      expect(backend).to.eql('.Net');
    })


  });

  describe('rest parameter.  ... operator', () => {
    it('rest argument used to total out an array', ()=> {

      let sum = (name, ...numbers) => {
        var total = 0;
        numbers.forEach((num)=> {
          total += num;
        });
        return total;
      }

      let total = sum('title', 5, 10, 15);
      expect(total).to.eql(30);

    });
  });

  describe('spread operator.', () => {
    it('rest argument used to total out an array', ()=> {

      let sum = (x, y, z) => {
        return x + y + z;
      };

      var total = sum(...[0, 5, 10]);
      expect(total).to.eql(15);
    });

    it('can build an array', () => {
      var arrOne = [4, 5, 6];
      var arrTwo = [1, 2, 3, ...arrOne, 7, 8, 9];
      expect(arrTwo).to.eql([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    });
  });

  describe('templates', ()=> {

    it('regular template test', () => {
      let printMessage = (word) => {
        return `Hello ${word}!`;
      }

      let message = printMessage('World');
      expect(message).to.eql('Hello World!');
    });

    it('template rest url build', () => {

      let anatomy = 'triceps';
      let equipment = 'free-weights';
      let id = 101;
      let url = `http://api.fitness/${anatomy}/${equipment}/${id}`;
      expect(url).to.eql('http://api.fitness/triceps/free-weights/101');
    });
  })

})


//(function () {
//  'use strict';
//  /* let: allow us to define variables that are specific to block scopes
//   which means
//
//   if(condition) {
//   let val = 10;
//   }
//
//   - let avoids hoisting variable up
//   - val will no be present outside of the brackets { }
//
//
//   cont: a keyword that has block scoping as well
//
//   */
//
//  let countTo = (limit) => {
//    console.log('*** loop example with "let" ***');
//    console.log('using let with for-loops')
//    for (let index = 0; index < limit; index++) {
//      console.log('in loop', index);
//    }
//
//    try {
//      console.log('outside of the loop', index);
//    }
//    catch (ex) {
//      console.log('Excetipn ' + ex);
//    }
//  };
//  countTo(10);
//
//})();