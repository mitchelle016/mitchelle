import React from 'react'

const Carousel = () => {
  return (
    <section class="row">


            <div class="col-md-12">
                {/* <!-- a division with carousel content  --> */}
                <div class="carousel slide" data-bs-ride="carousel" id="mycarousel">
                    {/* <!-- inner division  --> */}
                    <div class="carousel-inner">

                        {/* <!-- division with image one  --> */}
                        <div class="carousel-item active">
                            <img src="images/slide6.jpeg" alt="" width={"85%"}/>
                        </div>
                        {/* <!-- division with image two  --> */}
                        <div class="carousel-item">
                            <img src="images/slide9.jpeg" alt="" width={"85%"} height={""}/>
                        </div>
                        {/* <!-- division with image three  --> */}
                        <div class="carousel-item">
                            <img src="images/slide5.jpeg" alt="" width={"55%"}/>
                        
                      
                        </div>
                      
                    </div>

                    {/* <!-- previous control  --> */}
                    <a href="#mycarousel" data-bs-slide="prev" class="carousel-control-prev">
                        <span class="carousel-control-prev-icon bg-danger"></span>
                    </a>

                    {/* <!-- next control  --> */}

                    <a href="#mycarousel" data-bs-slide="next" class="carousel-control-next">

                        <span class="carousel-control-next-icon bg-danger"></span>
                    </a>
                </div>
            </div>

        </section>
  )
}

export default Carousel