import React from 'react';
// import images from "../../public/images";

function Home() {
    return (
        <>
            <div >
                <header>
                    <h3>Student-Teacher Data Base</h3>
                </header>
                <main>
                    <section>
                        <div className="row row-cols-1 row-cols-md-2 g-4">
                            <div className="col">
                                <div className="card">
                                    <img src="images\1.jpg" className="card-img-top mx-4 my-4" />
                                    <div className="card-body">
                                        <h5 className="card-title">Auditorium</h5>
                                        <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, eaque! Perferendis magnam reiciendis blanditiis, rerum, aliquid nihil, minima ut doloribus error recusandae eos repellat! Aut quasi optio aliquid earum. Eligendi?</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card">
                                    <img src="images\2.jpg" className="card-img-top mx-4 my-4" />
                                    <div className="card-body">
                                        <h5 className="card-title">Class room</h5>
                                        <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, aperiam cumque. In tenetur laborum expedita itaque facilis labore unde similique, voluptatem illo voluptate totam laboriosam incidunt, molestiae distinctio beatae nihil.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card">
                                    <img src="images\3.jpg" className="card-img-top mx-4 my-4" />
                                    <div className="card-body">
                                        <h5 className="card-title">Library</h5>
                                        <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae esse, cum voluptas nesciunt, vel magni nobis sequi consequatur ipsum quo reprehenderit nihil quasi! Veritatis illo repudiandae, explicabo tenetur voluptatum vero.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card">
                                    <img src="images\4.jpg" className="card-img-top mx-4 my-4" />
                                    <div className="card-body">
                                        <h5 className="card-title">Campus</h5>
                                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla consectetur doloremque, quae, rem nostrum magni veniam ipsa, nemo omnis repudiandae reprehenderit perferendis ex veritatis. Obcaecati excepturi quae eligendi adipisci placeat.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            </div>

        </>
    )
}

export default Home