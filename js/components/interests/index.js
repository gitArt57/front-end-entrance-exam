import './styles.css';

const interestsSection = {
    title: 'Interests',
    items: [
        'branding', 'design', 'photography',
        'artificial intelligence', 'illustration',
        'typography', 'social networks',
        'research', 'dron pilot', 'games'
    ]
}

export function createInterestsSection() {
    const itemEls = interestsSection.items.map((item, index) => {
        return `<div contenteditable data-key="interests.item.${index}" class="interests__item sbt-2 bg-primary">${item}</div>`
    });

    return `
<div class="interests island bg-second">
   <h2 contenteditable data-key="interests.title">${interestsSection.title}</h2>
   <div class="interests__lists">${itemEls.join('')}</div>
</div>`
}
