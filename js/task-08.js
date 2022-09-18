// Обработка отправки формы form.login-form должна быть по событию submit. +
// При отправке формы страница не должна перезагружаться. +
// Если в форме есть незаполненные поля, выводи alert с предупреждением о том, что все поля должны быть заполнены. +
// Если пользователь заполнил все поля и отправил форму, собери значения полей в обьект, где имя поля будет именем свойства, а значение поля - значением свойства. Для доступа к элементам формы используй свойство elements. +
// Выведи обьект с введенными данными в консоль и очисти значения полей формы методом reset. +


const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) { 
    event.preventDefault();

    const formEl = event.currentTarget.elements;
    console.log(formEl);

    const email = formEl.email;
    const password = formEl.password;

    if (email.value == '' || password.value == '') {
        return alert('Все поля дожны быть заполнены!')
    }
    else {
        const forData = new FormData(event.currentTarget);
        console.log({ email: email.value, password: password.value })
        form.reset();
    }

};