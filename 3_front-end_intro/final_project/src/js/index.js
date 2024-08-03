import { User } from './models/user.model.js'
const form = document.querySelector('form');

form.addEventListener('submit', async (event) => {
    const name = event.target.elements['name'].value;
    const email = event.target.elements['email'].value;
    const gender = event.target.elements['gender'].value;
    const classification = event.target.elements['classification'].value;
    const jobType = event.target.elements['jobType'].value;
    const about = event.target.elements['about'].value;

    const user = new User(name, email, gender, classification, jobType, about);

    localStorage.setItem('user', JSON.stringify(user));
});