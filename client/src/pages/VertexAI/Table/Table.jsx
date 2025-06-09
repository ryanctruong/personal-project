import React, { useState, useEffect } from 'react';
import useStore from '../../../utils/VariableStore';
import './Table.css';

const Table = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(false);
    const {
        refresh
    } = useStore((state) => ({
        refresh: state.refresh
    }));
    
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
    }, [refresh]);

    return (
        <div className="table-outer-container">
            <div className="table-results">
                {items && items.length > 0 ? (
                    items.map((item, index) => (
                        <div className="table-cards" key={item.id || index}>
                            <h3 style={{ margin: "12px 0" }}>{item.organization}</h3>
                            <p style={{ margin: "12px 0" }}>{item.position}</p>
                            <p style={{ margin: "12px 0" }}>{new Date(item.date_added).toLocaleDateString()}</p>
                            <p style={{ margin: "12px 0" }}>{item.status}</p>
                            <button>View More</button>
                        </div>
                    ))
                ) : <div>Loading...</div>}

            </div>
        </div>
    );
};

export default Table;
