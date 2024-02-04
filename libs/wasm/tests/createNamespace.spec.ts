import { describe, expect, test } from 'bun:test';
import { defaultClient, randSmall } from './utils';

describe('createNamespace', () => {
  test('should work', async () => {
    const client = defaultClient();
    const { createNamespace } = await client.createNamespace({
      name: `js-namespace-${randSmall()}`,
      description: 'namespace created by bun',
    });

    expect(createNamespace.description).toBe('namespace created by bun');
    expect(createNamespace.name.startsWith('js-namespace')).toBeTruthy();
  });
});
