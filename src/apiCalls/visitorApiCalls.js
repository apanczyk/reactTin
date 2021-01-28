import { visitorList, visitorDetailsList } from './visitorApiMockData'

export function getVisitorsApiCall() {
    return visitorList;
}

export function getVisitorByIdApiCall(visitorId) {
    const visitor = visitorDetailsList.find(visitor => visitor._id === visitorId)
    return visitor;
}