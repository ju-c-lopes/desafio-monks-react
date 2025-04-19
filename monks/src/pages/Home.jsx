import Header from "../layouts/Header";
import Products from "../components/Products";
import SimpleGallery from "../components/SimpleGallery";
import AppSection from "../components/AppSection";
import TagBox from "../components/TagBox";
import CardSection from "../components/CardSection";

const Home = () => {
    return (
        <>
            <Header />
            <Products />
            <SimpleGallery />
            <AppSection />
            <TagBox />
            <CardSection />
        </>
    )
}

export default Home;
