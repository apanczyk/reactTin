// import { mealList, mealDetailsList } from './mealApiMockData'

const mealsBaseUrl = 'http://localhost:8080/api/meals'

export function getMealsApiCall() {
    const promise = fetch(mealsBaseUrl)
    return promise;
}

export function getMealByIdApiCall(mealId) {
    const promise = fetch(`${mealsBaseUrl}/${mealId}`)
    return promise;
}

// export function getMealsApiCall() {
//     return mealList;
// }

// export function getMealByIdApiCall(mealId) {
//     const meal = mealDetailsList.find(meal => meal._id === mealId)
//     return meal;
// }