import sloth from './sloth';
import { properties } from './__mocks__/dataset';

test('should', () => {
  const parsed = sloth(properties);

  console.log(parsed.group('properties', 'neighborhood'));
});
