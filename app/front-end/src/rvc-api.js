async function post(endpoint, data) {
    const response = await fetch(`http://${config.IP}:${config.RVC_PORT}/run/${endpoint}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ data }),
        timeout: 10000,
    });

    const jsonResponse = await response.json();
    return jsonResponse;
}

async function convert() {
    const response = await post('infer_convert', [
        0,
        "E:\codes\py39\test-20230416b\todo-songs\冬之花clip1.wav",
        0,
        { "name": "zip.zip", "data": "data:@file/octet-stream;base64,UEsFBgAAAAAAAAAAAAAAAAAAAAAAAA==" },
        "pm",
        "0",
        "",
        0.75,
        3,
        0,
        0.25,
        0.33,
    ]
    );
    return response;
}

async function separate() {
    const response = await post('uvr_convert', [
        "HP2-人声vocals+非人声instrumentals",
        "/home/ubuntu/auto-rvc/data/raw/",
        "opt",
        { "name": "zip.zip", "data": "data:@file/octet-stream;base64,UEsFBgAAAAAAAAAAAAAAAAAAAAAAAA==" },
        "opt",
        10,
        "wav",
    ]);
    return response;
}

async function convert() {
    // TODO: convert should use separate and convert together
}