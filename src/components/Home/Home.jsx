import { useLoaderData, useNavigate } from "react-router-dom";


const Home = () => {
    const donations = useLoaderData();
    const  navigate = useNavigate()

   

    return (
        <div>
            <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6">
                {donations.map((donation, idx) => {
                    const {id,category,category_bg, description, picture, text_color, card_bg} = donation;
                    const handleDonationDetails = (id)=>{
                        navigate(`/donate/${id}`)
                    }
                    return (
                        <div onClick={()=>handleDonationDetails(id)} key={idx} className={`card card-compact bg-base-100 shadow-xl ${card_bg}`}>
                            <div>
                                <img className="w-full object-container"
                                    src={picture}
                                    alt="Shoes" />
                            </div>
                            <div className="p-4">
                                <button className= {`btn ${category_bg} ${text_color}`}>{category}</button>
                                <h2 className="card-title">{description}</h2>
                            </div>
                        </div>
                    )
                }
                )}

            </div>
        </div>
    );
};

export default Home;