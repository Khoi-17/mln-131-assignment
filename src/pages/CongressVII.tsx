import { useState, useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { BookOpen, Star, Award, Landmark, History, Quote, ChevronRight, Lightbulb, TrendingUp } from 'lucide-react'

const CongressVII = () => {
  const [activeTab, setActiveTab] = useState<'part1' | 'part2'>('part1')

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: true,
      offset: 100,
    })
  }, [])

  useEffect(() => {
    AOS.refresh()
  }, [activeTab])

  const backgroundStyle = {
    backgroundImage: 'url("/download.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed' as const,
  }

  return (
    <div className="relative min-h-screen font-sans text-gray-800">
      <div className="absolute inset-0" style={backgroundStyle} aria-hidden />
      <div className="absolute inset-0 bg-white/40 backdrop-blur-[2px]" aria-hidden />

      <div className="relative z-10 max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">

        {/* Header Section */}
        <header className="text-center mb-16" data-aos="fade-down">
          <div className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 text-sm font-bold tracking-widest uppercase mb-4 shadow-sm">
            Chuyên đề Nghiên cứu
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-blue-900 mb-6 leading-tight">
            4.I.1 Dân chủ và sự ra đời, phát triển
          </h1>
          <div className="w-32 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
        </header>

        <div className="flex justify-center mb-16" data-aos="fade-up" data-aos-delay="100">
          <div className="bg-white p-1.5 rounded-3xl md:rounded-full shadow-lg border border-gray-100 w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-2">
            <button
              onClick={() => setActiveTab('part1')}
              className={`px-6 py-4 md:py-3 rounded-2xl md:rounded-full text-sm md:text-base font-bold transition-all duration-300 flex items-center justify-center text-center ${activeTab === 'part1'
                ? 'bg-blue-600 text-white shadow-md'
                : 'text-gray-500 hover:text-blue-600 hover:bg-gray-50'
                }`}
            >
              Phần 1: Dân chủ và sự ra đời, phát triển của dân chủ
            </button>
            <button
              onClick={() => setActiveTab('part2')}
              className={`px-6 py-4 md:py-3 rounded-2xl md:rounded-full text-sm md:text-base font-bold transition-all duration-300 flex items-center justify-center text-center ${activeTab === 'part2'
                ? 'bg-blue-600 text-white shadow-md'
                : 'text-gray-500 hover:text-blue-600 hover:bg-gray-50'
                }`}
            >
              Phần 2: Dân chủ XHCN
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div className="min-h-[600px]">
          {activeTab === 'part1' ? (
            <div className="animate-in fade-in slide-in-from-bottom-8 duration-700 space-y-16">

              {/* Key Concepts Grid */}
              <div className="grid lg:grid-cols-2 gap-10">
                {/* Left Column */}
                <div className="space-y-8">
                  {/* Point 1 */}
                  <div className="group bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl border border-gray-100 transition-all duration-300 transform hover:-translate-y-1" data-aos="fade-right">
                    <div className="flex items-start gap-5">
                      <div className="w-14 h-14 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center text-2xl font-bold shrink-0 shadow-inner">
                        1
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors">Hiểu đúng về Dân chủ</h3>
                        <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                          <span className="font-semibold text-blue-600">Demos Kratos</span>: Quyền lực của nhân dân, thuộc về nhân dân.
                        </p>
                        <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                          <ul className="space-y-3">
                            <li className="flex gap-3 text-sm text-gray-700">
                              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 shrink-0"></span>
                              <span><strong>Chủ nghĩa Mác - Lênin:</strong> Hình thức tổ chức nhà nước của giai cấp cầm quyền, pháp luật hóa quyền con người.</span>
                            </li>
                            <li className="flex gap-3 text-sm text-gray-700">
                              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 shrink-0"></span>
                              <span><strong>Lênin:</strong> "Dân chủ là sự thống trị của đa số".</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Point 2 */}
                  <div className="group bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl border border-gray-100 transition-all duration-300 transform hover:-translate-y-1" data-aos="fade-right" data-aos-delay="100">
                    <div className="flex items-start gap-5">
                      <div className="w-14 h-14 rounded-2xl bg-red-100 text-red-600 flex items-center justify-center text-2xl font-bold shrink-0 shadow-inner">
                        2
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-red-700 transition-colors">Tư tưởng Hồ Chí Minh</h3>
                        <div className="relative">
                          <svg className="absolute -top-3 -left-3 w-8 h-8 text-gray-200 transform -scale-x-100" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                            <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                          </svg>
                          <p className="text-xl text-gray-700 font-medium italic pl-6 relative z-10">
                            "Chế độ ta là chế độ dân chủ, tức là nhân dân là người chủ, mà chính phủ là người đầy tớ trung thành của nhân dân."
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Point 3 */}
                  <div className="group bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl border border-gray-100 transition-all duration-300 transform hover:-translate-y-1" data-aos="fade-right" data-aos-delay="200">
                    <div className="flex items-start gap-5">
                      <div className="w-14 h-14 rounded-2xl bg-indigo-100 text-indigo-600 flex items-center justify-center text-2xl font-bold shrink-0 shadow-inner">
                        3
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-indigo-700 transition-colors">Nhà nước Pháp quyền</h3>
                        <p className="text-lg text-gray-600 leading-relaxed">
                          Xây dựng Nhà nước pháp quyền xã hội chủ nghĩa tại Việt Nam gắn liền với việc <span className="font-semibold text-gray-900 border-b-2 border-indigo-200">pháp luật hóa các quyền cơ bản</span> của con người.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column */}
                <div className="space-y-8">
                  {/* Point 4 */}
                  <div className="group bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl border border-gray-100 transition-all duration-300 transform hover:-translate-y-1" data-aos="fade-left">
                    <div className="flex items-start gap-5">
                      <div className="w-14 h-14 rounded-2xl bg-yellow-100 text-yellow-600 flex items-center justify-center text-2xl font-bold shrink-0 shadow-inner">
                        4
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-yellow-700 transition-colors">Phòng, chống tham nhũng</h3>
                        <p className="text-lg text-gray-600 leading-relaxed">
                          Nhấn mạnh việc phòng, chống tham nhũng góp phần bảo vệ chế độ, củng cố niềm tin và xây dựng Nhà nước pháp quyền.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Point 5 */}
                  <div className="group bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl border border-gray-100 transition-all duration-300 transform hover:-translate-y-1" data-aos="fade-left" data-aos-delay="100">
                    <div className="flex items-start gap-5">
                      <div className="w-14 h-14 rounded-2xl bg-green-100 text-green-600 flex items-center justify-center text-2xl font-bold shrink-0 shadow-inner">
                        5
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-green-700 transition-colors">Lịch sử chứng minh</h3>
                        <p className="text-lg text-gray-600 mb-6">
                          Dân chủ là xu thế tất yếu, trải qua quá trình phát triển dài từ thời cổ đại đến nay.
                        </p>

                        <div className="bg-green-50 rounded-2xl p-6 border border-green-100">
                          <p className="text-sm uppercase tracking-wider font-bold text-green-800 mb-4 flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-green-600 animate-pulse"></span>
                            Các lớp nghĩa của Dân chủ
                          </p>
                          <div className="grid grid-cols-2 gap-4">
                            {[
                              "Một giá trị xã hội",
                              "Một phạm trù chính trị",
                              "Một nguyên tắc hoạt động",
                              "Một phạm trù lịch sử"
                            ].map((item, idx) => (
                              <div key={idx} className="flex items-center gap-2 bg-white px-3 py-2 rounded-lg border border-green-100 shadow-sm">
                                <span className="text-green-500">✔</span>
                                <span className="text-sm font-medium text-gray-700">{item}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Timeline Section */}
              <div className="mt-16 bg-white rounded-[2.5rem] p-10 shadow-lg border border-gray-100 overflow-hidden relative" data-aos="zoom-in-up">
                <div className="absolute top-0 w-full h-2 bg-gradient-to-r from-blue-400 via-purple-400 to-red-400"></div>

                <h3 className="text-3xl font-extrabold text-center text-gray-900 mb-12">
                  DÒNG THỜI GIAN: SỰ RA ĐỜI VÀ PHÁT TRIỂN
                </h3>

                <div className="relative">
                  {/* Connecting Line - Desktop Only */}
                  <div className="hidden lg:block absolute top-1/2 left-4 right-4 h-1 bg-gray-200 -translate-y-1/2 z-0"></div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10">
                    {[
                      { period: "Thời kỳ 1", name: "Cộng sản nguyên thủy", color: "gray" },
                      { period: "Thời kỳ 2", name: "Chiếm hữu nô lệ", sub: "(Cổ đại)", color: "gray" },
                      { period: "Thời kỳ 3", name: "Phong kiến", color: "gray" },
                      { period: "Thời kỳ 4", name: "Tư bản chủ nghĩa", color: "gray" },
                      { period: "Hiện nay", name: "Xã hội chủ nghĩa", sub: "→ Cộng sản chủ nghĩa", color: "blue", active: true }
                    ].map((item, idx) => (
                      <div
                        key={idx}
                        className={`
                          relative p-6 rounded-2xl text-center border-2 transition-all duration-300
                          ${item.active
                            ? 'bg-blue-600 border-blue-600 text-white shadow-xl scale-105'
                            : 'bg-white border-gray-200 hover:border-blue-400 text-gray-800 hover:shadow-lg'
                          }
                        `}
                      >
                        <div className={`text-xs font-bold uppercase tracking-wider mb-2 ${item.active ? 'text-blue-200' : 'text-gray-500'}`}>
                          {item.period}
                        </div>
                        <div className="font-bold text-lg leading-tight mb-1">{item.name}</div>
                        {item.sub && <div className={`text-sm ${item.active ? 'text-blue-100' : 'text-gray-500'}`}>{item.sub}</div>}

                        {/* Circle Connector Mobile */}
                        <div className="lg:hidden absolute left-1/2 bottom-[-24px] w-1 h-4 bg-gray-300 -translate-x-1/2 last:hidden"></div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          ) : (
            /* Part 2: Dân chủ xã hội chủ nghĩa */
            <div className="animate-in fade-in slide-in-from-bottom-8 duration-700 space-y-12 text-gray-800">

              {/* Introduction */}
              <div className="text-center max-w-4xl mx-auto mb-12">
                <h2 className="text-3xl font-bold text-red-900 mb-6 uppercase">
                  II. Dân chủ xã hội chủ nghĩa
                </h2>
                <p className="text-lg leading-relaxed text-gray-700 italic border-l-4 border-red-500 pl-6 text-left bg-red-50 p-6 rounded-r-xl">
                  "Nền dân chủ xã hội chủ nghĩa không chỉ là một thể chế chính trị mà còn là thành quả của quá trình đấu tranh giai cấp quyết liệt... Đây là hình thái dân chủ cao nhất, phản ánh quyền lực thực sự của đại đa số nhân dân."
                </p>
              </div>

              {/* Section 1: Quy luật ra đời */}
              <div className="space-y-6">
                <h3 className="flex items-center gap-3 text-2xl font-bold text-blue-900 border-b border-gray-200 pb-2">
                  <History className="w-6 h-6 text-blue-600" />
                  1. Quá trình ra đời và sự phát triển tất yếu
                </h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <div className="bg-white p-5 rounded-xl shadow-sm border border-blue-100 hover:border-blue-300 transition-colors" data-aos="fade-up" data-aos-delay="100">
                      <h4 className="font-bold text-blue-800 mb-2">🌱 Giai đoạn phôi thai</h4>
                      <p className="text-sm text-gray-600">Công xã Pari (1871): Ý tưởng và thực tiễn sơ khai về quyền làm chủ của công nhân.</p>
                    </div>
                    <div className="bg-white p-5 rounded-xl shadow-sm border border-red-100 hover:border-red-300 transition-colors" data-aos="fade-up" data-aos-delay="200">
                      <h4 className="font-bold text-red-800 mb-2">🚩 Sự xác lập chính thức</h4>
                      <p className="text-sm text-gray-600">Cách mạng Tháng Mười Nga (1917): Nhà nước XHCN đầu tiên ra đời, nhân dân lao động giành quyền quyết định vận mệnh.</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-gray-50 p-5 rounded-xl border border-gray-200" data-aos="fade-up" data-aos-delay="300">
                      <h4 className="font-bold text-gray-800 mb-2">📈 Quy luật vận động</h4>
                      <p className="text-sm text-gray-600">Từ thấp đến cao, kế thừa giá trị tiến bộ của dân chủ tư sản nhưng bổ sung giá trị mới về chất.</p>
                    </div>
                    <div className="bg-blue-50 p-5 rounded-xl border border-blue-100" data-aos="fade-up" data-aos-delay="400">
                      <h4 className="font-bold text-blue-800 mb-2">⚖️ Vai trò cốt lõi</h4>
                      <p className="text-sm text-gray-600">Lênin: Giai cấp vô sản không thể chiến thắng nếu không thực hiện đầy đủ các quyền dân chủ.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 2: Bản chất toàn diện */}
              <div className="space-y-8">
                <h3 className="flex items-center gap-3 text-2xl font-bold text-red-900 border-b border-gray-200 pb-2">
                  <Award className="w-6 h-6 text-red-600" />
                  2. Bản chất toàn diện
                </h3>

                <div className="grid lg:grid-cols-3 gap-6">
                  {/* Politics */}
                  <div className="group bg-white rounded-2xl p-6 shadow-md border-t-4 border-red-600 hover:shadow-xl transition-all" data-aos="flip-left" data-aos-delay="100">
                    <div className="mb-4">
                      <span className="text-xs font-bold uppercase tracking-widest text-red-600 bg-red-50 px-2 py-1 rounded">Chính trị</span>
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-700">Quyền lực nhân dân</h4>
                    <ul className="space-y-3 text-sm text-gray-700">
                      <li className="flex gap-2"><span className="text-red-500">•</span> Đảng Cộng sản lãnh đạo (Đại diện trí tuệ công nhân & lợi ích dân tộc).</li>
                      <li className="flex gap-2"><span className="text-red-500">•</span> Dân chủ cho tuyệt đại đa số (Khác với dân chủ tư sản thiểu số).</li>
                      <li className="flex gap-2"><span className="text-red-500">•</span> Dân chủ gấp "triệu lần" chế độ tư bản (Lênin).</li>
                    </ul>
                  </div>

                  {/* Economics */}
                  <div className="group bg-white rounded-2xl p-6 shadow-md border-t-4 border-blue-600 hover:shadow-xl transition-all" data-aos="flip-left" data-aos-delay="200">
                    <div className="mb-4">
                      <span className="text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-2 py-1 rounded">Kinh tế</span>
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-700">Sở hữu chung</h4>
                    <ul className="space-y-3 text-sm text-gray-700">
                      <li className="flex gap-2"><span className="text-blue-500">•</span> Công hữu về tư liệu sản xuất chủ yếu (Loại bỏ áp bức).</li>
                      <li className="flex gap-2"><span className="text-blue-500">•</span> Động lực: Lợi ích kinh tế người lao động.</li>
                      <li className="flex gap-2"><span className="text-blue-500">•</span> Kế thừa KH-CN hiện đại, lọc bỏ yếu tố tiêu cực.</li>
                    </ul>
                  </div>

                  {/* Culture/Society */}
                  <div className="group bg-white rounded-2xl p-6 shadow-md border-t-4 border-yellow-500 hover:shadow-xl transition-all" data-aos="flip-left" data-aos-delay="300">
                    <div className="mb-4">
                      <span className="text-xs font-bold uppercase tracking-widest text-yellow-600 bg-yellow-50 px-2 py-1 rounded">Văn hóa - Xã hội</span>
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-yellow-700">Giải phóng con người</h4>
                    <ul className="space-y-3 text-sm text-gray-700">
                      <li className="flex gap-2"><span className="text-yellow-500">•</span> Nền tảng: Chủ nghĩa Mác - Lênin.</li>
                      <li className="flex gap-2"><span className="text-yellow-500">•</span> Kế thừa tinh hoa văn hóa dân tộc & nhân loại.</li>
                      <li className="flex gap-2"><span className="text-yellow-500">•</span> Hài hòa lợi ích: Cá nhân - Tập thể - Xã hội.</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Section 3 & 4 combined row */}
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200" data-aos="fade-right">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Landmark className="w-5 h-5 text-gray-600" />
                    3. Với Nhà nước XHCN
                  </h3>
                  <p className="text-gray-700 mb-4 font-medium">Hai mặt không thể tách rời:</p>
                  <ul className="space-y-3 text-sm text-gray-600">
                    <li className="bg-white p-3 rounded-lg shadow-sm border border-gray-100">
                      <strong>Dân chủ là nền tảng:</strong> Để nhân dân bầu ra đại diện xứng đáng.
                    </li>
                    <li className="bg-white p-3 rounded-lg shadow-sm border border-gray-100">
                      <strong>Nhà nước là công cụ:</strong> Thể chế hóa ý chí nhân dân, bảo vệ quyền dân chủ.
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200" data-aos="fade-left">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-gray-600" />
                    4. Xu hướng "Tự tiêu vong"
                  </h3>
                  <p className="text-gray-700 mb-4 text-justify text-sm">
                    Khi xã hội đạt trình độ rất cao, rào cản giai cấp xóa bỏ, dân chủ thành thói quen tự giác.
                  </p>
                  <div className="bg-blue-100 text-blue-800 p-4 rounded-lg text-sm font-medium italic text-center">
                    "Dân chủ với tư cách thiết chế chính trị cưỡng chế sẽ tự tiêu vong vì không còn cần thiết."
                  </div>
                </div>
              </div>

              {/* Metaphor */}
              <div className="mt-12 bg-gradient-to-r from-blue-900 to-indigo-900 rounded-3xl p-10 text-white relative overflow-hidden shadow-2xl" data-aos="zoom-in">
                <div className="absolute top-0 right-0 p-8 opacity-10">
                  <Quote size={120} />
                </div>
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 relative z-10">
                  <Lightbulb className="w-8 h-8 text-yellow-400" />
                  Phép ẩn dụ: Ngôi trường lớn
                </h3>
                <div className="prose prose-lg text-blue-100 relative z-10 max-w-none">
                  <p className="leading-relaxed">
                    Ví nền dân chủ XHCN như một <strong className="text-yellow-300">ngôi trường lớn</strong> nơi mọi người vừa là học sinh, vừa là quản lý. Không giống mô hình cũ (nội quy do nhóm "con nhà giàu" soạn), ở đây mọi người:
                  </p>
                  <ul className="list-none space-y-2 mt-4">
                    <li className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                      Cùng sở hữu cơ sở vật chất (Bản chất kinh tế).
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                      Cùng thảo luận nội quy dưới sự định hướng của "thầy hiệu trưởng" Đảng Cộng sản.
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                      Khi sự tự giác đạt đỉnh cao, hình phạt không còn cần thiết &rarr; <span className="italic text-yellow-300">Sự tự do hoàn hảo.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  )
}

export default CongressVII
