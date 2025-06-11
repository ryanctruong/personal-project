import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Dashboard from '../Dashboard/Dashboard';
import useStore from '../../../utils/VariableStore';

import Delete from "/images/icons/delete.svg";
import './Table.css';

const Table = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(false);

    const {
        refresh,
        viewMore,
        setItem,
        setViewMore,
    } = useStore((state) => ({
        refresh: state.refresh,
        viewMore: state.viewMore,
        setItem: state.setItem,
        setViewMore: state.setViewMore
    }));

    useEffect(() => {
        const fetchItems = async () => {
            setLoading(true);
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

    const getStatusColor = (status) => {
        switch (status) {
            case 'Open':
                return 'green';
            case 'In-progress':
                return 'yellow';
            case 'Rejected':
                return 'red';
            default:
                return 'black';
        }
    };

    const onViewMore = (item) => {
        setItem(item);
        setViewMore(true);
        console.log(item);
    };

    return (
        <div className="table-outer-container">
            <div className="table-results" style={{ display: !viewMore ? "grid" : "block" }}>
                {!viewMore ? (
                    loading ? (
                        <div>Loading...</div>
                    ) : (
                        items.length > 0 ? (
                            items.map((item, index) => (
                                <div className="table-cards" key={item.id || index}>
                                    <h3 style={{ margin: '12px 0' }}>{item.organization}</h3>
                                    <p style={{ margin: '12px 0' }}>{item.position}</p>
                                    <p style={{ margin: '12px 0' }}>
                                        {new Date(item.date_added).toLocaleDateString()}
                                    </p>
                                    <p
                                        style={{
                                            margin: '12px 0',
                                            color: getStatusColor(item.status),
                                            fontWeight: '550',
                                            textDecoration: 'underline',
                                        }}
                                    >
                                        {item.status}
                                    </p>
                                    <button onClick={() => onViewMore(item)}>View More</button>
                                    <img src={Delete} className="delete-btn"></img>
                                </div>
                            ))
                        ) : (
                            <div>No items found.</div>
                        )
                    )
                ) : (
                    <motion.div
                        key="modal"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.5 }}
                        transition={{ duration: 0.5 }}
                        style={{ height: "100%", width: "100%" }}
                    >
                        <Dashboard />
                    </motion.div>
                )}
            </div>
        </div >
    );
};

export default Table;
