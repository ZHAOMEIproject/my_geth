var Web3 = require('web3');

main();
async function main(){
    var web3 = new Web3("http://127.0.0.1:8545");
    let nowblocknumber = await web3.eth.getBlockNumber();
    console.log(nowblocknumber);
}
