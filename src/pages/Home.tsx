import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Home = () => {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      offset: 100,
    })

    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const parallaxStyle = {
    transform: `translateY(${scrollY * 0.5}px)`,
  }

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background video */}
      <video 
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        style={parallaxStyle}
      >
        <source src="/videoplayback.mp4" type="video/mp4" />
      </video>
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-party-red/90 via-party-red-dark/85 to-party-red/90"></div>
      {/* Fallback nếu video không load được */}
      <div className="absolute inset-0 bg-gradient-to-br from-party-red via-party-red-dark to-party-red"></div>
      
      {/* Pattern overlay */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='grid' width='100' height='100' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 100 0 L 0 0 0 100' fill='none' stroke='rgba(255,255,255,0.1)' stroke-width='1'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23grid)'/%3E%3C/svg%3E")`
      }}></div>
      
      {/* Dark overlay behind text for better readability */}
      <div className="absolute inset-0 bg-black/40 z-[5]"></div>
      
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <div data-aos="fade-down" data-aos-delay="100">
          <div className="inline-block px-6 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6">
            <span className="text-white text-sm font-medium">Lịch sử Đảng Cộng sản Việt Nam</span>
          </div>
        </div>
        
        <h1 
          data-aos="fade-up" 
          data-aos-delay="200"
          className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-2xl"
        >
          Đổi mới toàn diện
        </h1>
        <h2 
          data-aos="fade-up" 
          data-aos-delay="300"
          className="text-3xl md:text-5xl font-semibold text-white mb-8 drop-shadow-xl"
        >
          1986 – 1996
        </h2>
        
        <p 
          data-aos="fade-up" 
          data-aos-delay="400"
          className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed"
        >
          Đưa đất nước ra khỏi khủng hoảng kinh tế – xã hội
        </p>
        
        <div data-aos="zoom-in" data-aos-delay="500">
          <Link
            to="/background"
            className="inline-block px-8 py-4 bg-white text-party-red font-semibold text-lg rounded-full hover:bg-party-yellow-light transition-all duration-300 transform hover:scale-105 shadow-2xl"
          >
            Khám phá ngay ↓
          </Link>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}

export default Home
