import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { images, handleImageError } from '../utils/images'

const Background = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      offset: 100,
    })
  }, [])

  return (
    <section id="background-section" className="py-20 px-4 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-party-red mb-4">
            Bối cảnh lịch sử trước Đại hội VI
          </h2>
          <div className="w-24 h-1 bg-party-yellow mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Trước Đại hội VI, Việt Nam đứng trước những thách thức lớn cả về quốc tế và trong nước, 
            đòi hỏi cấp bách phải đổi mới toàn diện để đưa đất nước ra khỏi khủng hoảng.
          </p>
        </div>

        {/* Hình ảnh tư liệu - Bối cảnh kinh tế khó khăn */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div data-aos="fade-right" className="rounded-lg overflow-hidden shadow-xl">
            <img 
              src={images.economy} 
              alt="Bộ tiền giấy phát hành năm 1985 - Phản ánh khó khăn kinh tế" 
              className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
              onError={(e) => handleImageError(e, 'economy')}
              loading="lazy"
            />
            <div className="bg-white p-4">
              <p className="text-sm text-gray-600 text-center font-medium">Bộ tiền giấy 1985</p>
              <p className="text-xs text-gray-500 text-center mt-1">Phản ánh khó khăn kinh tế</p>
            </div>
          </div>
          <div data-aos="fade-up" className="rounded-lg overflow-hidden shadow-xl">
            <img 
              src={images.traffic} 
              alt="Giao thông Hà Nội những năm 1980 - Xe đạp và tàu điện" 
              className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
              onError={(e) => handleImageError(e, 'traffic')}
              loading="lazy"
            />
            <div className="bg-white p-4">
              <p className="text-sm text-gray-600 text-center font-medium">Giao thông Hà Nội 1980</p>
              <p className="text-xs text-gray-500 text-center mt-1">Xe đạp và tàu điện</p>
            </div>
          </div>
          <div data-aos="fade-left" className="rounded-lg overflow-hidden shadow-xl">
            <img 
              src={images.moneyExchange} 
              alt="Bàn đổi tiền ở Hàng Buồm, Hà Nội năm 1985" 
              className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
              onError={(e) => handleImageError(e, 'moneyExchange')}
              loading="lazy"
            />
            <div className="bg-white p-4">
              <p className="text-sm text-gray-600 text-center font-medium">Bàn đổi tiền 1985</p>
              <p className="text-xs text-gray-500 text-center mt-1">Hàng Buồm, Hà Nội</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-12">
          <div 
            data-aos="fade-right"
            className="bg-white rounded-lg shadow-lg p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-party-red"
          >
            <div className="w-16 h-16 bg-party-red/10 rounded-full flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-party-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 002 2h2.945M15 15v3a2 2 0 01-2 2H5a2 2 0 01-2-2v-3m0-4V9a2 2 0 012-2h2.945M9 3v2a2 2 0 002 2h2a2 2 0 002-2V3m-4 8h4m-4 0a2 2 0 01-2-2H7a2 2 0 00-2 2m8 0V9a2 2 0 00-2-2h-2M9 15h6" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              1.1. Bối cảnh quốc tế
            </h3>
            <ul className="text-gray-600 leading-relaxed space-y-3">
              <li className="flex items-start">
                <span className="text-party-red mr-2">•</span>
                <span>Cuộc cách mạng khoa học – kỹ thuật phát triển mạnh; xu hướng đối thoại thay thế đối đầu.</span>
              </li>
              <li className="flex items-start">
                <span className="text-party-red mr-2">•</span>
                <span>Liên Xô và các nước XHCN tiến hành cải tổ.</span>
              </li>
              <li className="flex items-start">
                <span className="text-party-red mr-2">•</span>
                <span>Đổi mới trở thành xu thế chung của thời đại.</span>
              </li>
            </ul>
          </div>
          
          <div 
            data-aos="fade-left"
            className="bg-white rounded-lg shadow-lg p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-party-yellow"
          >
            <div className="w-16 h-16 bg-party-yellow/10 rounded-full flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-party-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              1.2. Bối cảnh trong nước
            </h3>
            <p className="text-gray-600 leading-relaxed mb-3">
              Việt Nam bị bao vây, cấm vận; kinh tế – xã hội rơi vào khủng hoảng nặng:
            </p>
            <ul className="text-gray-600 leading-relaxed space-y-2">
              <li className="flex items-start">
                <span className="text-party-yellow mr-2">•</span>
                <span>Lương thực, hàng tiêu dùng khan hiếm.</span>
              </li>
              <li className="flex items-start">
                <span className="text-party-yellow mr-2">•</span>
                <span>Lạm phát năm 1986 lên tới <strong className="text-party-red">774%</strong>.</span>
              </li>
              <li className="flex items-start">
                <span className="text-party-yellow mr-2">•</span>
                <span>Nhiều tiêu cực xã hội, vượt biên trái phép gia tăng.</span>
              </li>
              <li className="flex items-start">
                <span className="text-party-yellow mr-2">•</span>
                <span><strong>Đòi hỏi cấp bách phải đổi mới toàn diện.</strong></span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Background
