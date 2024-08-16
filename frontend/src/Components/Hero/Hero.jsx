import './Hero.css';
import hand_icon from '../Assets/hand_icon.png'
import search from '../Assets/search.png'
import hero_image from '../Assets/avatar-bg.png'

const Hero = () => {
  return (
    <div className='hero'>
      <div className='hero-left'>

<div >
<div className='hero-hand-icon'>
    <p>Find the perfect</p>
    <img src={hand_icon} alt=""/>
     </div>
     <p>freelance</p>
     <p>services for your business</p>
</div>
<div className='hero-latest-btn'>
            <div className="searchInput">
              <img src={search} alt="" />
              <input type="text" placeholder='Try "building mobil app"' />
            </div>
            <button>Search</button>

</div>
      </div>
      <div className='hero-right'>
      <img src={hero_image}alt=''/>
      </div>
    </div>
  )
}

export default Hero
