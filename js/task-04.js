// Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.
let counterValue = 0;
console.log(counterValue);


const decrementBtn = document.querySelector('button[data-action="decrement"]');
console.log(decrementBtn);

const incrementBtn = document.querySelector('button[data-action="increment"]');

incrementBtn.addEventListener('click', () => {
    counterValue += 1;

    document.querySelector('#value').textContent = counterValue;
});

decrementBtn.addEventListener('click', () => {
    counterValue -= 1;

    document.querySelector('#value').textContent = counterValue;
});
