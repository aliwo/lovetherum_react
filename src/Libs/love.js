/* global web3 */

// love 를 import 하는 순간에 web3 상태를 확인합니다.
if (!web3) {
    throw Error('METAMASK_NOT_FOUND');
}
/*
web3.eth.getAccounts((err, result) => console.log(err, result));

web3.eth.getBalance(web3.eth.coinbase, function(error, result) {
    if (!error) {
        if (JSON.stringify(result) === '0') {
            // TODO: 잔고를 어딘가에 저장해 두기.
            throw Error('NOT_ENOUGH_MINERAL');
        }
    } else {
        throw Error('ERROR_LOADING_BALANCE');
    }
});
*/
function createContract(contractInfo) {
    const Contract = web3.eth.contract(contractInfo.abi);
    const contract = Contract.at(contractInfo.address);
    return contract;
}

// axios 를 사용해서 node 서버로부터 최신 contractInfo 를 가져온 후 sendMsg 를 호출해야 된다.
export const sendMsg = (contractInfo, loveMsg, afterSend) => {
    const contract = createContract(contractInfo);
    contract.setMessage(loveMsg.url, loveMsg.message, function(error, result) {
        // result 는 transaction 주소이다. 이 transaction 에 콜백을 달아야 함.
        if (error) {
            throw Error(JSON.stringify(error));
        }
        if (afterSend !== undefined) {
            afterSend(result);
        }
    });
};

export const getMsg = (contractInfo, key, callback) => {
    const contract = createContract(contractInfo);
    contract.getMessage(key, function(error, result) {
        callback(result);
    });
};
