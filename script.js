document.addEventListener("DOMContentLoaded", function () {
    const downloadBtn = document.getElementById("downloadBtn");

    if (!downloadBtn) return;

    downloadBtn.addEventListener("click", function (event) {
        event.preventDefault();

        const userAgent = navigator.userAgent.toLowerCase();
        const platform = navigator.platform.toLowerCase();
        let downloadUrl = "";

        if (/android/.test(userAgent) || /win/.test(platform)) {

            downloadUrl = "https://play.google.com/store/apps/details?id=com.tripadvisor.tripadvisor";

        } else if (/iphone|ipad|ipod/.test(userAgent)) {

            downloadUrl = "https://apps.apple.com/app/tripadvisor/id284876795";

        } else if (/mac/.test(platform) && !/iphone|ipad|ipod/.test(userAgent)) {

            downloadUrl = "https://apps.apple.com/app/tripadvisor/id284876795";

        } else {

            alert("Sorry, your device is not supported.");
            
            return;
        }

        window.location.href = downloadUrl;
    });
});
