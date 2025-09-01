import PropTypes from "prop-types";

const colorFor = (variant = "primary") => {
    switch (variant) {
        case "primary": return "text-blue-600";
        case "secondary": return "text-blue-400";
        case "success": return "text-green-600";
        case "warning": return "text-amber-600";
        case "danger": return "text-red-600";
        default: return "text-blue-600";
    }
};

const InfoCard = ({ title, image, alt, rows }) => {
    return (
        <div className={`h-full w-full shadow-[0_0_0.5em_rgba(0,0,0,0.38)] flex justify-evenly items-center rounded-[50px] bg-white}`}>
            <img src={image} alt={alt ?? title} className="h-[60%] w-[35%] object-contain" />
            <div className="flex flex-col items-center gap-2">
                <p className="font-medium underline text-xl">{title}</p>
                <div className="flex flex-col items-center gap-2">
                    {rows.map(({ label, value, variant }, i) => (
                        <p key={i} className="text-lg">
                            {label}{label && ":"}{" "}
                            <span className={`font-semibold ${colorFor(variant)} text-center`}>
                                {value ?? "—"}
                            </span>
                        </p>
                    ))}
                </div>
            </div>
        </div>
    );
};

InfoCard.propTypes = {
    title: PropTypes.string.isRequired,
    image: PropTypes.string,
    alt: PropTypes.string,
    rows: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.node.isRequired,
            value: PropTypes.node,
            variant: PropTypes.oneOf(["primary", "secondary", "success", "warning", "danger"])
        })
    ).isRequired,
    className: PropTypes.string
};

export default InfoCard;
