// import { visitorList visitorDetailsList } from './visitorApiMockData'

const visitorsBaseUrl = 'http://localhost:8080/api/visitors'

export function getVisitorsApiCall() {
    const promise = fetch(visitorsBaseUrl)
    return promise;
}

export function getVisitorByIdApiCall(visitorId) {
    const promise = fetch(`${visitorsBaseUrl}/${visitorId}`)
    return promise;
}

export function addVisitorApiCall(visitor) {
    const visitorString = JSON.stringify(visitor)
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: visitorString
    }
    const promise = fetch(visitorsBaseUrl, options);
    return promise;
}

export function updateVisitorApiCall(visitorId, visitor) {
    const url = `${visitorsBaseUrl}/${visitorId}`
    const visitorString = JSON.stringify(visitor)
    const options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: visitorString
    }
    const promise = fetch(url, options);
    return promise;
}

export function deleteVisitorByIdApiCall(visitorId) {
    const promise = fetch(`${visitorsBaseUrl}/${visitorId}`, { method: 'DELETE' });
    return promise;
}

// export function getVisitorsApiCallMock() {
//     return visitorList;
// }

// export function getVisitorByIdApiCallMock(visitorId) {
//     const visitor = visitorDetailsList.find(visitor => visitor._id === visitorId)
//     return visitor;
// }