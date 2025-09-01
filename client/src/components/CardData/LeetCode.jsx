import Card from "../common/Card";
import useLeetCode from "../../services/hooks/leetCode";
import Cat from "/images/profile-box/meme.png";

const LeetCodeStats = () => {
    const { easy, medium, hard } = useLeetCode();

    return (
        <Card
            title="LeetCode Stats"
            image={Cat}
            alt="Cat"
            rows={[
                { label: "Easy Problems", value: easy, variant: "primary" },
                { label: "Medium Problems", value: medium, variant: "secondary" },
                { label: "Hard Problems", value: hard, variant: "primary" }
            ]}
        />
    );
};

export default LeetCodeStats;
