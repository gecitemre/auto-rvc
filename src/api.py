import requests

import config


def train_start_all():
    # POST /run/train_start_all

    # TODO: parametrize necessary data
    response = requests.post(
        f"http://{config.IP}:{config.PORT}/run/train_start_all",
        json={
            "data": [
                "mi-test",
                "40k",
                "true",
                "E:\语音音频+标注\米津玄师\src",
                0,
                3,
                "pm",
                5,
                20,
                1,
                "Yes",
                "pretrained_v2/f0G40k.pth",
                "pretrained_v2/f0D40k.pth",
                "hello world",
                "Yes",
                "Yes",
                "v1",
                "-",
            ]
        },
        timeout=10,
    ).json()

    return response
