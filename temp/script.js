document.getElementById('download').addEventListener('click', function () {
    // Get the selected template
    const selectedTemplate = document.getElementById('template-select').value;

    // Fetch the template content
    fetch(selectedTemplate)
        .then(response => response.text())
        .then(html => {
            // Load the template content into the hidden container
            const container = document.getElementById('template-container');
            container.innerHTML = html;

            // Wait a brief moment to ensure content is fully rendered
            setTimeout(() => {
                // Generate the PDF
                html2pdf().from(container).save();
            }, 500); // Adjust the delay as needed (500ms is usually sufficient)
        });
});
