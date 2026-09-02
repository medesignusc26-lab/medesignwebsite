import { useEffect, useRef } from 'react';
import { createNoise3D } from 'simplex-noise';

// Ambient "aurora" background: soft vertical light rays that cluster and
// drift, evoking the northern-lights demo in Codrops' Ambient Canvas
// Backgrounds by Sean Free (https://github.com/codrops/AmbientCanvasBackgrounds)
// — retuned to a red/black palette matching the site, and reworked to
// composite transparently over the page instead of painting its own opaque
// background, since it layers on top of the existing gradient here.

const RAY_COUNT = 220;
const RAY_PROP_COUNT = 8;
const RAY_PROPS_LENGTH = RAY_COUNT * RAY_PROP_COUNT;
const BASE_LENGTH = 200;
const RANGE_LENGTH = 200;
const BASE_SPEED = 0.05;
const RANGE_SPEED = 0.1;
const BASE_WIDTH = 8;
const RANGE_WIDTH = 16;
const BASE_HUE = 350; // tuned to the site's crimson (#9d2235)
const RANGE_HUE = 15;
const BASE_TTL = 50;
const RANGE_TTL = 100;
const NOISE_STRENGTH = 100;
const XOFF = 0.0015;
const YOFF = 0.0015;
const ZOFF = 0.0015;

const rand = (n: number) => n * Math.random();
const fadeInOut = (t: number, m: number) => {
  const hm = 0.5 * m;
  return Math.abs(((t + hm) % m) - hm) / hm;
};

export function AuroraBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const canvas = canvasRef.current;
    const ctxB = canvas?.getContext('2d');
    const buffer = document.createElement('canvas');
    const ctxA = buffer.getContext('2d');
    if (!canvas || !ctxB || !ctxA) return;

    const noise3D = createNoise3D();

    let width = 0;
    let height = 0;
    let centerY = 0;
    let tick = 0;
    let rafId = 0;
    const rayProps = new Float32Array(RAY_PROPS_LENGTH);

    function initRay(i: number) {
      const length = BASE_LENGTH + rand(RANGE_LENGTH);
      const x = rand(width);
      let y1 = centerY + NOISE_STRENGTH;
      let y2 = centerY + NOISE_STRENGTH - length;
      const n = noise3D(x * XOFF, y1 * YOFF, tick * ZOFF) * NOISE_STRENGTH;
      y1 += n;
      y2 += n;
      const life = 0;
      const ttl = BASE_TTL + rand(RANGE_TTL);
      const w = BASE_WIDTH + rand(RANGE_WIDTH);
      const speed = BASE_SPEED + rand(RANGE_SPEED) * (Math.round(rand(1)) ? 1 : -1);
      const hue = BASE_HUE + rand(RANGE_HUE);
      rayProps.set([x, y1, y2, life, ttl, w, speed, hue], i);
    }

    function initRays() {
      tick = 0;
      for (let i = 0; i < RAY_PROPS_LENGTH; i += RAY_PROP_COUNT) {
        initRay(i);
      }
    }

    function drawRay(x: number, y1: number, y2: number, life: number, ttl: number, w: number, hue: number) {
      const gradient = ctxA.createLinearGradient(x, y1, x, y2);
      gradient.addColorStop(0, `hsla(${hue}, 90%, 45%, 0)`);
      gradient.addColorStop(0.5, `hsla(${hue}, 90%, 45%, ${fadeInOut(life, ttl) * 0.5})`);
      gradient.addColorStop(1, `hsla(${hue}, 90%, 45%, 0)`);

      ctxA.save();
      ctxA.beginPath();
      ctxA.strokeStyle = gradient;
      ctxA.lineWidth = w;
      ctxA.moveTo(x, y1);
      ctxA.lineTo(x, y2);
      ctxA.stroke();
      ctxA.closePath();
      ctxA.restore();
    }

    function updateRay(i: number) {
      const i2 = i + 1, i3 = i + 2, i4 = i + 3, i5 = i + 4, i6 = i + 5, i7 = i + 6, i8 = i + 7;
      const x = rayProps[i];
      const y1 = rayProps[i2];
      const y2 = rayProps[i3];
      let life = rayProps[i4];
      const ttl = rayProps[i5];
      const w = rayProps[i6];
      const speed = rayProps[i7];
      const hue = rayProps[i8];

      drawRay(x, y1, y2, life, ttl, w, hue);

      const nextX = x + speed;
      life++;

      rayProps[i] = nextX;
      rayProps[i4] = life;

      if (nextX < 0 || nextX > width || life > ttl) initRay(i);
    }

    function drawRays() {
      for (let i = 0; i < RAY_PROPS_LENGTH; i += RAY_PROP_COUNT) {
        updateRay(i);
      }
    }

    function render() {
      ctxB.clearRect(0, 0, width, height);
      ctxB.save();
      ctxB.filter = 'blur(14px)';
      ctxB.drawImage(buffer, 0, 0);
      ctxB.restore();
    }

    function draw() {
      tick++;
      ctxA.clearRect(0, 0, width, height);
      drawRays();
      render();
      rafId = window.requestAnimationFrame(draw);
    }

    function resize() {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      buffer.width = width;
      buffer.height = height;
      centerY = height * 0.5;
    }

    resize();
    initRays();
    draw();

    window.addEventListener('resize', resize);
    return () => {
      window.removeEventListener('resize', resize);
      window.cancelAnimationFrame(rafId);
    };
  }, []);

  // Fade the aurora out as the user scrolls past the hero, down to the
  // plain dark background underneath, rather than staying visible site-wide.
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    function handleScroll() {
      const fadeDistance = window.innerHeight * 0.9;
      const progress = Math.min(window.scrollY / fadeDistance, 1);
      canvas!.style.opacity = String(0.5 * (1 - progress));
    }

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none" aria-hidden="true" />;
}
