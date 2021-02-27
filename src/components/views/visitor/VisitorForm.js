import React from "react"
import { Redirect } from "react-router-dom"
import { formMode } from '../../../helpers/formHelper'
import { checkRequired, checkTextLengthRange } from '../../../helpers/validationCommon'
import { getVisitorByIdApiCall, updateVisitorApiCall, addVisitorApiCall } from '../../../apiCalls/visitorApiCalls'
import { FormInput } from '../../form/FormInput'
import { FormButtons } from '../../form/FormButtons'


class VisitorForm extends React.Component {

    constructor(props) {
        super(props)

        const paramsVisitorId = props.match.params.visitorId
        const currentFormMode = paramsVisitorId ? formMode.EDIT : formMode.NEW

        this.state = {
            visitorId: paramsVisitorId,
            visitor: {
                firstName: '',
                lastName: ''
            },
            errors: {
                firstName: '',
                lastName: ''
            },
            formMode: currentFormMode,
            redirect: false,
            error: null
        }
    }

    fetchVisitorsDetails = () => {
        getVisitorByIdApiCall(this.state.visitorId)
            .then(res => res.json())
            .then(
                (data) => {
                    if (data.message) {
                        this.setState({
                            message: data.message
                        })
                    } else {
                        this.setState({
                            visitor: data,
                            message: null
                        })
                    }
                    this.setState({
                        isLoaded: true,
                    })
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    })
                })
    }

    componentDidMount = () => {
        const currentFormMode = this.state.formMode
        if (currentFormMode === formMode.EDIT) {
            this.fetchVisitorsDetails()
        }
    }

    handleChange = (event) => {
        const { name, value } = event.target
        const visitor = { ...this.state.visitor }
        visitor[name] = value

        const errorMessage = this.validateField(name, value)
        const errors = { ...this.state.errors }
        errors[name] = errorMessage

        this.setState({
            visitor: visitor,
            errors: errors
        })
    }

    validateField = (fieldName, fieldValue) => {
        let errorMessage = '';
        if (fieldName === 'firstName') {
            if (!checkRequired(fieldValue)) {
                errorMessage = 'Pole jest wymagane'
            } else if (!checkTextLengthRange(fieldValue, 2, 60)) {
                errorMessage = 'Pole powinno zawierać od 2 do 60 znaków'
            }
        }
        if (fieldName === 'lastName') {
            if (!checkRequired(fieldValue)) {
                errorMessage = 'Pole jest wymagane'
            } else if (!checkTextLengthRange(fieldValue, 2, 60)) {
                errorMessage = 'Pole powinno zawierać od 2 do 60 znaków'
            }
        }

        return errorMessage
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const isValid = this.validateForm()
        if (isValid) {
            const
                visitor = this.state.visitor,
                currentFormMode = this.state.formMode
            let
                promise,
                response;
            if (currentFormMode === formMode.NEW) {
                promise = addVisitorApiCall(visitor)

            } else if (currentFormMode === formMode.EDIT) {
                console.log(visitor)
                const visitorId = this.state.visitorId
                promise = updateVisitorApiCall(visitorId, visitor)
            }
            if (promise) {
                promise
                    .then(
                        (data) => {
                            response = data
                            if (response.status === 201 || response.status === 500) {
                                return data.json()
                            }
                        })
                    .then(
                        (data) => {
                            if (!response.ok && response.status === 500) {
                                console.log(data)
                                for (const i in data) {
                                    const errorItem = data[i]
                                    const errorMessage = errorItem.message
                                    const fieldName = errorItem.path
                                    const errors = { ...this.state.errors }
                                    errors[fieldName] = errorMessage
                                    this.setState({
                                        errors: errors,
                                        error: null
                                    })
                                }
                            } else {
                                this.setState({ redirect: true })
                            }
                        },
                        (error) => {
                            this.setState({ error })
                            console.log(error)
                        }
                    )
            }

        }
    }

    validateForm = () => {
        const visitor = this.state.visitor
        const errors = this.state.errors
        for (const fieldName in visitor) {
            const fieldValue = visitor[fieldName]
            const errorMessage = this.validateField(fieldName, fieldValue)
            errors[fieldName] = errorMessage
        }
        this.setState({
            errors: errors
        })
        return !this.hasErrors()
    }

    hasErrors = () => {
        const errors = this.state.errors
        for (const errorField in this.state.errors) {
            if (errors[errorField].length > 0) {
                return true
            }
        }
        return false
    }

    render() {
        const { redirect } = this.state
        if (redirect) {
            const currentFormMode = this.state.formMode
            const notice = currentFormMode === formMode.NEW ? 'Pomyślnie dodano nowego gościa' : 'Pomyślnie zaktualizowano nowego gościa'
            return (
                <Redirect to={{
                    pathname: "/visitors/",
                    state: {
                        notice: notice
                    }
                }} />
            )
        }

        const errorsSummary = this.hasErrors() ? 'Formularz zawiera błędy' : ''
        const fetchError = this.state.error ? `Błąd: ${this.state.error.message}` : ''
        const pageTitle = this.state.formMode === formMode.NEW ? 'Nowy gość' : 'Edycja gościa'

        const globalErrorMessage = errorsSummary || fetchError || this.state.message

        return (
            <main>
                <h2>{pageTitle}</h2>
                <form className="form" onSubmit={this.handleSubmit}>
                    <FormInput
                        type="text"
                        label="Imię"
                        required
                        error={this.state.errors.firstName}
                        name="firstName"
                        placeholder="2-60 znaków"
                        onChange={this.handleChange}
                        value={this.state.visitor.firstName}
                    />
                    <FormInput
                        type="text"
                        label="Nazwisko"
                        required
                        error={this.state.errors.lastName}
                        name="lastName"
                        placeholder="2-60 znaków"
                        onChange={this.handleChange}
                        value={this.state.visitor.lastName}
                    />
                    <FormButtons
                        formMode={this.state.formMode}
                        error={globalErrorMessage}
                        cancelPath="/visitors"
                    />
                </form>
            </main >
        )
    }
}

export default VisitorForm