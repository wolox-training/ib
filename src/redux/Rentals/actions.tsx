export const actions = {ADD_RENTAL: "ADD_RENTAL", REMOVE_RENTAL: "REMOVE_RENTAL"};

export const addRental = book => ({
    type: actions.ADD_RENTAL,
    target: 'book',
    payload: book
})

export const removeRental = book => ({
    type: actions.REMOVE_RENTAL,
    target: 'book',
    payload: book
})
