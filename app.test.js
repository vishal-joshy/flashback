const createObject = require('./app');

describe('create object tests', () => {
  test('will create object', () => {
    const obj = createObject({ name: 'bob' });
    expect(obj.current).toEqual({ name: 'bob' });
    expect(obj.history).toEqual([{ name: 'bob' }]);
  })

  test('will add property to object', () => {
    const obj = createObject({ name: 'bob' });
    obj.add('age', '23');
    expect(obj.current).toEqual({ name: 'bob', age: '23' });
    expect(obj.history).toEqual([{ name: 'bob' }, { name: 'bob', age: '23' }]);
  })

  test('will remove property from object', () => {
    const obj = createObject({ name: 'bob', age: '23' });
    obj.remove('age');
    expect(obj.current).toEqual({ name: 'bob' });
    expect(obj.history).toEqual([{ name: 'bob', age: '23' }, { name: 'bob' }]);
  })

  test('will revert to previous state', () => {
    const obj = createObject({ name: 'bob', age: '23' });
    obj.remove('age');
    obj.revert(0);
    expect(obj.current).toEqual({ name: 'bob', age: '23' });
    expect(obj.history).toEqual([{ name: 'bob', age: '23' }, { name: 'bob' }]);
  })
})
