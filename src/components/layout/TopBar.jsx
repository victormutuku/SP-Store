// import Logo from './images/sp-store-logo.png'

const TopBar = () => {
    return(
        <div className="w-screen flex justify-between pt-5 pr-20 fixed bg-white z-20">
            <div className="flex flex-col-1 place-items-center mb-5">
                <img src="./images/sp-store-logo.png" alt="SP Store Logo" srcset="" width={35} height={25} />
                <div className="flex mr-[80px] text-2xl">
                    <p className="text-deep-blue font-bold ml-2">SP</p>
                    <p className="text-bright-blue">STORE</p>
                </div>
                <form>
                    <input 
                        type="text" 
                        placeholder="Search..." 
                        className="bg-ice-blue rounded-full pl-3 py-[6px] w-[350px]"
                    />
                </form>
            </div>
            <div className="flex -mt-1">
                <div className="bg-ice-blue p-2 rounded-full w-[44px] h-[44px] mr-4">  
                    <img src="./icons/sunshine-icon.svg" alt="Light Theme" className="p-1"/>
                </div>
                <div className="bg-ice-blue p-2 rounded-full w-[44px] h-[44px] mr-4">  
                    <img src="./icons/mail-icon.svg" alt="Mail" className="mt-1 p-1"/>
                </div>
                <div className="bg-ice-blue p-2 rounded-full w-[44px] h-[44px] mr-4">  
                    <img src="./icons/notif-icon.svg" alt="Notifications" className="-mt-1 ml-[1px]"/>
                </div>
                <div className="bg-ice-blue p-2 rounded-full w-[44px] h-[44px] mr-2"> 
                    <p className="text-2xl ml-[6px] -mt-1">A</p> 
                    {/* <img src="./icons/notif-icon.svg" alt="Light Theme" srcset="" className="-mt-1 ml-[1px]"/> */}
                </div>
                <div className="text-sm mt-1">
                    <p className="font-medium">Al-Farabi</p>
                    <p className="-mt-1">Admin</p>
                </div>
            </div>
        </div>
    )
}

export default TopBar