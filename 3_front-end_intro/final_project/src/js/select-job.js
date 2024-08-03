import { beDev1, beDev2, beDev3, devSecOp1, devSecOp2, devSecOp3, feDev1, feDev2, feDev3 } from "./interfaces/jobs.interface.js";

const user = JSON.parse(localStorage.getItem('user'));

if (!user) {
    window.location.href = '/index.html';
}

const main = document.querySelector('main');
const title = main.getElementsByTagName('h3')[0];
let titleName = title.innerHTML;
titleName = titleName.replace('{{name}}', user.name);

title.innerHTML = titleName

const jobProfile = user.classification;
console.log('job profile', jobProfile);

let jobs = [];
switch (jobProfile) {
    case 'front-end':
        jobs = [feDev1, feDev2, feDev3];
        break;
    case 'back-end':
        jobs = [beDev1, beDev2, beDev3];
        break;
    case 'devsecops':
        jobs[devSecOp1, devSecOp2, devSecOp3];
        break;
    default:
        jobs = [feDev1, devSecOp2, devSecOp3];
        break;
}

document.addEventListener('DOMContentLoaded', () => {
    const jobList = document.querySelector('.jobs-container');

    jobs.forEach(job => {
        const card = `
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${job.title}</h5>
                <p class="card-text">${job.description}</p>
                <a href="${job.link}" class="btn btn-primary">Apply Now</a>
            </div>
        </div>
    `;
        jobList.innerHTML += card;
    });
});