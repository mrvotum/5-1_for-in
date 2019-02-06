import sortByProperties from './sortByProperties.js';

const characterInfo = {
  name: 'мечник',
  health: 10,
  level: 2,
  attack: 80,
  defence: 40,
};

console.log(sortByProperties(characterInfo, ['health', 'attack']));
