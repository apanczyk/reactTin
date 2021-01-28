import React from 'react'
import { Link } from 'react-router-dom'
import { getVisitorsApiCall } from '../../apiCalls/visitorApiCalls'


function VisitorList() {
    const visitorList = getVisitorsApiCall();
    return (
        <main>
            <h2>Lista gości</h2>
            <table className="table-list">
                <thead>
                    <tr>
                        <th>Imię</th>
                        <th>Nazwisko</th>
                        <th>Akcje</th>
                    </tr>
                </thead>
                <tbody>
                    {visitorList.map(visitor => (
                        <tr key={visitor._id}>
                            <td>{visitor.firstName}</td>
                            <td>{visitor.lastName}</td>
                            <td>
                                <ul className="list-actions">
                                    <li><Link to={`visitors/details/${visitor._id}`} className="list-actions-button-details">Szczegóły</Link></li>
                                    <li><Link to={`visitors/edit/${visitor._id}`} className="list-actions-button-edit">Edytuj</Link></li>
                                    <li><Link to={`visitors/delete/${visitor._id}`} className="list-actions-button-delete">Usuń</Link></li>
                                </ul>
                            </td>
                        </tr>
                    ))}

                </tbody>
            </table>
            <p><Link to="visitors/add" className="button-add">Dodaj nowego gościa</Link></p>
        </main>
    )
}

export default VisitorList