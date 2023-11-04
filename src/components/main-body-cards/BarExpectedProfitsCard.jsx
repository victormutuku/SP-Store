import PercentageChip from "../PercentageChip"

const BarExpectedProfitsCard = () => {
    return(
        <div className="flex justify-between bg-white rounded-lg px-4 py-5 min-w-[360px] h-fit">
            <div>
                <p className="font-medium text-xs">EXPECTED PROFITS</p>
                <p className="font-bold text-xl mb-1">$9,320</p>
                <PercentageChip isMainCard="true" value="5.5%" direction="up"/>
            </div>
            <div> 
                <img src="./images/bar-chart.svg" alt="Expected Profits Bar Chart" className="w-[135px]" />
            </div>
        </div>
    )
}

export default BarExpectedProfitsCard