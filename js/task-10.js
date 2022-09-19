function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const refs = {
  input: document.querySelector('#controls > input'),
  btCreate: document.querySelector('button[data-create]'),
  btDestroy: document.querySelector('button[data-destroy]'),
  dady: document.querySelector('#boxes')
}

refs.btCreate.addEventListener('click', createBoxes);

refs.btDestroy.addEventListener('click', destroyBox);

console.log(refs.input);
console.log(refs.btCreate);
console.log(refs.btDestroy);
console.log(refs.input.value)


function createBoxes(amount) {
  const box = [];
  amount = refs.input.value;
  for (let i = 0; i < amount; i += 1){
    const divEl = document.createElement('div');
    divEl.style.background = getRandomHexColor();
    divEl.style.width = `${30 + i * 10}px`;
    divEl.style.height = `${30 + i * 10}px`;
    box.push(divEl);
  };

  refs.dady.append(...box);
};


function destroyBox() {
  refs.dady.innerHTML = '';
  refs.input.value = 0;
}