import { join } from "path";
import { ESLint } from "eslint";

const CONFIG_FILE = "index.js";
const TEST_FILE = "test-file.js";

async function lintFile(configFile, fileToTest) {
  const eslint = new ESLint({
    cwd: process.cwd(),
    overrideConfigFile: configFile,
    resolvePluginsRelativeTo: process.cwd(),
    useEslintrc: false,
  });

  const result = await eslint.lintFiles(fileToTest);
  return result[0];
}

describe("Validate ESLint config", () => {
  it(`load config index.js in ESLint to validate all rules are correct`, async () => {
    const configFile = join(__dirname, CONFIG_FILE);
    const fileToTest = join(__dirname, TEST_FILE);
    const result = await lintFile(configFile, fileToTest);
    expect(result.errorCount).toEqual(0);
  });
});
