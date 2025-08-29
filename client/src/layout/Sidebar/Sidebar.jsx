import { FaHome, FaTools, FaProjectDiagram, FaEnvelope } from "react-icons/fa";

const Sidebar = () => {
    return (
        <div className="group h-[calc(100vh-64px)] w-[64px] hover:w-[200px] border-r border-gray-300 absolute bottom-0 left-0 transition-[width] duration-300 ease-in-out flex flex-col pt-4 gap-12">
            <div className="flex items-center px-2 gap-4 hover:cursor-pointer">
                <div className="p-2 rounded-lg bg-indigo-500 text-white">
                    <FaHome size="1.5em" className="shrink-0" />
                </div>
                <span className="whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-400 text-[18px] font-medium text-gray-800 hover:underline">
                    Home
                </span>
            </div>
            <div className="flex items-center px-2 gap-4 hover:cursor-pointer">
                <div className="p-2 rounded-lg bg-teal-500 text-white">
                    <FaTools size="1.5em" className="shrink-0" />
                </div>
                <span className="whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-400 text-[18px] font-medium text-gray-800 hover:underline">
                    Skills
                </span>
            </div>
            <div className="flex items-center px-2 gap-4 hover:cursor-pointer">
                <div className="p-2 rounded-lg bg-sky-500 text-white">
                    <FaProjectDiagram size="1.5em" className="shrink-0" />
                </div>
                <span className="whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-400 text-[18px] font-medium text-gray-800 hover:underline">
                    Projects
                </span>
            </div>
            <div className="flex items-center px-2 gap-4 hover:cursor-pointer">
                <div className="p-2 rounded-lg bg-emerald-500 text-white">
                    <FaEnvelope size="1.5em" className="shrink-0" />
                </div>
                <span className="whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-400 text-[18px] font-medium text-gray-800 hover:underline">
                    Contact
                </span>
            </div>
        </div>
    );
};

export default Sidebar;
