import React, { useContext } from 'react';
import { TransactionContext } from '../context/TransactionContext';
import dummyData from '../utils/dummyData.json';
import { shortenAddress } from '../utils/shortenAddress';
import useFetch  from '../hooks/useFetch';
import { AiFillCopy } from "react-icons/ai";
import copy from 'clipboard-copy';

export const TransactionCard = ({addressTo, message, keyword, url, ETH}) => {
    
    const gifUrl = useFetch({keyword});
   
    return (

        <div className='bg-pink-900 m-4 flex flex-1 2xl:min-w-[450px] 2xl:max-w-[500px] sm:min-w-[270px] sm:max-w-[300px] flex-col p-3 rounded-md hover:shadow-2xl'>

            <div className='flex flex-col items-center w-full mt-3'>
                <div className='w-full mb-6 p-2'>
                    
                    <button onClick={() => { copy(addressTo); }}> <AiFillCopy /> </button>

                    <a href={`https://ropsten.etherscan.io/address/${addressTo}`} target="_blank" rel="noopener noreferrer">
                    <p id='text' class='text-white text-base'>Para: {shortenAddress(addressTo)}</p>
                    </a>
                    <p className='text-white text-base'>Preciso de: {ETH} ETH</p>

                    {message &&(
                        <>
                        <br/>
                        <p className='text-white text-base'> Message: {message}</p>
                        </>
                    )}

                </div>

                <img
                    src={gifUrl || url}
                    alt="gif"
                    className='w-full h-64 2x:h-96 rounded-md shadow-lg object-cover'
                />
            </div>
        </div>
    );
}

const Transactions = () => {

    const { currentAccount } = useContext(TransactionContext);
  
    return(
        <div className='flex w-full justify-center items-center 2xl:px-20 gradient-bg-transactions'>
            <div className='flex flex-col md:p-12 py-12 px-4 '>
                { currentAccount ? (
                    <h3 className='text-white text-3xl text-center my-2'>
                        Ultimas Doações
                    </h3>
                ) : (
                    <h3 className='text-white text-3xl text-center my-2'>
                            Conecte sua conta no Metamask para doar!
                    </h3>

                )}

                <div className='flex flex-wrap justify-center items-center mt-10'>

                    {dummyData.Transactions.reverse().map((transaction, i) =>
                    <TransactionCard key={i} {...transaction}/>)}

                </div>
            </div>
        </div>
    );
}

export default Transactions;