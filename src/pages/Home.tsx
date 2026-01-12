import { useEffect, useState } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { timelineData } from '../data/timeline'

const SLIDER_INTERVAL = 6000
const featuredTimeline = timelineData.slice(0, 5)

const Home = () => {
  const [scrollY, setScrollY] = useState(0)
  const [activeSlide, setActiveSlide] = useState(0)

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

  useEffect(() => {
    if (featuredTimeline.length === 0) return

    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % featuredTimeline.length)
    }, SLIDER_INTERVAL)

    return () => clearInterval(interval)
  }, [])

  const parallaxStyle = {
    transform: `translateY(${scrollY * 0.5}px)`,
  }

  const scrollToTimeline = () => {
    const section = document.getElementById('home-timeline-section')
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <>
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
              <span className="text-white text-sm font-medium">Chủ nghĩa xã hội khoa học</span>
            </div>
          </div>
          
          <h1 
            data-aos="fade-up" 
            data-aos-delay="200"
            className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-2xl"
          >
            Quá độ lên xã hội chủ nghĩa ở Việt Nam | Dân chủ và dân chủ xã hội chủ nghĩa
          </h1>
          
          <p 
            data-aos="fade-up" 
            data-aos-delay="400"
            className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Bối cảnh và chặng đường đưa đất nước ra khỏi khủng hoảng kinh tế – xã hội, mở ra thời kỳ Đổi mới sâu rộng.
          </p>

          <div data-aos="zoom-in" data-aos-delay="500">
            <button
              onClick={scrollToTimeline}
              className="inline-block px-8 py-4 bg-white text-party-red font-semibold text-lg rounded-full hover:bg-party-yellow-light transition-all duration-300 transform hover:scale-105 shadow-2xl"
            >
              Khám phá
            </button>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {featuredTimeline.length > 0 && (
        <section id="home-timeline-section" className="bg-white py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12" data-aos="fade-up">
              <p className="text-xs md:text-sm font-semibold uppercase tracking-[0.3em] text-party-red">
                
              </p>
              <h2 className="mt-4 text-3xl md:text-4xl font-bold text-gray-900">Lược đồ Timeline nhanh</h2>
              <p className="mt-3 text-gray-600 max-w-3xl mx-auto">
                Lướt ngang để xem nhanh những dấu mốc quan trọng. Slider tự động chuyển, bạn cũng có thể chọn nhanh
                bằng các chấm điều hướng bên dưới.
              </p>
            </div>

            <div className="relative overflow-hidden rounded-3xl border border-gray-100 shadow-xl bg-gray-50">
              <div
                className="flex transition-transform duration-700 ease-out"
                style={{ transform: `translateX(-${activeSlide * 100}%)` }}
              >
                {featuredTimeline.map((slide, index) => (
                  <article key={slide.year} className="min-w-full grid md:grid-cols-2">
                    <div className="relative h-64 md:h-full overflow-hidden">
                      {slide.image && (
                        <img
                          src={slide.image}
                          alt={slide.title}
                          className="h-full w-full object-cover transition-transform duration-700 ease-out"
                          style={{ transform: `scale(${activeSlide === index ? 1.05 : 1})` }}
                          loading="lazy"
                        />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/20 to-transparent" />
                      <div className="absolute bottom-4 left-4 text-white">
                        <p className="text-sm uppercase tracking-[0.3em] text-white/80">Năm</p>
                        <p className="text-4xl font-bold">{slide.year}</p>
                      </div>
                    </div>
                    <div className="p-8 md:p-12 flex flex-col justify-center bg-white">
                      <div className="inline-flex items-center gap-2 text-sm text-party-red font-semibold">
                        {slide.tag && (
                          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-party-red/10 text-party-red">
                            {slide.tag}
                          </span>
                        )}
                        {slide.icon && <span className="text-xl">{slide.icon}</span>}
                      </div>
                      <h3 className="mt-4 text-2xl md:text-3xl font-bold text-gray-900">{slide.title}</h3>
                      <p className="mt-3 text-gray-600 leading-relaxed">{slide.description}</p>
                      <a
                        href="/timeline"
                        className="mt-6 inline-flex items-center gap-2 text-party-red font-semibold hover:gap-3 transition-all"
                      >
                        Xem chi tiết trong Timeline
                        <span aria-hidden>→</span>
                      </a>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <div className="mt-8 flex justify-center gap-3">
              {featuredTimeline.map((slide, index) => (
                <button
                  key={slide.year}
                  onClick={() => setActiveSlide(index)}
                  className={`h-3 w-3 rounded-full transition-all ${
                    activeSlide === index ? 'bg-party-red scale-110' : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Chuyển đến mốc ${slide.year}`}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Tổng quan Việt Nam 1986 – 1996 */}
      <section className="bg-gradient-to-b from-gray-50 via-white to-gray-50 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12" data-aos="fade-up">
            <p className="text-xs md:text-sm font-semibold uppercase tracking-[0.3em] text-party-red">
              Việt Nam 1986 – 1996
            </p>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold text-gray-900">
              Mười năm đầu của công cuộc Đổi mới
            </h2>
            <p className="mt-3 text-gray-600 max-w-3xl mx-auto">
              Từ một nền kinh tế khủng hoảng, bao cấp, Việt Nam dần chuyển sang kinh tế thị trường định hướng xã hội
              chủ nghĩa, mở cửa hội nhập và từng bước cải thiện đời sống nhân dân.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-2xl shadow-md p-6 border border-gray-100" data-aos="fade-up">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Kinh tế</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Thực hiện khoán trong nông nghiệp, phát triển nhiều thành phần kinh tế, từng bước xóa bỏ cơ chế bao
                cấp, kiểm soát lạm phát và bảo đảm lương thực cho cả nước.
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-md p-6 border border-gray-100" data-aos="fade-up" data-aos-delay="100">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Xã hội</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Đời sống nhân dân dần được cải thiện; giáo dục, y tế, văn hóa tiếp tục được quan tâm, từng bước khắc
                phục những khó khăn sau chiến tranh và thời kỳ bao cấp.
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-md p-6 border border-gray-100" data-aos="fade-up" data-aos-delay="200">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Đối ngoại & hội nhập</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Bình thường hóa quan hệ với nhiều nước, gia nhập ASEAN, mở rộng hợp tác quốc tế, phá thế bao vây cấm
                vận và nâng cao vị thế Việt Nam trên trường quốc tế.
              </p>
            </div>
          </div>

          <div className="max-w-4xl mx-auto text-center text-sm md:text-base text-gray-500" data-aos="fade-up">
            <p>
              Các mốc thời gian trên chỉ là lát cắt tiêu biểu trong giai đoạn Đổi mới đầu tiên. Bạn có thể tiếp tục{" "}
              <a href="/timeline" className="text-party-red font-semibold hover:underline">
                khám phá Timeline chi tiết
              </a>{" "}
              hoặc vào{" "}
              <a href="/congress-vi" className="text-party-red font-semibold hover:underline">
                Chương 3 Phần 3
              </a>{" "}
              để tìm hiểu sâu hơn về đường lối Đổi mới.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
