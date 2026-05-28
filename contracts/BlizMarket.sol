// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract BlizMarket {

    struct Market {
        uint256 id;
        string question;
        uint256 yesPool;
        uint256 noPool;
        bool resolved;
        bool outcome;
    }

    uint256 public marketCount;

    mapping(uint256 => Market) public markets;

    function createMarket(
        string memory question
    ) external {

        marketCount++;

        markets[marketCount] = Market({
            id: marketCount,
            question: question,
            yesPool: 0,
            noPool: 0,
            resolved: false,
            outcome: false
        });
    }
}