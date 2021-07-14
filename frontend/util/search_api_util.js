
export const fetchSearchResults = search => {
    
    return $.ajax({
        method: "GET",
        url: `/api/items/search`,
        data: {search}
    })
}