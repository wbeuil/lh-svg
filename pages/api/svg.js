const getCompletion = (value) => {
  return value * 3.51858;
};

const getXPosition = (index) => {
  return index * 100;
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

  return `<g transform="translate(${position},0)"><svg width="80" height="80" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" style="color: ${color}; fill: ${color}; stroke: ${color}; stroke-linecap: round;"><circle cx="60" cy="60" r="56" stroke-width="8" style="opacity: 0.1;"></circle><circle cx="60" cy="60" r="56" stroke-width="8" style="fill: none; transform: rotate(-87.9537deg); transform-origin: 50% 50%; stroke-dasharray: ${completion}, 351.858;"></circle><text x="60" y="60" text-anchor="middle" alignment-baseline="middle" font-family="'Roboto Mono', 'Menlo', 'dejavu sans mono', 'Consolas', 'Lucida Console', monospace" font-size="40">${text}</text></svg></g>`;
};

module.exports = (req, res) => {
  const { query } = req;
  const { perf, a11y, pract, seo } = query;

  const perfCircle = createCircle(perf, 0);
  const a11yCircle = createCircle(a11y, 1);
  const practCircle = createCircle(pract, 2);
  const seoCircle = createCircle(seo, 3);

  res.setHeader("Content-Type", "image/svg+xml");
  res.send(
    `<svg width="380" height="80" xmlns="http://www.w3.org/2000/svg">${perfCircle}${a11yCircle}${practCircle}${seoCircle}</svg>`
  );
};
