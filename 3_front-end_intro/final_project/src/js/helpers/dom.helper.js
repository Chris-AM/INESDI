export const jobInfo = (foundJob) => `
<div class="selected-job-container">
    <img src="../../src/img/${foundJob.icon}" alt="icon">
    <h4 class="card-title">${foundJob.title}</h4>
    <p class="card-subtitle mb-2 font-weight-bold">Type: ${foundJob.type}</p>
    <h6 class="card-subtitle mb-2 text-muted">${foundJob.company}</h6>
    <p class="card-subtitle mb-4 font-weight-bold">Country: ${foundJob.where}</p>
    <p class="card-text">${foundJob.description}</p>
    <p class="card-text">Salary: ${foundJob.salary ? foundJob.salary : 'No Info'}</p>
    <p class="card-text">Location: ${foundJob.location}</p>
    <p class="card-text">Experience: ${foundJob.experience}</p>
    <p class="card-text">Skills: ${foundJob.skills}</p>
    <p class="card-text">Duties: ${foundJob.duties}</p>
    <p class="card-text">How to apply: ${foundJob.howToApply}</p>
    <button id="apply" class="btn btn-primary">Apply</button>
</div>
`;

export const mobileJobInfo = (foundJob) => `
<div class="mobile-job-container">
    <img src="../../src/img/${foundJob.icon}" class="card-img-top" alt="icon">
    <h4 class="card-title">${foundJob.title}</h4>
    <p class="card-subtitle mb-2 font-weight-bold">Type: ${foundJob.type}</p>
    <p class="card-subtitle mb-4 font-weight-bold">Country: ${foundJob.where}</p>
    <p class="card-text">Salary: ${foundJob.salary ? foundJob.salary : 'No Info'}</p>
    <p class="card-text">Location: ${foundJob.location}</p>
    <p class="card-text">Experience: ${foundJob.experience}</p>
    <p class="card-text">Skills: ${foundJob.skills}</p>
    <div class="buttons-container">
        <button id="apply" class="btn btn-primary">Apply</button>
        <button id="close-mobile-modal" class="btn btn-secondary">Close</button>
    </div>
</div>
`;