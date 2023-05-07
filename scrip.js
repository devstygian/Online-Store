$(function () {
    if ($(window).width() < 600) {
        window.location.href = "https://example.com/error.html";
    }
});

window.onbeforeunload = () => {
    for (const form of document.getElementsByTagName('form')) {
        form.reset();
    }
}

