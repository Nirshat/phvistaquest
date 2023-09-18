
import './App.scss'
import Content from './components/Content'
// import Footer from './components/Footer'
import Header from './components/Header'
import useBannerStore from './stores/useBannerStore';

function App() {

  const {bg} = useBannerStore();

  const backgroundImage = {
    background: `url(${bg})`,
  };

  return (
    <>
      <div className="main-box">
        <Header/>
        <Content/>
        {/* <Footer/> */}
      </div>
      <div className="bg-img" style={backgroundImage}>
        <img src={bg} alt="" />
      </div>
    </>
  )
}

export default App
