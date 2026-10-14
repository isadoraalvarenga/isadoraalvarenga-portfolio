let loadingPromise = null;

export function loadRecaptcha(lang = 'pt') {
    if (window.grecaptcha && window.grecaptcha.render) return Promise.resolve(window.grecaptcha);
    if (loadingPromise) return loadingPromise;

    loadingPromise = new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = `https://www.google.com/recaptcha/api.js?render=explicit&hl=${lang === 'pt' ? 'pt-BR' : 'en'}`;
    script.async = true;
    script.defer = true;
    script.onload = () => window.grecaptcha.ready(() => resolve(window.grecaptcha));
    script.onerror = () => {
        loadingPromise = null; 
        reject(new Error('Falha ao carregar o reCAPTCHA'));
    };
    document.head.appendChild(script);
    });

    return loadingPromise;
}