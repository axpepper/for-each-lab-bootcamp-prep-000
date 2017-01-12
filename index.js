function iterativeLog(arr){
  var i=0
  arr.forEach(item => console.log(`${i++}: ${item}`))
}

function iterate(fun){
  var array=[1,2,3]
  array.forEach(fun)
  return array
}

function doToArray(arr, fun){
  arr.forEach(fun)
}