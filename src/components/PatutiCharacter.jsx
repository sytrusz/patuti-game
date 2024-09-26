import React, { useState, useEffect } from 'react';

function PatutiCharacter() {
    const idleImg = `/moves/idle-1.png`;
    const dockImg = '/moves/dock-1.png';
    const jumpImg = '/moves/jump-1.png';
    const leftImg = '/moves/left-1.png';
    const rightImg = '/moves/right-1.png';

    const [position, setPosition] = useState({ x: 100, y: 100 });
    const [currentImg, setCurrentImg] = useState(idleImg);

    // Function to handle movement and change image
    const handleMove = (direction) => {
        setPosition(prevPos => {
            switch (direction) {
                case 'up':
                    setCurrentImg(jumpImg);
                    return { ...prevPos, y: prevPos.y - 20 };
                case 'down':
                    setCurrentImg(dockImg);
                    return { ...prevPos, y: prevPos.y + 20 };
                case 'left':
                    setCurrentImg(leftImg);
                    return { ...prevPos, x: prevPos.x - 20 };
                case 'right':
                    setCurrentImg(rightImg);
                    return { ...prevPos, x: prevPos.x + 20 };
                default:
                    return prevPos;
            }
        });
    };

    // Add event listener for keypresses
    useEffect(() => {
        const handleKeyPress = (event) => {
            switch (event.key) {
                case 'ArrowUp':
                    handleMove('up');
                    break;
                case 'ArrowDown':
                    handleMove('down');
                    break;
                case 'ArrowLeft':
                    handleMove('left');
                    break;
                case 'ArrowRight':
                    handleMove('right');
                    break;
                default:
                    setCurrentImg(idleImg);
            }
        };

        window.addEventListener('keydown', handleKeyPress);

        return () => {
            window.removeEventListener('keydown', handleKeyPress);
        };
    }, []);

    return (
        <div>
            <img 
                src={currentImg} 
                alt="Character"
                style={{
                    position: 'absolute',
                    width: '150px',
                    height: '150px',
                    top: `${position.y}px`,
                    left: `${position.x}px`,
                    transition: 'top 0.1s linear, left 0.1s linear'
                }}
            />
        </div>
    );
}

export default PatutiCharacter;
