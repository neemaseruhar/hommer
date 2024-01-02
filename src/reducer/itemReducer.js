export const itemReducer =(state,action) =>{
    const {type,payload} = action;

    switch (type){
        case "ADD_ITEMS":
            return {...state,items:payload.items};

        case "EDIT_ICON":
            return{...state,editIcon:payload.editIcon,}

        case "DELETE_ALL":
            return {...state,items:payload.items}

        case "SEARCH_BY_TITLE":
            return{...state,searchTitle:payload.searchTitle, filteredItems:payload.filteredItems}

        default:
            throw new Error("invalid input")
    }
}