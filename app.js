const fs = require('fs');
import('inquirer').then(async (inquirerModule) => {
  const inquirer = inquirerModule.default;
  const { createSVG } = await import('./svgGenerator.js'); // Specify the .js file extension

  const questions = [
    {
      type: 'input',
      name: 'text',
      message: 'Enter text (up to three characters):',
      validate: (input) => input.length <= 3,
    },
    {
      type: 'input',
      name: 'textColor',
      message: 'Enter text color (keyword or hexadecimal):',
    },
    {
      type: 'list',
      name: 'shape',
      message: 'Choose a shape:',
      choices: ['circle', 'triangle', 'square'],
    },
    {
      type: 'input',
      name: 'shapeColor',
      message: 'Enter shape color (keyword or hexadecimal):',
    },
  ];

  inquirer.prompt(questions).then((answers) => {
    const svgContent = createSVG(answers.text, answers.textColor, answers.shape, answers.shapeColor);

    fs.writeFileSync('logo.svg', svgContent);
    console.log('Generated logo.svg');
  });
});
