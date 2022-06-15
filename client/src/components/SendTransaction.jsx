import { id } from 'ethers/lib/utils';
import React , {useContext} from 'react';
import { TransactionContext } from "../context/TransactionContext";
import {Loader} from './';

const Input = ({placeholder, name, type, value, handleChange }) =>(
    <input

        placeholder={placeholder}
        type = {type}
        value = {value}
        step = "0.0001"
        onChange = {(e) => handleChange(e, name)}
        className='my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism'
    
    />

);
const SendTransaction = () => {
    const {formData, sendTransaction, handleChange, isLoading, InfoTransaction} = useContext(TransactionContext);
    

    const handleSubmit = (e) => {

        const {addressTo, amount, message} = formData;

        e.preventDefault();

        if(!addressTo || !amount || !message) return;
        
        InfoTransaction(addressTo, amount, message);
        sendTransaction();
        
    }

    return (
        <div className='flex w-full justify-center items-center'>
            <div className='flex md:flex-row flex-col items-start justify-between md:p-20 py-12 px-4'>

                <div className='p-5 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism'>
                    <Input placeholder="Address To"    name="addressTo"  id="addressTo" type="text"   handleChange={handleChange}/>
                    <Input placeholder="Amount (ETH)"  name="amount"     id="amount"    type="number" handleChange={handleChange}/>
                    <Input placeholder="Enter Message" name="message"    id="message"   type="text"   handleChange={handleChange}/>

                    <div className='h-[1px] w-full bg-gray-400 my-2'/>
                    { isLoading
                        ? ( <Loader/>)
                        : (
                            <button 
                            type="submit"
                            value="submit"
                            onClick={handleSubmit}
                            className='text-white w-full mt-2 border-[1px] p-2 border-white hover:bg-pink-900 rounded-full cursor-pointer'
                            
                            >
                                Envie Agora

                            </button>
                        )
                    }

                </div>

            </div>

        </div>
    );
}

export default SendTransaction;