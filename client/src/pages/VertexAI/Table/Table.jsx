import React, { useState, useEffect } from 'react';

import './Table.css'

const Table = () => {
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
                            <th>Status</th>
                            <th>Notes</th>
                            <th>Get Info</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>October 23, 2023</td>
                            <td>HCA Healthcare</td>
                            <td>Software Engineer</td>
                            <td>Nashville, TN</td>
                            <td><a href="https://www.hcahealthcare.com" target="_blank" rel="noopener noreferrer">HCA Healthcare</a></td>
                            <td>
                                <select defaultValue="">
                                    <option value="" disabled>Select status</option>
                                    <option value="open">Open</option>
                                    <option value="closed">Closed</option>
                                    <option value="coding-assessment">Coding Assessment</option>
                                    <option value="interview">Interview</option>
                                </select>
                            </td>
                            <td><textarea defaultValue={""} /></td>
                            <td><button>Click Me!</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Table;