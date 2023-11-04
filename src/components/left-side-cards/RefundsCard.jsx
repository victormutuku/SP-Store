import PercentageChip from "../PercentageChip"

const RefundsCard = () => {
    return (
        <div className="bg-white w-[215px] h-fit rounded-lg mb-5 py-5 pl-4 flex place-items-center">
            <div className="bg-refunds-bg-color p-2 rounded-full w-[44px] h-[44px] mr-4">  
                <img 
                    src="./icons/credit-card-icon.svg" 
                    alt="Notifications"
                    className="mt-[2px] ml-[1px]"
                />
            </div>
            <div>
                <p className="font-medium text-xs">REFUNDS</p>
                <p className="font-bold text-xl mb-1">$105</p>
                <div className="flex text-xs place-items-center">
                    <p className="mr-2">$650</p>
                    <PercentageChip value="1.4%" direction="down"/>
                </div>
            </div>
        </div>
    )
}

export default RefundsCard