import { useState, type MouseEvent } from "react";

export function useCardTilt() {
    const [rotation, setRotation] = useState({ x: 0, y: 0 });

    const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
        const rect = event.currentTarget.getBoundingClientRect();

        const x = (event.clientX - rect.left) / rect.width;
        const y = (event.clientY - rect.top) / rect.height;

        setRotation({
            x: (y - 0.5) * 24,
            y: (0.5 - x) * 24
        });
    };

    const handleMouseLeave = () => {
        setRotation({ x: 0, y: 0 });
    };

    return {
        rotation,
        handleMouseMove,
        handleMouseLeave
    };
}