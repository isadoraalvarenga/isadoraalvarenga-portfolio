import emailjs from '@emailjs/browser';
import EMAILJS_CONFIG from '../config/emailjsConfig.js';


const OPTIONS = { publicKey: EMAILJS_CONFIG.PUBLIC_KEY, blockHeadless: true };

export async function sendContactEmail({ name, email, message, lang = 'pt', captchaToken }) {
    const time = new Date().toLocaleString();

    await emailjs.send(
    EMAILJS_CONFIG.SERVICE_ID,
    EMAILJS_CONFIG.TEMPLATE_ID_FOR_SENDER,
    {
    name,
    email,
    message,
    time,
    title: lang === 'pt' ? 'Recebi sua mensagem!' : 'I received your message!',

    ...(captchaToken ? { 'g-recaptcha-response': captchaToken } : {}),
    },
    OPTIONS
    );

    await emailjs.send(
    EMAILJS_CONFIG.SERVICE_ID,
    EMAILJS_CONFIG.TEMPLATE_ID_FOR_ME,
    { name, email, message, time, title: `Nova mensagem de: ${name}` },
    OPTIONS
    );
}