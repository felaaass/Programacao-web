import imagemPraia from './assets/images.jpg';

export function Header() {
  return <h1>Meu Blog de Viagens</h1>;
}

export function Navigation() {
  return (
    <nav aria-label="Menu principal">
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Sobre</a></li>
        <li><a href="#">Contato</a></li>
      </ul>
    </nav>
  );
}

export function Article({ titulo, autor, data, conteudo }) {
  return (
    <article>
      <h2>{titulo}</h2>
      <time>{data}</time>
      <p>Por {autor}</p>
      {conteudo}
    </article>
  );
}

export function Sidebar() {
  return (
    <aside>
      <h3>Posts Relacionados</h3>
      <ul>
        <li><a href="#">Roteiro de 3 dias em Jericoacoara</a></li>
        <li><a href="#">Melhores praias para famílias</a></li>
        <li><a href="#">Gastronomia nordestina: o que provar</a></li>
      </ul>
    </aside>
  );
}

export function Footer() {
  return (
    <footer>
      <p>&copy; 2024 - Todos os direitos reservados.</p>
      <p>Contato: contato@meublogdeviagens.exemplo</p>
    </footer>
  );
}

export default function App() {
  const postInfo = {
    titulo: "Descobrindo as Praias do Nordeste",
    autor: "Artur",
    data: "03 de março de 2026",
    conteudo: (
      <>
        <p>
          As praias do Nordeste brasileiro são conhecidas por suas águas cristalinas,
          coqueirais e cenários espetaculares. Em viagens recentes, explorei trechos
          menos turísticos que mantêm a paisagem natural e a cultura local vivas.
        </p>
        <p>
          Além do banho de mar, a gastronomia e as trilhas próximas às praias oferecem
          experiências inesquecíveis. Recomenda-se sempre respeitar áreas de preservação
          e comunidades locais ao planejar passeios.
        </p>
        <figure>
          <img src={imagemPraia} alt="Vista aérea de uma praia do Nordeste" />
          <figcaption>Praia paradisíaca no Nordeste — imagem ilustrativa.</figcaption>
        </figure>
      </>
    )
  };

  return (
    <>
      <header>
        <Header />
        <Navigation />
      </header>
      <main>
        <Article 
          titulo={postInfo.titulo} 
          autor={postInfo.autor} 
          data={postInfo.data} 
          conteudo={postInfo.conteudo} 
        />
        <Sidebar />
      </main>
      <Footer />
    </>
  );
}