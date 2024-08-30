const scripts = [
    'https://z.is-a.dev/hosted-content/js/particles.js',
    'https://z.is-a.dev/hosted-content/js/config.js',
    'https://kit.fontawesome.com/dbecdae410.js'
];
function loadScript(src, callback) {
    const script = document.createElement('script');
    script.src = src;
    script.onload = callback;
    script.onerror = () => console.error(`Erreur de chargement du script : ${src}`);
    document.head.appendChild(script);
}

function loadScriptsSequentially(scripts) {
    if (scripts.length === 0) return;
    const [firstScript, ...remainingScripts] = scripts;
    loadScript(firstScript, () => loadScriptsSequentially(remainingScripts));
}

loadScriptsSequentially(scripts);