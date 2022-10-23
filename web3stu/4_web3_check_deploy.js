let Web3 = require('web3'); //创建web3实例
web3 = new Web3(new Web3.providers.HttpProvider("HTTP://127.0.0.1:7545")); //web3对象

//  第一步 获取ABI
var fs = require('fs');
var VotingABI = JSON.parse(fs.readFileSync('public/Voting.abi').toString());

//  第二步 获取合约地址
var contractAddress = '0xa86490B9D96cbc830B70BEef5542982de8435ABf';

//  第三步重新加载合约
var myContract =new web3.eth.Contract(VotingABI,contractAddress);

//  调用合约candidateList方法
myContract.methods.candidateList(2).call((err,result)=>{
    console.log(result);
});

// 对照结果是否一样
console.log(web3.utils.toHex("haha"));