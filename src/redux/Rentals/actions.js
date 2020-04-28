export const addRental = book => ({
    type: "ADD_RENTAL",
    book
})

export const removeRental = book => ({
    type: "REMOVE_RENTAL",
    book
})
