import { useEffect, useState } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const CongressVII = () => {
  const [activeTabVII, setActiveTabVII] = useState(0)

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      offset: 100,
    })
  }, [])

  return (
    <section id="congress-vii-section" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-party-red mb-4">
            Đại hội đại biểu toàn quốc lần thứ VII (1991)
          </h2>
          <div className="w-24 h-1 bg-party-yellow mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Đại hội của "trí tuệ – đổi mới, dân chủ – kỷ cương – đoàn kết"
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="mb-8" data-aos="fade-up">
          <div className="flex flex-wrap gap-2 justify-center border-b-2 border-gray-200">
            {[
              'Bối cảnh & Đại hội',
              'Cương lĩnh 1991',
              'Chiến lược & Tổng kết',
              'Triển khai (1991-1995)',
              'Đối ngoại & Quốc phòng',
              'Đổi mới Đảng',
              'Ý nghĩa & Hội nghị giữa nhiệm kỳ'
            ].map((tab, index) => (
              <button
                key={index}
                onClick={() => setActiveTabVII(index)}
                className={`px-4 py-2 rounded-t-lg font-medium transition-all duration-300 ${
                  activeTabVII === index
                    ? 'bg-party-red text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="min-h-[600px]" data-aos="fade-up" data-aos-delay="100">
          {/* Tab 0: Bối cảnh & Đại hội */}
          {activeTabVII === 0 && (
            <div className="space-y-8">
              <div className="bg-gradient-to-r from-party-red/10 to-party-yellow/10 rounded-lg p-8 border-l-4 border-party-red">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">1. Bối cảnh trước Đại hội VII (1991)</h3>
                <div className="space-y-4 text-gray-700">
                  <p>Đổi mới được hơn 4 năm, kinh tế – xã hội ổn định bước đầu, nhưng chưa thoát khủng hoảng.</p>
                  <ul className="space-y-2 ml-6">
                    <li className="flex items-start">
                      <span className="text-party-red mr-2">•</span>
                      <span>Nhiều vấn đề nóng về kinh tế – xã hội vẫn tồn tại.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-party-red mr-2">•</span>
                      <span>Cần có một đường lối chiến lược rõ ràng cho thời kỳ quá độ lên CNXH.</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-party-yellow">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">2. Đại hội đại biểu toàn quốc lần thứ VII (1991)</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-gray-700 mb-4"><strong>Thời gian & Thành phần:</strong></p>
                    <ul className="space-y-2 text-gray-700 ml-4">
                      <li>• Họp tại Hà Nội (24-27/6/1991)</li>
                      <li>• 1.176 đại biểu, đại diện hơn 2 triệu đảng viên</li>
                      <li>• Bầu 146 Ủy viên Trung ương; 13 Ủy viên Bộ Chính trị</li>
                      <li>• Đồng chí Đỗ Mười được bầu làm Tổng Bí thư</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-gray-700 mb-4"><strong>Văn kiện cốt lõi:</strong></p>
                    <ul className="space-y-2 text-gray-700 ml-4">
                      <li>• Cương lĩnh xây dựng đất nước trong thời kỳ quá độ lên CNXH (1991)</li>
                      <li>• Chiến lược ổn định và phát triển kinh tế – xã hội đến năm 2000</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Tab 1: Cương lĩnh 1991 */}
          {activeTabVII === 1 && (
            <div className="space-y-8">
              <div className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-party-red">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">3. Cương lĩnh 1991 – Nội dung chính</h3>
                
                <div className="mb-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-4">3.1. Tổng kết 60 năm lãnh đạo cách mạng</h4>
                  <p className="text-gray-700 mb-3">Chỉ ra thắng lợi, hạn chế, sai lầm. Đúc kết 5 bài học lớn:</p>
                  <ul className="space-y-2 text-gray-700 ml-6">
                    <li>• Giữ vững mục tiêu độc lập dân tộc & CNXH.</li>
                    <li>• Cách mạng là của dân – do dân – vì dân.</li>
                    <li>• Tăng cường đoàn kết (Đảng – dân – dân tộc – quốc tế).</li>
                    <li>• Kết hợp sức mạnh dân tộc & sức mạnh thời đại.</li>
                    <li>• Đảng lãnh đạo đúng đắn là nhân tố quyết định thắng lợi.</li>
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-4">3.2. Xác định 6 đặc trưng cơ bản của CNXH ở Việt Nam</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <ul className="space-y-2 text-gray-700 ml-4">
                      <li>• Nhân dân lao động làm chủ.</li>
                      <li>• Nền kinh tế hiện đại, công hữu tư liệu sản xuất chủ yếu.</li>
                      <li>• Văn hóa tiên tiến, đậm đà bản sắc.</li>
                    </ul>
                    <ul className="space-y-2 text-gray-700 ml-4">
                      <li>• Con người được giải phóng, ấm no – tự do – hạnh phúc.</li>
                      <li>• Các dân tộc bình đẳng, đoàn kết cùng tiến bộ.</li>
                      <li>• Quan hệ hữu nghị hợp tác với tất cả các nước.</li>
                    </ul>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-4">3.3. Đề ra 7 phương hướng lớn xây dựng CNXH</h4>
                  <ul className="space-y-2 text-gray-700 ml-4">
                    <li>• Xây dựng Nhà nước XHCN của nhân dân.</li>
                    <li>• Phát triển lực lượng sản xuất, công nghiệp hóa – hiện đại hóa.</li>
                    <li>• Thiết lập quan hệ sản xuất XHCN từ thấp đến cao, đa dạng sở hữu.</li>
                    <li>• Phát triển kinh tế hàng hóa nhiều thành phần theo cơ chế thị trường (có quản lý).</li>
                    <li>• Cách mạng tư tưởng – văn hóa, giữ vai trò chủ đạo của Mác – Lênin & Hồ Chí Minh.</li>
                    <li>• Đại đoàn kết dân tộc.</li>
                    <li>• Xây dựng & bảo vệ Tổ quốc.</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4">3.4. Quan điểm về hệ thống chính trị</h4>
                  <ul className="space-y-2 text-gray-700 ml-4">
                    <li>• Xây dựng Nhà nước pháp quyền XHCN.</li>
                    <li>• Mặt trận Tổ quốc và các đoàn thể giữ vai trò quan trọng.</li>
                    <li>• Đảng là lực lượng lãnh đạo, lấy Mác – Lênin & tư tưởng Hồ Chí Minh làm nền tảng.</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* Tab 2: Chiến lược & Tổng kết */}
          {activeTabVII === 2 && (
            <div className="space-y-8">
              <div className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-party-yellow">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">4. Chiến lược phát triển kinh tế – xã hội 1991–2000</h3>
                
                <div className="mb-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-4">Mục tiêu tổng quát</h4>
                  <ul className="space-y-2 text-gray-700 ml-4">
                    <li>• Ra khỏi khủng hoảng vào năm 2000.</li>
                    <li>• Ổn định kinh tế – xã hội.</li>
                    <li>• GDP năm 2000 tăng gấp đôi so với 1990.</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4">Quan điểm chỉ đạo chính</h4>
                  <ul className="space-y-2 text-gray-700 ml-4">
                    <li>• Phát triển theo con đường độc lập dân tộc gắn với CNXH.</li>
                    <li>• Phát triển kinh tế hàng hóa nhiều thành phần – vận hành theo thị trường có quản lý.</li>
                    <li>• Lấy con người làm trung tâm, khơi dậy mọi tiềm năng.</li>
                    <li>• Bảo hộ quyền sở hữu & tự do kinh doanh theo pháp luật.</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-party-yellow/10 rounded-lg p-8 border-l-4 border-green-500">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">5. Tổng kết 5 năm đổi mới (1986–1991) – 5 bài học</h3>
                <ul className="space-y-3 text-gray-700 ml-4">
                  <li>• Kiên định định hướng XHCN + linh hoạt sách lược.</li>
                  <li>• Đổi mới toàn diện, đồng bộ nhưng có bước đi phù hợp.</li>
                  <li>• Phát triển kinh tế nhiều thành phần gắn với quản lý của Nhà nước.</li>
                  <li>• Phát huy dân chủ XHCN có lãnh đạo.</li>
                  <li>• Dự báo tốt tình hình & xử lý vấn đề mới nảy sinh.</li>
                </ul>
              </div>
            </div>
          )}

          {/* Tab 3: Triển khai (1991-1995) */}
          {activeTabVII === 3 && (
            <div className="space-y-8">
              <div className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-party-red">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">6. Triển khai sau Đại hội VII (1991–1995)</h3>
                
                <div className="mb-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-4">6.1. Nông nghiệp – mặt trận hàng đầu</h4>
                  <p className="text-gray-700 mb-3">Nghị quyết Trung ương 5 (1993): xây dựng nông thôn mới; phát huy nội lực nông dân; phát triển nông nghiệp – nông thôn toàn diện.</p>
                  <p className="text-gray-700"><strong>3 mục tiêu:</strong> kinh tế – văn hóa – ổn định chính trị xã hội.</p>
                </div>

                <div className="mb-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-4">6.2. Công nghiệp hóa – hiện đại hóa</h4>
                  <p className="text-gray-700">Trung ương 7 (1994): mục tiêu CNH–HĐH; xây dựng giai cấp công nhân hiện đại, có trình độ, có bản lĩnh chính trị.</p>
                </div>

                <div className="bg-green-50 rounded-lg p-6 border-l-4 border-green-500">
                  <h4 className="text-xl font-bold text-gray-900 mb-4">6.3. Kết quả 1991–1995</h4>
                  <ul className="space-y-2 text-gray-700 ml-4">
                    <li>• GDP bình quân 8,2%, vượt kế hoạch.</li>
                    <li>• Lạm phát từ 67,1% (1991) → 12,7% (1995).</li>
                    <li>• Nền kinh tế thị trường định hướng XHCN được xác lập rõ nét.</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* Tab 4: Đối ngoại & Quốc phòng */}
          {activeTabVII === 4 && (
            <div className="space-y-8">
              <div className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-party-yellow">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">7. Công tác đối ngoại & quốc phòng – an ninh</h3>
                
                <div className="mb-6">
                  <p className="text-gray-700 mb-4">Trung ương 6 (1992): 3 quyết sách lớn:</p>
                  <ul className="space-y-2 text-gray-700 ml-4">
                    <li>• Củng cố quốc phòng an ninh.</li>
                    <li>• Mở rộng quan hệ đối ngoại.</li>
                    <li>• Đổi mới, chỉnh đốn Đảng.</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4">Đối ngoại nổi bật</h4>
                  <ul className="space-y-2 text-gray-700 ml-4">
                    <li>• <strong>1991:</strong> bình thường hóa quan hệ Việt Nam – Trung Quốc.</li>
                    <li>• Tăng cường quan hệ đặc biệt Việt Nam – Lào – Campuchia.</li>
                    <li>• <strong>1994:</strong> Việt Nam tham gia Công ước Luật Biển 1982 (UNCLOS).</li>
                    <li>• <strong>1995:</strong> Việt Nam gia nhập ASEAN; thiết lập quan hệ ngoại giao Việt – Mỹ.</li>
                    <li>• Mở rộng quan hệ với 160 nước; hơn 50 nước đầu tư vào Việt Nam.</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* Tab 5: Đổi mới Đảng */}
          {activeTabVII === 5 && (
            <div className="space-y-8">
              <div className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-party-red">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">8. Đổi mới và chỉnh đốn Đảng</h3>
                
                <p className="text-gray-700 mb-4">Lần đầu đề cập tại Trung ương 6 (1992):</p>
                
                <div className="mb-6">
                  <p className="text-gray-700 mb-3"><strong>Mục tiêu:</strong> nâng cao năng lực lãnh đạo, làm trong sạch đội ngũ.</p>
                  
                  <h4 className="text-xl font-bold text-gray-900 mb-4">Nội dung:</h4>
                  <ul className="space-y-2 text-gray-700 ml-4">
                    <li>• Xây dựng Đảng về chính trị – tư tưởng.</li>
                    <li>• Chỉnh đốn tổ chức, tập trung công tác cán bộ.</li>
                    <li>• Đổi mới công tác dân vận.</li>
                    <li>• Đổi mới phương thức lãnh đạo.</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-r from-party-red/10 to-party-yellow/10 rounded-lg p-8 border-l-4 border-party-yellow">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">9. Chính sách đại đoàn kết dân tộc</h3>
                <p className="text-gray-700">Nghị quyết 07 (1993): củng cố Mặt trận Tổ quốc; phát huy sức mạnh tổng hợp toàn dân; mở rộng hợp tác quốc tế; xây dựng khối đoàn kết bền vững.</p>
              </div>
            </div>
          )}

          {/* Tab 6: Ý nghĩa & Hội nghị giữa nhiệm kỳ */}
          {activeTabVII === 6 && (
            <div className="space-y-8">
              <div className="bg-gradient-to-r from-party-red/10 to-party-yellow/10 rounded-lg p-8 border-l-4 border-party-red">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">10. Ý nghĩa tổng thể của Đại hội VII</h3>
                <ul className="space-y-3 text-gray-700 ml-4">
                  <li>• Là Đại hội của "trí tuệ – đổi mới, dân chủ – kỷ cương – đoàn kết".</li>
                  <li>• Hoạch định con đường quá độ lên CNXH phù hợp với đặc điểm Việt Nam.</li>
                  <li>• Cương lĩnh 1991 trở thành nền tảng chính trị – tư tưởng cho nhiều giai đoạn phát triển tiếp theo.</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-party-yellow">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Hội nghị giữa nhiệm kỳ (1994)</h3>
                
                <div className="mb-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-4">1. Ý nghĩa của Hội nghị giữa nhiệm kỳ</h4>
                  <p className="text-gray-700 mb-3">Lần đầu tiên Đảng tổ chức Hội nghị giữa nhiệm kỳ trong bối cảnh tình hình thế giới và trong nước biến đổi nhanh chóng.</p>
                  <p className="text-gray-700 mb-3">Hội nghị khẳng định:</p>
                  <ul className="space-y-2 text-gray-700 ml-4">
                    <li>• Đổi mới là sự nghiệp khó khăn, chưa có tiền lệ.</li>
                    <li>• Đảng đã mạnh dạn tìm tòi và đạt thắng lợi quan trọng.</li>
                    <li>• Nhân tố quyết định: Đảng giữ vững vai trò lãnh đạo duy nhất; phát huy tinh thần độc lập, tự chủ, sáng tạo; đường lối phù hợp quy luật và thực tiễn Việt Nam; phát huy đại đoàn kết toàn dân; mở rộng hợp tác quốc tế.</li>
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-4">2. Nhận thức mới: chỉ rõ thách thức và cơ hội</h4>
                  <p className="text-gray-700 mb-3">Hội nghị nêu rõ các nguy cơ lớn:</p>
                  <ul className="space-y-2 text-gray-700 ml-4">
                    <li>• <strong>Nguy cơ tụt hậu xa hơn về kinh tế</strong> – Do điểm xuất phát thấp, tăng trưởng chưa cao và chưa vững chắc, cạnh tranh quốc tế gay gắt.</li>
                    <li>• <strong>Nguy cơ chệch hướng xã hội chủ nghĩa</strong> – Nếu không khắc phục lệch lạc trong chủ trương, chính sách và chỉ đạo thực hiện.</li>
                    <li>• Nguy cơ tham nhũng, quan liêu.</li>
                    <li>• Nguy cơ "diễn biến hòa bình" từ các thế lực thù địch.</li>
                  </ul>
                  <p className="text-gray-700 mt-3">→ Các nguy cơ này liên quan mật thiết và tác động lẫn nhau.</p>
                </div>

                <div className="mb-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-4">3. Khẳng định về thời cơ và sức mạnh</h4>
                  <p className="text-gray-700 mb-3">Hội nghị đồng thời chỉ rõ:</p>
                  <ul className="space-y-2 text-gray-700 ml-4">
                    <li>• Đảng có đường lối đúng đắn, đoàn kết nhất trí.</li>
                    <li>• Nhân dân cần cù, thông minh, yêu nước, có bản lĩnh và ý chí cách mạng, tin tưởng vào sự lãnh đạo của Đảng.</li>
                    <li>• Lực lượng vũ trang tuyệt đối trung thành với sự nghiệp cách mạng.</li>
                    <li>• Thành tựu đổi mới tạo thế và lực mới.</li>
                    <li>• Xu thế phát triển của khoa học – kỹ thuật và mở rộng hợp tác quốc tế mang đến nhiều nguồn lực quan trọng.</li>
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-4">4. Lần đầu khẳng định xây dựng Nhà nước pháp quyền Việt Nam</h4>
                  <p className="text-gray-700 mb-3">Văn kiện khẳng định xây dựng Nhà nước pháp quyền Việt Nam của nhân dân, do nhân dân, vì nhân dân.</p>
                  <p className="text-gray-700 mb-3">Hội nghị Trung ương 8 (1/1995) cụ thể hóa và chủ trương hoàn thiện Nhà nước CHXHCN Việt Nam, cải cách nền hành chính.</p>
                  
                  <h5 className="text-lg font-bold text-gray-900 mb-3 mt-4">Quan điểm mới của Đảng:</h5>
                  <ul className="space-y-2 text-gray-700 ml-4">
                    <li>• Nhà nước pháp quyền XHCN của nhân dân, do nhân dân, vì nhân dân, dưới sự lãnh đạo của Đảng.</li>
                    <li>• Quyền lực nhà nước thống nhất, có phân công và phối hợp giữa lập pháp – hành pháp – tư pháp.</li>
                    <li>• Tăng cường pháp chế XHCN.</li>
                    <li>• Nhà nước quản lý bằng pháp luật, đồng thời coi trọng giáo dục đạo đức, nâng cao dân trí; kết hợp pháp luật với sức mạnh của quần chúng.</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4">5. Quan điểm coi con người là nhân tố quyết định</h4>
                  <p className="text-gray-700 mb-3">Con người được xác định là nhân tố quyết định, là động lực lớn nhất và là chủ thể sáng tạo mọi giá trị vật chất và tinh thần.</p>
                  <p className="text-gray-700 mb-3">Hạnh phúc con người là mục tiêu cao nhất.</p>
                  <p className="text-gray-700 mb-3">Hội nghị Trung ương 4 ban hành 5 nghị quyết liên quan trực tiếp đến con người:</p>
                  <ul className="space-y-2 text-gray-700 ml-4">
                    <li>• Giáo dục – đào tạo</li>
                    <li>• Văn hóa – văn nghệ</li>
                    <li>• Chăm sóc, bảo vệ sức khỏe nhân dân</li>
                    <li>• Chính sách dân số và kế hoạch hóa gia đình</li>
                    <li>• Công tác thanh niên</li>
                  </ul>
                  <p className="text-gray-700 mt-3 italic">→ Thể hiện quan điểm: Tất cả là do con người, tất cả vì hạnh phúc con người.</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default CongressVII
