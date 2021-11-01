import $ from 'jquery'

export function show_image_after_input({ idImg, idInput }) {
    function readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                $(idImg).attr('src', e.target.result);
            }

            reader.readAsDataURL(input.files[0]);
        }
    }

    $(idInput).change(function () {
        readURL(this);
    });
}

// convert Base64 to image upload
export function DataURIToBlob(dataURI) {
    const splitDataURI = dataURI.split(',')
    const byteString = splitDataURI[0].indexOf('base64') >= 0 ? atob(splitDataURI[1]) : decodeURI(splitDataURI[1])
    const mimeString = splitDataURI[0].split(':')[1].split(';')[0]

    const ia = new Uint8Array(byteString.length)
    for (let i = 0; i < byteString.length; i++)
        ia[i] = byteString.charCodeAt(i)

    return new Blob([ia], { type: mimeString })
}


export function isBase64(str) {
    if (str.search("data:image/") == 0 && str.search("base64") >= 0) {
        return true
    }
    return false
}

export function beforePaste(id) {
    $(id).bind("paste", function (e) {
        setTimeout(function () {
            var text = $(id).text();
            $(id).html(text);
        }, 100);
    })
}