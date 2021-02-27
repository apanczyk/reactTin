import React from 'react';
import { Link } from 'react-router-dom';

function VisitorListTableRow(props) {
    const visitor = props.visitorData
    return (
        <tr>
            <td>{visitor.firstName}</td>
            <td>{visitor.lastName}</td>
            <td>
                <ul className="list-actions">
                    <li><Link to={`/visitors/details/${visitor.id}`} className="list-actions-button-details">Szczegóły</Link></li>
                    <li><Link to={`/visitors/edit/${visitor.id}`} className="list-actions-button-edit">Edytuj</Link></li>
                    <li><Link to={`/visitors/delete/${visitor.id}`} className="list-actions-button-delete">Usuń</Link></li>
                </ul>
            </td>
        </tr>
    )
}

export default VisitorListTableRow