import { describe, expect, test } from 'bun:test';
import { Experiment, Client } from '../src/lib';
import { defaultClient } from './utils';

async function myExperimentA(exp: Experiment) {
  const res = exp.saveArtifact(
    {
      artifact_name: 'My Artifact',
    },
    new TextEncoder().encode('okok')
  );
  try {
    const { name, experiment_id } = await res;
    expect(name).toBe('My Artifact');
    // nonzero
    expect(experiment_id).toBeTruthy();
    console.log('response');
  } catch (err) {
    console.error('error caught', err);
    throw err;
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
  return modelVersion.createModelVersion.id;
};

describe('saveArtifact', () => {
  test('experiment artifacts', async () => {
    const client = defaultClient();
    await setup(client).then(async (modelVersionId) => {
      const experiment = await new Experiment(client, {
        modelVersionId,
        experimentName: 'Some Experiment',
      });
      await experiment.run(myExperimentA);
    });
  });
});
