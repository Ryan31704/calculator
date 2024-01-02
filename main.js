let btn = Array.from(document.querySelectorAll(".btn"));
let display = document.querySelector(".num-box");
let num1 = '';
let num2 = '';
let operator = '';

for(let i = 0; i < btn.length; i++)
{
  btn[i].addEventListener('click', function()
  {
    if(display.innerHTML === "00")
    {
      display.innerHTML = '';
    }
    txt = btn[i].textContent
    if(txt === "clear")
    {
      num1 = '';
      num2 = '';
      operator = '';
      display.innerHTML = '00'
    }
    else if(txt === "/" || txt === "x" || txt === "-" || txt === "+")
    {
      if(num1 !== '' && num2 !== '')
      {
        operate(num1, num2, operator)
      }
      operator = txt;
      display.innerHTML += txt;
    }
    else if(txt === "=")
    {
      operate(num1, num2, operator);
    }
    else if(operator === "")
    {
      num1 += txt;
      display.innerHTML += txt;
    }
    else
    {
      num2 += txt
      display.innerHTML += txt;
    }
  });
}

function operate(n1, n2, op)
{
  let result;
  if(op === '/')
  {
    display.innerHTML = Number(n1) / Number(n2);
    result = Number(n1) / Number(n2);
    num1 = result.toString();
  }
  else if(op === 'x')
  {
    display.innerHTML = Number(n1) * Number(n2);
    result = Number(n1) * Number(n2);
    num1 = result.toString();
    num1 = result.toString();
  }
  else if(op === '-')
  {
    display.innerHTML = Number(n1) - Number(n2);
    result = Number(n1) - Number(n2);
    num1 = result.toString();
    num1 = result.toString();
  }
  else if(op === '+')
  {
    display.innerHTML = Number(n1) + Number(n2);
    result = Number(n1) + Number(n2);
    num1 = result.toString();
  }
  num2 = '';
  console.log(n1);
  console.log(op);
  console.log(n2);

}
