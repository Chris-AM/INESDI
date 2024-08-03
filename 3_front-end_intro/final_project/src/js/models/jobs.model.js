export class Job {
    constructor(id,
        title,
        company,
        location,
        type,
        description,
        howToApply,
        salary,
        experience,
        skills) {
        this.id = id;
        this.title = title;
        this.company = company;
        this.location = location;
        this.type = type;
        this.description = description;
        this.howToApply = howToApply;
        this.salary = salary;
        this.experience = experience;
        this.skills = skills;
    }
}