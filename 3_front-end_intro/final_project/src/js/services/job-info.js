import { jobList } from "../interfaces/jobs.interface.js";

const user = JSON.parse(localStorage.getItem('user'));

//? If the user is not logged in, redirect to the login page
if (!user) {
    window.location.href = '/index.html';
}

const urlParams = new URLSearchParams(window.location.search);
const jobId = urlParams.get('jobId');

console.log(jobId);

const getJob = (jobId) => {
    const foundJob = jobList.find(job => job.id === jobId);
    return foundJob;
}


//? If the user is logged in, display the selected job name in the title
const main = document.querySelector('main');
const title = main.getElementsByTagName('h3')[0];
let titleName = title.innerHTML;
titleName = titleName.replace('{{job}}', getJob(jobId).title);
title.innerHTML = titleName

document.addEventListener('DOMContentLoaded', () => {
    const jobInfo = document.querySelector('.job-info-container');
    const job = getJob(jobId);
    const card = `
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h4 class="card-title">${job.title}</h4>
                <h6 class="card-subtitle mb-2 text-muted">${job.company}</h6>
                <p class="card-text">${job.description}</p>
                <p class="card-text">Salary: ${job.salary ? job.salary : 'No Info'}</p>
                <p class="card-text">Location: ${job.location}</p>
                <p class="card-text">Experience: ${job.experience}</p>
                <p class="card-text">Skills: ${job.skills}</p>
            </div>
        </div>
    `;
    jobInfo.innerHTML = card;
});

document.getElementById('apply').addEventListener('click', () => {
    //? here is going to trigger a modal
});

document.getElementById('back').addEventListener('click', () => {
    window.location.href = '/src/pages/select-job.html';
});