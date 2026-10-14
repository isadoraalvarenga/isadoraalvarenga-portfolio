import { useState } from 'react';
import { IconPhoto } from '@tabler/icons-react';


export default function ProfilePhoto() {
    const [failed, setFailed] = useState(false);

    return (
        <div className="photo-wrap">
        <div className="photo-frame">
            {failed ? (
            <div className="photo-missing"><IconPhoto size={36} /></div>
            ) : (
            <img src="/foto-isadora.jpg" alt="Isadora Alvarenga" onError={() => setFailed(true)} />
            )}
        </div>
        <span className="photo-tag">φ · 1 / 1.618</span>
        </div>
    );
}