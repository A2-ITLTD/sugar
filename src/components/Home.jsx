import { useEffect } from "react";
import Banner from "./Banner";

const Home = () => {
    useEffect(() => {
        document.title = "Sugar Factory";
    }, []);
    return (
        <div>
           <Banner></Banner>
        </div>
    );
};

export default Home;