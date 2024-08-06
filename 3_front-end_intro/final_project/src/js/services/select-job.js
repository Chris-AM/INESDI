import { beDev1, beDev2, beDev3, beDev4, beDev5, dba1, dba2, dba3, devSecOp1, devSecOp2, devSecOp3, devSecOp4, devSecOp5, feDev1, feDev2, feDev3, feDev4, feDev5 } from "../interfaces/jobs.interface.js";

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
        jobs = [feDev1, feDev2, feDev3, feDev4, feDev5];
        break;
    case 'back-end':
        jobs = [beDev1, beDev2, beDev3, beDev4, beDev5];
        break;
    case 'devsecops':
        jobs[devSecOp1, devSecOp2, devSecOp3, devSecOp4, devSecOp5];
        break;
    case 'dba':
        jobs = [dba1, dba2, dba3, dba4, dba5];
        break;
    default:
        jobs = [feDev3, beDev5, devSecOp3, dba3, beDev1];
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
                    <img src="/src/img/${job.icon}" style="with:80px; height:80px" alt="${job.icon}">
                    <h5 class="card-title">${job.title}</h5>
                    <p class="card-text">${job.description}</p>
                </div>
            </div>
        </form>
    `;
        jobList.innerHTML += card;
    });
});