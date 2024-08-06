export class Job {
    constructor(id,
        icon,
        classification,
        title,
        company,
        location,
        where,
        type,
        description,
        duties,
        howToApply,
        salary,
        experience,
        skills) {
        this.id = id;
        this.icon = icon;
        this.classification = classification
        this.title = title;
        this.company = company;
        this.location = location;
        this.where = where;
        this.type = type;
        this.description = description;
        this.duties = duties;
        this.howToApply = howToApply;
        this.salary = salary;
        this.experience = experience;
        this.skills = skills;
    }
}