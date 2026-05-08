import axios from 'axios'
import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'

const Makepayment = () => {
    const { singleproduct } = useLocation().state || {}
    const imagepath = "http://mitchellekifaru.alwaysdata.net/static/images/"

    // declare the state here 
    const [phone, setPhone] = useState("")

    // states for posting data 
    const [loading, setLoading] = useState("")
    const [success, setSuccess] = useState("")
    const [error, setError] = useState("")

    const handlesubmit = async (e) => {
        e.preventDefault()
        setLoading("please wait...")
        // create an empty digital envelope 
        const formdata = new FormData()
        formdata.append("amount", singleproduct.product_cost)
        formdata.append("phone", phone)
        try {
            const response = await axios.post("http://mitchellekifaru.alwaysdata.net/api/mpesa_payment", formdata)
            setSuccess(response.data.message)
            setLoading("")
        } catch (error) {
            setError(error.message)
            setLoading("")

        }

    }

return (
    <div className="row justify-content-center">
        <h1 className='text-success'>Make payment-LIpa Na Mpesa</h1>
        <div className='col-md-8 card shadow p-4 '>
            {/* image goes here  */}
            <img src={imagepath + singleproduct.product_photo} alt="" style={{ height: "700px", objectFit: "contain" }} />


            <h3 className='text-warning text-start'> {singleproduct.product_name} </h3>
            <p className='text-start'> {singleproduct.product_description}</p>
            <b className='text-start text-success'> ksh {singleproduct.product_cost}</b> <br />
            {/* bind the state  */}
            <h2 className='text-dark'> {loading}</h2>
            <h2 className='text-success'>{success}  </h2>
            <h2 className='text-danger'> {error} </h2>

            <form action="" onSubmit={handlesubmit}>
                <input type="number" className='form-control' placeholder='Enter phone 254xxxxxxxxx' onChange={(e) => setPhone(e.target.value)} required /> <br />
                <button className='btn btn-success w-100' type='submit'>Make Payment</button>
            </form>

        </div>
    </div>
)
}

export default Makepayment