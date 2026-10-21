import { useEffect, useRef } from "react";

export function useSkillsReveal() {
    const skillsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const categories = skillsRef.current?.querySelectorAll(".skill-category");

        if (!categories) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("is-visible");
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.15
            }
        );

        categories.forEach((category) => observer.observe(category));

        return () => observer.disconnect();
    }, []);

    return skillsRef;
}