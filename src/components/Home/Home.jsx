import { useLoaderData, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";



const Home = () => {
    const donations = useLoaderData();
    const navigate = useNavigate();
    const [inputValue, setInputValue] = useState('');
    const [filteredDonations, setFilteredDonations] = useState(donations);
    console.log(filteredDonations);

    useEffect(() => {
        const filtered = donations.filter(donation =>
            donation.category.toLowerCase().includes(inputValue.toLowerCase())
        );
        setFilteredDonations(filtered);
    }, [inputValue,donations])

    const handleInput = (value) => {
        setInputValue(value)
    }

    return (
        <div>
            <Helmet>
                <title>donation || Home</title>
            </Helmet>
            <div className="bgImg mb-24">
                <div className="text-center absolute inset-48">
                    <h1 className="text-5xl font-bold mb-10">I Grow By Helping People In Need</h1>
                    <div className="join">
                        <input onChange={(e) => handleInput(e.target.value)} value={inputValue} className="input input-bordered join-item pe-32" placeholder="Search here....." />
                        <button className="btn join-item text-white bg-error px-8">Search</button>
                    </div>
                </div>
            </div>
            <div className="container mx-auto">
                <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6">
                    {filteredDonations.map((donation, idx) => {
                        const { id, category, category_bg, description, picture, text_color, card_bg } = donation;
                        const handleDonationDetails = (id) => {
                            navigate(`/donate/${id}`)
                        }
                        return (
                            <div onClick={() => handleDonationDetails(id)} key={idx} className="card card-compact bg-base-100 shadow-xl" style={{backgroundColor:`${card_bg}`}}>
                                <div>
                                    <img className="w-full object-container"
                                        src={picture}
                                        alt="Shoes" />
                                </div>
                                <div className="p-4">
                                    <span className="px-3 py-2 rounded my-2" style={{backgroundColor: `${category_bg}`, color: `${text_color}`}}>{category}</span>
                                    <h2 className="card-title"style={{color: `${text_color}`}}>{description}</h2>
                                </div>
                            </div>
                        )
                    }
                    )}

                </div>
            </div>
        </div>
    );
};

export default Home;