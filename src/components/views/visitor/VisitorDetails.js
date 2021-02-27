import React from 'react'
import { Link } from 'react-router-dom'
import { getVisitorByIdApiCall } from '../../../apiCalls/visitorApiCalls'
import VisitorDetailsData from './VisitorDetailsData'

class VisitorDetails extends React.Component {

    constructor(props) {
        super(props)
        let { visitorId } = props.match.params
        this.state = {
            visitorId: visitorId,
            visitor: null,
            error: null,
            isLoaded: false,
            message: null
        }
    }


    fetchVisitorDetails = () => {
        getVisitorByIdApiCall(this.state.visitorId)
            .then(res => res.json())
            .then(
                (data) => {
                    if (data.message) {
                        this.setState({
                            visitor: null,
                            message: data.message
                        })
                    } else {
                        this.setState({
                            visitor: data,
                            message: null
                        })
                    }
                    this.setState({
                        isLoaded: true
                    })
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    })
                })
    }

    componentDidMount() {
        this.fetchVisitorDetails()
    }

    render() {
        const { visitor, error, isLoaded, message } = this.state
        let content;

        if (error) {
            content = <p>Błąd: {error.message}</p>
        } else if (!isLoaded) {
            content = <p>Ładowanie danych gościa</p>
        } else if (message) {
            content = <p>{message}</p>
        } else {
            content = <VisitorDetailsData visitorData={visitor} />
        }
        return (
            <main>
                <h2>Szczegóły gościa</h2>
                {content}
                <div className="form-buttons">
                    <Link to="/visitors" className="form-button-submit">Powrót</Link>
                </div>
            </main>
        )
    }
}
export default VisitorDetails