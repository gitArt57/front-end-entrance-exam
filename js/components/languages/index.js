import './styles.css'

const langSection = {
    title: 'Languages',
    items: [
        { label: 'English', level: 100 },
        { label: 'Malayalam', level: 100 },
        { label: 'Hindi', level: 80 },
    ]
};

export function createLangsSection() {
    const itemEls = langSection.items.map((item, index) => {
        return `<div class="langs__row">
            <h3 contenteditable data-key="langs.item.${index}.label">${item.label}</h3>
            <div class="langs__level bg-green" style="--lang--level: ${item.level}%"></div>
        </div>`
    });

    return `
<div class="langs island bg-second">
     <h2 contenteditable data-key="langs.title">${langSection.title}</h2>
    <div class="langs__list">
        ${itemEls.join('')}
    </div>
</div>`
}
