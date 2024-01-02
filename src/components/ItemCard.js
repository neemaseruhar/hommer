
import DeleteIcon from "@material-ui/icons/Delete";
import BorderColorIcon from '@mui/icons-material/BorderColor';
import { useItem } from "../context/ItemContext";


export const ItemCard = ({item,setEditItem}) => {
   const {addItem,items,editIcon} = useItem();
    const {title, textarea,id,link,icon} = item
    

    const handleDelete = (itemid) =>{
      const updatedItems= items.filter(value => value.id != itemid)
      addItem(updatedItems)
    }
    const handleEdit =(itemid) => {
      const selectedItem =items.find(value => value.id === itemid)
      setEditItem(selectedItem)
    }
   const handleClick = () =>{
    window.open(link, '_blank')
   }

  return (
   
      <div  className="note">
       
        <h1>{title}</h1>
        <p>{textarea}</p>
        {link && ( 
        <a href={link} target="_blank" rel="noopener noreferrer" onClick={handleClick} style={ { pointerEvents: editIcon ?  "none" : "unset"}}  >
          <img src={icon}  alt="img src logo"  />
         </a >
          
        
      )}
     
        {editIcon && <button onClick={() => handleDelete(id)}><DeleteIcon /></button>}
        {editIcon && <button onClick={() => handleEdit(id)}><BorderColorIcon /></button>}
        
      </div>
  )
}
