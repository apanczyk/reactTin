import React from 'react'
import { Link } from 'react-router-dom'
import { getMealsApiCall } from '../../../apiCalls/mealApiCalls'


function MealList() {
    const mealList = getMealsApiCall();
    return (
        <main>
            <h2>Lista posiłków</h2>
            <table className="table-list">
                <thead>
                    <tr>
                        <th>Nazwa</th>
                        <th>Akcje</th>
                    </tr>
                </thead>
                <tbody>
                    {mealList.map(meal => (
                        <tr key={meal._id}>
                            <td>{meal.name}</td>
                            <td>
                                <ul className="list-actions">
                                    <li><Link to={`meals/details/${meal._id}`} className="list-actions-button-details">Szczegóły</Link></li>
                                    <li><Link to={`meals/edit/${meal._id}`} className="list-actions-button-edit">Edytuj</Link></li>
                                    <li><Link to={`meals/delete/${meal._id}`} className="list-actions-button-delete">Usuń</Link></li>
                                </ul>
                            </td>
                        </tr>
                    ))}

                </tbody>
            </table>
            <p><Link to="meals/add" className="button-add">Dodaj nowy posiłek</Link></p>
        </main>
    )
}

export default MealList