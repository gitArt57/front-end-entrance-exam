export function setEditableListener(){
    const els = document.querySelectorAll("[contenteditable]");

    els.forEach(el => {
        el.addEventListener("blur", () => {
            const selector = el.getAttribute('data-key');
            localStorage.setItem("dataStorage-" + selector, el.innerHTML);
        })
    });

    for (const key in localStorage) {
        if (key.includes("dataStorage-")) {
            const selector = key.replace("dataStorage-","");
            document.querySelector(`[data-key="${selector}"]`).innerHTML = localStorage.getItem(key);
        }
    }
}
