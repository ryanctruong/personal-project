import beanhead from '/beanhead.svg'

const Header = () => {
    return (
        <div className="absolute top-0 left-0 w-full h-[64px] border-b border-gray-300 p-2 flex items-center gap-4 bg-white shadow-md">
            <img src={beanhead} alt="Bean Head Logo" className="h-full"/>
            <p className='text-[21px] font-semibold text-[#808080]'>Ryan Truong</p>
        </div>
    )
}

export default Header;