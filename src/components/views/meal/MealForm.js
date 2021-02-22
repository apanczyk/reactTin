import React from "react"
import { Link } from "react-router-dom"

class MealForm extends React.Component {
    render() {
        return (
            <main>
                <h2>Nowy gość</h2>
                <form className="form">
                    <label htmlFor="name">Nazwa:<abbr title="required" aria-label="required">*</abbr></label>
                    <input type="text" name="firstName" id="firstName" placeholder="2-50 znaków" value="" />
                    <span id="errorMeal" className="errors-text"></span>
                    <label htmlFor="description">Opis:<abbr title="required" aria-label="required">*</abbr></label>
                    <textarea type="text" name="description" id="description" maxlength="100" rows="3" placeholder="2-100 znaków"/>
                    <span id="errorDescription" className="errors-text"></span>
                    <div className="form-buttons">
                        <p id="errorsSummary" className="errors-text"></p>
                        <input className="form-button-submit" type="submit" value="Dodaj" />
                        <Link to="/meals" className="form-button-cancel">Anuluj</Link>
                    </div>
                </form>
            </main >
        )
    }
}

export default MealForm