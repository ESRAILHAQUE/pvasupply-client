"use client";

import { useEffect, useRef } from "react";

export default function ParticlesBackground({
  density = 90,
  color = "rgba(255,255,255,0.28)",
  lineColor = "rgba(255,255,255,0.14)",
  particleSize = 1.8,
  hoverEffect = true,
}) {
  const canvasRef = useRef(null);
  const particlesRef = useRef([]);
  const animationRef = useRef(0);
  const resizeObserverRef = useRef(null);
  const mouseRef = useRef({ x: -9999, y: -9999, active: false });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const parent = canvas.parentElement;

    const dpr = window.devicePixelRatio || 1;
    const setSize = () => {
      canvas.width = parent.clientWidth * dpr;
      canvas.height = parent.clientHeight * dpr;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr); // draw in CSS pixels
    };

    setSize();

    const areaCss = parent.clientWidth * parent.clientHeight;
    const numParticles = Math.max(
      20,
      Math.floor(areaCss / (9000 / (density / 50)))
    );

    particlesRef.current = Array.from({ length: numParticles }).map(() => ({
      x: Math.random() * parent.clientWidth,
      y: Math.random() * parent.clientHeight,
      vx: (Math.random() - 0.5) * 0.6,
      vy: (Math.random() - 0.5) * 0.6,
      r: (Math.random() * 0.9 + 0.7) * particleSize,
    }));

    const draw = () => {
      const width = parent.clientWidth;
      const height = parent.clientHeight;
      ctx.clearRect(0, 0, width, height);

      // Draw particles
      ctx.fillStyle = color;
      for (const p of particlesRef.current) {
        // simple movement
        p.x += p.vx;
        p.y += p.vy;

        // bounce
        if (p.x <= 0 || p.x >= width) p.vx *= -1;
        if (p.y <= 0 || p.y >= height) p.vy *= -1;

        // hover interaction (repel slightly)
        if (hoverEffect && mouseRef.current.active) {
          const dx = p.x - mouseRef.current.x;
          const dy = p.y - mouseRef.current.y;
          const dist = Math.hypot(dx, dy);
          const influence = 120; // px
          if (dist < influence && dist > 0.001) {
            const force = (influence - dist) / influence; // 0..1
            p.vx += (dx / dist) * force * 0.5;
            p.vy += (dy / dist) * force * 0.5;
          }
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }

      // Draw lines between close particles and to mouse
      ctx.strokeStyle = lineColor;
      ctx.lineWidth = 1;
      const threshold = 150; // px
      for (let i = 0; i < particlesRef.current.length; i++) {
        for (let j = i + 1; j < particlesRef.current.length; j++) {
          const a = particlesRef.current[i];
          const b = particlesRef.current[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.hypot(dx, dy);
          if (dist < threshold) {
            ctx.globalAlpha = 1 - dist / threshold;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
            ctx.globalAlpha = 1;
          }
        }

        // line to mouse
        if (hoverEffect && mouseRef.current.active) {
          const a = particlesRef.current[i];
          const dxm = a.x - mouseRef.current.x;
          const dym = a.y - mouseRef.current.y;
          const dm = Math.hypot(dxm, dym);
          const mThreshold = 160;
          if (dm < mThreshold) {
            ctx.globalAlpha = 1 - dm / mThreshold;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(mouseRef.current.x, mouseRef.current.y);
            ctx.stroke();
            ctx.globalAlpha = 1;
          }
        }
      }

      animationRef.current = requestAnimationFrame(draw);
    };

    draw();

    const ro = new ResizeObserver(() => {
      cancelAnimationFrame(animationRef.current);
      setSize();
      draw();
    });
    resizeObserverRef.current = ro;
    ro.observe(parent);

    const updateMouse = (clientX, clientY) => {
      const rect = parent.getBoundingClientRect();
      mouseRef.current.x = clientX - rect.left; // CSS px
      mouseRef.current.y = clientY - rect.top; // CSS px
      mouseRef.current.active = true;
    };

    const onMouseMove = (e) => updateMouse(e.clientX, e.clientY);
    const onMouseLeave = () => {
      mouseRef.current.active = false;
      mouseRef.current.x = -9999;
      mouseRef.current.y = -9999;
    };
    const onTouchMove = (e) => {
      if (e.touches && e.touches.length > 0) {
        const t = e.touches[0];
        updateMouse(t.clientX, t.clientY);
      }
    };
    const onTouchEnd = onMouseLeave;

    parent.addEventListener("mousemove", onMouseMove);
    parent.addEventListener("mouseleave", onMouseLeave);
    parent.addEventListener("touchmove", onTouchMove, { passive: true });
    parent.addEventListener("touchend", onTouchEnd);

    return () => {
      cancelAnimationFrame(animationRef.current);
      if (resizeObserverRef.current) resizeObserverRef.current.disconnect();
      parent.removeEventListener("mousemove", onMouseMove);
      parent.removeEventListener("mouseleave", onMouseLeave);
      parent.removeEventListener("touchmove", onTouchMove);
      parent.removeEventListener("touchend", onTouchEnd);
    };
  }, [density, color, lineColor, particleSize, hoverEffect]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute inset-0 w-full h-full z-0 pointer-events-none"
    />
  );
}
