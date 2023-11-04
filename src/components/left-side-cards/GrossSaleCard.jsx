import PercentageChip from "../PercentageChip"

const GrossSaleCard = () => {
    return (
        <div className="bg-white w-[215px] h-fit rounded-lg mb-5 py-5 pl-4 flex place-items-center">
            <div className="bg-gross-sale-bg-color p-2 rounded-full w-[44px] h-[44px] mr-4">  
                <img 
                    src="./icons/gross-sale-icon.svg" 
                    alt="Notifications"
                    className="ml-[1px]"
                />
            </div>
            <div>
                <p className="font-medium text-xs">GROSS SALE</p>
                <p className="font-bold text-xl mb-1">12,324</p>
                <div className="flex text-xs place-items-center">
                    <p className="mr-2">$10,230</p>
                    <PercentageChip value="15.5%" direction="up"/>
                </div>
            </div>
        </div>
    )
}

export default GrossSaleCard