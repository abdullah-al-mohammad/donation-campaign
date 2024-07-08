import { useLoaderData } from "react-router-dom";


const Home = () => {
    const donations = useLoaderData([]);

    const handleDetails = ()=>{
        console.log('hello');
    }

    return (
        <div>
            <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6">
                {donations.map((donation, idx) => {
                    const {category,category_bg, description, picture, text_color, card_bg} = donation;
                    return (
                        <div key={idx} className={`card card-compact bg-base-100 shadow-xl ${card_bg}`} onClick={handleDetails}>
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
                <h3>{donations.length}</h3>

            </div>
        </div>
    );
};

export default Home;