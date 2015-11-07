
const localDB = process.env.MONGODB_URI || 'mongodb://localhost:27017/jiaodian';

const config = {
  local: {
    mode: 'local',
    port: 3000,
    mongoUrl: localDB
  }
};

module.exports = function (mode) {
  return config[mode || process.argv[2] || 'local'] || config.local;
};