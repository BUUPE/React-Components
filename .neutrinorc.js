const reactComponents = require('@neutrinojs/react-components');

module.exports = {
  use: [reactComponents(),
  (neutrino) => {
     neutrino.config.output.library("upe-react-components");

     // we only want the index for now
     const index = neutrino.config.entryPoints.get("index");
     neutrino.config.entryPoints.clear();
     neutrino.config.entryPoints.set("index", index);
    }],
};