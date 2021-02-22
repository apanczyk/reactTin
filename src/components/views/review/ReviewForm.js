import React from 'react'
import { Link } from 'react-router-dom'
import { getVisitorsApiCall } from '../../../apiCalls/visitorApiCalls'
import { getMealsApiCall } from '../../../apiCalls/mealApiCalls'

class ReviewForm extends React.Component {
    render() {
        const allVisitors = getVisitorsApiCall()
        const allMeals = getMealsApiCall()

        return (
            <main>
                <h2>Nowa recenzja</h2>
                <form className="form">
                    <label htmlFor="visitor">Gość: <abbr title="required" aria-label="required">*</abbr></label>
                    <select id="visitor" name="visitorId" required>
                        <option value="">--- Wybierz gościa ---</option>
                        {allVisitors.map(visitor => 
                            (<option key={visitor._id} value={visitor._id} label={visitor.firstName + " " + visitor.lastName}></option>)    
                        )}
                    </select>
                    <span id="errorVisitor" className="errors-text"></span>
                    <label htmlFor="meal">Danie: <abbr title="required" aria-label="required">*</abbr></label>
                    <select id="meal" name="mealId" required>
                        <option value="">--- Wybierz danie  ---</option>
                        {allMeals.map(meal => 
                            (<option key={meal._id} value={meal._id} label={meal.name}></option>)    
                        )}
                    </select>
                    <span id="errorMeal" className="errors-text"></span>
                    <label htmlFor="rate">Ocena</label>
                    <input type="number" name="rate" value="" id="rate" placeholder="2000 - 1000000" />
                    <span id="errorRate" className="errors-text"></span>
                    <label htmlFor="date">Data</label>
                    <input type="date" name="date" value="" id="date" />
                    <span id="errorDate" className="errors-text"></span>
                    <label htmlFor="message">Opinia</label>
                    <input type="date" name="message" value="" id="message" />
                    <span id="errorMessage" className="errors-text"></span>
                    <div className="form-buttons">
                        <p id="errorsSummary" className="errors-text"></p>
                        <input className="form-button-submit" type="submit" value="Dodaj" />
                        <Link to="/reviews" className="form-button-cancel">Anuluj</Link>
                    </div>
                </form>
            </main>
        )
    }
}

export default ReviewForm