function fn(str){
  let len = str.length;
  split('')
  for(let i = 0; i < Math.floor(len/2); i++){
    if (str[i] != str[len-i-1]){
      return false;
    }
    if (i == Math.floor(len/2) -1 ){
      return true;
    }
  }
}

localStorage.setItem('key','value')
localStorage.getItem('key')

function myInstanceof(a,b){
  let prototype = b.prototype;
  let aProto = a.__proto__
  while(aProto){
    if (aProto == prototype){
      return true;
    }else {
      aProto = aProto.__proto__
    }
  }
  return false;
}


function sum(num){
  let sum = num;
  
  return function(num){
    return sum + num
  }
}

function debounce(cb, immediate){
  let timer;
  let context;
  function timeout(){
    timer = setTimeout(()=>{
      // timer = null
      if(!immediate){
        cb()
      }
    }, 50)
  }
  return function(...args){
    if(timer){
      clearTimeout(timer);
      timeout()
    }else {
      if (!immediate){
        timeout();
        context = this
      } else {
        cb(...args);
      }
      timeout();
    }
  }
}



setTimeout(function(){
  console.log("a");
},0)
new Promise(function(resolve){
  console.log("b");
  resolve()
}).then(function(){
  console.log("c");
})
console.log("d");

// b d c a 


const p1 = new Promise((resolve, reject) => {
  resolve("111");
  console.log("0000");
});
p1.then((value) => {
  console.log(value)
})

// 0000 111


const pardova = (n)=>{
  if(n <= 3){
    return 1;
  } else {
    let result = 1;
    let preOne = 1;
    let preTwo = 1;
    let pre = 1;
    let num = 4;
    while(num <= n){
      result = preOne + preTwo;
      preOne = preTwo
      preTwo = pre;
      pre = result;
      num++;
    }
    return result;
  }
}
console.log(pardova(111))


var countIndex = (str)=>{
  let len = str.length;
  let startCode = 'A'.charCodeAt(0);
  console.log(startCode)
  let result = 0
  for(let i = len-1; i >= 0; i--){
    let iCode = str[i].charCodeAt(0);
    result = result + (iCode-startCode+1)*Math.pow(26,(len-i));
  }
  return result;
}

console.log(countIndex('AB'))

