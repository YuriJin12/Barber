import './App.css';
import Header from "./Components/Header";
import WelcomeSection from "./Components/WelcomeSection"
import BarberServices from "./Components/BarberServices"
import OurBarbers from "./Components/OurBarbers"
import Footer from "./Components/Footer"

function App() {
  return (
    <div className="App">
        <Header />
        <WelcomeSection />
        <BarberServices />
        <OurBarbers />
        <Footer />
    </div>
  );
}

export default App;


// https://br.pinterest.com/pin/782359766508965104/?mt=login