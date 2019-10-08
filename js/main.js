var textArea = $('.b-guide-editor');

if (textArea.length) {
    textArea.after('<div id="codex-editor" class="border" style="border: 1px solid #dee2e6 !important; "></div>');
    const editor = new EditorJS({
        holder: 'codex-editor',
        autofocus: true,
        placeholder: 'Сюда описание товара!',
        tools: {
            header: {
                class: Header,
                inlineToolbar: ['link'],
                config: {
                    placeholder: 'Header'
                },
                shortcut: 'CMD+SHIFT+H'
            },
            list: {
                class: List,
                inlineToolbar: true,
                shortcut: 'CMD+SHIFT+L'
            },
            image: SimpleImage,
            raw: RawTool,
            checklist: {
                class: Checklist,
                inlineToolbar: true,
            },
            photo: {
                class: ImageTool,
                config: {
                    endpoints: {
                        byFile: 'https://api.kraken.io/v1/upload', // Your backend file uploader endpoint
                        //byUrl: 'http://localhost:8008/fetchUrl', // Your endpoint that provides uploading by Url
                    },
                    additionalRequestData: {
                        "data": '{ "auth": { "api_key": "6831fcadf58aa6b6aec3cf441ab49989", "api_secret": "40c0b311aa02255563b437bf1d9678c0cb10990d" }, "wait": true }'
                    }
                }
            },
            embed: {
                class: Embed,
                config: {
                    services: {
                        youtube: true,
                        coub: true
                    }
                }
            },
            paragraph: {
                class: Paragraph,
                inlineToolbar: true,
            },
            marker: {
                class: Marker,
            }
        },
    });
}
