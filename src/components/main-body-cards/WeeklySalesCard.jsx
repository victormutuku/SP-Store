const WeeklySalesCard = () => {
    return(
        <div className="bg-white rounded-lg px-4 py-5 w-fit max-w-[740px] h-fit">
            <div className="flex justify-between">
                <p className="font-medium text-xs">WEEKLY SALES</p>
                <select className=" border-[1px] rounded-full px-1 py-1 text-xs">
                    <option value="current_month">This month</option>
                    <option value="current_month">Last month</option>
                    <option value="current_month">Last 3 months</option>

                </select>
            </div>
            <p className="font-bold text-xl mb-1">$32,000</p>
            <img src="./images/weekly-sales-graph-2.svg" alt="Weekly Sales Graph" className="mt-7"/>
    
        </div>
    )
}

export default WeeklySalesCard