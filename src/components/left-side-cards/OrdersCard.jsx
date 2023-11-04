import PercentageChip from "../PercentageChip"

const OrdersCard = () => {
    return (
        <div className="bg-white w-[215px] h-fit rounded-lg mb-5 py-5 pl-4 flex place-items-center">
            <div className="bg-chip-bg-blue p-2 rounded-full w-[44px] h-[44px] mr-4">  
                <img 
                    src="./icons/orders-icon.svg" 
                    alt="Notifications"
                    className="mt-1 ml-[1px]"
                />
            </div>
            <div>
                <p className="font-medium text-xs">ORDERS</p>
                <p className="font-bold text-xl mb-1">15,209</p>
                <div className="flex text-xs place-items-center">
                    <p className="mr-2">13,345</p>
                    <PercentageChip value="5.5%" direction="up"/>
                </div>
            </div>
        </div>
    )
}

export default OrdersCard