// Export your SVG generation function
function createSVG(text, textColor, shape, shapeColor) {
  let shapeContent = '';

  // Conditionally generate the shape based on the user's input
  if (shape === 'circle') {
    shapeContent = `<circle cx="150" cy="100" r="50" fill="${shapeColor}" />`;
  } else if (shape === 'triangle') {
    shapeContent = `<polygon points="150,50 100,150 200,150" fill="${shapeColor}" />`;
  } else if (shape === 'square') {
    shapeContent = `<rect x="50" y="50" width="200" height="200" fill="${shapeColor}" />`;
  }

  const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
    ${shapeContent}
    <text x="150" y="100" text-anchor="middle" fill="${textColor}" font-size="48">${text}</text>
  </svg>`;

  return svgContent;
}

module.exports = {
  createSVG,
};
