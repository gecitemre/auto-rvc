import fs from 'fs/promises'; // Import the promises version of the fs module

// TODO: parameterize all functions

async function loadConfig() {
    try {
        const configData = await fs.readFile('config.json', 'utf-8');
        const config = JSON.parse(configData);
        return config;
    } catch (error) {
        console.error('Error loading config:', error);
        return null;
    }
}

async function post(endpoint, data) {
    const response = await fetch(`http://${config.IP}:${config.PORT}/run/${endpoint}`, {
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

async function trainStartAll() {
    const response = await post('train_start_all', [
        'mi-test',
        '40k',
        'true',
        'E:\\语音音频+标注\\米津玄师\\src',
        0,
        3,
        'pm',
        5,
        20,
        1,
        'Yes',
        'pretrained_v2/f0G40k.pth',
        'pretrained_v2/f0D40k.pth',
        'hello world',
        'Yes',
        'Yes',
        'v1',
        '-',
    ]);

    return response;
}

async function convert() {
    const response = await post('infer_convert', [
        0,
        "E:\codes\py39\test-20230416b\todo-songs\冬之花clip1.wav",
        0,
        { "name": "zip.zip", "data": "data:@file/octet-stream;base64,UEsFBgAAAAAAAAAAAAAAAAAAAAAAAA==" },
        "pm",
        "hello world",
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

async function seperate() {
    const response = await post('uvr_convert', [
        "HP2-人声vocals+非人声instrumentals",
        "E:\codes\py39\test-20230416b\todo-songs\todo-songs",
        "opt",
        { "name": "zip.zip", "data": "data:@file/octet-stream;base64,UEsFBgAAAAAAAAAAAAAAAAAAAAAAAA==" },
        "opt",
        10,
        "wav",
    ]);
    return response;
}

config = await loadConfig();