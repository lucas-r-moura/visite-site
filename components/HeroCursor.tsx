"use client";

import { useEffect, useRef } from "react";

export function HeroCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const hero = cursor?.closest<HTMLElement>(".hero");
    const heroArt = hero?.querySelector<HTMLElement>(".hero-art");

    if (!cursor || !hero || !heroArt) return;

    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!finePointer || reducedMotion) return;

    let animationFrame = 0;

    const moveCursor = (event: PointerEvent) => {
      cursor.classList.add("is-visible");
      cancelAnimationFrame(animationFrame);
      animationFrame = requestAnimationFrame(() => {
        cursor.style.setProperty("--cursor-x", `${event.clientX}px`);
        cursor.style.setProperty("--cursor-y", `${event.clientY}px`);
      });
    };

    const showCursor = () => cursor.classList.add("is-visible");
    const hideCursor = () => cursor.classList.remove("is-visible", "is-contextual", "is-action", "is-pressed");
    const showContext = () => cursor.classList.add("is-contextual");
    const hideContext = () => cursor.classList.remove("is-contextual");
    const pressCursor = () => cursor.classList.add("is-pressed");
    const releaseCursor = () => cursor.classList.remove("is-pressed");
    const hideOnScroll = () => hideCursor();

    const interactiveElements = hero.querySelectorAll<HTMLElement>("a, button");
    const showAction = () => cursor.classList.add("is-action");
    const hideAction = () => cursor.classList.remove("is-action");

    hero.classList.add("cursor-enabled");
    hero.addEventListener("pointerenter", showCursor);
    hero.addEventListener("pointerleave", hideCursor);
    hero.addEventListener("pointermove", moveCursor);
    hero.addEventListener("pointerdown", pressCursor);
    window.addEventListener("pointerup", releaseCursor);
    window.addEventListener("scroll", hideOnScroll, { passive: true });
    heroArt.addEventListener("pointerenter", showContext);
    heroArt.addEventListener("pointerleave", hideContext);
    interactiveElements.forEach((element) => {
      element.addEventListener("pointerenter", showAction);
      element.addEventListener("pointerleave", hideAction);
    });

    return () => {
      cancelAnimationFrame(animationFrame);
      hero.classList.remove("cursor-enabled");
      hero.removeEventListener("pointerenter", showCursor);
      hero.removeEventListener("pointerleave", hideCursor);
      hero.removeEventListener("pointermove", moveCursor);
      hero.removeEventListener("pointerdown", pressCursor);
      window.removeEventListener("pointerup", releaseCursor);
      window.removeEventListener("scroll", hideOnScroll);
      heroArt.removeEventListener("pointerenter", showContext);
      heroArt.removeEventListener("pointerleave", hideContext);
      interactiveElements.forEach((element) => {
        element.removeEventListener("pointerenter", showAction);
        element.removeEventListener("pointerleave", hideAction);
      });
    };
  }, []);

  return (
    <div className="brand-cursor" ref={cursorRef} aria-hidden="true">
      <span>CONEXÕES ESTRATÉGICAS</span>
    </div>
  );
}
