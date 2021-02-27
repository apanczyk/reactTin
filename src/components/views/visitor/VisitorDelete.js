import { deleteVisitorByIdApiCall } from '../../../apiCalls/visitorApiCalls'
import React from "react"
import { Redirect } from "react-router-dom"

class VisitorDelete extends React.Component {

    constructor(props) {
        super(props)
        let { visitorId } = props.match.params
        this.state = {
            visitorId: visitorId,
            visitor: null,
            error: null,
            isLoaded: false,
            message: null,
            redirect: false
        }
    }


    fetchVisitorsList = () => {
        deleteVisitorByIdApiCall(this.state.visitorId);

    };

    componentDidMount() {
        this.fetchVisitorsList()
    }

    render() {
        return (
            <Redirect to={{
                pathname: "/visitors/"
            }} />
        )

    }
}
export default VisitorDelete