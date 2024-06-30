
import Discover from"../../components/Discovery/Discovery";
import HeaderCard from"../../components/HeaderCard/HeaderCard";
import Recommended from"../../components/Recommended/Recommended";

function Home() {
    return (
        <div className="">
            <HeaderCard/>
            <Discover/>
            <Recommended/>


        </div>
    );
}

export default Home;