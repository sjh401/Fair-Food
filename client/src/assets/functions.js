export const sortArray = (array) => {
    const sorted = array.sort((a,b) => Date.parse(b.updated_at) - Date.parse(a.updated_at))
    return sorted
}

export const getTenIndecies = (array) => {
    const limited = array.filter((food, index) => {
        if(index < 10) {
            return food
        }
    })
    return limited
}

export const filterFoods = (array, cuisine) => {
    const filtered = array.filter(food => food.cuisine === cuisine)
    return filtered
}