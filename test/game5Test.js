const { loadFixture } = require('@nomicfoundation/hardhat-network-helpers');
const { assert } = require('chai');

describe('Game5', function () {
  async function deployContractAndSetVariables() {
    const Game = await ethers.getContractFactory('Game5');
    const game = await Game.deploy();

    return { game };
  }
  it('should be a winner', async function () {
    const { game } = await loadFixture(deployContractAndSetVariables);

    // good luck

    const luckyAddress = '0x00FfFFfFFFfFFFFFfFfFfffFFFfffFfFffFfFFF0'; // Example address

    await game.win({ from: luckyAddress });
    // leave this assertion as-is
    assert(await game.isWon(), 'You did not win the game');
  });
});
