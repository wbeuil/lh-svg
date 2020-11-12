const getTitle = (index) => {
  switch (index) {
    case 0:
      return "Performance";
    case 1:
      return "Accessibility";
    case 2:
      return "Best Practices";
    case 3:
      return "SEO";
    case 4:
      return "PWA";
  }
};

const getCompletion = (value) => {
  return value * 3.51858;
};

const getXPosition = (index) => {
  return index * 100 + 20;
};

const getColor = (value) => {
  return value >= 90 ? "#0CCE6B" : value >= 50 ? "#FFA400" : "#FF4E42";
};

const getText = (value) => {
  return value > 100 ? "100" : value < 0 ? "0" : value;
};

const createCircle = (data, index) => {
  const value = parseInt(data, 10);
  const text = getText(value);
  const color = getColor(value);
  const position = getXPosition(index);
  const completion = getCompletion(value);
  const title = getTitle(index);

  return `<g transform="translate(${position},0)"><svg width="80" height="80" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" style="color: ${color}; fill: ${color}; stroke: ${color}; stroke-linecap: round; overflow: visible;"><circle cx="60" cy="60" r="56" stroke-width="8" style="opacity: 0.1;"></circle><circle cx="60" cy="60" r="56" stroke-width="8" style="fill: none; transform: rotate(-87.9537deg); transform-origin: 50% 50%; stroke-dasharray: ${completion}, 351.858;"></circle><text x="60" y="60" text-anchor="middle" alignment-baseline="middle" font-family="'Roboto Mono', 'Menlo', 'dejavu sans mono', 'Consolas', 'Lucida Console', monospace" font-size="40">${text}</text><text x="60" y="150" text-anchor="middle" font-family="Roboto, Helvetica, Arial, sans-serif" font-size="22" style="fill: #212121; stroke: none;">${title}</text></svg></g>`;
};

module.exports = (req, res) => {
  const { query } = req;
  const { perf, a11y, pract, seo, pwa } = query;

  const perfCircle = createCircle(perf, 0);
  const a11yCircle = createCircle(a11y, 1);
  const practCircle = createCircle(pract, 2);
  const seoCircle = createCircle(seo, 3);
  const pwaCircle = createCircle(pwa, 4);

  res.setHeader("Content-Type", "image/svg+xml");
  res.send(
    `<svg width="520" height="110" xmlns="http://www.w3.org/2000/svg">${perfCircle}${a11yCircle}${practCircle}${seoCircle}${pwaCircle}</svg>`
  );
};
