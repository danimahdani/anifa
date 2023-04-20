import { relative } from "path";

const buildEslintCommand = (filenames) =>
  `next lint --fix --file ${filenames
    .map((f) => relative(process.cwd(), f))
    .join(" --file ")}`;

const lintingConfig = {
  "*.{js,jsx,ts,tsx}": [buildEslintCommand],
  "*.(ts|tsx)": () => "yarn tsc --noEmit",
  "*.{js,jsx,ts,tsx,css,md,json}": (filenames) =>
    `yarn prettier --config ./.prettier.config.js -w "${filenames.join(
      '" "'
    )}"`,
};

export default lintingConfig;
