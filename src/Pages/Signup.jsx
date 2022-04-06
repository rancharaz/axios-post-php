import React, {useState} from 'react'
import axios from 'axios';
const Signup = () => {

  const url = "http://localhost:8000/db.post/curlPost.php";

  const[data, setData] = useState({
     name: "",
     surname: ""
  })

  function submit(e){
     e.preventDefault();
     axios.post(url, (req, res) => {
      res.header("Access-Control-Allow-Origin", "*");
     }, {
       name: data.name,
       surname: data.surname
     })
     .then(function(response) {
       console.log(response.data)
     }).catch(function(error){
       console.log(error.message)
     })
  }

  function handle(e){
      
    const newData = {...data}
    newData[e.target.id] = e.target.value;
    setData(newData)
    console.log(newData)
  }


  return (
    <>
    <div className="container mx-auto text-center align-middle">

    
      <form onSubmit={(e) => submit(e)}  >
      <div className="form ">
          <h1 className='text-4xl mt-'>Form</h1>
          <div className="group-form">
            <label for='name'> Name: </label>
         <input type="text" name="name" id="name" onChange={(e) => handle(e)} value={data.name} className='name mt-5 rounded-sm text-slate-800 outline-none'/> 
          </div>
           <div className="group-form">
             <label for="surname">
             Surname:  </label>
           <input type="text" name="surname" id="surname" onChange={(e) => handle(e)} value={data.surname} className='surname mt-5 rounded-sm text-slate-800 outline-none'/>

           <div className="btn">
           <button type="submit" className='btn-signup'>Submit</button>
           </div>
          
           </div>
          
        </div>
      </form>

    </div>
    </>
  )
}

export default Signup