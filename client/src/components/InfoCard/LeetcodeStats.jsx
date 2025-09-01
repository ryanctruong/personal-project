import useLeetCode from '../../services/hooks/leetCode';
import Cat from '/images/profile-box/meme.png'

const LeetCodeStats = () => {
    const { easy, medium, hard } = useLeetCode();

    return (
        <div className="h-full w-full shadow-[0_0_0.5em_rgba(0,0,0,0.38)] flex justify-evenly items-center rounded-[50px] bg-white">
            <img src={Cat} alt="Cat" className="h-[60%] w-[35%]" />
            <div className="flex flex-col items-center gap-2">
                <p className="font-medium underline text-xl">LeetCode Stats</p>
                <div className="flex flex-col items-center gap-2">
                    <p className="text-lg">Easy Problems: <span className="font-medium text-blue-600">{easy}</span></p>
                    <p className="text-lg">Medium Problems: <span className="font-medium text-blue-400">{medium}</span></p>
                    <p className="text-lg">Hard Problems: <span className="font-medium text-blue-600">{hard}</span></p>
                </div>
            </div>
        </div>
    );
};

export default LeetCodeStats;