const {map} = require('./mock')



describe('Map function', ()=>{

  let arr 
  let fn

  beforeEach(()=>{
    arr = [1,2,3,5]
    fn = jest.fn(x=>x**2)
    map(arr, fn)
  })

  test('shoul call callback',()=>{
    expect(fn).toBeCalled()
  })

  test('shoul call callback for times',()=>{
    expect(fn).toBeCalledTimes(4)
    expect(fn.mock.calls.length).toEqual(4)
  })

  test('shoul pow 2 each element',()=>{
    expect(fn.mock.results[0].value).toEqual(1)
    expect(fn.mock.results[1].value).toEqual(4)
    expect(fn.mock.results[2].value).toEqual(9)
    expect(fn.mock.results[3].value).toEqual(25)
  })

  test('shoul fn work',()=>{

    fn.mockReturnValueOnce(100)
      .mockReturnValueOnce(200)
      .mockReturnValue('42')

    expect(fn()).toEqual(100)
    expect(fn()).toEqual(200)
    expect(fn()).toEqual('42')
    expect(fn()).toEqual('42')
  
  })



  

})