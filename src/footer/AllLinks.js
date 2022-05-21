import React from 'react'
import { Link } from 'react-router-dom';

export default function AllLinks({ menulink }) {
    return (
        <div>
            {menulink ?
                <>
                    <h2>{menulink.title}</h2>
                    <ul>
                        {menulink.elements.map((el) => (
                            <li key={Math.random()}><Link to={el.path}>{el.name}</Link></li>
                        ))}
                    </ul>
                </>
                : null}
        </div>
    )
}
