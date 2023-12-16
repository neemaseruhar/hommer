
 import { ItemCard } from "./ItemCard";

export const ShowItems = ({items,setItems, editItem,setEditItem}) => {
  return (
    <section >
    
            {items.map(item =>(
                <ItemCard key ={item.id} item={item} items={items} setItems={setItems} editItem={editItem} setEditItem={setEditItem}/>
               
             ))}
             
            
    </section>
  )
}
