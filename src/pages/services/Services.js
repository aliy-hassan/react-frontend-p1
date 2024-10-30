import ServiceCard from '../../components/serviceCard/ServiceCard';
import './Services.css';

const data = [
  {title: 'AI Based Solutions', src: require('../../store/images/ai-icon.webp'), desc: 'We support and build smart AI based solutions using machine learning algorithms and Augmented reality'},
  {title: 'Blockchain Based Solutions', src: require('../../store/images/blockchain-icon.webp'), desc: 'We can build blockchain Dapps, Web3, Polygon wallets, Smart contract, NFT based solutions and FinTech solutions'},
  {title: 'DevOps', src: require('../../store/images/devops-icon.webp'), desc: 'With our Certified Kubernetes Application Developers from Linux Foundation, we are providing DevOps services'},
  {title: 'Digital Marketing ', src: require('../../store/images/digital-marketing-icon.webp'), desc: 'We can help your product reach the most accurate lead and the target audience in attempt for it to be traded on the spot.'},
  {title: 'IoT Solutions', src: require('../../store/images/iot-icon.webp'), desc: 'We can implement all kind of IoT based solutions within web & mobile apps for smart homes and smart cities.'},
  {title: 'IT Consultation', src: require('../../store/images/IT-Consultation.webp'), desc: 'We can book an appointment with our expert team leaders for an IT consultation to give you insights on latest market trends'},
  {title: 'Mobile App Development', src: require('../../store/images/mobile-dev-icon.webp'), desc: 'We build smart hybrid mobile apps for both android & iOS with high performance and reusability'},
  {title: 'Saas Products', src: require('../../store/images/saas-icon.webp'), desc: "We have worked on several SaaS apps before and we're quite good at developing &amp; supporting million user apps"},
  {title: 'UI/UX Designing', src: require('../../store/images/ui-ux-designing-icon.webp'), desc: 'We create the art of modern era that can give life to product ideas and give improved user experience'},
  {title: 'Web App Development', src: require('../../store/images/web-dev-icon.webp'), desc: 'We build scalable responsive and highly interactive web apps that are cross browser compatible'}
]

function Services() {
  return (
    <div className='serv'>
      <h1>Forefront Services</h1>
      <ServiceCard data={data} />
    </div>
  )
}

export default Services;