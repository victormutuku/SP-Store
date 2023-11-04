const PercentageChip = ({isMainCard,value,direction}) => {

    let textColor = direction === "up" ? "text-bright-blue" : "text-vibrant-red";
    let bgColor = direction === "up" ? "bg-chip-bg-blue" : "bg-chip-bg-red";
    

    return(
        <div className={`flex rounded-full ${isMainCard === "true" ? bgColor : ""} w-fit py-[2px] px-2`}>
            <p className={`text-xs ${textColor}`}>{value}</p>
            <div className="w-[15px] h-[15px] mr-2">  
                <img 
                    src={direction === "up" ? "./icons/upward-sparkline-icon.svg" : "./icons/downward-sparkline-icon.svg" }
                    alt="Orders Sparkline" 
                    className="mt-1 ml-1"/>
            </div>
        </div>
    )
}

export default PercentageChip