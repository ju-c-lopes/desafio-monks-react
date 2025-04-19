import logoHero from "../assets/images/logo.png";
import dnaMonks from "../assets/images/Image.png";
import Scroll from "../assets/images/Scroll.png";
import "../styles/components/_hero.scss";

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero_nav__box">
                <nav className="hero__nav">
                    <ul>
                        <li className="hero__logo">
                            <img src={logoHero} alt="Logo" />
                        </li>
                        <li>
                            <a href="#catalogo1">Catálogo 1</a>
                        </li>
                        <li>
                            <a href="#catalogo2">Catálogo 2</a>
                        </li>
                        <li>
                            <a href="#catalogo3">Catálogo 3</a>
                        </li>
                        <li>
                            <a href="#catalogo4">Catálogo 4</a>
                        </li>
                    </ul>
                </nav>
                <div className="hero_box">
                    <div className="hero_title">
                        <h1>Lorem, ipsum dolor sit amet consectetur</h1>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate cumque qui sit illum, nostrum maiores. Cumque nulla perferendis optio dolores expedita pariatur officia soluta laborum nisi saepe. Amet, iste!</p>
                    </div>
                    <div className="hero_box__image">
                        <img src={Scroll} alt="" />
                    </div>
                </div>
            </div>
            <div className="hero_image__right">
                <img src={dnaMonks} alt="" />
            </div>
        </section>
    );
};

export default Hero;
