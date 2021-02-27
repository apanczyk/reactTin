import React from 'react'
import { Link } from 'react-router-dom'
import { getVisitorsApiCall } from '../../../apiCalls/visitorApiCalls'
import VisitorListTable from './VisitorListTable'


class VisitorList extends React.Component {

    constructor(props) {
        super(props)
        let notice = props.location.state && props.location.state.notice ? props.location.state.notice : ''
        this.state = {
            error: null,
            isLoaded: false,
            visitors: [],
            notice: notice
        }
    }

    fetchVisitorsList = () => {
        getVisitorsApiCall()
            .then(res => res.json())
            .then(
                (data) => {
                    this.setState({
                        isLoaded: true,
                        visitors: data
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    };

    componentDidMount() {
        this.fetchVisitorsList()
    }


    render() {
        const { error, isLoaded, visitors } = this.state
        let content;

        if (error) {
            content = <p>Błąd: {error.message}</p>
            console.log(visitors)
        } else if (!isLoaded) {
            content = <p>Ładowanie danych gości...</p>
        } else {
            content = <VisitorListTable visitorList={visitors} />
        }

        return (
            <main>
                <h2>Lista gości</h2>
                <p className="success">{this.state.notice}</p>
                { content}
                <p className="section-buttons">
                    <Link to="/visitors/add" className="button-add">Dodaj nowego gościa</Link>
                </p>
            </main >
        )
    }
}

export default VisitorList