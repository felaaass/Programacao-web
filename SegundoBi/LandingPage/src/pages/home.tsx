import '../styles/utility.css'
import Logo from '../assets/logo.svg'
import Button from '../components/Button'
import Menu from '../assets/menu.svg'
import Close from '../assets/close.svg'
import RectangleOne from '../assets/RectangleOne.png'
import RectangleTwo from '../assets/RectangleTwo.png'
import { useEffect, useState } from 'react'
import '../styles/header.css'
import '../styles/hero.css'
import Data from '../assets/data.svg'
import Dados from '../assets/dados.svg'
import Stonks from '../assets/stonks.svg'
import '../styles/solution.css'
import TestimonialCard from '../components/TestimonialCard'
import ProfileImageOne from '../assets/ProfileImageOne.png'
import '../styles/testimonials.css'
import '../styles/pricing.css'
import Check from '../assets/check.svg'

import FacebookIcon from '../assets/facebook 1.svg'
import InstagramIcon from '../assets/instagram 1.svg'
import YoutubeIcon from '../assets/youtube 1.svg'
import '../styles/contact.css'
import '../styles/footer.css'

export default function Home() {
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    useEffect(() => {
        const html = document.querySelector("html");
        if (html) {
            html.style.overflow = showMobileMenu ? "hidden" : "auto";
        }
    }, [showMobileMenu]);

    const handleSendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData);

        try {
            const response = await fetch('/.netlify/functions/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                alert('E-mail enviado com sucesso!');
                e.currentTarget.reset();
            } else {
                alert('Erro ao enviar o e-mail.');
            }
        } catch (error) {
            alert('Erro de conexão ao tentar enviar o e-mail.');
        }
    };

    return (
        <main>
            <header className="container py-sm">
                <nav className="flex items-center justify-between">
                    <img src={Logo} alt="Logo DonaFrost" width={220} height={80} />
                    <div className="desktop-only">
                        <ul className="flex gap-1">
                            <li><a href="#">Home</a></li>
                            <li><a href="#solution">Soluções</a></li>
                            <li><a href="#testimonials">Depoimentos</a></li>
                            <li><a href="#pricing">Preços</a></li>
                            <li><a href="#contact">Contato</a></li>
                        </ul>
                    </div>

                    <div className="desktop-only">
                        <div className="flex items-center">
                            <a className="reverse-color ml-lg" href="">Login</a>
                            <Button text="Cadastre-se" />
                        </div>
                    </div>

                    <div className="mobile-menu">
                        {showMobileMenu ?
                            <div className="mobile-menu-content">
                                <div className="container flex">
                                    <ul>
                                        <li><a onClick={() => setShowMobileMenu(!showMobileMenu)} href="#">Home</a></li>
                                        <li><a onClick={() => setShowMobileMenu(!showMobileMenu)} href="#solution">Soluções</a></li>
                                        <li><a onClick={() => setShowMobileMenu(!showMobileMenu)} href="#testimonials">Depoimentos</a></li>
                                        <li><a onClick={() => setShowMobileMenu(!showMobileMenu)} href="#pricing">Preços</a></li>
                                        <li><a onClick={() => setShowMobileMenu(!showMobileMenu)} href="#contact">Contato</a></li>
                                    </ul>
                                    <span onClick={() => setShowMobileMenu(!showMobileMenu)} className="btn-wrapper">
                                        <img src={Close} alt="ícone fechar menu" width={24} height={24} />
                                    </span>
                                </div>
                            </div>
                            :
                            <span onClick={() => setShowMobileMenu(!showMobileMenu)} className="btn-wrapper" >
                                <img src={Menu} alt="ícone menu" width={24} height={24} />
                            </span>
                        }
                    </div>
                </nav>
            </header>

            <section id="hero">
                <span className='desktop-only'>
                    <img src={RectangleTwo} alt="Rectangle 2" />
                </span>
                <img src={RectangleOne} alt="Rectangle 1" />
                <div className="container content">
                    <p className="desktop-only">A melhor ideia que você já teve.</p>
                    <h1>Volatil como a água</h1>
                    <p>Uma empresa focada em dados, armazenamos, tratamos e analisamos informações para impulsionar seu negócio.</p>
                    <div className="flex gap-1">
                        <span><Button text="Cadastre-se" /></span>
                        <span className="desktop-only"><Button text="Veja mais" secondary /></span>
                    </div>
                </div>
            </section>

            <section className="container" id="solution">
                <header>
                    <span>
                        <h2>Soluções</h2>
                        <span className="desktop-only">
                            <h2>Sob medida para você</h2>
                        </span>
                    </span>
                    <p>Confie no melhor, <strong>Aqua</strong>, Ampliando seus resultados através dos seguintes serviços.</p>
                </header>
                <section className="even-columns">
                    <div className="card">
                        <span><img src={Data} alt="ícone campeão" width={64} height={64} /></span>
                        <div>
                            <h3>Armazenamento</h3>
                            <p>Armazenamos os seus dados com segurança e eficiência, garantindo a integridade e disponibilidade das informações essenciais para o seu negócio.</p>
                            <hr />
                        </div>
                    </div>
                    <div className="card">
                        <span><img src={Dados} alt="ícone campeão" width={64} height={64} /></span>
                        <div>
                            <h3>Análise</h3>
                            <p>Analisamos os seus dados para extrair insights valiosos, identificando padrões, tendências e oportunidades que impulsionam o crescimento do seu negócio.</p>
                            <hr />
                        </div>
                    </div>
                    <div className="card">
                        <span><img src={Stonks} alt="ícone campeão" width={64} height={64} /></span>
                        <div>
                            <h3>Sucesso</h3>
                            <p>Impulsionamos o sucesso do seu negócio com soluções baseadas nos dados que coletamos e analisamos, transformando informações em ações concretas e resultados mensuráveis.</p>
                            <hr />
                        </div>
                    </div>
                </section>
            </section>

            <section id="testimonials">
                <header>
                    <span>
                        <p className="desktop-only">Conselho de quem conhece</p>
                        <h2>Cada cliente importa!</h2>
                    </span>
                    <p>Quem já trabalhou conosco sabe da qualidade das nossas análises. Estamos tirando aquela ideia de que análise de dados tem que ser algo complexo e sem sentido. Acompanhe abaixo os testemunhos de quem já transformou seu negócio com a Aqua.</p>
                </header>
                <section className="carousel">
                    <div className="carousel-content">
                        <TestimonialCard image={ProfileImageOne} text="Gente, que dashboard maravilhoso! É tanto dado bem estruturado que eu fico passada. Recomendo a Aqua de olhos fechados, impulsionou muito minhas métricas!" rating={5} name="Tatá" role="Meme" />
                        <TestimonialCard image={ProfileImageOne} text="Dados desorganizados não valem nada? Errado. Com a Aqua, a informação vale tudo. Ednaldo Pereira aprova estas análises com 100% de precisão." rating={5} name="Ednaldo Pereira" role="Mestre Supremo" />
                    </div>
                    <div className="carousel-content">
                        <TestimonialCard image={ProfileImageOne} text="Gente, que dashboard maravilhoso! É tanto dado bem estruturado que eu fico passada. Recomendo a Aqua de olhos fechados, impulsionou muito minhas métricas!" rating={5} name="Tatá" role="Meme" />
                        <TestimonialCard image={ProfileImageOne} text="Dados desorganizados não valem nada? Errado. Com a Aqua, a informação vale tudo. Ednaldo Pereira aprova estas análises com 100% de precisão." rating={5} name="Ednaldo Pereira" role="Mestre Supremo" />
                    </div>
                </section>
            </section>

            <section id="pricing" className="container">
                <header>
                    <p className="desktop-only">Planos e preços</p>
                    <h2>Nossos planos</h2>
                </header>
                <section className="even-columns gap-1.5">
                    <div className="pricing-card">
                        <span className="plan">
                            <h3>Starter</h3>
                            <p>Ideal para validar nossa infraestrutura de dados no seu negócio.</p>
                        </span>
                        <h2>Grátis</h2>
                        <Button text="Começar agora" secondary key="free" />
                        <span className="hr" />
                        <span className="features"><img src={Check} alt="ícone check" width={24} height={24} /><p>Até 5GB de armazenamento cloud</p></span>
                        <span className="features"><img src={Check} alt="ícone check" width={24} height={24} /><p>Dashboards padronizados</p></span>
                        <span className="features"><img src={Check} alt="ícone check" width={24} height={24} /><p>Processamento de dados diário</p></span>
                    </div>

                    <div className="pricing-card premium">
                        <span className="bonus"><p>1º MÊS GRÁTIS</p></span>
                        <span className="plan">
                            <h3>Pro</h3>
                            <p>Para empresas que baseiam suas decisões em dados em tempo real.</p>
                        </span>
                        <span className="price">
                            <h2>R$ 499,90</h2>
                            <p>/mês</p>
                        </span>
                        <Button text="Experimente de graça" key="premium" />
                        <span className="hr" />
                        <span className="features"><img src={Check} alt="ícone check" width={24} height={24} /><p>500GB de armazenamento estruturado</p></span>
                        <span className="features"><img src={Check} alt="ícone check" width={24} height={24} /><p>Relatórios interativos (BI) personalizados</p></span>
                        <span className="features"><img src={Check} alt="ícone check" width={24} height={24} /><p>Sincronização de dados em tempo real</p></span>
                    </div>

                    <div className="pricing-card">
                        <span className="plan">
                            <h3>Enterprise</h3>
                            <p>Solução completa e dedicada para operações complexas de Big Data.</p>
                        </span>
                        <span className="price">
                            <h2>R$ 1.290</h2>
                            <p>/mês</p>
                        </span>
                        <Button text="Falar com especialista" secondary key="business" />
                        <span className="hr" />
                        <span className="features"><img src={Check} alt="ícone check" width={24} height={24} /><p>Armazenamento e fluxos ilimitados</p></span>
                        <span className="features"><img src={Check} alt="ícone check" width={24} height={24} /><p>Integração nativa via API (ERP/CRM)</p></span>
                        <span className="features"><img src={Check} alt="ícone check" width={24} height={24} /><p>Consultoria com Engenheiro de Dados</p></span>
                    </div>
                </section>
            </section>

            <section id="contact">
                <div className="container">
                    <header>
                        <p>Envie sua dúvida</p>
                        <h2>Entre em contato</h2>
                        <p className="description">
                            Entre em contato, estamos dispostos a tirar qualquer dúvida,<br/>
                            seja um orçamento, uma dúvida técnica de algum de nossos produtos.<br/>
                            Estamos à disposição para responder.😎
                        </p>
                    </header>
                    
                    <form onSubmit={handleSendEmail}>
                        <input type="email" name="email" placeholder="Seu melhor Email" required />
                        <textarea 
                            name="message" 
                            placeholder="Motivo do contato. Ex: Gostei muito do produto X, poderia me enviar um orçamento?" 
                            required 
                            rows={3} 
                        />
                        <button type="submit">Enviar</button>
                    </form>
                </div>
            </section>

            <footer>
                <div className="footer-content">
                    <div className="logo-area">
                        <h3>LogoMarca</h3>
                        <div className="social-icons">
                            <a href="#"><img src={InstagramIcon} alt="Instagram" /></a>
                            <a href="#"><img src={FacebookIcon} alt="Facebook" /></a>
                            <a href="#"><img src={YoutubeIcon} alt="Youtube" /></a>
                        </div>
                    </div>

                    <div className="footer-links">
                        <h4>Empresa</h4>
                        <ul>
                            <li><a href="#">Sobre nós</a></li>
                            <li><a href="#">Faça parte do time</a></li>
                            <li><a href="#">Blog</a></li>
                        </ul>
                    </div>

                    <div className="footer-links">
                        <h4>Funcionalidades</h4>
                        <ul>
                            <li><a href="#">Marketing</a></li>
                            <li><a href="#">Análise de dados</a></li>
                            <li><a href="#">Boot discord</a></li>
                        </ul>
                    </div>

                    <div className="footer-links">
                        <h4>Recursos</h4>
                        <ul>
                            <li><a href="#">IOS & Android</a></li>
                            <li><a href="#">Teste a Demo</a></li>
                            <li><a href="#">Clientes</a></li>
                            <li><a href="#">API</a></li>
                        </ul>
                    </div>
                </div>
                
                <div className="copy">
                    <p>Feito com amor na aula de Programação Web💙 ©2024 AktieTech - Todos os direitos reservados.</p>
                </div>
            </footer>
        </main>
    )
}