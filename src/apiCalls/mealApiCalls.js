import { mealList, mealDetailsList } from './mealApiMockData'

export function getMealsApiCall() {
    return mealList;
}

export function getMealByIdApiCall(mealId) {
    const meal = mealDetailsList.find(meal => meal._id === mealId)
    return meal;
}