import { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import UpdateIcon from '@mui/icons-material/Update';

export const TaskList = ({items,setItems,editItem,setEditItem}) => {
     
     const [show,setShow] = useState(false)
    
   const handleSubmit = (e) =>{
    e.preventDefault();
    if(editItem.id){
          const updatedItemList = items.map(todo => (
            editItem.id === todo.id ? {id:editItem.id, title: e.target.title.value, textarea:e.target.details.value } : todo
          ))
          setItems(updatedItemList)
          setEditItem({})
    }
    else{
          const newlist ={
        id: new Date().getTime(),
        title: e.target.title.value,
        textarea: e.target.details.value
    }
    setItems([...items,newlist])
    setEditItem({})
    }
   
    
   }
   
 
  return (
    <div >
        <form onSubmit={handleSubmit} className="create-note">
            <button type="submit" > {editItem.id ? <UpdateIcon /> : <AddIcon />}</button>
           
            {show && (
                 <input type="text" name="title" placeholder="Title" autoComplete="off" value={editItem.title || ""} onChange={e => setEditItem({...editItem,title:e.target.value})} />
            )}
            <textarea type="text" name="details" placeholder="add details..." value={editItem.textarea || ""} onChange={e =>setEditItem({...editItem, textarea: e.target.value}) } autoComplete="off" onClick={() => setShow(true)} rows={show ? 3 : 1}/>
           
        </form>
    </div>
  )
}
