import "./MyHeader.css"

function MyHeader() {
  return (
    <div className="headerSec container">
      <h1 className='header'>Create accessible React apps <span className="hs">with speed</span></h1>
      <p className="headerDesc">Chakra UI is a simple, modular and accessible component library that gives you the building blocks you need to build your React applications.</p>

      <img src={require('../../store/images/git-nation-badge.png')} alt="" />
    </div>
  )
}

export default MyHeader