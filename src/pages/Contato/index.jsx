import "./Contato.css";

import Twitter from "../../assets/twitter.png";
import Instagram from "../../assets/instagramIcone.png";
import Discord from "../../assets/discord.png";

function Contato() {
  return (
    <main className="contato">
      <section>
        <h1>Dúvidas e suporte, entre em contato:</h1>
        <div className="redes">
            <a href="https://x.com" target="_BLANK"><img src={ Twitter } alt="Twitter" /></a>
            <a href="https://instagram.com" target="_BLANK"><img src={ Instagram } alt="Instagram" /></a>
            <a href="https://discord.com" target="_BLANK"><img src={ Discord } alt="Discord" /></a>
        </div>
      </section>
      <section>
        <form>
          <div className="inputs">
            <label htmlFor="nome">Nome:
            <input type="text" id="nome" name="nome" required /></label>
            <label htmlFor="email">Email:
            <input type="email" id="email" name="email" required /></label>
            <label htmlFor="mensagem">Mensagem:</label>
            <textarea id="mensagem" name="mensagem" rows={6} required></textarea>
          </div>
          <button type="submit">Enviar</button>
        </form>
      </section>
    </main>
  );
}

export default Contato;