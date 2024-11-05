import { Helmet } from "react-helmet";
import "./App.css";
import AppRoutes from "./routes/AppRoutes";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

function App() {
  return (
    <div style={{ fontFamily: "Lato, sans-serif" }}>
      <Helmet>
        <title>Pablo Chaves - Escenógrafo</title>
        <meta
          name="description"
          content="Pablo Chaves Maza es un escenógrafo con formación en arquitectura y escenografía. Con experiencia en los principales teatros de España, ha trabajado en producciones destacadas, aportando su visión innovadora y técnica al diseño escénico."
        />
        <meta
          name="keywords"
          content="escenógrafo, diseño escénico, teatro, Teatro Español, CDN, Centro Dramático Nacional, Teatros del Canal, escenografía, Pablo Chaves Maza"
        />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Pablo Chaves - Escenógrafo" />
        <meta
          property="og:description"
          content="Pablo Chaves Maza es un escenógrafo con formación en arquitectura y escenografía. Con experiencia en los principales teatros de España, ha trabajado en producciones destacadas, aportando su visión innovadora y técnica al diseño escénico."
        />
        <meta
          property="og:image"
          content="https://www.pablochaves.com/static/media/FOTO%20BIO.881961b64f1c788caa34.jpg"
        />
        <meta property="og:url" content="https://www.pablochaves.com" />
        <meta property="og:type" content="website" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Pablo Chaves - Escenógrafo" />
        <meta
          name="twitter:description"
          content="Pablo Chaves Maza es un escenógrafo con formación en arquitectura y escenografía. Con experiencia en los principales teatros de España, ha trabajado en producciones destacadas, aportando su visión innovadora y técnica al diseño escénico."
        />
        <meta
          name="twitter:image"
          content="https://www.pablochaves.com/static/media/PabloChaves.jpg"
        />
      </Helmet>
      <NavBar />
      <AppRoutes />
      <Footer />
    </div>
  );
}

export default App;
