const WETH = artifacts.require("WETH.sol");
const Router = artifacts.require('UniswapV2Router02.sol');

module.exports = async function (deployer, network) {
	let weth;
	const FACTORY_ADDRESS = '0xB590378E2025Cd8398a86305C3490943F701ecE5';
	if(network == 'mainnet'){
		weth = await.at('0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2');

	}else{
		await deloper.deploy(WETH);
		weth = await WETH.deployed(); 
	}
	
	await deployer.deploy(Router, Factory_address, weth.address);
};

