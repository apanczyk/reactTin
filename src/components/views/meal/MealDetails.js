import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { getMealByIdApiCall } from '../../../apiCalls/mealApiCalls'

function MealDetails() {
    let { mealId } = useParams()
    mealId = parseInt(mealId)
    const meal = getMealByIdApiCall(mealId)

    return (
        <main>
            <h2>Szczegóły dania</h2>
            <p>Nazwa: {meal.name}</p>
            <p>Opis: {meal.description} </p>
            <h2>Ocenione przez</h2>
            <table className="table-list">
                <thead>
                    <tr>
                        <th>Imie i nazwisko</th>
                        <th>Ocena</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    {meal.reviews.map(
                        review =>
                            <tr key={review._id}>
                                <td>{review.visitor.firstName} {review.visitor.lastName}</td>
                                <td>{review.rate}</td>
                                <td>{review.date}</td>
                            </tr>
                    )}
                </tbody>
            </table>
            <div className="form-buttons">
                <Link to="/meals" className="form-button-submit">Powrót</Link>
            </div>
        </main>
    )
}
export default MealDetails