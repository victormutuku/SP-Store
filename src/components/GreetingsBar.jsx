const GreetingsBar = () => {
    return(
        <div className="h-fit max-h-[200px] flex place-items-center bg-deep-blue my-5 mx-5 pt-5 pb-8 pl-5 rounded-xl ">
            <div className="relative">
                <img src="./images/store-bg-vector.svg" alt="" className="w-[140px] mt-[18px] ml-[60px]"/>
                <img src="./images/store-image.png" alt=""className="absolute top-5 w-[170px]"/>
            </div>
            <div className="text-white mx-10">
                <p className="text-2xl">Good Morning,</p>
                <p className="font-medium text-2xl">Al-Farabi</p>
                <div className="text-sm mt-4">
                    <p>Here's what happening with your</p>
                    <p>store today!</p>
                </div>
            </div>
            <div className="bg-second-deep-blue mt-8 w-[460px] h-[160px] rounded-3xl">
            </div>
        </div>
    )
}

export default GreetingsBar