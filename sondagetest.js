const surveyJson = {
    pages: [
        {
          name: "page1",
          "elements": [
                {
                    "type": "boolean",
                    "name": "bool",
                    "title": "Sondage particulier",
                    "label": "Avez vous plus de 33 ans ?",
                    "isRequired": false
                },
                {
                    "type": "radiogroup",
                    "name": "car",
                    "title": "Quel est votre fruit préféré?",
                    "isRequired": false,
                    "hasNone": true,
                    "colCount": 4,
                    "choices": [
                        "Pomme",
                        "Fraise",
                        "Kumquat",
                    ]
                }
            ]
      },
    ]
};
