import PercentageChip from "../PercentageChip"

const CustomersCard = () => {
    return(
        <div className="bg-white rounded-lg pl-4 py-5 min-w-[360px] h-fit">
            <p className="font-medium text-xs">NEW CUSTOMERS THIS MONTH</p>
            <p className="font-bold text-xl mb-1">4.5K</p>
            <PercentageChip isMainCard="true" value="5.5%" direction="up"/>
            <div className="flex place-items-center mt-10">
                <div className="border-[1px] border-white bg-lilac p-2 rounded-full w-[32px] h-[32px] -mr-4"> 
                    {/* <p className="text-lg ml-[2px] -mt-[6px]">A</p>  */}
                </div>
                <div className="border-[1px] border-white bg-jade-green p-2 rounded-full w-[32px] h-[32px] -mr-4"> 
                    {/* <p className="text-lg ml-[2px] -mt-[6px]">B</p>  */}
                </div>
                <div className="border-[1px] border-white bg-bright-blue p-2 rounded-full w-[32px] h-[32px] -mr-4"> 
                    {/* <p className="text-lg ml-[2px] -mt-[6px]">C</p>  */}
                </div>
                <div className="border-[1px] border-white bg-vibrant-red p-2 rounded-full w-[32px] h-[32px] -mr-4"> 
                    {/* <p className="text-lg ml-[2px] -mt-[6px]">D</p>  */}
                </div>
                <div className="border-[1px] border-deep-blue bg-deep-blue p-2 rounded-full w-[32px] h-[32px] -mr-4"> 
                    <p className="text-white text-xs -ml-[1px] font-medium">55+</p> 
                </div>
                <p className="ml-6 text-xs font-medium text-deep-blue">Joined today</p>
            </div>
        </div>
    )
}

export default CustomersCard