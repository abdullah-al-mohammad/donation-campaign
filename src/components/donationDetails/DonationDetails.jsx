import { useLoaderData, useParams } from "react-router-dom";



const DonationDetails = () => {
    const donations = useLoaderData()
    const { id } = useParams();
    const donation = donations.find(d => d.id === parseInt(id));
    if (!donation) {
        return <div>Loading...</div>;
    }
    const { category, description, picture, details, category_bg, text_color,price } = donation;
    // const donation = donations.find(donation => donation.id === id)
    console.log(donation);
    return (
        <div>
            <h1>donation Details</h1>
            <div className="hero min-h-screen">
                <div className="hero-overlay bg-opacity-60">
                    <img src={picture} alt="" />
                    <button className="btn btn-error text-white">Donate {price}</button>
                </div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                        <p className="mb-5">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DonationDetails;