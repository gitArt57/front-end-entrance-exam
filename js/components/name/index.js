import './styles.css';

const nameSection = {
    name: 'Karthik SR',
    jobTitle: 'UX/UI Designer'
}

export function createNameSection() {
    return `
<div class="name island bg-second">
    <h3 class="name__label" contenteditable data-key="name.label">Hello 👋🏻 I’m</h3>
       <div>
            <p class="name__full-name" contenteditable data-key="name.fullname">${nameSection.name}</p>
            <p class="name__job-title sbt-1" contenteditable data-key="name.job-title">${nameSection.jobTitle}</p>
        </div>
</div>`
}
