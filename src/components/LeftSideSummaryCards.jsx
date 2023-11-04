import GrossSaleCard from "./left-side-cards/GrossSaleCard"
import ItemsCard from "./left-side-cards/ItemsCard"
import OrdersCard from "./left-side-cards/OrdersCard"
import RefundsCard from "./left-side-cards/RefundsCard"
import ShippingCard from "./left-side-cards/ShippingCard"

const LeftSideSummaryCards = () => {
    return(
        <div className="mx-5">
            <OrdersCard/>
            <ItemsCard/>
            <RefundsCard/>
            <GrossSaleCard/>
            <ShippingCard/>
        </div>
    )
}

export default LeftSideSummaryCards