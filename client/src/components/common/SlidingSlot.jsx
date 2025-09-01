import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

const targetX = (activeIdx, selfIdx) => {
    if (activeIdx === selfIdx) return "0%";
    return selfIdx === 0 ? `-104%` : "104%"; 
};

const layerBase =
    "absolute inset-0 w-full h-full transform-gpu bg-white";

const Layer = ({ activeIdx, selfIdx, children, reduceMotion }) => (
    <motion.div
        className={layerBase}
        initial={false}
        animate={{ x: targetX(activeIdx, selfIdx) }}
        transition={
            reduceMotion
                ? { duration: 0 }
                : { type: "tween", ease: "easeInOut", duration: 500 / 1000 }
        }
        style={{
            willChange: "transform",
            pointerEvents: activeIdx === selfIdx ? "auto" : "none",
            zIndex: activeIdx === selfIdx ? 1 : 0,
        }}
        aria-hidden={activeIdx !== selfIdx}
    >
        {children}
    </motion.div>
);

export default function SlidingSlot({
    intervalMs,
    radiusClass = "rounded-[50px]",
    frameClass = "border border-neutral-300 shadow-[0_0_0.5em_rgba(0,0,0,0.38)] bg-white",
    children,
}) {
    const [idx, setIdx] = useState(0);
    const reduceMotion = useReducedMotion();

    useEffect(() => {
        const id = setInterval(() => setIdx(i => 1 - i), intervalMs);
        return () => clearInterval(id);
    }, [intervalMs]);

    const [first, second] = Array.isArray(children) ? children : [children];

    return (
        <div className={`relative w-full h-full ${radiusClass} ${frameClass}`}>
            <div
                className={`absolute inset-0 overflow-hidden ${radiusClass}`}
                style={{ clipPath: `inset(0 round ${radiusClass.includes("[") ? radiusClass.match(/\[(.+?)\]/)?.[1] : "1rem"})` }}
            >
                <Layer activeIdx={idx} selfIdx={0} reduceMotion={reduceMotion}>
                    {first}
                </Layer>
                <Layer activeIdx={idx} selfIdx={1} reduceMotion={reduceMotion}>
                    {second}
                </Layer>
            </div>
        </div>
    );
}
