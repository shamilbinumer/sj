
import './App.css'
import Index from './Components/IndexPage/Index'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import ServiceDetailsPage from './Components/Service-DetailsPage/ServiceDetailsPage'
import About from './Components/About/About'
import Media from './Components/Media/Media'
import { useEffect, useState } from 'react'
import Preloader from './Components/Preloader/Preloader'
import ServicePage from './Components/ServicePage/ServicePage'




function App() {
  
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
     {loading ? (
        <Preloader />
      ) : (
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Index />} />
            <Route path='/service-detailPage/:id' element={<ServiceDetailsPage />} />
            <Route path='/about' element={<About />} />
            <Route path='/media' element={<Media />} />
            <Route path='/services' element={<ServicePage/>} />
          </Routes>
        </BrowserRouter>
      )}
    </>
  )
}

export default App
