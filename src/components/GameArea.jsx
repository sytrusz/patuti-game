import React, { useState } from 'react';
import PatutiCharacter from './PatutiCharacter';
import BulletAction from './BulletAction';

function GameArea() {
    const backgroundImg = `/moves/background.png`;
    const [isBulletMoving, setIsBulletMoving] = useState(false);

    const startBulletMovement = () => {
        setIsBulletMoving(true);
    };

    return (
        <div style={{
            position: 'relative',
            width: '1300px',
            height: '650px',
            backgroundImage: `url(${backgroundImg})`,
            backgroundSize: 'cover',
            overflow: 'hidden'
        }}>
            {/* Render Character */}
            <PatutiCharacter />

            {/* Render Bullets */}
            <BulletAction type="horizontal" startPosition={{ x: 0, y: 200 }} isMoving={isBulletMoving} />
            <BulletAction type="vertical" startPosition={{ x: 300, y: 0 }} isMoving={isBulletMoving} />

            {/* Start button */}
            <button onClick={startBulletMovement}>Start Game</button>
        </div>
    );
}

export default GameArea;
