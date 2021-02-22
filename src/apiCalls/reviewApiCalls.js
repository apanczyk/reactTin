import { reviewList, reviewDetailsList } from './reviewApiMockData'

export function getReviewsApiCall() {
    return reviewList;
}

export function getReviewByIdApiCall(reviewId) {
    const review = reviewDetailsList.find(review => review._id === reviewId)
    return review;
}