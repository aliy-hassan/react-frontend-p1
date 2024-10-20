// import MyButton from '../../components/myButton/MyButton';
import ChakraCard from "../../components/chakraCard/ChakraCard";
import "./About.css";

const data = [{ title: 'Accessible', description: 'Chakra UI strictly follows WAI-ARIA standards for all components.', icon: require('../../store/images/1.jpg') }, { title: 'Themeable', description: 'Customize any part of our components to match your design needs.', icon: require('../../store/images/2.jpg') }, { title: 'Composable', description: 'Designed with composition in mind. Compose new components with ease.', icon: require('../../store/images/3.jpg') },
{ title: 'Light and Dark UI', description: 'Optimized for multiple color modes. Use light or dark, your choice.', icon: require('../../store/images/4.jpg') }, { title: 'Developer Experience', description: 'Guaranteed to boost your productivity when building your app or website.', icon: require('../../store/images/5.jpg') }, { title: 'Active Community', description: 'We are a team of active maintainers ready to help you whenever you need.', icon: require('../../store/images/6.jpg') }];

function About() {
  return (
    <div className='aboutSec'>
      {/* <p className='aboutSec'>About</p>
        <MyButton/> */}

      <div className="container tx-c">
        <h1>An experience you'd expect from a design system</h1>
        <p>Opinionated and designed for daily use.</p>
        <div className="row row-cols-1 row-cols-md-3 g-5">

          {
            data.map((item, i) => {
              return (
                <div className="col" key={i}>
                  <ChakraCard data={item} />
                </div>
              )
            })
          }

          {/* <div class="col">
          <ChakraCard title={'abc33'} desc="xyz3333" />
        </div>
        <div class="col">
          <ChakraCard title={'abcasdfs'} desc="xyzasdf" />
        </div> */}
        </div>
      </div>

    </div>
  )
}

export default About