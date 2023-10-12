// const ShadowChefV2 = artifacts.require("ShadowChefV2");

// module.exports = function (deployer) {
//   deployer.deploy(
//     ShadowChefV2,
//     "0x752982a24C733c5ac62EfB6979Bd1927993f0ab8",
//     "0xBc2b42bff61bc6056D5a1E1ebd9426333EfC8Bcb"
//   );
// };

const IShdw = artifacts.require("IShdw");

module.exports = function (deployer) {
  deployer.deploy(
    IShdw,
    "0x56c423bcF4027C08239B3E6175762d4f5752c9af",
    "0xBc2b42bff61bc6056D5a1E1ebd9426333EfC8Bcb",
    604800
  );
};
