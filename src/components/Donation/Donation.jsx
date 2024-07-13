import { useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";
import { getStoredDonation } from "../../utility/localStorage";


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
            <div className="grid grid-cols-2 gap-5">
                {
                    appliedDonations.slice(0, dataLength).map((donate, idx) => {
                        const { picture, category, description, price, text_color, card_bg } = donate
                        return (
                            <div key={idx} >
                                <div className="card card-side bg-base-100 shadow-xl rounded" style={{backgroundColor: `${card_bg}`}}>
                                    <img className="object-container"
                                        src={picture}
                                        alt="Movie" />
                                    <div className="card-body p-6">
                                        <h3 className="card-title" style={{color: `${text_color}`}}>{category}</h3>
                                        <h2 className="text-2xl font-bold">{description}</h2>
                                        <p className="font-semibold">{price}</p>
                                        <div className="card-actions">
                                            <button className={'btn btn-primary font-semibold'} style={{backgroundColor: `${text_color}`}}>View Details</button>
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