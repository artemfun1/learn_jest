
class lodash {
  compact(arr){
    return arr.filter(val => !!val)
  }
  groubBy(arr,prop){



    return arr.reduce((acc,i)=>{
      const key =  typeof prop ==='function'? prop(i): i[prop]
      if(!acc[key]){
        acc[key] =[]
      }
      acc[key].push(i)
      return acc
    },{})

  }
}

module.exports = lodash 