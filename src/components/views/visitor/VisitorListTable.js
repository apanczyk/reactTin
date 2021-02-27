import React from 'react';
import VisitorListTableRow from './VisitorListTableRow'

export function VisitorListTable(props) {
    const visitors = props.visitorList
    return (
        <table className="table-list" >
            <thead>
                <tr>
                    <th>Imię</th>
                    <th>Nazwisko</th>
                    <th>Akcje</th>
                </tr>
            </thead>
            <tbody>
                {visitors.map(visitor =>
                    <VisitorListTableRow visitorData={visitor} key={visitor.id} />
                )}
            </tbody>
        </table >
    )
}

export default VisitorListTable