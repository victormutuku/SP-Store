import BarExpectedProfitsCard from "./main-body-cards/BarExpectedProfitsCard"
import CircExpectedEarningsCard from "./main-body-cards/CircExpectedEarningsCard"
import CustomersCard from "./main-body-cards/CustomersCard"
import RevenueCard from "./main-body-cards/RevenueCard"
import WeeklySalesCard from "./main-body-cards/WeeklySalesCard"

const MainBodyCards = () => {
    return(
        <div className="relative">
            <div className="flex mb-5">
                <CircExpectedEarningsCard/>
                <BarExpectedProfitsCard/>
            </div>

            <div className="flex mb-5">
                <RevenueCard/>
                <CustomersCard/>
            </div>
            <WeeklySalesCard/>
            <p class="absolute -bottom-10 pb-2 text-sm">Designed by <a href="https://www.behance.net/Designer-tanbir" class="text-bright-blue underline">Tanbir Ahmed</a></p>
        </div>
    )
}


export default MainBodyCards