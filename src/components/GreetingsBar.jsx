const GreetingsBar = () => {
    return(
        <div className="h-fit max-h-[200px] flex bg-deep-blue my-5 mx-5 pt-5 pb-8 pl-5 rounded-xl ">
            <div className="flex place-items-center">
                <div className="relative">
                    <img src="./images/store-bg-vector.svg" alt="" className="w-[140px] mt-[18px] ml-[60px]"/>
                    <img src="./images/store-image.png" alt=""className="absolute top-5 w-[170px]"/>
                </div>
                <div className="text-white ml-10 mr-5">
                    <p className="text-2xl">Good Morning,</p>
                    <p className="font-medium text-2xl">Al-Farabi</p>
                    <div className="text-sm mt-4">
                        <p>Here's what happening with your</p>
                        <p>store today!</p>
                    </div>
                </div>
            </div>
            <div className="flex justify-between place-items-center bg-second-deep-blue w-[480px] min-h-full rounded-3xl px-5">
                <div className="flex place-items-center">
                    <div className="w-[70px] h-[70px] p-4 rounded-full bg-third-deep-blue">
                        <img src="./icons/users-icon.svg" alt="Users'Icon" />
                    </div>
                    <div className="text-white ml-2">
                        <p className="mb-1 font-medium text-sm">TODAY'S VISIT</p>
                        <p className="font-bold text-3xl">35,190</p>
                    </div>
                </div>
                <div className="h-[120px] w-0 border-[1px] border-white bg-white rounded-full"></div>
                <div className="flex place-items-center">
                    <div className="w-[70px] h-[70px]  p-5 rounded-full bg-third-deep-blue">
                        <img src="./icons/chart-icon.svg" alt="Users' Icon" className="mt-1" />
                    </div>
                    <div className="text-white ml-2">
                        <p className="mb-1 font-medium text-sm">TODAY'S TOTAL SALE</p>
                        <p className="font-bold text-3xl">$34,546</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GreetingsBar