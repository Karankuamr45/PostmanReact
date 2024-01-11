import {useState} from 'react';
import axios from 'axios';
const AddUser=()=>{

    const [name,setName]=useState('');
    const [age,setAge]=useState('');
    const[user,setuser]=useState([])


    const handleSubmitUser=async(e)=>{
        e.preventDefault();

        try {
            // const formData=new FormData();
            // formData.append('name',name);
            // formData.append('age',Number(age));

            const userData = {
                name: name,
                age: Number(age),
            };

            const response = await axios.post('http://localhost:3000/addUser', userData);

            setName('');
            setAge('');
            console.log(response.data.message)




        } catch (error) {
            console.log(error.message)
            
        }

    }



    const fetchUser=async()=>{
        try {
         const data= await  axios.get("http://localhost:3000/getUser")
         setuser(data.data.data)
        } catch (error) {
            console.log(error.message)
        }

    }

    fetchUser()


    return(
     <>   
     <h1>Hello User</h1>

        <form onSubmit={handleSubmitUser}>

            <label htmlFor="name">Name :</label>
            <input 
            type="text" 
            placeholder="Name"
            value={name}
            onChange={(e)=>setName(e.target.value)}
             />
             <br/>

            <label htmlFor="age">Age :</label>
            <input 
            type="number" 
            placeholder="Age"
            value={age}
            onChange={(e)=>setAge(e.target.value)} />

            <br/>

            <button type='submit' >Add user</button>

        </form>


        {/* <h1>{name}</h1> */}


        {
            user.map((data)=>{
                return (
                    <div>
                        <h1>{data.name}</h1>
                        <h4>{data.age}</h4>
                    </div>
                )
            })
        }

        </> 
    )


}

export default AddUser