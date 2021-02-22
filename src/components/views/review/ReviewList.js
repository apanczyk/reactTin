import React from "react"
import { Link } from 'react-router-dom'
import { getReviewsApiCall } from '../../../apiCalls/reviewApiCalls'

function ReviewList() {
    const reviewList = getReviewsApiCall()

    return (
        <main>
            <h2>Lista recenzji</h2>
            <table className="table-list">
                <thead>
                    <tr>
                        <th>Imię i Nazwisko</th>
                        <th>Danie</th>
                        <th>Akcje</th>
                    </tr>
                </thead>
                <tbody>
                    {reviewList.map(review => (
                        <tr key={review._id}>
                            <td>{review.visitor.firstName} {review.visitor.lastName}</td>
                            <td>{review.meal.name}</td>
                            <td>
                                <ul className="list-actions">
                                    <li><Link to={`reviews/details/${review._id}`} className="list-actions-button-details">Szczegóły</Link></li>
                                    <li><Link to={`reviews/edit/${review._id}`} className="list-actions-button-edit">Edytuj</Link></li>
                                    <li><Link to={`reviews/delete/${review._id}`} className="list-actions-button-delete">Usuń</Link></li>
                                </ul>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <p className="section-buttons">
                <Link to="/reviews/add" className="button-add">Dodaj nową recenzje</Link>
            </p>
        </main>
    )
}

export default ReviewList