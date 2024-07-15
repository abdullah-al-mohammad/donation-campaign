import { useLoaderData, useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { saveDonation } from "../../utility/localStorage";
import { Helmet } from "react-helmet-async";



const DonationDetails = () => {
    const donations = useLoaderData()
    const { id } = useParams();
    const idInt = parseInt(id)
    const donation = donations.find(d => d.id === parseInt(id));
    if (!donation) {
        return <div>Loading...</div>;
    }

    const donationSubmit = ()=>{
        saveDonation(idInt)
        toast('Donation Submited')
    }
    const {description, picture, price } = donation;
    return (
        <div>
            <Helmet>
                <title>Donation || Details</title>
            </Helmet>
            <h1>donation Details</h1>
            <div>
                <div className="relative mb-14">
                    <img className="w-8/12" src={picture} alt="" />
                    <div className="backdrop-opacity-10 bg-black/30 absolute w-8/12 bottom-px">
                        <button onClick={donationSubmit} className="btn btn-error text-white m-9">Donate {price}</button>
                    </div>
                </div>
                <div>
                    <div>
                        <h1 className="mb-6 text-4xl font-bold">{description}</h1>
                        <p className="mb-5">
                            There are many things that can be done to ensure that all people have access to a good education. Governments can invest in public schools, provide financial assistance to students, and make sure that all schools have qualified teachers and resources. Families can support their children's education by creating a learning environment at home and helping them with their schoolwork. Teachers can create a positive and supportive learning environment for their students and challenge them to reach their full potential.
                        </p>
                    </div>
                </div>
            </div>
            <ToastContainer></ToastContainer>

        </div>
    );
};

export default DonationDetails;