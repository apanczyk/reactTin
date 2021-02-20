import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { getMealByIdApiCall } from '../../../apiCalls/mealApiCalls'

function mealDetails() {
    let { mealId } = useParams()
    mealId = parseInt(mealId)
    const meal = getMealByIdApiCall(mealId)

    return (
        <main>
            <h2>Szczegóły gościa</h2>
            <p>Imię: {meal.firstName}</p>
            <p>Nazwisko: {meal.lastName} </p>
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
                    {meal.reviews.map(
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
            <div className="form-buttons">
                <Link to="/meals" className="form-button-submit">Powrót</Link>
            </div>
        </main>
    )
}
export default MealDetails