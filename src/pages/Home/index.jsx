import './Home.css';

import { Card } from '../../components/Card';
import Inicio from '../../components/Inicio';

import HomeImg from '../../assets/homeImg.png';
import Youtube from '../../assets/youtube.png';
import Instagram from '../../assets/instagram.png';
import TikTok from '../../assets/tiktok.png';
import Facebook from '../../assets/facebook.png';

function Home() {
    return (
        <main>
            <Inicio titulo='Crie seus vídeos online' texto='Transforme suas ideias em filmes memoráveis: onde a criatividade encontra a simplicidade.' SobreImg={HomeImg} />
            <section className='cards'>
                <Card
                    corFundo="#F1C2B0"
                    numero="01"
                    titulo="Youtube"
                    descricao="Produza conteúdo cativante e conquiste seu público com vídeos de alta qualidade no maior palco digital do mundo."
                    icone={Youtube}
                />
                <Card
                    corFundo="#F9EB98"
                    numero="02"
                    titulo="TikTok"
                    descricao="Faça sua criatividade brilhar em vídeos curtos e envolventes que vão cativar a comunidade global do TikTok."
                    icone={TikTok}
                />
                <Card
                    corFundo="#C0D9DD"
                    numero="03"
                    titulo="Facebook"
                    descricao="Conecte-se com sua audiência de forma autêntica e impactante através de vídeos que se destacam no feed do Facebook."
                    icone={Facebook}
                />
                <Card
                    corFundo="#6975E8"
                    numero="04"
                    titulo="Instagram"
                    descricao="Compartilhe suas histórias de maneira única e conquiste milhões de likes no Instagram utilizando Stories e Reels."
                    icone={Instagram}
                />
            </section>
        </main>
    )
}

export default Home