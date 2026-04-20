import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'

const Makepayment = () => {
    const { singleproduct } = useLocation().state || {}
    const imagepath = "http://mitchellekifaru.alwaysdata.net/static/images/"

    // declare the state here 
    const[phone,setPhone]=useState("")

    // states for posting data 
    const[loading,setLoading]=useState("")
    const [success,setSuccess]=useState("")
    const[error,setError]=useState("")

    const handlesubmit=async(e)=>{
        e.preventDefault ()
    }
    return (
        <div className="row justify-content-center">
            <h1>Make payment-LIpa Na Mpesa</h1>
            <div className='col-md-8 card shadow p-4'>
                {/* image goes here  */}
                <img src={imagepath + singleproduct.product_photo} alt=""  style={{height : "700px", objectFit:"fill"}}/>


                <h3 className='text-warning text-start'> {singleproduct.product_name} </h3>
                <p className='text-start'> {singleproduct.product_description}</p>
                <b className='text-start text-success'> ksh {singleproduct.product_cost}</b> <br />
                    {/* bind the state  */}
                    <h2 className='text-dark'> {loading}</h2>
                    <h2 className='text-success'>{success}  </h2>
                    <h2 className='text-danger'> {error} </h2>

                <form action="" onSubmit={handlesubmit}>
                    <input type="number" className='form-control' placeholder='Enter phone 254xxxxxxxxx'  onChange={(e)=>setPhone(e.target.value)}/> <br />
                    <button className='btn btn-success w-100' type='submit'>Make Payment</button>
                </form>

            </div>
        </div>
    )
}

export default Makepayment