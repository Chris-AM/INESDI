import { User } from './models/user.model.js'
const form = document.querySelector('form');

form.addEventListener('submit', async (event) => {
    const name = event.target.elements['name'].value;
    const email = event.target.elements['email'].value;
    const disability = event.target.elements['disability'].value;
    const classification = event.target.elements['classification'].value;
    const jobType = event.target.elements['jobType'].value;
    const searchedCountry = event.target.elements['searchedCountry'].value;

    const user = new User(name, email, disability, classification, jobType, searchedCountry);

    localStorage.setItem('user', JSON.stringify(user));
});