import { useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";
import { getStoredDonation } from "../../utility/localStorage";
import { Helmet } from "react-helmet-async";


const Donation = () => {
    const donations = useLoaderData()
    const [appliedDonations, setAppliedDonation] = useState([])
    const [dataLength, setDataLength] = useState(4)

    useEffect(() => {
        const storedDonationIds = getStoredDonation();
        if (donations.length > 0) {
            // const donationApplied = donations.filter(donation => storedDonationIds.includes(donation.id))
            const donationApplied = [];
            for (const id of storedDonationIds) {
                const donate = donations.find(donation => donation.id === id)
                if (donate) {
                    donationApplied.push(donate)
                }
            }
            setAppliedDonation(donationApplied)

        }

    }, [])
    return (
        <div className="mt-32">
            <Helmet>
                <title>Donation</title>
            </Helmet>
            <div className="grid grid-cols-2 gap-5">
                {
                    appliedDonations.slice(0, dataLength).map((donate, idx) => {
                        const { picture, category, description, price, text_color, card_bg, category_bg } = donate
                        return (
                            <div key={idx} >
                                <div className="card card-side bg-base-100 shadow-xl rounded" style={{backgroundColor: `${card_bg}`}}>
                                    <img className="object-container"
                                        src={picture}
                                        alt="Movie" />
                                    <div className="card-body p-6">
                                        <span className="px-3 py-2 w-20 rounded" style={{color: `${text_color}`, backgroundColor: `${category_bg}`}}>{category}</span>
                                        <h2 className="text-2xl font-bold">{description}</h2>
                                        <p className="font-semibold" style={{color: `${text_color}`}}>{price}</p>
                                        <div className="card-actions">
                                            <button className={'btn btn-primary font-semibold border-0'} style={{backgroundColor: `${text_color}`}}>View Details</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        )
                    })
                }
            </div>

            {/* <div className={dataLength === donations.length && 'hidden'}>
                <button onClick={() => setDataLength(donations.length)} className="btn bg-green-500 text-center">See All</button>
            </div> */}
            {dataLength < appliedDonations.length && (
                <div className="flex justify-center mt-4 w-full">
                    <button onClick={() => setDataLength(appliedDonations.length)} className="btn bg-green-500">See All</button>
                </div>
            )}
        </div>
    );
};

export default Donation;