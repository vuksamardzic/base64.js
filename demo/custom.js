const form = document.querySelector('.main-form');
const ul = document.querySelector('ul');
const img = document.querySelector('.image-preview');
let f = [];

const fileTemplate = (name) => `<li class="list-group-item">${name}</li>`;
const imageTemplate = (src) => `<img class="img-fluid" src="${src}" alt="">`;
const onFileChange = (files) => {
  const innerUl = [];
  f = files;
  for (let file of files) {
    innerUl.push(fileTemplate(file.name));
  }
  ul.innerHTML = innerUl.join('');
};
form.addEventListener('submit', async (e) => {
  e.preventDefault();
  try {
    const res = await base64.init(f);
    img.innerHTML = '';
    for (let i of res) {
      img.innerHTML += imageTemplate(i);
    }
  } catch (e) {
    img.innerHTML = e.message;
  }
});
