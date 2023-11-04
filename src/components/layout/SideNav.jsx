import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons'

const SideNav = () => {
    return (
        <div className="pr-5 fixed bg-white h-full mt-[96px] z-20">
            <ul className="text-sm">
                <li className="my-2 pr-5 w-[200px] rounded-md bg-ice-blue flex overflow-hidden">
                    <div className="w-1 bg-bright-blue"></div>
                    <div className="w-full flex place-items-center justify-between">
                        <p className="py-2 pl-3 text-bright-blue">Dashboard</p>
                            <FontAwesomeIcon icon={faChevronUp} color='#007DFC' size="xs" />
                    </div>
                </li>
                <li className="my-2 pr-5 w-[200px] rounded-md flex overflow-hidden hover:bg-ice-blue">
                    <div className="w-1 bg-transparent"></div> 
                    <p className="py-2 pl-3">File Manager</p>
                </li>
                <li className="my-2 pr-5 w-[200px] rounded-md flex overflow-hidden hover:bg-ice-blue">
                    <div className="w-1 bg-transparent"></div> 
                    <p className="py-2 pl-3">Changelog</p>
                </li>
                <li className="my-2 pr-5 w-[200px] rounded-md flex overflow-hidden hover:bg-ice-blue">
                    <div className="w-1 bg-transparent"></div> 
                    <p className="py-2 pl-3">APPS</p>
                </li>
                <li className="my-2 pr-5 w-[200px] rounded-md flex overflow-hidden hover:bg-ice-blue">
                    <div className="w-1 bg-transparent"></div> 
                    <p className="py-2 pl-3">Calendar</p>
                </li>
                <li className="my-2 pr-5 w-[200px] rounded-md flex overflow-hidden hover:bg-ice-blue">
                    <div className="w-1 bg-transparent"></div> 
                    <p className="py-2 pl-3">Chat</p>
                </li>
                <li className="my-2 pr-5 w-[200px] rounded-md flex overflow-hidden hover:bg-ice-blue">
                    <div className="w-1 bg-transparent"></div>
                    <div className="w-full flex place-items-center justify-between">
                        <p className="py-2 pl-3">CRM</p>
                            <FontAwesomeIcon icon={faChevronDown} size="xs" />
                    </div>
                </li>
                <li className="my-2 pr-5 w-[200px] rounded-md flex overflow-hidden hover:bg-ice-blue">
                    <div className="w-1 bg-transparent"></div>
                    <div className="w-full flex place-items-center justify-between">
                        <p className="py-2 pl-3">Emails</p>
                            <FontAwesomeIcon icon={faChevronDown} size="xs" />
                    </div>
                </li>
                <li className="my-2 pr-5 w-[200px] rounded-md flex overflow-hidden hover:bg-ice-blue">
                    <div className="w-1 bg-transparent"></div>
                    <div className="w-full flex place-items-center justify-between">
                        <p className="py-2 pl-3">E-commerce</p>
                            <FontAwesomeIcon icon={faChevronDown} size="xs" />
                    </div>
                </li>
                <li className="my-2 pr-5 w-[200px] rounded-md flex overflow-hidden hover:bg-ice-blue">
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