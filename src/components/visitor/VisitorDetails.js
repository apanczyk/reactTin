import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { getVisitorByIdApiCall } from '../../apiCalls/visitorApiCalls'

function VisitorDetails() {
    let { visitorId } = useParams()
    visitorId = parseInt(visitorId)
    const visitor = getVisitorByIdApiCall(visitorId)

    return (
        <main>
            <h2>Szczegóły gościa</h2>
            <p>Imię: {visitor.firstName}</p>
            <p>Nazwisko: {visitor.lastName} </p>
            <h2>Szczegóły recenzji</h2>
            <table className="table-list">
                <thead>
                    <tr>
                        <th>Danie</th>
                        <th>Ocena</th>
                        <th>Data</th>
                        <th>Opis</th>
                    </tr>
                </thead>
                <tbody>
                    {visitor.reviews.map(
                        review =>
                            <tr key={review._id}>
                                <td>{review.meal.name}</td>
                                <td>{review.rate}</td>
                                <td>{review.date}</td>
                                <td>{review.message}</td>
                            </tr>
                    )}
                </tbody>
            </table>
            <div className="section-buttons">
                <Link to="/visitors" className="button-back">Powrót</Link>
            </div>
        </main>
    )
}
export default VisitorDetails