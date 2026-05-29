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

    function balanceOf(
        address account
    ) external view returns (uint256);

    function approve(
    address spender,
    uint256 amount
) external returns (bool);
}

contract BlizPredictionMarketV2 {

    IERC20 public usdc;

    address public owner;

    uint256 public totalVolume;

    uint256 public nextTradeId;

    uint256 public constant ODDS = 180;

    constructor(address _usdc) {

        usdc = IERC20(_usdc);

        owner = msg.sender;
    }

    struct Trade {

        uint256 id;

        address trader;

        string symbol;

        bool isUp;

        uint256 amount;

        uint256 entryPrice;

        uint256 expiryTime;

        bool settled;

        bool won;

        bool claimed;

        uint256 reward;
    }

    Trade[] public trades;

    mapping(address => uint256)
        public userVolume;

    mapping(address => uint256)
        public userWins;

    mapping(address => uint256)
        public userLosses;

modifier onlyOwner() {

    require(
        msg.sender == owner,
        "Not owner"
    );

    _;
}

function depositTreasury(
    uint256 amount
) external onlyOwner {

    require(
        amount > 0,
        "Invalid amount"
    );

    usdc.transferFrom(
        msg.sender,
        address(this),
        amount
    );
}

function withdrawTreasury(
    uint256 amount
) external onlyOwner {

    require(
        amount > 0,
        "Invalid amount"
    );

    require(
        usdc.balanceOf(
            address(this)
        ) >= amount,
        "Insufficient treasury"
    );

    usdc.transfer(
        owner,
        amount
    );
}

event PredictionPlaced(
    uint256 indexed tradeId,
    address indexed trader,
    string symbol,
    bool isUp,
    uint256 amount,
    uint256 entryPrice,
    uint256 expiryTime
);

function placePrediction(

    string memory symbol,

    bool isUp,

    uint256 amount,

    uint256 entryPrice,

    uint256 duration

) external {

    require(
        amount > 0,
        "Invalid amount"
    );

    require(
        entryPrice > 0,
        "Invalid price"
    );

    require(
        duration == 60 ||
        duration == 300 ||
        duration == 900 ||
        duration == 3600,
        "Invalid duration"
    );

    usdc.transferFrom(
        msg.sender,
        address(this),
        amount
    );

    uint256 reward =
        (amount * ODDS) / 100;

    trades.push(
        Trade({
            id: nextTradeId,
            trader: msg.sender,
            symbol: symbol,
            isUp: isUp,
            amount: amount,
            entryPrice: entryPrice,
            expiryTime:
                block.timestamp +
                duration,
            settled: false,
            won: false,
            claimed: false,
            reward: reward
        })
    );

    totalVolume += amount;

    userVolume[msg.sender] += amount;

    emit PredictionPlaced(
        nextTradeId,
        msg.sender,
        symbol,
        isUp,
        amount,
        entryPrice,
        block.timestamp +
        duration
    );

    nextTradeId++;
}

event TradeSettled(
    uint256 indexed tradeId,
    bool won,
    uint256 finalPrice
);

event RewardClaimed(
    uint256 indexed tradeId,
    address indexed trader,
    uint256 reward
);

function settleTrade(

    uint256 tradeId,

    uint256 finalPrice

) external {

    require(
        tradeId < trades.length,
        "Invalid trade"
    );

    Trade storage trade =
        trades[tradeId];

    require(
        !trade.settled,
        "Already settled"
    );

    require(
        block.timestamp >=
        trade.expiryTime,
        "Not expired"
    );

    bool won;

    if (trade.isUp) {

        won =
            finalPrice >
            trade.entryPrice;

    } else {

        won =
            finalPrice <
            trade.entryPrice;

    }

    trade.settled = true;

    trade.won = won;

    if (won) {

        userWins[
            trade.trader
        ]++;

    } else {

        userLosses[
            trade.trader
        ]++;

    }

    emit TradeSettled(
        tradeId,
        won,
        finalPrice
    );
}

function claimReward(

    uint256 tradeId

) external {

    require(
        tradeId < trades.length,
        "Invalid trade"
    );

    Trade storage trade =
        trades[tradeId];

    require(
        trade.trader ==
        msg.sender,
        "Not trader"
    );

    require(
        trade.settled,
        "Not settled"
    );

    require(
        trade.won,
        "Trade lost"
    );

    require(
        !trade.claimed,
        "Already claimed"
    );

    require(
        usdc.balanceOf(
            address(this)
        ) >= trade.reward,
        "Treasury empty"
    );

    trade.claimed = true;

    usdc.transfer(
        msg.sender,
        trade.reward
    );

    emit RewardClaimed(
        tradeId,
        msg.sender,
        trade.reward
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

        uint256,

        address,

        string memory,

        bool,

        uint256,

        uint256,

        uint256,

        bool,

        bool,

        bool,

        uint256

    )

{

    Trade memory t =
        trades[index];

    return (

        t.id,

        t.trader,

        t.symbol,

        t.isUp,

        t.amount,

        t.entryPrice,

        t.expiryTime,

        t.settled,

        t.won,

        t.claimed,

        t.reward

    );
}

}