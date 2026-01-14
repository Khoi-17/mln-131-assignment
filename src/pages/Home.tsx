import { useEffect, useState } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
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
            <a
              href="/congress-vi"
              className="inline-block px-8 py-4 bg-white text-party-red font-semibold text-lg rounded-full hover:bg-party-yellow-light transition-all duration-300 transform hover:scale-105 shadow-2xl"
            >
              Khám phá
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Section 1: Quá độ lên CNXH (Đại hội VI) */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div data-aos="fade-right">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Quá độ lên <br />
                <span className="text-blue-700">Chủ nghĩa Xã hội</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed text-justify">
                Đại hội VI đánh dấu bước ngoặt lịch sử với tư duy mới: thừa nhận thời kỳ quá độ lên chủ nghĩa xã hội là một quá trình lâu dài, khó khăn, phải trải qua nhiều chặng đường và đặc biệt là <strong className="text-gray-900">"bỏ qua chế độ tư bản chủ nghĩa"</strong>.
              </p>

              <div className="space-y-6 mb-10">
                <div className="flex gap-4 p-4 rounded-xl bg-gray-50 border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center shrink-0">
                    <span className="font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Tính tất yếu khách quan</h4>
                    <p className="text-sm text-gray-600">Phù hợp với quy luật phát triển của lịch sử và điều kiện cụ thể của Việt Nam.</p>
                  </div>
                </div>
                <div className="flex gap-4 p-4 rounded-xl bg-gray-50 border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center shrink-0">
                    <span className="font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Bỏ qua chế độ TBCN</h4>
                    <p className="text-sm text-gray-600">Bỏ qua việc xác lập vị trí thống trị của QHSX và KTTT tư bản chủ nghĩa.</p>
                  </div>
                </div>
              </div>

              <a
                href="/congress-vi"
                className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-full font-bold hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-200"
              >
                Tìm hiểu
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
              </a>
            </div>

            <div className="relative" data-aos="fade-left">
              <div className="absolute inset-0 bg-blue-600 rounded-[3rem] rotate-3 opacity-10"></div>
              <img
                src="https://cdn.thuvienphapluat.vn/phap-luat/2022-2/NTTX/291024/thoi-ky-qua-do.jpg"
                alt="Đại hội VI"
                className="relative rounded-[3rem] shadow-2xl w-full h-[500px] object-cover"
              />
              <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 max-w-xs">
                <p className="italic text-gray-600 font-serif">"Nhìn thẳng vào sự thật, đánh giá đúng sự thật, nói rõ sự thật"</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Dân chủ (Đại hội VII) */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image Side (Order 2 on mobile, 1 on desktop) */}
            <div className="relative order-2 lg:order-1" data-aos="fade-right">
              <div className="absolute inset-0 bg-red-600 rounded-[3rem] -rotate-3 opacity-10"></div>
              <img
                src="https://tuyenquang.dcs.vn/Image/Large/20218278521_48282.jpg"
                alt="Dân chủ XHCN"
                className="relative rounded-[3rem] shadow-2xl w-full h-[500px] object-cover"
              />
              <div className="absolute -top-8 -right-8 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 max-w-xs z-10">
                <p className="font-bold text-party-red text-lg text-center">DÂN LÀ GỐC</p>
                <div className="h-1 w-12 bg-gray-200 mx-auto my-2"></div>
                <p className="text-center text-sm text-gray-500">Tư tưởng xuyên suốt</p>
              </div>
            </div>

            {/* Content Side */}
            <div className="order-1 lg:order-2" data-aos="fade-left">

              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Dân chủ & <br />
                <span className="text-party-red">Dân chủ XHCN</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed text-justify">
                Nền dân chủ xã hội chủ nghĩa không chỉ là một chế độ chính trị, mà còn là giá trị văn hóa, xã hội. Đó là nền dân chủ <strong className="text-gray-900">của dân, do dân, vì dân</strong>, nơi quyền lực thực sự thuộc về nhân dân.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-10">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-red-50 hover:border-red-200 transition-colors text-center">
                  <div className="w-12 h-12 mx-auto bg-red-100 text-red-600 rounded-full flex items-center justify-center mb-4">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"></path></svg>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">Chính trị</h4>
                  <p className="text-sm text-gray-500">Quyền lực thuộc về nhân dân</p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-red-50 hover:border-red-200 transition-colors text-center">
                  <div className="w-12 h-12 mx-auto bg-red-100 text-red-600 rounded-full flex items-center justify-center mb-4">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">Kinh tế</h4>
                  <p className="text-sm text-gray-500">Công hữu tư liệu sản xuất chủ yếu</p>
                </div>
              </div>

              <a
                href="/congress-vii"
                className="inline-flex items-center gap-2 px-8 py-4 bg-red-600 text-white rounded-full font-bold hover:bg-red-700 transition-all shadow-lg hover:shadow-red-200"
              >
                Tìm hiểu
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
              </a>
            </div>
          </div>
        </div>
      </section>


    </>
  )
}

export default Home
