import { ABOUT_ME } from "../../utils/Text";

const Description = () => {
    return (
        <div className="h-[60%] w-full border-2 border-black flex flex-col rounded-[50px] gap-4 p-6">
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