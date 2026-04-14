import Header from './components/header';
import Navigation from './components/navigation';
import Article from './components/article';
import Sidebar from './components/sidebar';
import Footer from './components/footer';

export default function App() {
  const postInfo = {
    titulo: "Refatorando HTML para React",
    autor: "Artur Kich",
    data: "14/04/2026",
    conteudo: "Aqui vai o texto do seu blog que estava no index.html antigo."
  };

  return (
    <>
      <Header />
      <Navigation />
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