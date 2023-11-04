import BarExpectedProfitsCard from "./main-body-cards/BarExpectedProfitsCard"
import CircExpectedEarningsCard from "./main-body-cards/CircExpectedEarningsCard"
import CustomersCard from "./main-body-cards/CustomersCard"
import RevenueCard from "./main-body-cards/RevenueCard"
import WeeklySalesCard from "./main-body-cards/WeeklySalesCard"

const MainBodyCards = () => {
    return(
        <div>
            <div className="flex mb-5">
                <CircExpectedEarningsCard/>
                <BarExpectedProfitsCard/>
            </div>

            <div className="flex mb-5">
                <RevenueCard/>
                <CustomersCard/>
            </div>
            <WeeklySalesCard/>
        </div>
    )
}


export default MainBodyCards