import PercentageChip from "../PercentageChip"

const ShippingCard = () => {
    return (
        <div className="bg-white w-[215px] h-fit rounded-lg mb-5 py-5 pl-4 flex place-items-center">
            <div className="bg-chip-bg-blue p-2 rounded-full w-[44px] h-[44px] mr-4">  
                <img 
                    src="./icons/shipping-icon.svg" 
                    alt="Notifications"
                    className="ml-[1px]"
                />
            </div>
            <div>
                <p className="font-medium text-xs">SHIPPING</p>
                <p className="font-bold text-xl mb-1">$546</p>
                <div className="flex text-xs place-items-center">
                    <p className="mr-2">$463</p>
                    <PercentageChip value="1.7%" direction="down"/>
                </div>
            </div>
        </div>
    )
}

export default ShippingCard