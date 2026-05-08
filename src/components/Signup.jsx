import axios from 'axios'
import React, { useState } from 'react'
import { Link, } from 'react-router-dom'

const Signup = () => {
  // declare our state here 

  const [Username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
 const [strength,setstrength]=useState("");
  // three states for hosting data 
  const [loading, setLoading] = useState("")
  const [success, setSucces] = useState("")
  const [error, setError] = useState("")
    

  // function to handle submit 
  const handlesubmit = async (e) => {
    e.preventDefault()
    setLoading("please wait...")

    // create an empty digital envelope 
    const formdata = new FormData()
    formdata.append("username", Username)
    formdata.append("email", email)
    formdata.append("password", password)
    formdata.append("phone", phone)
    try {
      const response = await axios.post("http://mitchellekifaru.alwaysdata.net/api/signup", formdata)
      setSucces(response.data.message)
      setLoading("")
    } catch (error) {
      setError(error.message)
      setLoading("")
    }

  }

  const checkPasswordStrength=(password)=>{
    if (password.length<4){
      setstrength("Weak");
    }else if (password.length<8){
      setstrength("Medium");
    }else{
      setstrength("Strong");
    }
  };
  return (
  
    <div className="row mt-5 justify-content-center"  >
      <div className="col-md-6 card shadow bg-dark">
        <h1 className='text-info'> 👤 Signup</h1>

        {/* bind the states  */}

        <h2 className="text-warning">{loading}</h2>
        <h2 className="text-success"> {success}</h2>
        <h2 className="text-danger">{error}</h2>

        <form action="" onSubmit={handlesubmit}>
          <input type="text" placeholder=' 👤 Enter Username' className='form-control' onChange={(e) => setUsername(e.target.value)} /> <br />
          <input type="email" placeholder=' 📤 Enter Email' className='form-control' onChange={(e) => setEmail(e.target.value)} /> <br />
          <input type="password" placeholder='🔑 Enter Password' className='form-control' onChange={(e) => {setPassword(e.target.value); checkPasswordStrength(e.target.value)}} 
          /> <br />
          {
            password &&
            <p 
            style={{
              color:
              strength=== "Weak"
              ? "red"
              : strength === "Medium"
              ? "orange"
              :"green",

            }}
            >
              password strength :{strength}
              </p>
              
          }
          <input type="number" placeholder=' 📲Enter Phone' className='form-control' onChange={(e) => setPhone(e.target.value)} /> <br />

          <button type='submit' className='btn btn-info w-100 '   >Signup</button> <br />
          <p className='text-info'>Already have an account?   <Link to="/signin"> signin</Link></p>
        </form>
      </div>

    </div>
  )
}

export default Signup 