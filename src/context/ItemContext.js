import { createContext, useContext, useEffect, useReducer } from "react"
import { itemReducer } from "../reducer/itemReducer";

const initialItems ={
    items:  [],
    filteredItems: [],
    editIcon: false,
    searchTitle : ""
    
    
}

const ItemsContext = createContext(initialItems);

export const ItemProvider = ({children}) =>{
    initialItems.items = JSON.parse(localStorage.getItem("items")) || []
    const [state,dispatch] = useReducer(itemReducer, initialItems)

    useEffect(() =>{
        localStorage.setItem("items", JSON.stringify(state.items))
    },[state.items])

    const addItem =(value) =>{
        // const updatedItems = state.items.concat(value)
        dispatch({
            type:"ADD_ITEMS",
            payload:{
                items:value
            }
        })

    }
    const addEditIcon =() =>{
        
        dispatch({
            type:"EDIT_ICON",
            payload:{
                editIcon: !state.editIcon
            }
        })
    }
    const clearAll =() =>{
        dispatch({
            type: "DELETE_ALL",
            payload:{
                items:  []
            }
        })
    }

    const search =(value) => {
        const filteredItems = state.items.filter(item =>(
            item.title.toLowerCase().includes(value.toLowerCase())
        ))
        dispatch({
            type:"SEARCH_BY_TITLE",
            payload:{
                searchTitle: value,
                filteredItems: filteredItems
            }
        })

    }
    const value={
        items:state.items,
        searchTitle: state.searchTitle,
        editIcon:state.editIcon,
        filteredItems: state.filteredItems,
        addItem,
        addEditIcon,
        clearAll,
        search
        
    }
   return(
     <ItemsContext.Provider value={value}>
        {children}
    </ItemsContext.Provider>
   )
}

export const useItem = () => useContext(ItemsContext)
