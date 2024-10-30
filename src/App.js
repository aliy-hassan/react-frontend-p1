

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './App.css';
// components
import MyHeader from './components/myHeader/MyHeader';
import MyButton from './components/myButton/MyButton';
import MyFooter from './components/myFooter/MyFooter';
import BsCard from './components/bsCard/BsCard';
import NavigationBar from './components/navigationBar/NavigationBar';

// pages
import About from './pages/about/About';
import Services from './pages/services/Services';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <MyHeader />


      {2 > 5 ?
        <div className='flx-box'>
          <MyButton />
          <MyButton title="Save" style={{ backgroundColor: "red", fontSize: '18px' }} />
          <MyButton title="Submit" style={{ backgroundColor: "red", fontSize: '20px' }} />
          <MyButton title="Upgrade" style={{ backgroundColor: "red", fontSize: '22px' }} />
        </div>

        :

        <div className='row row-cols-md-3 g-3 justify-content-center bsCardSec'>
          {/* <BsCard/> */}
          <BsCard style={{ backgroundColor: 'pink', color: 'blue' }} list={['Item 1', 'Item 2']} title="Front End" src={require('./store/images/frontend.jpg')} />
          <BsCard style={{ backgroundColor: 'skyblue', color: 'white' }} list={['Item I', 'Item II', 'Item III']} title="Back End" src={require('./store/images/abc.png')} />
          <BsCard style={{ backgroundColor: 'orange', color: 'white' }} list={['Item A', 'Item B']} title="Full Stack" src={require('./store/images/2918517.webp')} />
        </div>

      }

      
      <About />
      <Services />

      <MyFooter />

    </div>
  );
}

export default App;
