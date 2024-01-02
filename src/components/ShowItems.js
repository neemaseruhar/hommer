
 import { ItemCard } from "./ItemCard";
 import { useItem } from "../context/ItemContext";

export const ShowItems = ({editItem,setEditItem}) => {
   const {items,filteredItems,searchTitle} = useItem();
  const display = searchTitle ? filteredItems : items;
  
  return (
   
    <section >
            
           {display.map(item =>(
                <ItemCard key ={item.id} item={item}  editItem={editItem} setEditItem={setEditItem}/>
               
             ))}
             
           
    </section>
    
  )
}
