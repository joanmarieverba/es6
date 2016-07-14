import {expect} from 'chai'
//
describe('SETS', () => {

  it('has an add method and a has method', ()=> {

    // Create a new Set called 'mySet'
    // add the numbers 1, 2, and 3 to the set
    var mySet = new Set();
    mySet.add(1).add(2).add(3);

    expect(mySet.has(1)).to.be.true
    expect(mySet.has(2)).to.be.true
    expect(mySet.has(3)).to.be.true
    expect(mySet.has(4)).to.equal(false)

  })

  it('doesn`t allow duplicates', ()=> {

    // Create a new Set called 'mySet'
    // add the number 1 to it three times

    var mySet = new Set();
    mySet.add(1).add(1).add(1);

    expect(mySet.has(1)).to.be.true
    expect(mySet.has(2)).to.equal(false)
    expect(mySet.has(3)).to.equal(false)
    expect(mySet.has(4)).to.equal(false)

  })

})
