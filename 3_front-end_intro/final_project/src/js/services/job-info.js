import { jobInfo, mobileJobInfo } from "../helpers/dom.helper.js";
import { jobList } from "../interfaces/jobs.interface.js";

const foundJob = (jobId) => jobList.find(job => { return job.id == jobId });

const getJob = (jobId, container) => {
    container.classList.add('highlight');
    container.innerHTML = jobInfo(foundJob(jobId));
    document.getElementById('apply').addEventListener('click', () => {
        document.getElementById('apply-modal').classList.add('modal-container');
    });
}

const getMobileJob = (jobId, container) => {
    container.innerHTML = mobileJobInfo(foundJob(jobId));
    document.getElementById('apply').addEventListener('click', () => {
        console.log('apply');
        document.getElementById('apply-modal').classList.add('modal-container');
    });
}

const closeModal = () => {
    document.getElementById('close-modal').addEventListener('click', () => {
        document.getElementsByClassName('modal-hidden')[0].classList.remove('modal-container');
    });
}

const closeApplyModal = () => {
    console.log(document.getElementById('close-mobile-modal'));
    document.getElementById('close-mobile-modal').addEventListener('click', () => {
        console.log('close');
        //redirect to another page
        window.location.href = 'select-job.html';
    });
}

export { getJob, closeModal, getMobileJob, closeApplyModal };