// const title = document.querySelector('.js-title');
// console.log(title);

// const list = document.querySelector('.js-list');
// const li = document.createElement('li');
// li.textContent = 5;
// li.classList.add('js-item');
// console.log(li['classList']);

// list.append(li);

// console.dir(li);

const list = document.querySelector('.js-list');
const li = `<li class="js-item">5</li>`;

list.insertAdjacentHTML('beforeend', li);
