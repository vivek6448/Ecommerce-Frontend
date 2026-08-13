import { gsap } from "gsap";
import { useEffect, useRef, useState } from "react";

const DIVIDER_START = [107, 114, 128]; // #6b7280
const DIVIDER_END = [34, 197, 94]; // #22c55e

function dividerColorAt(percent) {
  const t = Math.min(1, Math.max(0, percent / 100));
  const [r, g, b] = DIVIDER_START.map((start, i) =>
    Math.round(start + (DIVIDER_END[i] - start) * t)
  );
  return `rgb(${r}, ${g}, ${b})`;
}

export default function Preloader({ onDone }) {
  // Read synchronously so reduced-motion users never see a single frame
  // of the preloader before it's skipped.
  const [skip] = useState(
    () => typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
  const [visible, setVisible] = useState(!skip);
  const [display, setDisplay] = useState(0);
  const overlayRef = useRef(null);
  const headingRef = useRef(null);

  // onDone is a fresh function from the parent on every render — a ref lets
  // this effect always call the latest version without re-running on every
  // parent re-render (which would restart the load animation).
  const onDoneRef = useRef(onDone);
  useEffect(() => {
    onDoneRef.current = onDone;
  }, [onDone]);

  useEffect(() => {
    if (skip) {
      onDoneRef.current();
      return;
    }

    const count = { value: 0 };
    let cancelled = false;

    function fadeOutAndUnmount() {
      if (cancelled) return;
      gsap.to(overlayRef.current, {
        opacity: 0,
        duration: 0.5,
        ease: "power1.inOut",
        onComplete: () => {
          if (cancelled) return;
          setVisible(false);
          onDoneRef.current();
        },
      });
    }

    function finish() {
      if (cancelled) return;
      gsap.to(count, {
        value: 100,
        duration: 1,
        ease: "power2.out",
        onUpdate: () => setDisplay(Math.round(count.value)),
        onComplete: () => {
          if (cancelled) return;
          window.setTimeout(() => {
            if (cancelled) return;
            fadeOutAndUnmount();
          }, 900);
        },
      });
    }

    // Ties the visual count to real page-load state: ramp toward (but not
    // to) 100 while waiting on `load`, then snap the rest of the way once
    // the page is actually ready — never a fixed timer disconnected from reality.
    const alreadyReady = document.readyState === "complete";
    const ramp = gsap.to(count, {
      value: alreadyReady ? 96 : 90,
      duration: alreadyReady ? 1.2 : 4.2,
      ease: "expo.out",
      onUpdate: () => setDisplay(Math.round(count.value)),
      onComplete: () => {
        if (alreadyReady) finish();
      },
    });

    if (!alreadyReady) {
      window.addEventListener("load", finish, { once: true });
    }

    return () => {
      cancelled = true;
      ramp.kill();
      window.removeEventListener("load", finish);
    };
  }, [skip]);

  useEffect(() => {
    if (skip) return;
    document.body.style.overflow = visible ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [visible, skip]);

  useEffect(() => {
    if (skip || !headingRef.current) return;
    gsap.fromTo(
      headingRef.current,
      { opacity: 0, y: -10 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }
    );
  }, [skip]);

  if (skip || !visible) return null;

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black"
    >
      <h1
        ref={headingRef}
        className="mb-4 text-3xl sm:text-5xl md:text-6xl font-semibold tracking-wide text-gray-300"
      >
        Welcome to <span className="text-green-500">Zaptro</span>
      </h1>

      <span className="font-bold text-6xl sm:text-7xl md:text-8xl tabular-nums text-white">
        {display}
      </span>
      <span
        className="mt-6 h-px w-40 sm:w-56"
        style={{ backgroundColor: dividerColorAt(display) }}
      />
    </div>
  );
}
