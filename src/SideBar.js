import { BiAccessibility,BiBulb,BiCool,BiDollar } from "react-icons/bi";

const SideBar = () => {
    return (
    <div className="top-0 left-0 h-screen w-16 m-0 flex flex-col bg-gray-900 text-white shadow-white">
        <SideBarIcon icon={<BiAccessibility size="28"/>}/>
        <SideBarIcon icon={<BiBulb size="28"/>}/>
        <SideBarIcon icon={<BiCool size="28"/>}/>
        <SideBarIcon icon={<BiDollar size="28"/>}/>
    </div>
)};

const SideBarIcon = ({ icon, text='tooltip' }) => {
    return (
    <div className="SideBarIcon">
        {icon}
        <span className="sidebar-tooltip">
            {text}
        </span>
    </div>
)};

export default SideBar;
