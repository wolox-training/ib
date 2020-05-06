export const actions = {SET_QUERY: "SET_QUERY"};

export const setQuery = (query: string) => ({
    type: actions.SET_QUERY,
    query
})
