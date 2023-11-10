function uploadExcel() {
    const fileInput = document.getElementById('excelFile');
    const formData = new FormData();
    formData.append('excelFile', fileInput.files[0]);

    fetch('/upload', {
        method: 'POST',
        body: formData,
    })
        .then(response => response.json())
        .then(data => {
            console.log('File uploaded successfully:', data);
            // Можно обновить интерфейс или продолжить с другими действиями
        })
        .catch(error => console.error('Error uploading file:', error));
}