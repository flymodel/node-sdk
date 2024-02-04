import { describe, expect, test } from 'bun:test';
import { Experiment, Client } from '../src/lib';
import { defaultClient } from './utils';

async function myExperimentA(exp: Experiment) {
  let data = new TextEncoder().encode('okok');
  console.log('experiment inner', exp);
  const res = exp.saveArtifact(
    {
      artifact_name: 'My Artifact',
    },
    data
  );
  console.log('response', res);
  try {
    console.log('response', await res);
  } catch (err) {
    console.error('error caught', err);
  }
}

const setup = async (client: Client) => {
  const alt = crypto.randomUUID().split('-').at(-1);
  const model = await client.createModel({
    name: `llm.sm.test-${alt}`,
    namespace: 1,
  });
  console.debug('modelId', model.createModel);
  const modelVersion = await client.createModelVersion({
    modelId: model.createModel.id,
    versionTag: 'v1.0.0',
  });
  console.debug('modelVersion', modelVersion.createModelVersion);
  expect(modelVersion.createModelVersion.modelId).toBe(model.createModel.id);
  expect(modelVersion.createModelVersion.version).toBe('v1.0.0');
  return (
    await client.createExperiment({
      modelVersionId: modelVersion.createModelVersion.id,
      experimentName: 'Some Experiment',
    })
  ).createExperiment;
};

describe('saveArtifact', () => {
  test('experiment artifacts', async () => {
    const client = defaultClient();
    await setup(client).then(async (exp) => {
      const experiment = await new Experiment(client, exp);
      await experiment.run(myExperimentA);
    });
  });
});
