import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

export const useHeroAnimations = () => {
  const imageRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLHeadingElement>(null);
  const timeline = useRef<gsap.core.Timeline>(null);

  useGSAP(() => {
    if (!imageRef.current || !titleRef.current || !subtitleRef.current) return;

    timeline.current = gsap.timeline();

    timeline.current
      .to(imageRef.current, {
        clipPath: "inset(0% 0% 0% 0%)",
        duration: 1.75,
        ease: "power2.out",
        stagger: 0.3,
      })
      .fromTo(
        [titleRef.current, subtitleRef.current],
        {
          autoAlpha: 0,
          y: 20,
          duration: 2,
        },
        {
          autoAlpha: 1,
          y: 0,
          duration: 2,
          ease: "power2.out",
          stagger: 0.3,
        },
      );
  }, []);

  return {
    imageRef,
    titleRef,
    subtitleRef,
  };
};
