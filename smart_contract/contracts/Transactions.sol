// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

contract Transactions {
    
    uint256 transactionsCount; 

    // Caracteristicas do evento transferência
    event Transfer(address from, address receiver, uint amount, string message, uint256 timestamp, string keyword);

    struct TransferStruct {
        address sender;
        address receiver;
        uint amount;
        string message;
        uint256 timestamp;
        string keyword;
    }

    TransferStruct[] transactions;

    function addToBlockchain(address payable receiver, uint amount, string memory message, string memory keyword) public {
        transactionsCount += 1;

        // O parâmetro de envio vai chamar a função e vamos add o evento de transação no array, enviamos todos os parametros necessários e pegamos o timestamp do bloco.
        transactions.push(TransferStruct(msg.sender, receiver, amount, message, block.timestamp, keyword));

        // Enviando a transação
        emit Transfer(msg.sender, receiver, amount, message, block.timestamp, keyword);
    }

    // Retorna o array de transação
    function getAllTransactions() public view returns (TransferStruct[] memory) {
        return transactions;
    }

    // Retorna a quantidade de transação
    function getTransactionsCount() public view returns(uint256){
        return transactionsCount;
    }
}