if (typeof window === 'undefined') {
  var expect = require('chai').expect;
}

describe('classes', () => {
  'use strict';

  it('create a class', () => {

    let name = 'Michael Jordan';
    // new class syntax
    class Athlete {

      getHeight() {
        return 6.6;
      }

      getName() {
        return name;
      }
    }

    let mj = new Athlete();
    expect(mj.getHeight()).to.eql(6.6);
    expect(mj.getName()).to.eql(name);

    // prototype still exists
    expect(Athlete.prototype.getName.call(mj)).to.eql(name);
  });

  it('create a class with a constructor, getter, and setter', () => {

    class Athlete {
      // constructor
      constructor(name, height) {
        this._name = name;
        this._height = height;
        this._retired = false;
      }

      getHeight() {
        return this._height;
      }

      getName() {
        return this._name;
      }

      // getter
      get retired() {
        return this._retired;
      }

      // setter
      set retired(val) {
        if (typeof(val) === 'boolean') {
          this._retired = val;
        }
      }

    }

    // initializing with a constructor
    let player = new Athlete('Magic Johnson', 6.9);
    expect(player.getName()).to.eql('Magic Johnson');
    expect(player.getHeight()).to.eql(6.9);

    // get and set: were introduced in es5.1 but were not supported in ie9
    expect(player.retired).to.eql(false);
    player.retired = true;
    expect(player.retired).to.eql(true);
  });


  it('inheritance, super class', () => {

    class Car {

      constructor(make, model, year, color) {
        this._make = make;
        this._model = model;
        this._year = year;
        this._color = color;
      }

      get make() {
        return this._make;
      }

      get model() {
        return this._model;
      }

      get year() {
        return this._year;
      }

      get color() {
        return this._color;
      }

    }

    // car is super class of suv
    class Suv extends Car {

      constructor(make, model, year, color, edition) {
        super(make, model, year, color);
        this._edition = edition;
      }

      get edition() {
        return this._edition;
      }

      salesTag() {
        return `${this._model} has ${this._color} paint.`
      }
    }

    var rav4 = new Suv('Toyota', 'Rav4', 2014, 'white pearl', 'limited');
    expect(rav4.make).to.eql('Toyota');
    expect(rav4.model).to.eql('Rav4');
    expect(rav4.color).to.eql('white pearl');
    expect(rav4.year).to.eql(2014);
    expect(rav4.salesTag()).to.eql('Rav4 has white pearl paint.')

    //super
    expect(rav4.edition).to.eql('limited');

  });
});