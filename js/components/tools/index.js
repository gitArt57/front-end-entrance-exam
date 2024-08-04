import './styles.css'

const sections = [
    {
        title: 'design',
        icons: Array(6).fill('logoFigma.svg'),
    },
    {
        title: 'no-code',
        icons: Array(4).fill('logoFigma.svg'),
    },
    {
        title: 'artificial intelligence',
        icons: Array(3).fill('logoFigma.svg'),
    }
]

const sectionEls = sections.map(section => {
    const icons = section.icons.map(icon => `<img class="tools__item__logo" src="${icon}">`);

    return `<div class="tools__item bg-primary" data-title="${section.title}">${icons.join('')}</div>`
});
export function createToolsSection() {
    return `
<div class="tools island bg-second">
    <h2 contenteditable data-key="tools.title">Tools</h2>
    <div class="tools__list">${sectionEls.join('')}</div>
</div>`
}
