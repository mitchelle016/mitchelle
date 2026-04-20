import axios from "axios"
import React, { useState } from "react"
import { Link } from "react-router-dom"
const Signin = () => {
    // declare the states here  
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    // define three states for posting data 
    const[loading,setLoading]=useState("")
    const[success,setSucces]=useState("")
    const[error,setError]=useState("")

    // function to handle submit 
    const handlesubmit= async (e)=>{
        e.preventDefault()
        setLoading("please wait ...")

        // create an empty digital content 
        const formdata=new FormData()
        formdata.append("email",email)
        formdata.append("password",password)

    try{
        const response= await axios.post("http://mitchellekifaru.alwaysdata.net/api/signin",formdata)
        setSucces(response.data.message)
        setLoading("")

    } catch (error){
        
    }
}
    
    return (
        <div className="row mt-5 justify-content-center">
            <div className="col-md-6 card shadow">

                <h1>Signin</h1>
                {/* bind the states  */}
                 <h4 className="text-warning"> {loading} </h4>
                 <h4 className="text-success"> {success} </h4>
                 <h4 className="text-danger"> {error} </h4>

                <form action="" onSubmit={handlesubmit}>
                    <input type="email" placeholder="Email" className="form-control" onChange={(e)=>setEmail(e.target.value)}/> <br />
                    <input type="password" placeholder="password" className="form-control"  onChange={(e)=>setPassword(e.target.value)}/><br />
                    <button type="submit" className=" btn btn-primary w-100 ">Signin</button>
                    <p>Don't have an account? <Link to="/signup">Signup</Link>
                    </p>
                </form>
            </div>
        </div>

    )
}

export default Signin