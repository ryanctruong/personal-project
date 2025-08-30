import { FaHome, FaTools, FaProjectDiagram, FaEnvelope } from "react-icons/fa";

const items = [
    { label: "Home", Icon: FaHome, bgClass: "bg-indigo-500" },
    { label: "Skills", Icon: FaTools, bgClass: "bg-teal-500" },
    { label: "Projects", Icon: FaProjectDiagram, bgClass: "bg-sky-500" },
    { label: "Socials", Icon: FaEnvelope, bgClass: "bg-emerald-500" },
];

const SidebarItem = ({ Icon, label, bgClass }) => (
    <div className="flex items-center px-2 gap-4 hover:cursor-pointer">
        <div className={`p-2 rounded-lg ${bgClass} text-white`}>
            <Icon size="1.5em" className="shrink-0" />
        </div>
        <span className="whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-400 text-[18px] font-medium text-gray-800 hover:underline">
            {label}
        </span>
    </div>
);

const Sidebar = () => {
    return (
        <div className="group h-[calc(100vh-64px)] w-[64px] hover:w-[200px] border-r border-gray-300 absolute bottom-0 left-0 transition-[width] duration-300 ease-in-out flex flex-col pt-4 gap-8">
            {items.map((it) => (
                <SidebarItem key={it.label} {...it} />
            ))}
        </div>
    );
};

export default Sidebar;
