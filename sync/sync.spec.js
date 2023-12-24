const lodash = require('./sync')


let _ = new lodash()

describe('lodash compact',()=>{

  let array 

  beforeEach(()=>{
      array = [false, 42, 0, '', true, null, 'hello']
  })

  afterAll(()=>{
    _ = new lodash()
  })

  test('should be defined',()=>{
    expect(_.compact).toBeDefined()
    expect(_.compact).not.toBeUndefined()
  })

  test('should be remove falsy values from array',()=>{
   
    const result = [42,true,'hello']
    expect(_.compact(array)).toEqual(result)
   })

   test('should NOT contain falsy values',()=>{
  
    expect(_.compact(array)).not.toContain(false)
    expect(_.compact(array)).not.toContain(0)
    expect(_.compact(array)).not.toContain('')
    expect(_.compact(array)).not.toContain(null)
   })
   
})


describe('Lodash groupBy', ()=>{

  test('should be defined',()=>{
    expect(_.groubBy).toBeDefined()
    expect(_.groubBy).not.toBeUndefined()
  })

  test('should be group array items by Math.floor',()=>{
    const arr = [2.2, 2.4, 4.2, 3.1]
    const result = {
      2:[2.2,2.4],
      3:[3.1],
      4:[4.2]
    }
    expect(_.groubBy(arr,Math.floor)).toEqual(result)

  })

  test('should be group array items by length',()=>{
    const arr = ['one', 'two', 'three']
    const result = {
      5:['three'],
      3:['one', 'two'],
      
    }
    expect(_.groubBy(arr, 'length')).toEqual(result)

  })

  test('should NOT return array',()=>{
    const arr = ['one', 'two', 'three']
    const result = {
      5:['three'],
      3:['one', 'two'],
    }

    expect(_.groubBy([],Math.trunc)).not.toBeInstanceOf(Array)

  })
})