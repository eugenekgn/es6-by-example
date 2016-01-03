if (typeof window === 'undefined') {
  var expect = require('chai').expect;
}

describe('functional paradigm', () => {
  'use strict';
  var numCollection = [];

  beforeEach(() => {
    numCollection = [1, 2, 4, 8, 16, 32];
  });

  describe('basic functions', () => {
    it('math functions', () => {
      // Math example
      var add = (x, y) => x + y;
      var divide = (x, y) => x / y;
      var multiple = (x, y) => x * y;
      var power = (x, y) => Math.pow(x, y);


      var answer = 25;
      expect(add(20, 5)).to.eql(answer);
      expect(divide(100, 4)).to.eql(answer);
      expect(multiple(5, 5)).to.eql(answer);
      expect(power(5, 2)).to.eql(answer);
    });

    it('function: recursion', () => {

      var fibonacci = (num) => {
        if (num < 0) {
          return -1;
        } else if (num === 0) {
          return 1;
        } else {
          return num * fibonacci(num - 1);
        }
      };
      expect(fibonacci(5)).to.eql(120);
    });
  });

  describe('arrow functions, iterators, etc', () => {
    // arrow function =>
    it('arrow functions', () => {
      var numCollection = [1, 2, 4, 8, 16, 32];

      var total = 0;
      numCollection.forEach(number => total += number);
      expect(total).to.eql(63);

      var sqr = numCollection.map(number => Math.pow(number, 2));
      expect(sqr).to.eql([1, 4, 16, 64, 256, 1024]);
    });

    it('lexical scope', ()=> {

      this.player = 'Michael Jordan';

      (()=> {
        expect(this.player).to.eql('Michael Jordan');
      })();

      (function () {
        //expect(this.player).to.be.undefined;
      })();

    });

    it('iterators', () => {

      //var values = numCollection.values();
      //var itr = values.next();
      //var total = 0;
      //while (!itr.done) {
      //  total += itr.value;
      //  itr = values.next();
      //}
      //
      //expect(total).to.eql(63);
    })

    it('for-of, values iterator', ()=> {

      let total = 0;
      for (let num of numCollection) {
        total += num;
      }
      expect(total).to.eql(63);
    });

    it('manual iterator', ()=> {

      class Team {
        constructor() {
          this.players = [];

        }

        addPlayers(...players) {
          this.players = this.players.concat(players);
        }

        [Symbol.iterator]() {
          return new ArrayIterator(this.players);
        }

        get totalPlayers() {
          return this.players.length;
        }
      }

      class ArrayIterator {
        constructor(array) {
          this.array = array;
          this.index = 0;
        }

        next() {
          var result = {value: undefined, done: true};
          if (this.index < this.array.length) {
            result.value = this.array[this.index];
            result.done = false;
            this.index += 1;
          }
          return result;
        }
      }

      let totalPPG = 0;
      let dreamTeam = new Team();

      dreamTeam.addPlayers(
        {name: 'Jon Stockton', position: 'pg', careerPPG: 13.4},
        {name: 'Michael Jordan', position: 'sg', careerPPG: 30.12},
        {name: 'Koby Bryant', position: 'sg', careerPPG: 25.20},
        {name: 'Anthony Davis', position: 'pf', careerPPG: 20.1},
        {name: 'Shaquille O\'Niel', position: 'c', careerPPG: 23.69}
      );

      for (let player of dreamTeam) {
        totalPPG += player.careerPPG;
      }

      totalPPG = Math.round(totalPPG / dreamTeam.totalPlayers);
      expect(totalPPG).to.eql(23);
    });
  });

  describe('generators', () => {

    it('sum of numbers', () => {
      let numberGenerator = function*(start, end) {
        for (let index = start; index <= end; index++) {
          console.log(index);
          yield index;
        }
      }

      var total = 0;
      for (let num of numberGenerator(1, 4)) {
        total += num;
      }

      expect(total).to.eql(10);
    });

    it('generators as iterators', ()=> {

      class Team {
        constructor() {
          this.players = [];

        }

        addPlayers(...players) {
          this.players = this.players.concat(players);
        }

        *[Symbol.iterator]() {
          for (let p of this.players) {
            yield  p;
          }
        }

        get totalPlayers() {
          return this.players.length;
        }
      }


      let totalPPG = 0;
      let dreamTeam = new Team();

      dreamTeam.addPlayers(
        {name: 'Jon Stockton', position: 'pg', careerPPG: 13.4},
        {name: 'Michael Jordan', position: 'sg', careerPPG: 30.12},
        {name: 'Koby Bryant', position: 'sg', careerPPG: 25.20},
        {name: 'Anthony Davis', position: 'pf', careerPPG: 20.1},
        {name: 'Shaquille O\'Niel', position: 'c', careerPPG: 23.69}
      );

      for (let player of dreamTeam) {
        totalPPG += player.careerPPG;
      }

      totalPPG = Math.round(totalPPG / dreamTeam.totalPlayers);
      expect(totalPPG).to.eql(23);
    });
  });


});