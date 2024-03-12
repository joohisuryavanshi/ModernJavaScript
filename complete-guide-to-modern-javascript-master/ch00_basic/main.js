// for (For statement) {}
if (true) {
  const ulEl = document.querySelector('ul')
  for(let i = 0; i < 10; i += 1) {
    const li = document.createElement('li');
    li.textContent = `list-${i + 1}`
    if ((i + 1) % 2 === 0) {
      li.addEventListener('click', function() {
        console.log(li.textContent)
      })
    }
    ulEl.appendChild(li)
    
  }
}

// var, let, const
if(true) {
  function scope() {
    if (ture) {
      var a = 123
    }
    console.log
  }

}

// (Type conversion)
const a = 1
const b = '1' 

console.log(a == b)

// Truthy 
// true, {}, [], 1, 2, 'false', -12, '3.14' ...

// Falsy 
// false, '', null, undefined, 0, -0, NaN

if ('false') {
  console.log(123)
}
if (0) {
  console.log(123)
}


{
  function sum(x, y) {
      console.log(x + y)
  }

  function sum2(x, y) {
    return  x + y
  }
  sum(1, 3)
  sum(4, 12)

  const a = sum2(1, 3)
  const b = sum2(4, 12)

  console.log(a)
  console.log(b)
}