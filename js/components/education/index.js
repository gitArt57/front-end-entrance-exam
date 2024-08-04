import './styles.css'

const educationSection = {
    title: 'Education',
    items: [
        {
            date: '2023',
            direction: 'UI/UX',
            tags: ['UX', 'UI', 'research', 'DesignSystem', 'Ui', 'wireframing', 'figma', 'Ux'],
            university: 'Coursera',
        },
        {
            date: '2017 - 2022',
            direction: 'Law',
            tags: ['law', 'legalStudies', 'contracts', 'internationalLaws'],
            university: 'University of Kerala',
        },
        {
            date: '2017',
            direction: 'Graphic design',
            tags: ['branding', 'web', 'illustration', 'adobe'],
            university: 'Coursera',
        }
    ]
}
export function createEduSection() {
    const itemEls = educationSection.items.map((item, index) => {
        const tagEls = item.tags.map((tag, y) => `<span class="edu__item__tag" contenteditable data-key="education.item.${index}.tag.${y}">#${tag}</span>`).join('')

        return `
            <div class="edu__item">
                <h3 contenteditable data-key="education.item.${index}.date">${item.date}</h3>
                <div>
                    <h3 contenteditable data-key="education.item.${index}.direction">${item.direction}</h3>
                    <div class="sbt-3 edu__item__tags">${tagEls}</div>
                </div>
                <p class="sbt-3" contenteditable data-key="education.item.${index}.university">${item.university}</p>
            </div>
             
        `
    }).join('');

    return `
        <div class="edu island bg-second">
            <h2 contenteditable data-key="education.title">${educationSection.title}</h2>
            <div class="edu__list">${itemEls}</div>
        </div>
`
}
