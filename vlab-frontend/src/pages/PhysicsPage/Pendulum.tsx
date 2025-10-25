import React from "react";

interface PendulumProps{
    length: number; 
    period: number;
}

const Pendulum: React.FC<PendulumProps> = ({length,period}) => {
    const animationStyle = {
        animationDuration: `${period}s`,
    };
    const stringStyle = {
        height: `${length}px`,
    };
    return(
        <div className="pendulum-container w-full pt-10" style={animationStyle}>
            <div className="h-2 w-4 bg-gray-700 mx-auto rounded-b-sm"></div>
            <div className="pendulum-string" style={stringStyle}></div>
            <div className="pendulum-bob"></div>
        </div>
    );
};

export default Pendulum;