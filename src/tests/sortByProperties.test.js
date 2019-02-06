import sortByProperties from '../js/sortByProperties';

test('Properties пусто, выведет просто отсортированный мсписок', () => {
  const inputArr = {
    d_name: 'мечник',
    c_health: 10,
    a_level: 2,
    e_attack: 80,
    b_defence: 40,
  };
  const inputProperties = [];

  const expected = [ // ожидает
    { key: 'a_level', value: 2 },
    { key: 'b_defence', value: 40 },
    { key: 'c_health', value: 10 },
    { key: 'd_name', value: 'мечник' },
    { key: 'e_attack', value: 80 },
  ];
  const received = sortByProperties(inputArr, inputProperties); // получает
  expect(received).toEqual(expected); // сравнивает
});

test('Выбран только e_attack', () => {
  const inputArr = {
    d_name: 'мечник',
    c_health: 10,
    a_level: 2,
    e_attack: 80,
    b_defence: 40,
  };
  const inputProperties = ['e_attack'];

  const expected = [ // ожидает
    { key: 'e_attack', value: 80 },
    { key: 'a_level', value: 2 },
    { key: 'b_defence', value: 40 },
    { key: 'c_health', value: 10 },
    { key: 'd_name', value: 'мечник' },
  ];
  const received = sortByProperties(inputArr, inputProperties); // получает
  expect(received).toEqual(expected); // сравнивает
});

test('Выбранны почти все Properties', () => {
  const inputArr = {
    d_name: 'мечник',
    c_health: 10,
    a_level: 2,
    e_attack: 80,
    b_defence: 40,
  };
  const inputProperties = ['e_attack', 'a_level', 'c_health', 'd_name'];

  const expected = [ // ожидает
    { key: 'e_attack', value: 80 },
    { key: 'a_level', value: 2 },
    { key: 'c_health', value: 10 },
    { key: 'd_name', value: 'мечник' },
    { key: 'b_defence', value: 40 },
  ];
  const received = sortByProperties(inputArr, inputProperties); // получает
  expect(received).toEqual(expected); // сравнивает
});
