import Person from './Person';

class Team {
  constructor() {
    this.members = {
      zombie: new Person(
        'Зомби',
        'Zombie',
        50,
        1,
        10,
        40,
      ),
      vampire: new Person(
        'Вампир',
        'Vampire',
        50,
        1,
        10,
        40,
      ),
      bowman: new Person(
        'Лучник',
        'Bowman',
        50,
        1,
        10,
        40,
      ),
      // eslint-disable-next-line generator-star-spacing
      *[Symbol.iterator]() {
        const keys = Object.keys(this);
        for (let i = 0; i < keys.length; i += 1) {
          yield this[keys[i]];
        }
      },
    };
  }
}

const team = new Team();

for (const member of team.members) {
  console.log(member);
}
