import { AiFillAlipayCircle } from "react-icons/ai";
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle }  from "react-icons/bs";
import Loader from './Loader';


const commonStyles = () => 'min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white';
const Welcome = () => {

    const connectWallet = () => {
    }
    return (
        <div className="flex w-full justify-center items-center">
            <div className="flex md:flex-row flex-col items-start justify-between md:p-20 py-12 px-4">
                <div className="flex flex-1 justify-start flex-col md:mr-10">
                    <h1 className="text-3xl sm:text-5xl text-white text-gradient py-1"> 
                        Blockchain and Crypto Transactions<br /> across the world
                    </h1>
                    <p className="text-left mt-5 text-white font-light md:w-9/12 w-11/12 text-base">
                        Explore the Crypto world. Buy and sell cryptocurrencies easily on crypto our wallet
                    </p>
                    <button type="button" onClick={connectWallet} className="flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer">
                        <p className= "text-white text-base font-semibold">
                        Connect Wallet
                        </p> 
                    </button>
                      <div className="grid sm:grid-cols-3 grid-cols-2 w-full mt-10">
                        <div className={`rounded-tl-2xl ${commonStyles} text-white`}>
                           Reliability
                        </div>
                       <div className={`rounded-th-2xl ${commonStyles} text-white`}>
                           Security
                        </div>
                       <div className={`rounded-tr-2xl ${commonStyles} text-white`}>
                           Ethereum
                       </div>
                       <div className={`rounded-bl-2xl ${commonStyles} text-white`}>
                           Web 3.0
                        </div>
                       <div className={`rounded-bh-2xl ${commonStyles} text-white`}>
                           Low fees
                        </div>
                       <div className={`rounded-br-2xl ${commonStyles} text-white`}>
                           Blockchain
                        </div>
                     </div>
                </div>
                <div className="flex flex-col flex-1 items-center justify-start w-full md:mt-0 mt-10">
                    <div className="p-3 justify items-start flex-col rounded-xl h-40 sm:w-72 w-full my-5 eth-card white-glassmorphism">
                        <div className="flex justify-between">
                            
                        </div>
                    </div>
                    <div className="flex flex-col flex-1 justify-start w-full md:mt-0 mt-10 bg-gray-800 px-3 py-3 rounded-3xl">
                        <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 my-1" placeholder= "Address To" name = "addressTo" type="text" handleChange={()=>{}} />
                        <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 my-1" placeholder= "Amount (ETH)" name = "amount" type="number" handleChange={()=>{}} />
                        <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 my-1" placeholder= "Keyword (gif)" name = "keyword" type="text" handleChange={()=>{}} />
                        <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 my-1" placeholder="Enter Message" name="message" type="text" handleChange={() => { }} />
                        <button type="button" className="flex flex-row justify-center items-center my-3 bg-[#2952e3] p-3 rounded-full cursor-pointer">
                            <p className="text-white text-base font-semibold">
                                Send
                            </p>
                        </button>
                    </div>
                </div>
                
            </div>
        </div>
    );
}
export default Welcome;