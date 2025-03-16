// module.exports = function (api) {
//     return {
//       plugins: ['macros'],
//     }
//   }

module.exports = function(api) {
  // Cache the returned value forever and don't call this function again.
  api.cache(true);

  const presets = [
    '@babel/preset-env',
    '@babel/preset-react'
  ];

  const plugins = [];

  return {
    presets,
    plugins
  };
};