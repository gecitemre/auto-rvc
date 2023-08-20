async function uploadFile(file, directory) {
    const response = await fetch(`http://${config.IP}:${config.UPLOAD_PORT}/upload-file`, {
        method: 'POST',
        body: file,
        timeout: 10000,
    });
    const jsonResponse = await response.json();
    return jsonResponse;
}
