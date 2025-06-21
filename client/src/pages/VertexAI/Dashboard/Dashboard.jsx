import React, { useState, useEffect, useMemo } from 'react';
import useStore from '../../../utils/VariableStore';
import { marked } from 'marked';
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
    const { item, setItem, setRefresh, setViewMore } = useStore(state => ({
        item: state.item,
        setItem: state.setItem,
        setRefresh: state.setRefresh,
        setViewMore: state.setViewMore
    }));

    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState(item);
    const [loading, setLoading] = useState(false);
    const [results, setResults] = useState("");

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

    const handleSave = async () => {
        try {
            const response = await fetch('http://127.0.0.1:5000/ryan/edit', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ id: item.id, ...formData }),
            });
            if (!response.ok) {
                throw new Error(`Error updating item: ${response.statusText}`);
            }
            console.log('Update success');
            setItem(formData);
        } catch (err) {
            console.log('Error updating item:', err);
        } finally {
            setRefresh(prev => !prev);
            setIsEditing(false);
        }
    };

    const handleDR = async () => {
        setLoading(true);
        try {
            const response = await fetch('http://127.0.0.1:5000/ryan/deep-research', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    job_title: item.position,
                    job_description_url: item.url,
                    company_name: item.organization,
                }),
            })
            if (!response.ok) {
                throw new Error(`Error: ${response.statusText}`)
            }

            const text = await response.text()
            console.log(text);
            setResults(text)
        } catch (err) {
            console.error('Error generating deep research:', err)
            setResults('An error occurred while generating results.')
        } finally {
            setLoading(false);
        }
    }

    const html = useMemo(() => marked.parse(results || ''), [results])

    return (
        <div className="dashboard">
            <div className="dashboard-header">
                <h3>{item.organization}</h3>
            </div>
            <div className="dashboard-body">
                <div className="vertex-ai-results">
                    {loading ? (
                        <span className="loader"></span>
                    ) : results ? (
                        <div
                            className="markdown"
                            dangerouslySetInnerHTML={{ __html: html }}
                        />
                    ) : (
                        <button onClick={handleDR}>Generate Deep Research</button>
                    )}
                </div>
                <div className="dashboard-info">
                    <h3 style={{ margin: "0px" }}>General Information</h3>

                    {fields.map(({ label, name }) => (
                        name === 'notes' ? (
                            <div key={name} style={{ width: "100%" }}>
                                {isEditing && (
                                    <label
                                        style={{
                                            fontSize: "16px",
                                            fontWeight: "700",
                                            textDecoration: "underline",
                                            display: "block",
                                            marginBottom: "0.5em"
                                        }}
                                    >
                                        {label}:
                                    </label>
                                )}
                                <textarea
                                    rows={8}
                                    name={name}
                                    value={formData[name] || ''}
                                    onChange={handleChange}
                                    readOnly={!isEditing}
                                    style={{
                                        width: "100%",
                                        resize: "none"
                                    }}
                                />
                            </div>
                        ) : isEditing ? (
                            <div key={name} style={{ width: "100%" }}>
                                <label
                                    style={{
                                        fontSize: "16px",
                                        fontWeight: "700",
                                        textDecoration: "underline"
                                    }}
                                >
                                    {label}:
                                </label>
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
                                    <a
                                        href={item[name]}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Job Description URL
                                    </a>
                                ) : (
                                    item[name]
                                )}
                            </p>
                        )
                    ))}

                    <div className="dashboard-actions">
                        <button onClick={isEditing ? handleSave : handleEditToggle}>
                            {isEditing ? 'Save' : 'Edit'}
                        </button>
                        <button onClick={handleOnClose}>Close</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
