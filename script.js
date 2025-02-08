document.addEventListener('DOMContentLoaded', function() {
    let codeOutput = document.querySelector('.code-output');
    let codeText = `> Hello, welcome to Spektrumhex!\n> Initiating system...\n> Loading data...`;
    let i = 0;

    function typeCode() {
        if (i < codeText.length) {
            codeOutput.textContent += codeText.charAt(i);
            i++;
            setTimeout(typeCode, 50);
        }
    }

    typeCode();
});

