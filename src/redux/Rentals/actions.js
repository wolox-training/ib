export const actions = {ADD_RENTAL: "ADD_RENTAL", REMOVE_RENTAL: "REMOVE_RENTAL"};

export const addRental = book => ({
    type: actions.ADD_RENTAL,
    book
})

export const removeRental = book => ({
    type: actions.REMOVE_RENTAL,
    book
})
