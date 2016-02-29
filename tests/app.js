'use strict';

import { expect } from 'chai';

describe('app', () => {

  it('should run flawless',() => {
    let foo = 'bar';
    expect(foo).to.be.a('string').and.equal('bar');
  });

  it('should run either',() => {
    let beverages = { tea: [ 'rooibos', 'matcha', 'oolong' ] };
    expect(beverages).to.have.property('tea').with.length(3);
  });

});
