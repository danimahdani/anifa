/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');

const buildEslintCommand = filenames =>
  `next lint --fix --file ${filenames
    .map(f => path.relative(process.cwd(), f))
    .join(' --file ')}`;

module.exports = {
  '*.{js,jsx,ts,tsx}': [buildEslintCommand],
  '*.(ts|tsx)': () => 'yarn tsc --noEmit',
  '*.{js,jsx,ts,tsx,css,md,json}': filenames =>
    `yarn prettier --config ./.prettier.config.js -w "${filenames.join('" "')}"`
};
