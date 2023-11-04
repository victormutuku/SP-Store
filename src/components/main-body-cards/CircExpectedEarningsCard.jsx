import PercentageChip from "../PercentageChip"

const CircExpectedEarningsCard = () => {
    return(
        <div className="flex justify-between place-items-center bg-white rounded-lg px-4 py-5 min-w-[360px] h-fit mr-5">
            <div>
                <p className="font-medium text-xs">EXPECTED EARNINGS</p>
                <p className="font-bold text-xl mb-1">$32,000</p>
                <PercentageChip isMainCard="true" value="5.5%" direction="up"/>
                <div className="mt-2">
                    <div className="flex place-items-center mb-1">
                        <div className="w-[10px] h-[10px] rounded-full bg-bright-blue mr-1"></div>
                        <p className="text-xs">Groceries - <span className="font-medium">$95,600</span></p>
                    </div>
                    <div className="flex place-items-center mb-1">
                        <div className="w-[10px] h-[10px] rounded-full bg-lilac mr-1"></div>
                        <p className="text-xs">Electronics - <span className="font-medium">$11,500</span></p>
                    </div>
                    <div className="flex place-items-center mb-1">
                        <div className="w-[10px] h-[10px] rounded-full bg-jade-green mr-1"></div>
                        <p className="text-xs">Others - <span className="font-medium">$11,000</span></p>
                    </div>
                </div>
            </div>
            <div>
                <img src="./images/circular-chart.svg" alt="Expected Earnings Radial Percentage Chart" className="w-[130px]" />
            </div>
        </div>
    )
}

export default CircExpectedEarningsCard