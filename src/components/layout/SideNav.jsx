import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons'

const SideNav = () => {
    return (
        <div className="mt-[76px] pt-5 px-5 fixed bg-white h-full z-10">
            <ul className="text-sm">
                <li className="my-2 pr-5 w-[200px] rounded-md bg-ice-blue flex overflow-hidden cursor-pointer">
                    <div className="w-1 bg-bright-blue"></div>
                    <div className="w-full flex place-items-center justify-between">
                        <div className='flex place-items-center pl-3'>
                            <img src="./icons/dashboard-icon.svg" alt="Dashboard Icon" className='w-[16px]'/>
                            <p className="py-2 pl-2 text-bright-blue">Dashboard</p>
                        </div>
                        <FontAwesomeIcon icon={faChevronUp} color='#007DFC' size="xs"/>
                    </div>
                </li>
                <ul className='ml-4'>
                    <li className='flex place-items-center my-3 cursor-pointer'>
                        <div className='w-[10px] h-[10px] rounded-full bg-deep-blue mr-2'></div>
                        <span className='font-medium'>E-commerce</span>
                    </li>
                    <li className='flex place-items-center my-3 cursor-pointer'>
                        <div className='w-[10px] h-[10px] rounded-full border-[1px] border-deep-blue mr-2'></div>
                        <span>Project Management</span>
                    </li>
                    <li className='flex place-items-center my-3 cursor-pointer'>
                        <div className='w-[10px] h-[10px] rounded-full border-[1px] border-deep-blue mr-2'></div>
                        <span>Support Desk</span>
                    </li>
                    <li className='flex place-items-center my-3 cursor-pointer'>
                        <div className='w-[10px] h-[10px] rounded-full border-[1px] border-deep-blue mr-2'></div>
                        <span>CRM System</span>
                    </li>
                </ul>
                <li className="my-2 pr-5 w-[200px] rounded-md flex overflow-hidden hover:bg-ice-blue cursor-pointer">
                    <div className="w-1 bg-transparent"></div> 
                    <p className="py-2 pl-3">File Manager</p>
                </li>
                <li className="my-2 pr-5 w-[200px] rounded-md flex overflow-hidden hover:bg-ice-blue cursor-pointer">
                    <div className="w-1 bg-transparent"></div> 
                    <p className="py-2 pl-3">Changelog</p>
                </li>
                <li className="my-2 pr-5 w-[200px] rounded-md flex overflow-hidden cursor-default">
                    <div className="w-1 bg-transparent"></div> 
                    <p className="py-2 pl-3 text-deactivated-nav-text-color">APPS</p>
                </li>
                <li className="my-2 pr-5 w-[200px] rounded-md flex overflow-hidden hover:bg-ice-blue cursor-pointer">
                    <div className="w-1 bg-transparent"></div> 
                    <p className="py-2 pl-3">Calendar</p>
                </li>
                <li className="my-2 pr-5 w-[200px] rounded-md flex overflow-hidden hover:bg-ice-blue cursor-pointer">
                    <div className="w-1 bg-transparent"></div> 
                    <p className="py-2 pl-3">Chat</p>
                </li>
                <li className="my-2 pr-5 w-[200px] rounded-md flex overflow-hidden hover:bg-ice-blue cursor-pointer">
                    <div className="w-1 bg-transparent"></div>
                    <div className="w-full flex place-items-center justify-between">
                        <p className="py-2 pl-3">CRM</p>
                            <FontAwesomeIcon icon={faChevronDown} size="xs" />
                    </div>
                </li>
                <li className="my-2 pr-5 w-[200px] rounded-md flex overflow-hidden hover:bg-ice-blue cursor-pointer">
                    <div className="w-1 bg-transparent"></div>
                    <div className="w-full flex place-items-center justify-between">
                        <p className="py-2 pl-3">Emails</p>
                            <FontAwesomeIcon icon={faChevronDown} size="xs" />
                    </div>
                </li>
                <li className="my-2 pr-5 w-[200px] rounded-md flex overflow-hidden hover:bg-ice-blue cursor-pointer">
                    <div className="w-1 bg-transparent"></div>
                    <div className="w-full flex place-items-center justify-between">
                        <p className="py-2 pl-3">E-commerce</p>
                            <FontAwesomeIcon icon={faChevronDown} size="xs" />
                    </div>
                </li>
                <li className="my-2 pr-5 w-[200px] rounded-md flex overflow-hidden hover:bg-ice-blue cursor-pointer">
                    <div className="w-1 bg-transparent"></div>
                    <div className="w-full flex place-items-center justify-between">
                        <p className="py-2 pl-3">Support Desk</p>
                            <FontAwesomeIcon icon={faChevronDown} size="xs" />
                    </div>
                    </li> 
            </ul>
        </div>
    )
}

export default SideNav