import * as migration_20260306_083741 from './20260306_083741';
import * as migration_20260309_083454 from './20260309_083454';
import * as migration_20260309_103649 from './20260309_103649';
import * as migration_20260310_135120 from './20260310_135120';
import * as migration_20260331_031345 from './20260331_031345';

export const migrations = [
  {
    up: migration_20260306_083741.up,
    down: migration_20260306_083741.down,
    name: '20260306_083741',
  },
  {
    up: migration_20260309_083454.up,
    down: migration_20260309_083454.down,
    name: '20260309_083454',
  },
  {
    up: migration_20260309_103649.up,
    down: migration_20260309_103649.down,
    name: '20260309_103649',
  },
  {
    up: migration_20260310_135120.up,
    down: migration_20260310_135120.down,
    name: '20260310_135120',
  },
  {
    up: migration_20260331_031345.up,
    down: migration_20260331_031345.down,
    name: '20260331_031345'
  },
];
