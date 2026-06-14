// Generated using a neural network model DeepSeek-V3

function renderSVG() {

    const svgCode = document.getElementById('svgInput').value;
    const previewDiv = document.getElementById('preview');
    const errorDiv = document.getElementById('errorMsg');

    try {

        errorDiv.textContent = '';

        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = svgCode;

        let svgElement = tempDiv.querySelector('svg');
        if (!svgElement) {
            throw new Error('Not found <svg> element');
        }

        previewDiv.innerHTML = '';

        const clonedSvg = svgElement.cloneNode(true);
        previewDiv.appendChild(clonedSvg);

        console.log('✓ SVG');

    } catch (error) {
        errorDiv.textContent = '❌ Error: ' + error.message;
        console.error('Render error:', error);
    }

}

document.addEventListener('DOMContentLoaded', () => {

    renderSVG();

    let timeout;
    const svgInput = document.getElementById('svgInput');

    if (svgInput) {
        svgInput.addEventListener('input', () => {
            clearTimeout(timeout);
            timeout = setTimeout(renderSVG, 500);
        });
    }

});
