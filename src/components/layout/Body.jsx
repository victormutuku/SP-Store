import GreetingsBar from "../GreetingsBar"
import LeftSideSummaryCards from "../LeftSideSummaryCards"
import MainBodyCards from "../MainBodyCards"

const Body = () => {
    return(
        <section className="w-full h-full bg-ice-blue mt-[76px] pb-10 ml-[220px]">
           <GreetingsBar/>
           <div className="flex">
            <LeftSideSummaryCards/>
            <MainBodyCards/>
           </div>
        </section>
    )
}

export default Body