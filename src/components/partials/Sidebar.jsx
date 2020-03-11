import React from 'react'

export default function Sidebar() {
    return (
    <div className="sidebar">
        <h3>Links</h3>
        <ul style={{'listStyle': 'none'}}>
            <li><a className="btn sidebar-btn" href="/github"><i className="fab fa-github"></i> Github</a></li>
            <li><a className="btn sidebar-btn" href="/contact"><i className="fas fa-envelope-square"></i> Contact</a></li>
        </ul>
    </div>
    )
}
