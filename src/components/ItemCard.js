
import DeleteIcon from "@material-ui/icons/Delete";
import BorderColorIcon from '@mui/icons-material/BorderColor';

export const ItemCard = ({item,items,setItems,editItem,setEditItem}) => {
    const {title, textarea,id} = item

    const handleDelete = (itemid) =>{
      const updatedItems= items.filter(value => value.id != itemid)
      setItems(updatedItems)
    }
    const handleEdit =(itemid) => {
      const selectedItem =items.find(value => value.id === itemid)
      setEditItem(selectedItem)
    }
   
  return (
   
      <div  className="note">
      
        <h1>{title}</h1>
        <p>{textarea}</p>
      
        <button onClick={() => handleDelete(id)}><DeleteIcon /></button>
        <button onClick={() => handleEdit(id)}><BorderColorIcon /></button>
        
      </div>
  )
}
