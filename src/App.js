import Menu from "./components/Menu";
import dadosIniciais from "./data/dados_iniciais.json"
import BannerMain from "./components/BannerMain"
import Carousel from "./components/Carousel"
import Footer from "./components/Footer"


function App() {
  return (
    <div style={{background: '#141414'}}>
      <Menu />

      <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={"O que é front-end?"}
      />

      <Carousel
        ignoreFirstVideo
        category = {dadosIniciais.categorias[0]}
      /> 

      <Carousel
        ignoreFirstVideo
        category = {dadosIniciais.categorias[1]}
      /> 

      <Carousel
        ignoreFirstVideo
        category = {dadosIniciais.categorias[2]}
      /> 

      <Carousel
        ignoreFirstVideo
        category = {dadosIniciais.categorias[3]}
      /> 

      <Carousel
        ignoreFirstVideo
        category = {dadosIniciais.categorias[4]}
      /> 

      <Carousel
        ignoreFirstVideo
        category = {dadosIniciais.categorias[5]}
      /> 

      <Footer/>

    </div>
  );
}

export default App;
