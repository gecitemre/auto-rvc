async function uploadWeights(file) {
    const response = await fetch(`http://${config.IP}:${config.UPLOAD_PORT}/upload-weights`, {
        method: 'POST',
        body: file,
        timeout: 10000,
    });
    const jsonResponse = await response.json();
    return jsonResponse;
}

async function uploadAudio(file) {
    const response = await fetch(`http://${config.IP}:${config.UPLOAD_PORT}/upload-audio`, {
        method: 'POST',
        body: file,
        timeout: 10000,
    });
    const jsonResponse = await response.json();
    return jsonResponse;
}