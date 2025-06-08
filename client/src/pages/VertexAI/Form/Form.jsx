import React, { useState } from 'react';
import './Form.css';

const Form = () => {
    const fields = [
        { label: "Organization Name:", name: "org", placeholder: "Enter Company Name" },
        { label: "Position Title:", name: "pos", placeholder: "Enter Position Title" },
        { label: "Location:", name: "loc", placeholder: "Enter Location" },
        { label: "URL:", name: "url", placeholder: "Enter URL" }
    ];

    const [formInputs, setFormInputs] = useState({
        org: "",
        pos: "",
        loc: "",
        url: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormInputs({
            ...formInputs,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(`http://127.0.0.1:5000/ryan/submit`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ organization: formInputs.org, position: formInputs.pos, location: formInputs.loc, url: formInputs.url })
            });

            if (response.ok) {
                const data = await response.json();
                console.log("Submission Successful", data);
            } else {
                const error = await response.json();
                console.log("Submission Failed", error);
            }
        } catch (error) {
            console.log(`Error: ${error}`);
        } finally {
            setFormInputs({ org: "", pos: "", loc: "", url: "" });
        }
    };

    return (
        <div className="form-outer-box">
            <form className="form-box" onSubmit={handleSubmit}>
                <div className="form-header">
                    <h3 style={{ margin: 0, textDecoration: "underline" }}>Add new Job Info</h3>
                </div>
                <div className="form-inputs">
                    {fields.map(({ label, name, placeholder }) => (
                        <div className="form-text-boxes" key={name}>
                            <h3 style={{ marginTop: 0 }}>{label}</h3>
                            <input
                                type="text"
                                name={name}
                                style={{ fontSize: "14px", height: "38px" }}
                                value={formInputs[name]}
                                placeholder={placeholder}
                                onChange={handleChange}
                            />
                        </div>
                    ))}
                </div>
                <div className="form-submissions">
                    <div className="lp-login-button">
                        <button className="button-19" role="button" > Add  </button>
                    </div>
                </div>
            </form>
            <div className="form-stats">

            </div>
        </div>
    );
};

export default Form;
