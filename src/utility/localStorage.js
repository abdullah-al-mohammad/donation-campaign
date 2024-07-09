const getStoredDonation = () =>{
    const storedDonation = localStorage.getItem('Donation')
    if(storedDonation){
        return JSON.parse(storedDonation)
    }
    return []
}
const saveDonation = (id) =>{
    const storedDonations = getStoredDonation();
    const exist = storedDonations.find(donationId => donationId === id);
    if(!exist){
        storedDonations.push(id);
        localStorage.setItem('Donation', JSON.stringify(storedDonations))
    }
}
export {getStoredDonation, saveDonation}