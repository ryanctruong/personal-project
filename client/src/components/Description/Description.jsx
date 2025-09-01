import { ABOUT_ME } from "../../utils/Text";

const Description = () => {
    return (
        <div className="h-[65%] w-full shadow-[0_0_0.5em_rgba(0,0,0,0.38)] flex flex-col rounded-[50px] gap-4 p-6 bg-white">
            <div className="">
                <p className='text-2xl font-semibold'>About Me!</p>
            </div>
            <div className="">
                <ABOUT_ME />
            </div>
        </div>
    );
}

export default Description;