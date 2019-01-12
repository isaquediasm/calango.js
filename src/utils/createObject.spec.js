import createObject from './createObject'

test('should create an object that matches the passed properties', () => {
  const obj = createObject('prop', true)

  expect(typeof obj === 'object').toBe(true)
  expect(obj).toEqual({ prop: true })
})