document.addEventListener("DOMContentLoaded", function() {
    function getQueryParams() {
        const params = {};
        const queryString = window.location.search.substring(1);
        const regex = /([^&=]+)=([^&]*)/g;
        let match;
        while (match = regex.exec(queryString)) {
            params[decodeURIComponent(match[1])] = decodeURIComponent(match[2]);
        }
        return params;
    }

    const redirections = {
        'youtube': 'https://youtube.com/@SkyExploreWasTaken?sub_confirmation=1',
        'twitch': 'https://twitch.tv/skyexplorewastaken',
        'discord': 'https://dsc.gg/sewt-server',
        'github': 'https://github.com/SkyExploreWasTaken',
        'none': '?link=none'
    };

    const defaultRedirection = 'https://sewt.is-a.dev';

    const queryParams = getQueryParams();

    // Determine the target URL
    const targetUrl = queryParams.link && redirections[queryParams.link] ? redirections[queryParams.link] : defaultRedirection;

    // Update the 'here' link
    const hereElement = document.getElementById('here');
    if (hereElement) {
        hereElement.href = targetUrl;
    }

    // Redirect after 2 seconds
    setTimeout(function() {
        window.location.href = targetUrl;
    }, 2000);
});