pragma solidity ^0.5.16;

import '@openzeppelin/contracts/token/ERC20/ERC20Detailed.sol';
import '@openzeppelin/contracts/token/ERC20/ERC20.sol';

contract Token1 is ERC20Detailed, ERC20{

	constructor() ERC20Detailed('Token 1', 'TK2', 18) public {
	
	}
}



