import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import React from'react';



const Create = () => {
   const [title ,setTitle] = useState('');
   const [body ,setBody] = useState('');
   const [author, setAuthor] = useState('John Doe');
   const[isPending, setIsPending] = useState(false);
   const history = useHistory();

  

   
   const handleSubmit = (e) => {
          e.preventDefault();
          const blog = {title, body, author};
          
          setIsPending(true);
                    
          
          
          fetch('http://localhost:8000/blogs',{

            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body:JSON.stringify(blog)

          }).then (() => {
              console.log('new blog created');
              setIsPending(false); 
              // history.go(-1);
              history.push('/');

          });
        

     }
        
 
     return (  
    <div className="create">
      <h2>Add a new blog</h2>
      <form onSubmit={handleSubmit} >
        <label >Blog title:</label>
        <input  
          type="text"
          required
          value ={title}
          onChange ={e => setTitle(e.target.value)}
        />
        <label >Blog body:</label>
        <textarea 
          required
          value ={body}
          onChange ={e => setBody(e.target.value)}
        ></textarea>
       
        <label> Blog author:</label>
        <select 
          value = {author}
          onChange = {e => setAuthor(e.target.value)}

        >
          <option value="John Doe">John Doe</option>
          <option value="lightening Woe">lightening Woe</option>
        </select>
         
          {!isPending && <button>Add Blog</button>}
          {isPending && <button disabled>Adding blog...</button>}
          
          
       
      </form>
    </div>
  );
 } 

 export default Create;
  
        


