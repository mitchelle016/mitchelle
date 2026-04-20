import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Getproduct = () => {
    let navigate = useNavigate();
    // declare our states here 
    const [loading, setLoading] = useState("")
    const [products, setProducts] = useState([])
    const [error, setError] = useState("")

    // function to fetch products 
    const getproducts = async () => {
        setLoading("please wait...")
        try {
            const response = await axios.get("http://mitchellekifaru.alwaysdata.net/api/getproducts")
            setProducts(response.data)
            setLoading("")
        } catch (error) {

        }
    }
    // call the function 
    useEffect(() => {
        getproducts()
    }, [])

    console.log(products)
    const imagepath = "http://mitchellekifaru.alwaysdata.net/static/images/"
    return (
        <div className='container fluid'>
            <div className='row'>
                <h1 className='text-success'>Available products</h1>
                {/* bind the states  */}
                <h2 className='text-warning text-center'> {loading} </h2>
                <h2 className='text-danger text-center'> {error} </h2>
                {products.map(singleproduct => (
                    <div className="col-md-3 card shadow p-4 md-4">
                        {/* image goes here  */}
                        <img src={imagepath + singleproduct.product_photo} alt="" />
                        {/* card body goes here  */}
                        <div className="card-body">
                            {/* product name goes here  */}

                            <h1>{singleproduct.product_name} </h1>
                            {/* product description goes here  */}
                            <p>{singleproduct.product_description}</p>

                            {/* product cost goes here  */}
                            <b className='text-warning'>{singleproduct.product_cost}</b><br />
                            {/* purchase now button  */}
                            <button className='btn btn-dark' onClick={()=>navigate("/makepayment",{state:{singleproduct}}) }>Purchase Now</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Getproduct