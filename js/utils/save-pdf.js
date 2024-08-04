import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

export function initSavePDFButton(selector) {
    const el = document.querySelector(selector)

    if (!el) {
        return;
    }

    console.log('--- button found ---')

    el.addEventListener('click', () => saveHtmlToPdf())
}

function saveHtmlToPdf(elementId = "app") {
    const element = document.getElementById(elementId);

    html2canvas(element).then((canvas) => {
        console.log('--- canvas created ---')

        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF('p', 'mm', 'a4');
        const imgWidth = 210; // Ширина PDF в мм (A4 стандарт)
        const pageHeight = 295; // Высота PDF в мм (A4 стандарт)
        const imgHeight = (canvas.height * imgWidth) / canvas.width;
        let heightLeft = imgHeight;
        let position = 0;

        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;

        while (heightLeft >= 0) {
            position = heightLeft - imgHeight;
            pdf.addPage();
            pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
            heightLeft -= pageHeight;
        }

        console.log('--- save pdf ---')

        pdf.save('document.pdf');
    });
}

