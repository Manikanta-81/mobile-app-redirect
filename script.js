document.addEventListener("DOMContentLoaded", function () {
    const downloadBtn = document.getElementById("downloadBtn");

    if (!downloadBtn) return;

    downloadBtn.addEventListener("click", function (event) {
        event.preventDefault();

        const userAgent = navigator.userAgent.toLowerCase();
        let downloadUrl = "";

        if (userAgent.includes("android")) {
            downloadUrl = "https://play.google.com/store/apps/details?id=com.tripadvisor.tripadvisor";
        } else if (userAgent.includes("iphone") || userAgent.includes("ipad") || userAgent.includes("mac")) {
            downloadUrl = "https://apps.apple.com/app/tripadvisor/id284876795";  // Fixed the URL
        } else {
            alert("Sorry, your device is not supported.");
            return;
        }

        window.location.href = downloadUrl;
    });
});
