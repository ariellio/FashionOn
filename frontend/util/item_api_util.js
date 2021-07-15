export const fetchItems = () => {
    return $.ajax({
        url: '/api/items',
        method: 'GET'
    })
}
export const fetchItem = itemId => {
    debugger
    return $.ajax({
        url: `/api/items/${itemId}`,
        method: 'GET'
    })
}