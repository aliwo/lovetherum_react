/* global web3 */

// axios 를 사용해서 node 서버로부터 최신 contractInfo 를 가져온 후 sendMsg 를 호출해야 된다.
export const sendMsg = (contractInfo, loveMsg) => {
    if (!web3) {
        throw Error('METAMASK_NOT_FOUND');
    }
    const Contract = web3.eth.contract(contractInfo.abi);
    const contract = Contract.at(contractInfo.address);
    contract.setMessage(loveMsg.key, loveMsg.message, function (err, result) {
        console.log(result);
    });
};

export const getMsg = (contractInfo, key) => {
    if (!web3) {
        throw Error('METAMASK_NOT_FOUND');
    }
    const Contract = web3.eth.contract(contractInfo.abi);
    const contract = Contract.at(contractInfo.address);
    contract.getMessage(key, function (err, result) {
        console.log(result);
    });
};
