import React, { useState, useEffect } from 'react';

function BulletAction({ type, startPosition, isMoving }) {
    const bulletHorImg = `/moves/bullet_h.png`;
    const bulletVerImg = `/moves/bullet_v.png`;
    const [position, setPosition] = useState(startPosition);
    const maxX = 300; // width of background
    const maxY = 300;  // height of background

    useEffect(() => {
        let interval;
        if (isMoving) {
            interval = setInterval(() => {
                setPosition(prevPos => {
                    const newX = prevPos.x + (type === 'horizontal' ? 10 : 0);
                    const newY = prevPos.y + (type === 'vertical' ? 10 : 0);

                    // Ensure the bullet stays within the background's boundaries
                    return {
                        x: Math.min(newX, maxX - 50), // 50 is bullet width
                        y: Math.min(newY, maxY - 50)  // 50 is bullet height
                    };
                });
            }, 100);
        }
        return () => clearInterval(interval);
    }, [isMoving, type]);

    return (
        <img 
            src={type === 'horizontal' ? bulletHorImg : bulletVerImg}
            alt="Bullet"
            style={{
                position: 'absolute',
                width: '40px',
                height: '80px',
                top: `${position.y}px`,
                left: `${position.x}px`,
                transition: 'top 0.1s linear, left 0.1s linear'
            }}
        />
    );
}

export default BulletAction;
