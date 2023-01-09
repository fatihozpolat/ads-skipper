let url = window.location.href;
if (url.indexOf("https://ouo.io/") > -1) {
    let urlParts = url.split("/");

    if (urlParts.length === 4) {
        let lastPart = urlParts[3];
        window.location.href = 'https://ouo.io/fbc/' + lastPart;
    } else if (urlParts.length === 5 && urlParts[3] === 'fbc') {
        setTimeout(function () {
            let form = document.getElementById('form-captcha');
            form && form.submit();
        }, 1000);
    } else if (urlParts.length === 5 && urlParts[3] === 'go') {
        setTimeout(function () {
            let form = document.getElementById('form-go');
            form && form.submit();
        }, 1000);
    }
}

// ouo.press
if (url.indexOf('https://ouo.press/') > -1) {
    let urlParts = url.split("/");
    if (urlParts.length === 4) {
        let lastPart = urlParts[3];
        window.location.href = 'https://ouo.press/fbc/' + lastPart;
    } else if (urlParts.length === 5 && urlParts[3] === 'fbc') {
        setTimeout(function () {
            let form = document.getElementById('form-captcha');
            form && form.submit();
        }, 1000);
    } else if (urlParts.length === 5 && urlParts[3] === 'go') {
        setTimeout(function () {
            let form = document.getElementById('form-go');
            form && form.submit();
        }, 1000);
    }
}