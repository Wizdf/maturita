export const SlideUp = (delay = 0) => ({
  initial: { y: 50, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, delay },
  },
});

export const SlideDown = (delay = 0) => ({
  initial: { y: -50, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, delay },
  },
});

export const SlideLeft = (delay = 0) => ({
  initial: { x: 50, opacity: 0 },
  animate: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay },
  },
});

export const SlideRight = (delay = 0) => ({
  initial: { x: -50, opacity: 0 },
  animate: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay },
  },
});

export const FadeIn = (delay = 0) => ({
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { duration: 0.5, delay },
  },
});

export const ZoomIn = (delay = 0) => ({
  initial: { scale: 0.8, opacity: 0 },
  animate: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.5, delay },
  },
});

export const RotateIn = (delay = 0) => ({
  initial: { rotate: -90, opacity: 0 },
  animate: {
    rotate: 0,
    opacity: 1,
    transition: { duration: 0.5, delay },
  },
});

export const container = {
  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export const item = {
  initial: { y: 20, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.4,
    },
  },
};
