import {FaPlus, FaTimes} from "react-icons/fa";
import {FaPen} from "react-icons/fa";

const InvestmentPlans = () => {
    return (
        <>
            <div className="w-full h-max px-6 py-10 bg-[#f9fbfd] text-[rgb(87,89,98)]">
                <div className="w-full h-14  flex justify-between items-center">
                    <p className="text-3xl phone:text-2xl font-semibold">Investment Plans</p>
                    <button className="py-2 px-4 rounded bg-[#0e4152] flex items-center justify-center text-white gap-1">
                        <FaPlus />
                        New plan
                    </button>
                </div>
                <div className="w-ful h-max py-5 flex phone:flex-col phone:gap-8 justify-between flex-wrap">
                    <div className="w-[31%] phone:w-full h-[83vh] px-12 py-14 flex flex-col justify-between items-center bg-white border border-gray-300 rounded">
                        <div className="flex flex-col gap-2 items-center">
                            <div className="w-14 p-[0.10rem] bg-[#31ce36] rounded-full flex items-center justify-center text-white text-sm">active</div>
                            <p className="text-2xl text-[rgb(59,59,59)]">STARTER PLAN</p>
                        </div>
                        <div>
                            <p className="text-2xl text-[rgb(98,122,254)] flex items-center">
                                $ <span className="text-6xl">10,000</span>
                            </p>
                        </div>
                        <div className="w-full flex flex-col gap-3 text-sm text-[rgb(52,58,64)]">
                            <p className="w-full flex justify-between items-center">
                                Minimum Possible Deposit: <span>$1,000</span>
                            </p>
                            <p className="w-full flex justify-between items-center">
                                Maximum Possible Deposit:
                                <span>$10,000</span>
                            </p>
                            <p className="w-full flex justify-between items-center">
                                Minimum Return: <span>150%</span>
                            </p>
                            <p className="w-full flex justify-between items-center">
                                Maximum Return: <span>187%</span>
                            </p>
                            {/* <p className="w-full flex justify-between items-center">
                                Gift Bonus: <span>$0</span>
                            </p> */}
                            <p className="w-full flex justify-between items-center">
                                Duration: <span>14 days</span>
                            </p>
                        </div>
                        <div className="flex gap-2">
                            <button className="px-3 py-2 flex items-center justify-center text-white rounded bg-[#ffad46]">
                                <FaPen />
                            </button>
                            <button className="px-3 py-2 flex items-center justify-center text-white rounded bg-[#f25961]">
                                <FaTimes />
                            </button>
                            <button className="px-3 py-2 flex items-center justify-center text-white rounded text-xs bg-[#0e4152]">Mark as inactive</button>
                        </div>
                    </div>
                    <div className="w-[31%] phone:w-full h-[83vh] px-12 py-14 flex flex-col justify-between items-center bg-white border border-gray-300 rounded">
                        <div className="flex flex-col gap-2 items-center">
                            <div className="w-14 p-[0.10rem] bg-[#31ce36] rounded-full flex items-center justify-center text-white text-sm">active</div>
                            <p className="text-2xl text-[rgb(59,59,59)]">Silver Plan</p>
                        </div>
                        <div>
                            <p className="text-2xl text-[rgb(98,122,254)] flex items-center">
                                $ <span className="text-6xl">50,000</span>
                            </p>
                        </div>
                        <div className="w-full flex flex-col gap-3 text-sm text-[rgb(52,58,64)]">
                            <p className="w-full flex justify-between items-center">
                                Minimum Possible Deposit: <span>$15,000</span>
                            </p>
                            <p className="w-full flex justify-between items-center">
                                Maximum Possible Deposit:
                                <span>$50,000</span>
                            </p>
                            <p className="w-full flex justify-between items-center">
                                Minimum Return: <span>225%</span>
                            </p>
                            <p className="w-full flex justify-between items-center">
                                Maximum Return: <span>260%</span>
                            </p>
                            {/* <p className="w-full flex justify-between items-center">
                                Gift Bonus: <span>$0</span>
                            </p> */}
                            <p className="w-full flex justify-between items-center">
                                Duration: <span>20 days</span>
                            </p>
                        </div>
                        <div className="flex gap-2">
                            <button className="px-3 py-2 flex items-center justify-center text-white rounded bg-[#ffad46]">
                                <FaPen />
                            </button>
                            <button className="px-3 py-2 flex items-center justify-center text-white rounded bg-[#f25961]">
                                <FaTimes />
                            </button>
                            <button className="px-3 py-2 flex items-center justify-center text-white rounded text-xs bg-[#0e4152]">Mark as inactive</button>
                        </div>
                    </div>
                    <div className="w-[31%] phone:w-full h-[83vh] px-12 py-14 flex flex-col justify-between items-center bg-white border border-gray-300 rounded">
                        <div className="flex flex-col gap-2 items-center">
                            <div className="w-14 p-[0.10rem] bg-[#31ce36] rounded-full flex items-center justify-center text-white text-sm">active</div>
                            <p className="text-2xl text-[rgb(59,59,59)]">Gold Plan</p>
                        </div>
                        <div>
                            <p className="text-2xl text-[rgb(98,122,254)] flex items-center">
                                $ <span className="text-6xl">100,000</span>
                            </p>
                        </div>
                        <div className="w-full flex flex-col gap-3 text-sm text-[rgb(52,58,64)]">
                            <p className="w-full flex justify-between items-center">
                                Minimum Possible Deposit: <span>$50,000</span>
                            </p>
                            <p className="w-full flex justify-between items-center">
                                Maximum Possible Deposit:
                                <span>$100,000</span>
                            </p>
                            <p className="w-full flex justify-between items-center">
                                Minimum Return: <span>280%</span>
                            </p>
                            <p className="w-full flex justify-between items-center">
                                Maximum Return: <span>330%</span>
                            </p>
                            {/* <p className="w-full flex justify-between items-center">
                                Gift Bonus: <span>$0</span>
                            </p> */}
                            <p className="w-full flex justify-between items-center">
                                Duration: <span>26 days</span>
                            </p>
                        </div>
                        <div className="flex gap-2">
                            <button className="px-3 py-2 flex items-center justify-center text-white rounded bg-[#ffad46]">
                                <FaPen />
                            </button>
                            <button className="px-3 py-2 flex items-center justify-center text-white rounded bg-[#f25961]">
                                <FaTimes />
                            </button>
                            <button className="px-3 py-2 flex items-center justify-center text-white rounded text-xs bg-[#0e4152]">Mark as inactive</button>
                        </div>
                    </div>
                    <div className="w-[31%] phone:w-full h-[83vh] px-12 py-14 flex flex-col justify-between items-center bg-white border border-gray-300 rounded mt-6">
                        <div className="flex flex-col gap-2 items-center">
                            <div className="w-14 p-[0.10rem] bg-[#31ce36] rounded-full flex items-center justify-center text-white text-sm">active</div>
                            <p className="text-2xl text-[rgb(59,59,59)]">Platinum Plan</p>
                        </div>
                        <div>
                            <p className="text-2xl text-[rgb(98,122,254)] flex items-center">
                                $ <span className="text-6xl">3,000,000</span>
                            </p>
                        </div>
                        <div className="w-full flex flex-col gap-3 text-sm text-[rgb(52,58,64)]">
                            <p className="w-full flex justify-between items-center">
                                Minimum Possible Deposit: <span>$100,000</span>
                            </p>
                            <p className="w-full flex justify-between items-center">
                                Maximum Possible Deposit:
                                <span>$3,000,000</span>
                            </p>
                            <p className="w-full flex justify-between items-center">
                                Minimum Return: <span>350%</span>
                            </p>
                            <p className="w-full flex justify-between items-center">
                                Maximum Return: <span>401%</span>
                            </p>
                            {/* <p className="w-full flex justify-between items-center">
                                Gift Bonus: <span>$0</span>
                            </p> */}
                            <p className="w-full flex justify-between items-center">
                                Duration: <span>32 days</span>
                            </p>
                        </div>
                        <div className="flex gap-2">
                            <button className="px-3 py-2 flex items-center justify-center text-white rounded bg-[#ffad46]">
                                <FaPen />
                            </button>
                            <button className="px-3 py-2 flex items-center justify-center text-white rounded bg-[#f25961]">
                                <FaTimes />
                            </button>
                            <button className="px-3 py-2 flex items-center justify-center text-white rounded text-xs bg-[#0e4152]">Mark as inactive</button>
                        </div>
                    </div>
                    
                </div>
            </div>
        </>
    );
};

export default InvestmentPlans;
