// SPDX-License-Identifier: MIT

pragma solidity ^0.8.20;

interface IERC20 {

    function transferFrom(
        address from,
        address to,
        uint256 amount
    ) external returns (bool);

    function transfer(
        address to,
        uint256 amount
    ) external returns (bool);
}

contract BlizPredictionMarket {

    IERC20 public usdc;

    constructor(address _usdc) {
        usdc = IERC20(_usdc);
    }

    struct Trade {

        address trader;

        string symbol;

        bool isUp;

        uint256 amount;

        uint256 timestamp;
    }

    Trade[] public trades;

    uint256 public totalVolume;

    mapping(address => uint256) public userVolume;

    event PredictionPlaced(
        address indexed trader,
        string symbol,
        bool isUp,
        uint256 amount
    );

    function placePrediction(

        string memory symbol,

        bool isUp,

        uint256 amount

    ) external {

        require(amount > 0, 'Invalid amount');

        usdc.transferFrom(
            msg.sender,
            address(this),
            amount
        );

        trades.push(
            Trade(
                msg.sender,
                symbol,
                isUp,
                amount,
                block.timestamp
            )
        );

        totalVolume += amount;

        userVolume[msg.sender] += amount;

        emit PredictionPlaced(
            msg.sender,
            symbol,
            isUp,
            amount
        );
    }

    function getTradesCount()
        external
        view
        returns (uint256)
    {
        return trades.length;
    }

    function getTrade(
        uint256 index
    )
        external
        view
        returns (
            address,
            string memory,
            bool,
            uint256,
            uint256
        )
    {
        Trade memory t = trades[index];

        return (
            t.trader,
            t.symbol,
            t.isUp,
            t.amount,
            t.timestamp
        );
    }
}