import { KeyframeOptions, animate, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type Props = {
	to: number;
	animationOptions?: KeyframeOptions;
};

const AnimatedCounter = ({ to, animationOptions }: Props) => {
	const ref = useRef<HTMLSpanElement>(null);
	const inView = useInView(ref, { once: true });
	const [prevFrom, setPrevFrom] = useState(0);

	useEffect(() => {
		const element = ref.current;

		if (!element) return;
		if (!inView) return;

		// Set initial value
		element.textContent = String(prevFrom);

		// If reduced motion is enabled in system's preferences
		if (window.matchMedia("(prefers-reduced-motion)").matches) {
			element.textContent = String(to);
			return;
		}

		const controls = animate(prevFrom, to, {
			duration: 5,
			ease: "easeOut",
			...animationOptions,
			onUpdate(value) {
				element.textContent = value.toFixed(0);
			},
		});

		// Cancel on unmount
		return () => {
			setPrevFrom(to);
			controls.stop();
		};
	}, [ref, inView, to]);

	return <span className='text-colors' ref={ref} />;
};

export default AnimatedCounter;
