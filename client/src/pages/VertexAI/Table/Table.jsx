import React, { useState, useEffect } from 'react';
import './Table.css';

const Table = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchItems = async () => {
            try {
                const response = await fetch('http://127.0.0.1:5000/ryan/items');
                if (!response.ok) {
                    throw new Error(`Error fetching items: ${response.statusText}`);
                }
                const data = await response.json();
                setItems(data);
            } catch (err) {
                console.error('Error fetching items from API:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchItems();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="full-table-container">
            <div className="full-table">
                <table>
                    <thead>
                        <tr>
                            <th>Date Applied</th>
                            <th>Organization Name</th>
                            <th>Position Title</th>
                            <th>Location</th>
                            <th>URL</th>
                            <th>Notes</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map(item => (
                            <tr key={item.id}>
                                <td>{new Date(item.date_added).toLocaleDateString()}</td>
                                <td>{item.organization}</td>
                                <td>{item.position}</td>
                                <td>{item.location}</td>
                                <td>
                                    <a href={item.url} target="_blank" rel="noopener noreferrer">
                                        {item.url}
                                    </a>
                                </td>
                                <td>{item.notes}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Table;
