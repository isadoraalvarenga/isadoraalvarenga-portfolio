import { useEffect, useRef } from 'react';
import { useComputedColorScheme } from '@mantine/core';
import { loadRecaptcha } from '../lib/recaptcha.js';
import RECAPTCHA_CONFIG from '../config/recaptchaConfig.js';

export default function ReCaptcha({ lang, resetKey, onToken, onLoadError }) {
  const boxRef = useRef(null);
  const widgetRef = useRef(null);
  const scheme = useComputedColorScheme('dark');

  useEffect(() => {
    if (!RECAPTCHA_CONFIG.SITE_KEY) return undefined;
    let cancelled = false;

    loadRecaptcha(lang)
      .then((grecaptcha) => {
        if (cancelled || !boxRef.current) return;

        const el = document.createElement('div');
        boxRef.current.replaceChildren(el);
        widgetRef.current = grecaptcha.render(el, {
          sitekey: RECAPTCHA_CONFIG.SITE_KEY,
          theme: scheme === 'dark' ? 'dark' : 'light',
          size: window.innerWidth < 400 ? 'compact' : 'normal',
          callback: (token) => onToken(token),
          'expired-callback': () => onToken(null),
          'error-callback': () => onToken(null),
        });
      })
      .catch(() => onLoadError && onLoadError());

    return () => {
      cancelled = true;
    };
    // Redesenha só quando o tema muda
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scheme]);

  useEffect(() => {
    if (resetKey > 0 && widgetRef.current !== null && window.grecaptcha) {
      window.grecaptcha.reset(widgetRef.current);
    }
  }, [resetKey]);

  return <div ref={boxRef} className="captcha-box" />;
}