import './styles/Initial.css'
import NavBar from "./components/NavBar"
import Main from './components/Main'
import Footer from './components/Footer'

function Initial(){
    return(
        <div className="main">
            <NavBar/>
            <Main/>
            <Footer/>
        </div>
    )
}

export default Initial