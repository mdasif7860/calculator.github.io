const screen = document.querySelector(".screen");
const buttons = document.querySelectorAll(".btn");
const equal = document.querySelector(".btn-equal");
const clear = document.querySelector(".btn-clear");
  buttons.forEach((btn)=>{
    btn.addEventListener('click', (event)=>{
        let val = event.target.dataset.num;
        screen.value += val;
    })
  })

  equal.addEventListener('click', ()=>{
    let ans = eval(screen.value);
    screen.value = ans;
  });

  clear.addEventListener('click', ()=>{
    screen.value = "";
  })