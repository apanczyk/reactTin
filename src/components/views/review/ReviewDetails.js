import React from 'react'
import { Link } from 'react-router-dom'
import { getReviewByIdApiCall } from '../../../apiCalls/reviewApiCalls'

function ReviewDetails({ match }) {
    const reviewId = parseInt(match.params.reviewId)
    const review = getReviewByIdApiCall(reviewId)

    return (
        <main>
            <h2>Szczegóły recenzji</h2>
            <p>Imię i nazwisko: {review.visitor.firstName} {review.visitor.lastName}</p>
            <p>Danie: {review.meal.name} </p>
            <p>Data: {review.date} </p>
            <p>Ocena: {review.rate} </p>
            <div className="form-buttons">
                <Link to="/review" className="form-button-submit">Powrót</Link>
            </div>
        </main>
    )
}

export default ReviewDetails
