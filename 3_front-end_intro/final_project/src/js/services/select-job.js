import { beDev1, beDev2, beDev3, dba1, dba2, dba3, devSecOp1, devSecOp2, devSecOp3, feDev1, feDev2, feDev3 } from "../interfaces/jobs.interface.js";

const user = JSON.parse(localStorage.getItem('user'));

//? If the user is not logged in, redirect to the login page
if (!user) {
    window.location.href = '/index.html';
}

//? If the user is logged in, display the user's name in the title
const main = document.querySelector('main');
const title = main.getElementsByTagName('h3')[0];
let titleName = title.innerHTML;
titleName = titleName.replace('{{name}}', user.name);
title.innerHTML = titleName


//? Display profile according to the jobs on the user's job classification
const jobProfile = user.classification;
console.log('jobProfile', jobProfile);

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
    case 'dba':
        jobs = [dba1, dba2, dba3];
        break;
    default:
        jobs = [feDev1, devSecOp2, devSecOp3];
        break;
}

document.addEventListener('DOMContentLoaded', () => {
    const jobList = document.querySelector('.jobs-container');

    jobs.forEach(job => {
        const card = `
        <form action="./job-info.html" method="get">
            <div class="card" style="width: 18rem;">
                <div class="card-body">
                    <input type="hidden" id="jobId" name="jobId" value="${job.id}">
                    <h5 class="card-title">${job.title}</h5>
                    <p class="card-text">${job.description}</p>
                    <input type="submit" value="More info">
                </div>
            </div>
        </form>
    `;
        jobList.innerHTML += card;
    });
});