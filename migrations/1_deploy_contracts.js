const VoteSystem = artifacts.require("VoteSystem");
const Ownable = artifacts.require("Ownable");
module.exports = function(deployer) {
  deployer.deploy(VoteSystem);
  deployer.deploy(Ownable);
};
