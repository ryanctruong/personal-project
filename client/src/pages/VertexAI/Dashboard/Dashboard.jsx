import React, { useState, useEffect } from 'react';
import useStore from '../../../utils/VariableStore';
import './Dashboard.css';

const fields = [
    { label: 'Date', name: 'date_added' },
    { label: 'Position', name: 'position' },
    { label: 'Location', name: 'location' },
    { label: 'Status', name: 'status' },
    { label: 'Url', name: 'url' },
    { label: 'Notes', name: 'notes' }
];

const Dashboard = () => {
    const { item, setItem, setViewMore } = useStore(state => ({
        item: state.item,
        setItem: state.setItem,
        setViewMore: state.setViewMore
    }));

    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState(item);

    useEffect(() => {
        setFormData(item);
    }, [item]);

    const handleOnClose = () => {
        setItem({});
        setViewMore(false);
    };

    const handleEditToggle = () => setIsEditing(prev => !prev);

    const handleChange = ({ target: { name, value } }) =>
        setFormData(prev => ({ ...prev, [name]: value }));

    const handleSave = () => {
        setItem(formData);
        setIsEditing(false);
    };

    return (
        <div className="dashboard">
            <div className="dashboard-header">
                <h3>{item.organization}</h3>
            </div>
            <div className="dashboard-body">
                <div className="vertex-ai-results">
                    <button>Generate Deep Research</button>
                </div>
                <div className="dashboard-info">
                    <h3>General Information</h3>
                    {fields.map(({ label, name }) =>
                        isEditing ? (
                            <div key={name} style={{ width: "100%" }}>
                                <label style={{ fontSize: "16px", fontWeight: "700", textDecoration: "underline" }}>{label}: </label>
                                <input
                                    type="text"
                                    name={name}
                                    value={formData[name] || ''}
                                    onChange={handleChange}
                                />
                            </div>
                        ) : (
                            <p key={name}>
                                {name === 'url' && item[name] ? (
                                    <a href={item[name]} target="_blank" rel="noopener noreferrer">
                                        {item[name]}
                                    </a>
                                ) : (
                                    item[name]
                                )}
                            </p>
                        )
                    )}
                    <div className="dashboard-actions">
                        <button onClick={isEditing ? handleSave : handleEditToggle}>
                            {isEditing ? 'Save' : 'Edit'}
                        </button>
                        <button onClick={() => handleOnClose()}>Close</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
