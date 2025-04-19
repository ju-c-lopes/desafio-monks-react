import { useEffect, useState } from "react";
import formImage from "../assets/images/form-ilustration.png";

const FormSection = () => {
    const [numero1, setNumero1] = useState(0);
    const [numero2, setNumero2] = useState(0);
    const [resultado, setResultado] = useState("");

    useEffect(() => {
        const n1 = Math.floor(100 + Math.random() * 900);
        const n2 = Math.floor(100 + Math.random() * 900);
        setNumero1(n1);
        setNumero2(n2);
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        const soma = numero1 + numero2;
        if (parseInt(resultado) !== soma) {
            alert("Resultado incorreto da verificação de segurança.");
            return;
        }
        alert("Formulário enviado com sucesso!");
    };

    return (
        <section className="form-section">
            <div className="form-image">
                <img src={formImage} alt="Ilustração lateral do formulário" />
            </div>

            <form className="form-content" onSubmit={handleSubmit}>
                <h2>Lorem ipsum dolor sit amet</h2>
                <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda officia laudantium, dicta illum delectus sunt minima mollitia consequuntur, magnam quas vel voluptatem, libero atque autem quia cum. Ullam, ea cupiditate!
                </p>
                <small>*Lorem ipsum dolor sit amet consectetur</small>

                <div className="form-group">
                    <input type="text" placeholder="Categoria*" required />
                    <input type="text" placeholder="Categoria*" required />
                    <input type="text" placeholder="Categoria" />
                    <input type="text" placeholder="Categoria" />
                </div>

                <div className="form-security">
                    <h3>Verificação de Segurança</h3>
                    <span className="calculate">
                        {numero1} + {numero2}
                    </span>
                    <span>=</span>
                    <input
                        type="text"
                        placeholder="Resultado*"
                        value={resultado}
                        onChange={(e) => setResultado(e.target.value)}
                        required
                    />
                </div>

                <button type="submit">Lorem ipsum</button>
            </form>
        </section>
    );
};

export default FormSection;
