import { useLoaderData } from "react-router-dom";


const Home = () => {
    const donations = useLoaderData([])

    return (
        <div>
            <div className="grid grid-cols-4 gap-6 ">
                {donations.map((donation, idx) => <div key={idx} className="card card-compact bg-base-100 w-96 shadow-xl">
                    <figure>
                        <img
                            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                            alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>)}
                <h3>{donations.length}</h3>
                
            </div>
        </div>
    );
};

export default Home;