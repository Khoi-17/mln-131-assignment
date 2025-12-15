import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const ImplementationVI = () => {
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
      {/* Section 2.7: Thực hiện Nghị quyết Đại hội VI (1986-1991) */}
      <section id="implementation-section" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold text-party-red mb-4">
              Thực hiện Nghị quyết Đại hội VI (1986–1991)
            </h2>
            <div className="w-24 h-1 bg-party-yellow mx-auto mb-6"></div>
          </div>

          <div className="space-y-8">
            {/* 4.1. Tác động quốc tế bất lợi */}
            <div data-aos="fade-up" className="bg-red-50 rounded-lg p-8 border-l-4 border-party-red">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">4.1. Tác động quốc tế bất lợi</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-party-red mr-2 font-bold">•</span>
                  <span>Khủng hoảng và sụp đổ hệ thống XHCN (1991)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-party-red mr-2 font-bold">•</span>
                  <span>Việt Nam mất nguồn viện trợ, bị Mỹ tiếp tục cấm vận</span>
                </li>
                <li className="flex items-start">
                  <span className="text-party-red mr-2 font-bold">•</span>
                  <span>Trung Quốc chiếm đảo Gạc Ma (1988)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-party-red mr-2 font-bold">•</span>
                  <span>Tình hình biên giới phía Bắc căng thẳng</span>
                </li>
              </ul>
            </div>

            {/* 4.2. Tình hình trong nước */}
            <div data-aos="fade-up" data-aos-delay="100" className="bg-yellow-50 rounded-lg p-8 border-l-4 border-party-yellow">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">4.2. Tình hình trong nước</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-party-yellow mr-2 font-bold">•</span>
                  <span>Khủng hoảng kinh tế còn nặng; nạn đói 1987–1988</span>
                </li>
                <li className="flex items-start">
                  <span className="text-party-yellow mr-2 font-bold">•</span>
                  <span>Lạm phát cực cao</span>
                </li>
                <li className="flex items-start">
                  <span className="text-party-yellow mr-2 font-bold">•</span>
                  <span>Niềm tin vào con đường XHCN dao động</span>
                </li>
              </ul>
            </div>

            {/* 4.3. Các quyết sách đột phá */}
            <div data-aos="fade-up" data-aos-delay="200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">4.3. Các quyết sách đột phá</h3>
              <div className="space-y-6">
                {/* Hội nghị Trung ương 2 */}
                <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-party-red">
                  <h4 className="text-xl font-bold text-gray-900 mb-3">Hội nghị Trung ương 2 (1987)</h4>
                  <p className="text-gray-700 mb-2">Chủ trương "bốn giảm": giảm bội chi – giảm tăng giá – giảm lạm phát – giảm khó khăn đời sống</p>
                  <p className="text-gray-700">Cơ chế một giá; đơn vị quốc doanh chuyển sang hạch toán</p>
                </div>

                {/* Quyết định 217-HĐBT */}
                <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-party-yellow">
                  <h4 className="text-xl font-bold text-gray-900 mb-3">Quyết định 217-HĐBT (1987)</h4>
                  <p className="text-gray-700">Trao quyền tự chủ cho doanh nghiệp nhà nước</p>
                </div>

                {/* Khoán 10 */}
                <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-party-red">
                  <h4 className="text-xl font-bold text-gray-900 mb-3">Nghị quyết 10 – Khoán 10 (1988)</h4>
                  <p className="text-gray-700 mb-2">Giao ruộng ổn định 15 năm; nông dân tự sản xuất – tự chịu trách nhiệm</p>
                  <p className="text-gray-700 font-semibold text-party-red">Bước ngoặt làm bùng nổ lực lượng sản xuất nông nghiệp</p>
                </div>

                {/* Luật Đầu tư nước ngoài */}
                <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-party-yellow">
                  <h4 className="text-xl font-bold text-gray-900 mb-3">Luật Đầu tư nước ngoài (1988)</h4>
                  <p className="text-gray-700">Lần đầu cho phép FDI vào Việt Nam</p>
                </div>
              </div>
            </div>

            {/* Thành tựu ban đầu */}
            <div data-aos="fade-up" data-aos-delay="300" className="bg-gradient-to-r from-green-50 to-party-yellow/10 rounded-lg p-8 border-l-4 border-green-500">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Thành tựu ban đầu</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2 font-bold">✓</span>
                      <span>Lạm phát giảm từ <strong>774%</strong> (1986) → <strong>67%</strong> (1991)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2 font-bold">✓</span>
                      <span>Xóa bỏ tem phiếu (1988)</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2 font-bold">✓</span>
                      <span>Lương thực từ thiếu → đủ ăn → xuất khẩu (1989)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2 font-bold">✓</span>
                      <span>Hàng hóa phong phú, thị trường sôi động</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2 font-bold">✓</span>
                      <span>Nền kinh tế nhiều thành phần theo cơ chế thị trường hình thành rõ nét</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2.8: Các hội nghị Trung ương và đổi mới đối ngoại */}
      <section id="conferences-section" className="py-20 px-4 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold text-party-red mb-4">
              Các hội nghị Trung ương quan trọng và đổi mới đối ngoại
            </h2>
            <div className="w-24 h-1 bg-party-yellow mx-auto mb-6"></div>
          </div>

          <div className="space-y-8">
            {/* 5.1. Hội nghị Trung ương 6 */}
            <div data-aos="fade-up" className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-party-red">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">5.1. Hội nghị Trung ương 6 (1989)</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-party-red mr-2 font-bold">•</span>
                  <span>Lần đầu sử dụng khái niệm hệ thống chính trị</span>
                </li>
                <li className="flex items-start">
                  <span className="text-party-red mr-2 font-bold">•</span>
                  <span>Xác định 6 nguyên tắc chỉ đạo đổi mới</span>
                </li>
                <li className="flex items-start">
                  <span className="text-party-red mr-2 font-bold">•</span>
                  <span>Nhấn mạnh: đổi mới không phải từ bỏ mục tiêu XHCN</span>
                </li>
              </ul>
            </div>

            {/* 5.2. Hội nghị Trung ương 8 */}
            <div data-aos="fade-up" data-aos-delay="100" className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-party-yellow">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">5.2. Hội nghị Trung ương 8 (1990)</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-party-yellow mr-2 font-bold">•</span>
                  <span>Phân tích khủng hoảng Liên Xô – Đông Âu</span>
                </li>
                <li className="flex items-start">
                  <span className="text-party-yellow mr-2 font-bold">•</span>
                  <span>Cảnh báo "diễn biến hòa bình" của các thế lực thù địch</span>
                </li>
                <li className="flex items-start">
                  <span className="text-party-yellow mr-2 font-bold">•</span>
                  <span>Khẳng định phải kiên định mục tiêu XHCN</span>
                </li>
                <li className="flex items-start">
                  <span className="text-party-yellow mr-2 font-bold">•</span>
                  <span>Đẩy mạnh đổi mới tư duy, nhất là tư duy kinh tế và tổ chức Đảng</span>
                </li>
              </ul>
            </div>

            {/* 6. Đổi mới đường lối đối ngoại */}
            <div data-aos="fade-up" data-aos-delay="200" className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-party-red">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">6. Đổi mới đường lối đối ngoại</h3>
              <div className="bg-blue-50 rounded-lg p-6 mb-4">
                <p className="text-xl font-semibold text-gray-900 mb-4">Phương châm: "thêm bạn, bớt thù"</p>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="font-semibold text-gray-900 mb-3">Bình thường hóa quan hệ với:</p>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Trung Quốc</li>
                    <li>• Hoa Kỳ</li>
                    <li>• Các nước ASEAN</li>
                    <li>• Nhiều nước châu Âu</li>
                  </ul>
                </div>
                <div>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-party-red mr-2 font-bold">•</span>
                      <span>Rút toàn bộ quân tình nguyện khỏi Campuchia (1989)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-party-red mr-2 font-bold">•</span>
                      <span>Từng bước phá thế bao vây, cấm vận</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ImplementationVI
