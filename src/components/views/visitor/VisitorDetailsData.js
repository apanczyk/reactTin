import React from 'react';
import { getFormattedDate } from '../../../helpers/dateHelper';

export function VisitorDetailsData(props) {
    const visitor = props.visitorData
    return (
        <React.Fragment>
            <form className="form">
                <p>Imię: {visitor.firstName}</p>
                <p>Nazwisko: {visitor.lastName} </p>
            </form>

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
                    {console.log(visitor)}
                    {visitor.reviews.map(
                        review =>
                            <tr key={review.id}>
                                <td>{review.meal.name}</td>
                                <td>{review.rate}</td>
                                <td>{review.date ? getFormattedDate(review.date) : ""}</td>
                                <td>{review.message}</td>
                            </tr>
                    )}
                </tbody>
            </table>
        </React.Fragment>
    )
}

export default VisitorDetailsData