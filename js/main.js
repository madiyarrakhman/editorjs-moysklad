var textArea = $('.b-guide-editor');

if (textArea.length) {
    textArea.after('<div id="codex-editor" class="border" style="border: 1px solid #dee2e6 !important; "></div>');
    const editor = new EditorJS({
        holder: 'codex-editor',
        autofocus: true,
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
                        byFile: 'http://nemo2.d/attachment/upload/add', // Your backend file uploader endpoint
                        //byUrl: 'http://localhost:8008/fetchUrl', // Your endpoint that provides uploading by Url
                    },
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
        },
    });
}
