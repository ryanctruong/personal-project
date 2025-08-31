import beanhead from '/beanhead-tongue.svg'

const Profile = () => {
    return (
        <div className="h-[100%] w-[30%] flex justify-center flex-col items-center rounded-[50px] gap-8 shadow-[0_0_0.5em_rgba(0,0,0,0.38)] bg-white">
            <div className="h-64 w-64 rounded-full border-2 border-black overflow-hidden">
                <img src={beanhead} alt="Bean Head Logo" className="h-full w-full object-cover"/>
            </div>
            <div className="flex flex-col gap-4 items-center">
                <p className='text-2xl font-semibold'>Ryan Truong</p>
                <p className='text-lg'>Software Engineer</p>
                <p className='text-lg font-medium text-blue-600'>HCA Healthcare</p>
                <p className='text-lg font-medium text-blue-600'>Belmont Unviersity</p>
            </div>
        </div>
    );
}

export default Profile;