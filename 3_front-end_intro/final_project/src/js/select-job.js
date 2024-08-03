
const user = JSON.parse(localStorage.getItem('user'));

const main = document.querySelector('main');
const title = main.getElementsByTagName('h3')[0];
let titleName = title.innerHTML;
titleName = titleName.replace('{{name}}', user.name);

title.innerHTML = titleName



