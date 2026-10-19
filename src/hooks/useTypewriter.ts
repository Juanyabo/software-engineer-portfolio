import { useEffect, useState } from "react";

const words = [
    "Software Development",
    "XR Development",
    "Game Development",
    "Web Development",
];

export function useTypewriter() {
    const [wordIndex, setWordIndex] = useState(0);
    const [text, setText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentWord = words[wordIndex];

        const timeout = setTimeout(() => {
            if (!isDeleting) {
                if (text.length < currentWord.length) {
                    setText(currentWord.slice(0, text.length + 1));
                } else {
                    setIsDeleting(true);
                }
            } else {
                if (text.length > 0) {
                    setText(currentWord.slice(0, text.length - 1));
                } else {
                    setIsDeleting(false);
                    setWordIndex((prev) => (prev + 1) % words.length);
                }
            }
        }, text === currentWord && !isDeleting ? 1500 : isDeleting ? 50 : 100);

        return () => clearTimeout(timeout);
    }, [text, isDeleting, wordIndex]);

    return text;
}