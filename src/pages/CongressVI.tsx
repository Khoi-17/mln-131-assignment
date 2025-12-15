import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { images, handleImageError } from '../utils/images'

const CongressVI = () => {
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
      {/* Section 2: Đường lối và Chính sách Đổi mới */}
      <section id="policies-section" className="py-20 px-4 bg-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-party-yellow/5 rounded-full blur-3xl -mr-48 -mt-48"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-party-red/5 rounded-full blur-3xl -ml-48 -mb-48"></div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold text-party-red mb-4">
              Đại hội VI (1986): Nội dung chính
            </h2>
            <div className="w-24 h-1 bg-party-yellow mx-auto mb-6"></div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Đại hội đại biểu toàn quốc lần thứ VI của Đảng Cộng sản Việt Nam - 
              Mốc son lịch sử khởi đầu công cuộc Đổi mới toàn diện đất nước.
            </p>
          </div>

          {/* Hình minh họa Đại hội VI */}
          <div className="mb-16" data-aos="zoom-in">
            <div className="rounded-lg overflow-hidden shadow-2xl">
              <img 
                src={images.congress} 
                alt="Đại hội VI của Đảng Cộng sản Việt Nam - 1986" 
                className="w-full h-96 object-cover"
                onError={(e) => handleImageError(e, 'congress')}
                loading="lazy"
              />
              <div className="bg-gradient-to-t from-black/95 via-black/85 to-transparent p-8 -mt-32 relative z-10">
                <h3 className="text-3xl font-bold text-white mb-2 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">Đại hội VI (1986)</h3>
                <p className="text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.7)]">Mốc son lịch sử khởi đầu công cuộc Đổi mới toàn diện</p>
                <p className="text-white/95 text-sm mt-2 drop-shadow-[0_1px_4px_rgba(0,0,0,0.6)]">Họp tại Hà Nội (15–18/12/1986) • 1.129 đại biểu • 32 đoàn quốc tế tham dự</p>
                <p className="text-white/95 text-sm mt-1 drop-shadow-[0_1px_4px_rgba(0,0,0,0.6)]">Đồng chí Nguyễn Văn Linh được bầu làm Tổng Bí thư</p>
              </div>
            </div>
          </div>

          {/* 2.1. Thời gian – thành phần – kết quả tổ chức */}
          <div className="mb-12" data-aos="fade-up">
            <div className="bg-gradient-to-r from-party-red/10 to-party-yellow/10 rounded-lg p-8 border-l-4 border-party-red">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">2.1. Thời gian – thành phần – kết quả tổ chức</h3>
              <div className="grid md:grid-cols-2 gap-4 text-gray-700">
                <div>
                  <p className="mb-2"><strong>Thời gian:</strong> Họp tại Hà Nội (15–18/12/1986)</p>
                  <p className="mb-2"><strong>Thành phần:</strong> 1.129 đại biểu đại diện gần 2 triệu đảng viên</p>
                  <p><strong>Quốc tế:</strong> 32 đoàn quốc tế tham dự</p>
                </div>
                <div>
                  <p className="mb-2"><strong>Kết quả:</strong> Bầu BCH Trung ương (124 ủy viên), Bộ Chính trị (13 ủy viên)</p>
                  <p><strong>Tổng Bí thư:</strong> Đồng chí Nguyễn Văn Linh được bầu làm Tổng Bí thư</p>
                </div>
              </div>
            </div>
          </div>

          {/* 2.2. Tinh thần đổi mới */}
          <div className="mb-12" data-aos="fade-up" data-aos-delay="100">
            <div className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-party-yellow">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">2.2. Tinh thần đổi mới</h3>
              <div className="bg-yellow-50 rounded-lg p-6 mb-4 border-l-4 border-party-yellow">
                <p className="text-xl font-semibold text-gray-900 italic mb-4">
                  "Nhìn thẳng vào sự thật – đánh giá đúng sự thật – nói rõ sự thật"
                </p>
              </div>
              <div className="space-y-4 text-gray-700">
                <p><strong>Nghiêm túc kiểm điểm sai lầm 1975–1986:</strong></p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Sai lầm chiến lược, duy ý chí, nóng vội</li>
                  <li>Tư tưởng tiểu tư sản, tả – hữu khuynh</li>
                  <li>Nguyên nhân sâu xa: công tác tư tưởng, tổ chức, cán bộ yếu kém</li>
                </ul>
              </div>
            </div>
          </div>

          {/* 2.3. Bốn bài học lớn */}
          <div className="mb-12" data-aos="fade-up" data-aos-delay="200">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">2.3. Bốn bài học lớn rút ra tại Đại hội</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: 'Lấy dân làm gốc', icon: '👥', color: 'party-red' },
                { title: 'Xuất phát từ thực tế, tôn trọng quy luật khách quan', icon: '📊', color: 'party-yellow' },
                { title: 'Kết hợp sức mạnh dân tộc với sức mạnh thời đại', icon: '🌍', color: 'party-red' },
                { title: 'Xây dựng Đảng ngang tầm nhiệm vụ', icon: '🏛️', color: 'party-yellow' },
              ].map((item, index) => (
                <div 
                  key={index}
                  className={`bg-white rounded-lg shadow-lg p-6 border-l-4 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${
                    item.color === 'party-red' ? 'border-party-red' : 'border-party-yellow'
                  }`}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-4xl">{item.icon}</span>
                    <h4 className="text-xl font-bold text-gray-900">{item.title}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 2.5: Nội dung đường lối đổi mới toàn diện */}
      <section id="reform-content-section" className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold text-party-red mb-4">
              Nội dung đường lối đổi mới toàn diện
            </h2>
            <div className="w-24 h-1 bg-party-yellow mx-auto mb-6"></div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Đường lối đổi mới toàn diện bao gồm các lĩnh vực: kinh tế, xã hội, quốc phòng – an ninh – đối ngoại, và xây dựng Đảng.
            </p>
          </div>

          <div className="space-y-8">
            {/* 3.1. Đổi mới kinh tế */}
            <div data-aos="fade-up" className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-party-red">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">3.1. Đổi mới kinh tế</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-party-red mr-2 font-bold">•</span>
                      <span>Phát triển nhiều thành phần kinh tế</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-party-red mr-2 font-bold">•</span>
                      <span>Xóa bỏ cơ chế bao cấp → chuyển sang hạch toán kinh doanh</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-party-red mr-2 font-bold">•</span>
                      <span>Bố trí lại cơ cấu kinh tế; mở rộng kinh tế đối ngoại</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-party-red mr-2 font-bold">•</span>
                      <span>Phát huy động lực khoa học – kỹ thuật</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-party-red/5 rounded-lg p-6">
                  <h4 className="font-bold text-gray-900 mb-3">Ba chương trình kinh tế lớn:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>🌾 Lương thực – thực phẩm</li>
                    <li>🛒 Hàng tiêu dùng</li>
                    <li>📦 Hàng xuất khẩu</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 3.2. Chính sách xã hội */}
            <div data-aos="fade-up" data-aos-delay="100" className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-party-yellow">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">3.2. Chính sách xã hội</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  'Dân số – việc làm',
                  'Công bằng xã hội – an toàn xã hội',
                  'Giáo dục – văn hóa – y tế',
                  'Chính sách bảo trợ xã hội',
                ].map((item, index) => (
                  <div key={index} className="bg-party-yellow/5 rounded-lg p-4 text-center">
                    <p className="text-gray-700 font-medium">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* 3.3. Quốc phòng – an ninh – đối ngoại */}
            <div data-aos="fade-up" data-aos-delay="200" className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-party-red">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">3.3. Quốc phòng – an ninh – đối ngoại</h3>
              <div className="grid md:grid-cols-2 gap-6 text-gray-700">
                <div>
                  <p className="mb-3">• Giữ vững cảnh giác; sẵn sàng bảo vệ Tổ quốc</p>
                  <p className="mb-3">• Tăng cường quan hệ với Liên Xô và các nước XHCN</p>
                  <p>• Bình thường hóa quan hệ Việt – Trung</p>
                </div>
                <div>
                  <p>• Góp phần đấu tranh vì hòa bình, độc lập dân tộc</p>
                </div>
              </div>
            </div>

            {/* 3.4. Đổi mới xây dựng Đảng */}
            <div data-aos="fade-up" data-aos-delay="300" className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-party-yellow">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">3.4. Đổi mới xây dựng Đảng</h3>
              <div className="space-y-4 text-gray-700">
                <p>• Đổi mới tư duy, trước hết là tư duy kinh tế</p>
                <div className="bg-yellow-50 rounded-lg p-4 border-l-4 border-party-yellow">
                  <p className="font-semibold italic">"Dân biết – dân bàn – dân làm – dân kiểm tra"</p>
                </div>
                <p>• Tăng cường đoàn kết, giữ vững nguyên tắc tổ chức của Đảng</p>
                <p>• Nâng cao hiệu lực quản lý Nhà nước</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default CongressVI
