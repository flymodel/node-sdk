import * as fs from 'fs/promises';
const createClassMethodRe = () => {};

const resolutions = {
  'run(experiment_fn: Function): Promise<void>':
    'run(experiment_fn: ExperimentFunction): Promise<void>',
  '@param {Function} experiment_fn': '@param {ExperimentFunction} experimentFn',
};

const pathToAuto = 'libs/wasm/src/lib/index.d.ts';
const bs = await fs.readFile(pathToAuto);
let contents = new TextDecoder().decode(bs);
Object.entries(resolutions).forEach(([current, replace]) => {
  const matched = contents.includes(current);
  if (matched) {
    contents = contents.replace(current, replace);
  }
});
await fs.writeFile(pathToAuto, contents);
