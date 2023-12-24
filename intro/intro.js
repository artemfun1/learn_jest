// function expect(value){
//   return{
//     toBe: exp => {
//       if(value ===exp){
//         console.log('Success')
//       } else {
//         console.error(`Value is ${value}, but expectation is ${exp}`)
//       }
//     }
//   }
// }

function sum (a,b) {return a + b}

const nativeNull = () => null

module.exports = {sum,nativeNull}