import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { images, handleImageError } from '../utils/images'

const Achievements = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      offset: 100,
    })
  }, [])

  return (
    <>
      {/* Section 3: Thành tựu nổi bật */}
      <section id="achievements-section" className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold text-party-red mb-4">
              Thành tựu nổi bật giai đoạn 1986–1996
            </h2>
            <div className="w-24 h-1 bg-party-yellow mx-auto mb-6"></div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Những thành tựu to lớn đạt được sau 10 năm thực hiện đường lối đổi mới toàn diện đất nước.
            </p>
          </div>

          {/* Hình ảnh phát triển - Thành tựu sau đổi mới */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div data-aos="zoom-in" data-aos-delay="0" className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src={images.achievement} 
                alt="Thành tựu kinh tế sau đổi mới" 
                className="w-full h-48 object-cover hover:scale-110 transition-transform duration-500"
                onError={(e) => handleImageError(e, 'achievement')}
                loading="lazy"
              />
              <div className="bg-white p-3">
                <p className="text-sm text-gray-600 text-center font-medium">Thành tựu kinh tế</p>
                <p className="text-xs text-gray-500 text-center mt-1">Sau đổi mới 1986-1996</p>
              </div>
            </div>
            <div data-aos="zoom-in" data-aos-delay="100" className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src={images.development} 
                alt="Phát triển cơ sở hạ tầng" 
                className="w-full h-48 object-cover hover:scale-110 transition-transform duration-500"
                onError={(e) => handleImageError(e, 'development')}
                loading="lazy"
              />
              <div className="bg-white p-3">
                <p className="text-sm text-gray-600 text-center font-medium">Cơ sở hạ tầng</p>
                <p className="text-xs text-gray-500 text-center mt-1">Phát triển mạnh mẽ</p>
              </div>
            </div>
            <div data-aos="zoom-in" data-aos-delay="200" className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src={images.urban} 
                alt="Đô thị hóa và phát triển" 
                className="w-full h-48 object-cover hover:scale-110 transition-transform duration-500"
                onError={(e) => handleImageError(e, 'urban')}
                loading="lazy"
              />
              <div className="bg-white p-3">
                <p className="text-sm text-gray-600 text-center font-medium">Đô thị hóa</p>
                <p className="text-xs text-gray-500 text-center mt-1">Thành phố phát triển</p>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: '🏭', title: 'Công nghiệp hóa' },
              { icon: '🌾', title: 'Nông nghiệp phát triển' },
              { icon: '💼', title: 'Kinh tế thị trường' },
              { icon: '🌍', title: 'Hội nhập quốc tế' },
              { icon: '👥', title: 'Cải thiện đời sống' },
              { icon: '📚', title: 'Giáo dục đổi mới' },
            ].map((item, index) => (
              <div 
                key={index} 
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-party-yellow"
              >
                <div className="text-6xl mb-6 transform hover:scale-110 transition-transform duration-300">{item.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  Những thành tựu quan trọng trong lĩnh vực {item.title.toLowerCase()} góp phần đưa đất nước phát triển vững chắc.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Ý nghĩa lịch sử */}
      <section id="significance-section" className="py-20 px-4 bg-gradient-to-br from-party-red to-party-red-dark text-white relative overflow-hidden">
        {/* Background image với parallax */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: `url(${images.history})`,
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-br from-party-red/95 to-party-red-dark/95"></div>
        
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 border-2 border-white/20 shadow-2xl" data-aos="fade-up">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Ý nghĩa lịch sử của Đổi Mới
              </h2>
              <div className="w-24 h-1 bg-party-yellow mx-auto"></div>
            </div>

            <div className="space-y-8">
              <div className="space-y-4 text-lg md:text-xl leading-relaxed text-white/95">
                <p data-aos="fade-up" data-aos-delay="100">
                  <strong>7. Ý nghĩa Đại hội VI</strong>
                </p>
                <ul className="space-y-3 ml-6" data-aos="fade-up" data-aos-delay="150">
                  <li className="flex items-start">
                    <span className="text-party-yellow mr-3">•</span>
                    <span>Khởi xướng đường lối đổi mới toàn diện</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-party-yellow mr-3">•</span>
                    <span>Đưa đất nước thoát khỏi khủng hoảng kéo dài</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-party-yellow mr-3">•</span>
                    <span>Xây dựng mô hình kinh tế thị trường định hướng XHCN</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-party-yellow mr-3">•</span>
                    <span>Tạo nền tảng cho các thành tựu kinh tế – xã hội 1990s và đầu thế kỷ XXI</span>
                  </li>
                </ul>
              </div>

              {/* Hình ảnh tư liệu dân tộc */}
              <div className="rounded-lg overflow-hidden shadow-2xl" data-aos="zoom-in" data-aos-delay="200">
                <img 
                  src={images.document} 
                  alt="Tư liệu lịch sử Việt Nam giai đoạn 1986-1996" 
                  className="w-full h-64 object-cover"
                  onError={(e) => handleImageError(e, 'document')}
                  loading="lazy"
                />
                <div className="bg-black/50 p-4 text-center">
                  <p className="text-white text-sm font-medium">Tư liệu lịch sử Đổi mới</p>
                  <p className="text-white/80 text-xs mt-1">Giai đoạn 1986-1996</p>
                </div>
              </div>

              <div className="bg-white/20 rounded-lg p-8 border-l-4 border-party-yellow" data-aos="fade-up" data-aos-delay="300">
                <div className="flex items-start gap-4">
                  <svg className="w-8 h-8 text-party-yellow flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-3.313.767-5.962 3.493-5.962 7.346h2v10h-7.017zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-3.313.767-5.962 3.493-5.962 7.346h2v10h-7.034z"/>
                  </svg>
                  <blockquote className="text-xl md:text-2xl font-serif italic text-white leading-relaxed">
                    "Đổi mới là bước ngoặt mang tính lịch sử của Đảng và nhân dân Việt Nam."
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4.5: Hạn chế */}
      <section id="limitations-section" className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold text-party-red mb-4">
              8. Hạn chế
            </h2>
            <div className="w-24 h-1 bg-party-yellow mx-auto mb-6"></div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-orange-400" data-aos="fade-up">
            <ul className="space-y-4 text-gray-700 text-lg">
              <li className="flex items-start">
                <span className="text-orange-500 mr-3 font-bold">•</span>
                <span>Chưa có giải pháp mạnh để tháo gỡ rối ren phân phối – lưu thông</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 mr-3 font-bold">•</span>
                <span>Một số vấn đề tư duy kinh tế còn mới mẻ, triển khai còn thận trọng</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}

export default Achievements
