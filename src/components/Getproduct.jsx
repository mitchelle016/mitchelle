import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Carousel from './Carousel';
import Footer from './Footer';
import SupermarketCart from './Addtocart';


const Getproduct = () => {
    let navigate = useNavigate();
    // declare our states here 
    const [loading, setLoading] = useState("")
    const [products, setProducts] = useState([])
    const [error, setError] = useState("")
    const [search, setSearch] = useState("")
    const [sortOption, setSortOption] = useState("");

    const filtered_products = products.filter((item) =>
        item.product_name.toLowerCase().includes(search.toLowerCase()) ||
        item.product_description.toLowerCase().includes(search.toLowerCase())
    );
    // SORTING LOGIC GOES HERE 
    const sorted_products = [...filtered_products].sort((a, b) => {
        if (sortOption === "price_low_high") {
            return a.product_cost - b.product_cost;
        }
        if (sortOption === 'price_high_low') {
            return a.product_cost - b.product_cost;
        }
        if (sortOption === "name_asc") {
            return a.product_name.localeCompare(b.product_name)
        }
        if (sortOption === "name_desc") {
            return a.product_name.localeCompare(a.product_name)
        }
        return 0;
    });
    const [visiblecount, setVisibleCount] = useState("")

    // function to fetch products 
    const getproducts = async () => {
        setLoading("please wait...")
        try {
            const response = await axios.get("http://mitchellekifaru.alwaysdata.net/api/getproducts")
            setProducts(response.data)
            setLoading("")

        } catch (error) {
            setError(error.message)
            setLoading("")

        }
    }
    // call the function 
    useEffect(() => {
        getproducts()
    }, [])

    console.log(products)
    const imagepath = "http://mitchellekifaru.alwaysdata.net/static/images/"


    return (
        <div className='container fill '>
            <div className='row'>
                {/* carousel goes here  */}
                <Carousel />
                {/* SEARCH AND SORT UI GOES HERE  */}
                <div className='col-md-4 mb-2'>
                    <input
                        className='form-control'
                        type='search'
                        placeholder='Search products...'
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>
                {/* SORT DROPDOWN  */}
                <div className='col-md-4 mb-2'>
                    <select
                        className='form-control'
                        value={sortOption}
                        onChange={(e) => setSortOption(e.target.value)}>
                        <option value="">Sort Products</option>
                        <option value="price_low_high">Price: Low - High</option>
                        <option value="price_high_low">Price:High - Low</option>
                        <option value="name_asc">Product Name: A - Z</option>
                        <option value="name_desc">Product Nmae: Z - A</option>
                    </select>
                </div>
                <h1 className='text-primary '>Available products</h1>
                <div className="row justify-content-center mt-3 mb-3">
                </div>

                {/* bind the states  */}
                <h2 className='text-warning text-center'> {loading} </h2>
                <h2 className='text-danger text-center'> {error} </h2>
                {sorted_products.slice(0, visiblecount).map((singleproduct) => (


                    <div className="col-md-3   md-4">
                        <div className='card shadow h-100'>
                            {/* image goes here  */}
                            <img src={imagepath + singleproduct.product_photo} alt="" style={{ height: "200px" }} />
                            {/* card body goes here  */}
                            <div className="card-body">
                                {/* product name goes here  */}

                                <h1>{singleproduct.product_name} </h1>
                                {/* product description goes here  */}
                                <p>{singleproduct.product_description}</p>

                                {/* product cost goes here  */}
                                <b className='text-primary'>ksh {singleproduct.product_cost}</b><br />
                                {/* purchase now button  */}

                                



                                <button className='btn btn-warning w-100' onClick={() => navigate("/makepayment", { state: { singleproduct } })} >Purchase Now</button>
                            </div>
                        </div>
                    </div>
                ))}
                {/* load more button */}

                <div className="text-center mt-3">
                    {visiblecount < filtered_products.length && (
                        <button
                            className="btn btn-primary"
                            onClick={() => setVisibleCount(visiblecount + 8)}
                        >
                            Load More
                        </button>
                    )}
                </div>
            </div>
            <Footer />

        </div>
    )
}



export default Getproduct