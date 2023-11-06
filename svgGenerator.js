// Export your SVG generation function
function createSVG(text, textColor, shape, shapeColor) {
    const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
      <rect width="300" height="200" fill="${shapeColor}" />
      <text x="150" y="100" text-anchor="middle" fill="${textColor}" font-size="48">${text}</text>
    </svg>`;
  
    return svgContent;
  }
  
  module.exports = {
    createSVG,
  };
  