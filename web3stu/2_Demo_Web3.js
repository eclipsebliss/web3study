let Web3 = require('web3')  //创建web3实例
var BigNumber = require("bignumber.js"); //大数据处理
web3 = new Web3(new Web3.providers.HttpProvider("HTTP://127.0.0.1:7545")); //web3对象
// 查询最新的区块号
// web3.eth.getBlockNumber().then(console.log);
// web3.eth.getBlock('latest',true).then(console.log);
// web3.eth.getBlock('pending',true).then(console.log);
// web3.eth.getBlock('earliest').then(console.log);

//账户相关操作
// web3.eth.getAccounts().then(console.log); //当前账户信息
// web3.eth.personal.newAccount("123456").then(console.log); //创建一个新的账户，密码是123456
// web3.eth.getAccounts().then(console.log);
// web3.eth.isMining().then(console.log);
// web3.eth.getCoinbase().then(console.log);

//交易相关的操作
//1余额
// web3.eth.getBalance("0x2fc35b9fD883905828fB27528cD0edF576f32EF3",function(error,result){
//     var balance = result.toString();
//     console.log(balance);           
//     console.log(web3.utils.fromWei(balance,"ether"));
// });

//2gas平均价格
web3.eth.getGasPrice().then((result) => {
    console.log("wei: " + result);
    console.log("ether: " + web3.utils.fromWei(result,"ether"));
})

// var a = 123456789123456789123456789123
// // console.log(a);
// var balance = new BigNumber("123456789123456789123456789123");
// // console.log(balance);
// console.log(balance.toString());        
// console.log(balance.toString(2));    //大数据处理2进制
// console.log(balance.toString(10));  //大数据处理10进制
// console.log(web3);
// console.log(Web3.modules);
// console.log(Web3.version);
// web3.eth.getNodeInfo().then(console.log);
// web3.eth.net.isListening().then(console.log); //查询网络状态
// web3.eth.net.getId().then(console.log); //获取网络ID
// web3.shh.net.getId().then(console.log); //获取网络ID
//查看Web3中所有可用的providers
// console.log(web3.providers);
// console.log(web3.currentProvider);
// console.log(web3.eth.currentProvider);
// console.log(web3.shh.currentProvider);
// console.log(web3.givenProvider);
// 合约ABI
// var abi = [ 
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "uint256",
// 				"name": "_number",
// 				"type": "uint256"
// 			}
// 		],
// 		"name": "setNumber",
// 		"outputs": [],
// 		"stateMutability": "nonpayable",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [],
// 		"name": "getNumber",
// 		"outputs": [
// 			{
// 				"internalType": "uint256",
// 				"name": "",
// 				"type": "uint256"
// 			}
// 		],
// 		"stateMutability": "view",
// 		"type": "function"
// 	}
// ];
// var address = "0x79d1123a0298742f7152E3DC99C9166833A191e7"; //合约地址
// var contract = new web3.eth.Contract(abi, address); //创建合约对象
// function callback(){
//     console.log("callback run");
// }
// function callback2(){
//     console.log("callback2 run");
// }

// var batch = new web3.BatchRequest();
// batch.add(web3.eth.getBalance.request("0xDCB66f5FC4596c77d819a1128943DAa8b81f06ee","latest",callback)) //获取指定的账户信息，对账户的操作
// batch.add(web3.eth.getBalance.request("0xDCB66f5FC4596c77d819a1128943DAa8b81f06ee","latest",
// function(error,result){
//     console.log(error);
//     console.log(result);
// })) //获取指定的账户信息，对账户的操作
// batch.add(contract.methods.getNumber().call.request({from:"0x79d1123a0298742f7152E3DC99C9166833A191e7"},callback2)) //对合约地操作，获取getNumber的值
// batch.add(contract.methods.getNumber().call.request({from:"0x79d1123a0298742f7152E3DC99C9166833A191e7"},
// function(error,result){
//     console.log(error);
//     console.log(result);
// }))
// batch.execute();
