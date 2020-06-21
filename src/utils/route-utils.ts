export const scrollToTarget = (target?: string, offset?: number) => {
  const element = target && document.getElementById(target.replace('#', ''));
  let scrollPosition = 0;
  if (element) {
    const scrollOffset = offset || 64;
    const elementPosition = element.offsetTop;
    scrollPosition = elementPosition - scrollOffset;
  }
  window.scrollTo({
    top: scrollPosition,
    behavior: 'smooth',
  });
};

export default {
  scrollToTarget,
};
