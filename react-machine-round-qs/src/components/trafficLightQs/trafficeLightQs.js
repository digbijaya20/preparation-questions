
import React, { useState } from 'react';

function TrafficLightComponent() {
    const colors = {
        red: 'red',
        yellow: 'yellow',
        green: 'green',
    };

    const time = {
        red: 3000,
        yellow: 1000,
        green: 5000,
    };
    const [currentColor, setCurrentColor] = useState(colors.red);
    const colorArray = [colors.red, colors.yellow, colors.green];
    const [isRunning, setIsRunning] = useState(false);
    const startTrafficLight = () => {
        let currentIndex = 0;
        
        const timeArray = [time.red, time.yellow, time.green];
        const changeColor = () =>{
            console.log(currentIndex);
            setCurrentColor(colorArray[currentIndex]);
            const nextIndex = (currentIndex + 1) % colorArray.length; // Cycle through colors
            setTimeout(() => {
                currentIndex = nextIndex;
                changeColor();
            }, timeArray[currentIndex]);
        }
        changeColor();
    }

    return (
        <div>
            {colorArray.map((color) => (
                <div
                    key={color}
                    style={{
                        backgroundColor: currentColor === color ? color : 'grey',
                        width: '100px',
                        height: '100px',
                        margin: '10px',
                        borderRadius: '50%',
                    }}
                ></div>
            ))}
            <button onClick={startTrafficLight}>Start</button>
        </div>
    );
}
export default TrafficLightComponent;