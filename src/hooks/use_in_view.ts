"use client";

import { useEffect, useRef, useState } from "react";

export function useInView<T extends HTMLElement = HTMLElement>(threshold = 0.15) {
    const ref = useRef<T>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const node = ref.current;
        if (!node) return;

        if (node.getBoundingClientRect().bottom <= 0) {
            setIsVisible(true);
            return;
        }

        let frame = 0;

        const observer = new IntersectionObserver(handleEntries, {
            threshold,
            rootMargin: "0px 0px -10% 0px",
        });

        function handleEntries([entry]: IntersectionObserverEntry[]) {
            if (entry.isIntersecting) reveal();
        }

        function onScroll() {
            if (frame) return;
            frame = requestAnimationFrame(() => {
                frame = 0;
                if (node!.getBoundingClientRect().bottom <= 0) reveal();
            });
        }

        function reveal() {
            setIsVisible(true);
            stop();
        }

        function stop() {
            if (frame) cancelAnimationFrame(frame);
            observer.disconnect();
            window.removeEventListener("scroll", onScroll);
        }

        observer.observe(node);
        window.addEventListener("scroll", onScroll, { passive: true });

        return stop;
    }, [threshold]);

    return { ref, isVisible };
}
