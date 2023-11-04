import PercentageChip from "../PercentageChip"

const RevenueCard = () => {
    return(
        <div className="bg-white rounded-lg mr-5 px-4 py-5 min-w-[360px] h-fit">
            <p className="font-medium text-xs">REVENUE THIS MONTH</p>
            <p className="font-bold text-xl mb-1">$45,320</p>
            <PercentageChip isMainCard="true" value="1.5%" direction="down"/>
            <div className="mt-10">
                <div>
                    <div className="flex justify-between mb-1">
                        <p className="text-xs"><span className="font-bold">$9,500</span> more to reach the goal</p>
                        <p className="text-xs">60%</p>
                    </div>
                    <div className="relative w-full h-3 rounded-full bg-refunds-bg-color">
                        <div className="absolute top-0 rounded-full w-3/5 h-3 bg-lilac"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RevenueCard