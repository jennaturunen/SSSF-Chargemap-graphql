import Level from '../models/level.js';

export default {
  Connections: {
    LevelID: (parent, args) => {
      return Level.findById(parent.LevelID);
    },
  },
};
