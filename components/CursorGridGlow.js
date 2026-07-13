"use client";

import { useEffect, useRef } from "react";

const SPACING = 32;
const RADIUS = 145;
const MAX_GLOW = 1;
const DECAY = 0.965;

function drawDot(ctx, x, y, alpha) {
  if (alpha < 0.012) return;

  ctx.fillStyle = `rgba(52, 211, 153, ${alpha * 0.4})`;
  ctx.beginPath();
  ctx.arc(x, y, 6.5, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = `rgba(52, 211, 153, ${alpha * 1})`;
  ctx.beginPath();
  ctx.arc(x, y, 2.5, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = `rgba(167, 243, 208, ${alpha * 0.9})`;
  ctx.beginPath();
  ctx.arc(x, y, 1.4, 0, Math.PI * 2);
  ctx.fill();
}

export default function CursorGridGlow() {
  const canvasRef = useRef(null);
  const mouse = useRef({ x: -1000, y: -1000 });
  const trail = useRef(new Map());
  const frame = useRef(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    if (prefersReduced || isTouch) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const stampTrail = (mx, my, w, h) => {
      const colStart = Math.floor((mx - RADIUS) / SPACING);
      const colEnd = Math.ceil((mx + RADIUS) / SPACING);
      const rowStart = Math.floor((my - RADIUS) / SPACING);
      const rowEnd = Math.ceil((my + RADIUS) / SPACING);

      for (let col = colStart; col <= colEnd; col++) {
        for (let row = rowStart; row <= rowEnd; row++) {
          const x = col * SPACING;
          const y = row * SPACING;
          if (x < 0 || y < 0 || x > w || y > h) continue;

          const dist = Math.hypot(x - mx, y - my);
          if (dist < RADIUS) {
            const t = 1 - dist / RADIUS;
            const intensity = Math.pow(t, 1.3);
            const key = `${col},${row}`;
            const existing = trail.current.get(key) ?? 0;
            trail.current.set(key, Math.max(existing, intensity));
          }
        }
      }
    };

    const onMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    const onLeave = () => {
      mouse.current.x = -1000;
      mouse.current.y = -1000;
    };

    const draw = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      const { x: mx, y: my } = mouse.current;

      ctx.clearRect(0, 0, w, h);

      if (mx >= 0) {
        stampTrail(mx, my, w, h);
      }

      for (const [key, intensity] of trail.current) {
        const faded = intensity * DECAY;

        if (faded < 0.015) {
          trail.current.delete(key);
          continue;
        }

        trail.current.set(key, faded);

        const [col, row] = key.split(",").map(Number);
        drawDot(ctx, col * SPACING, row * SPACING, faded * MAX_GLOW);
      }

      frame.current = requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseleave", onLeave);
    frame.current = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
      if (frame.current) cancelAnimationFrame(frame.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[1]"
    />
  );
}
