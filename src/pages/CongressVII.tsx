import { useState, useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { Award, Landmark, History, Quote, Lightbulb, TrendingUp } from 'lucide-react'

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
      <div className="absolute inset-0 bg-white/85 backdrop-blur-sm" aria-hidden />

      <div className="relative z-10 max-w-7xl mx-auto py-20 px-6 sm:px-8 lg:px-10">

        {/* Header Section */}
        <header className="text-center mb-20" data-aos="fade-down">
          <div className="inline-block px-6 py-2 rounded-full bg-blue-100 text-blue-700 text-base font-bold tracking-widest uppercase mb-6 shadow-sm">
            Chuyên đề Nghiên cứu
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-blue-900 mb-8 leading-tight">
            I. Dân chủ và dân chủ xã hội chủ nghĩa
          </h1>
          <div className="w-40 h-2 bg-blue-600 mx-auto rounded-full"></div>
        </header>

        <div className="flex justify-center mb-20" data-aos="fade-up" data-aos-delay="100">
          <div className="bg-white p-2 rounded-3xl md:rounded-full shadow-lg border border-gray-100 w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-3">
            <button
              onClick={() => setActiveTab('part1')}
              className={`px-8 py-5 md:py-4 rounded-2xl md:rounded-full text-lg md:text-xl font-bold transition-all duration-300 flex items-center justify-center text-center ${activeTab === 'part1'
                ? 'bg-blue-600 text-white shadow-md'
                : 'text-gray-500 hover:text-blue-600 hover:bg-gray-50'
                }`}
            >
              Phần 1: Dân chủ và sự ra đời, phát triển của dân chủ
            </button>
            <button
              onClick={() => setActiveTab('part2')}
              className={`px-8 py-5 md:py-4 rounded-2xl md:rounded-full text-lg md:text-xl font-bold transition-all duration-300 flex items-center justify-center text-center ${activeTab === 'part2'
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
            <div className="animate-in fade-in slide-in-from-bottom-8 duration-700 space-y-20">

              {/* Key Concepts Grid */}
              <div className="grid lg:grid-cols-2 gap-12">
                {/* Left Column */}
                <div className="space-y-10">
                  {/* Point 1 */}
                  <div className="group bg-white rounded-[2rem] p-10 shadow-sm hover:shadow-xl border border-gray-100 transition-all duration-300 transform hover:-translate-y-1" data-aos="fade-right">
                    <div className="flex items-start gap-6">
                      <div className="w-16 h-16 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center text-3xl font-bold shrink-0 shadow-inner">
                        1
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold text-gray-900 mb-4 group-hover:text-blue-700 transition-colors">Hiểu đúng về Dân chủ</h3>
                        <p className="text-xl text-gray-600 mb-5 leading-relaxed">
                          <span className="font-semibold text-blue-600">Demos Kratos</span>: Quyền lực của nhân dân, thuộc về nhân dân.
                        </p>
                        <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                          <ul className="space-y-4">
                            <li className="flex gap-4 text-base text-gray-700">
                              <span className="w-2 h-2 bg-blue-500 rounded-full mt-2.5 shrink-0"></span>
                              <span><strong>Chủ nghĩa Mác - Lênin:</strong> Hình thức tổ chức nhà nước của giai cấp cầm quyền, pháp luật hóa quyền con người.</span>
                            </li>
                            <li className="flex gap-4 text-base text-gray-700">
                              <span className="w-2 h-2 bg-blue-500 rounded-full mt-2.5 shrink-0"></span>
                              <span><strong>Lênin:</strong> "Dân chủ là sự thống trị của đa số".</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Point 2 */}
                  <div className="group bg-white rounded-[2rem] p-10 shadow-sm hover:shadow-xl border border-gray-100 transition-all duration-300 transform hover:-translate-y-1" data-aos="fade-right" data-aos-delay="100">
                    <div className="flex items-start gap-6">
                      <div className="w-16 h-16 rounded-2xl bg-red-100 text-red-600 flex items-center justify-center text-3xl font-bold shrink-0 shadow-inner">
                        2
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold text-gray-900 mb-4 group-hover:text-red-700 transition-colors">Tư tưởng Hồ Chí Minh</h3>
                        <div className="relative">
                          <svg className="absolute -top-4 -left-4 w-10 h-10 text-gray-200 transform -scale-x-100" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                            <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                          </svg>
                          <p className="text-2xl text-gray-700 font-medium italic pl-8 relative z-10">
                            "Chế độ ta là chế độ dân chủ, tức là nhân dân là người chủ, mà chính phủ là người đầy tớ trung thành của nhân dân."
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Point 3 */}
                  <div className="group bg-white rounded-[2rem] p-10 shadow-sm hover:shadow-xl border border-gray-100 transition-all duration-300 transform hover:-translate-y-1" data-aos="fade-right" data-aos-delay="200">
                    <div className="flex items-start gap-6">
                      <div className="w-16 h-16 rounded-2xl bg-indigo-100 text-indigo-600 flex items-center justify-center text-3xl font-bold shrink-0 shadow-inner">
                        3
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold text-gray-900 mb-4 group-hover:text-indigo-700 transition-colors">Nhà nước Pháp quyền</h3>
                        <p className="text-xl text-gray-600 leading-relaxed">
                          Xây dựng Nhà nước pháp quyền xã hội chủ nghĩa tại Việt Nam gắn liền với việc <span className="font-semibold text-gray-900 border-b-2 border-indigo-200">pháp luật hóa các quyền cơ bản</span> của con người.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column */}
                <div className="space-y-10">
                  {/* Point 4 */}
                  <div className="group bg-white rounded-[2rem] p-10 shadow-sm hover:shadow-xl border border-gray-100 transition-all duration-300 transform hover:-translate-y-1" data-aos="fade-left">
                    <div className="flex items-start gap-6">
                      <div className="w-16 h-16 rounded-2xl bg-yellow-100 text-yellow-600 flex items-center justify-center text-3xl font-bold shrink-0 shadow-inner">
                        4
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold text-gray-900 mb-4 group-hover:text-yellow-700 transition-colors">Phòng, chống tham nhũng</h3>
                        <p className="text-xl text-gray-600 leading-relaxed">
                          Nhấn mạnh việc phòng, chống tham nhũng góp phần bảo vệ chế độ, củng cố niềm tin và xây dựng Nhà nước pháp quyền.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Point 5 */}
                  <div className="group bg-white rounded-[2rem] p-10 shadow-sm hover:shadow-xl border border-gray-100 transition-all duration-300 transform hover:-translate-y-1" data-aos="fade-left" data-aos-delay="100">
                    <div className="flex items-start gap-6">
                      <div className="w-16 h-16 rounded-2xl bg-green-100 text-green-600 flex items-center justify-center text-3xl font-bold shrink-0 shadow-inner">
                        5
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold text-gray-900 mb-4 group-hover:text-green-700 transition-colors">Lịch sử chứng minh</h3>
                        <p className="text-xl text-gray-600 mb-6">
                          Dân chủ là xu thế tất yếu, trải qua quá trình phát triển dài từ thời cổ đại đến nay.
                        </p>

                        <div className="bg-green-50 rounded-2xl p-8 border border-green-100">
                          <p className="text-base uppercase tracking-wider font-bold text-green-800 mb-4 flex items-center gap-2">
                            <span className="w-2.5 h-2.5 rounded-full bg-green-600 animate-pulse"></span>
                            Các lớp nghĩa của Dân chủ
                          </p>
                          <div className="grid grid-cols-2 gap-5">
                            {[
                              "Một giá trị xã hội",
                              "Một phạm trù chính trị",
                              "Một nguyên tắc hoạt động",
                              "Một phạm trù lịch sử"
                            ].map((item, idx) => (
                              <div key={idx} className="flex items-center gap-3 bg-white px-4 py-3 rounded-lg border border-green-100 shadow-sm">
                                <span className="text-green-500 font-bold text-lg">✔</span>
                                <span className="text-base font-medium text-gray-700">{item}</span>
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
              <div className="mt-20 bg-white rounded-[3rem] p-12 shadow-lg border border-gray-100 overflow-hidden relative" data-aos="zoom-in-up">
                <div className="absolute top-0 w-full h-3 bg-gradient-to-r from-blue-400 via-purple-400 to-red-400"></div>

                <h3 className="text-4xl font-extrabold text-center text-gray-900 mb-16">
                  DÒNG THỜI GIAN: SỰ RA ĐỜI VÀ PHÁT TRIỂN
                </h3>

                <div className="relative">
                  {/* Connecting Line - Desktop Only */}
                  <div className="hidden lg:block absolute top-1/2 left-6 right-6 h-1.5 bg-gray-200 -translate-y-1/2 z-0"></div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 relative z-10">
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
                          relative p-8 rounded-3xl text-center border-2 transition-all duration-300
                          ${item.active
                            ? 'bg-blue-600 border-blue-600 text-white shadow-xl scale-105'
                            : 'bg-white border-gray-200 hover:border-blue-400 text-gray-800 hover:shadow-lg'
                          }
                        `}
                      >
                        <div className={`text-sm font-bold uppercase tracking-wider mb-3 ${item.active ? 'text-blue-200' : 'text-gray-500'}`}>
                          {item.period}
                        </div>
                        <div className="font-bold text-xl leading-tight mb-2">{item.name}</div>
                        {item.sub && <div className={`text-base ${item.active ? 'text-blue-100' : 'text-gray-500'}`}>{item.sub}</div>}

                        {/* Circle Connector Mobile */}
                        <div className="lg:hidden absolute left-1/2 bottom-[-32px] w-1.5 h-6 bg-gray-300 -translate-x-1/2 last:hidden"></div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          ) : (
            /* Part 2: Dân chủ xã hội chủ nghĩa */
            <div className="animate-in fade-in slide-in-from-bottom-8 duration-700 space-y-16 text-gray-800">

              {/* Introduction */}
              <div className="text-center max-w-5xl mx-auto mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-red-900 mb-8 uppercase">
                  II. Dân chủ xã hội chủ nghĩa
                </h2>
                <div className="bg-red-50 p-8 rounded-2xl shadow-sm border-l-4 border-red-500 text-left">
                  <p className="text-xl leading-relaxed text-gray-700 italic">
                    "Nền dân chủ xã hội chủ nghĩa không chỉ là một thể chế chính trị mà còn là <strong>thành quả của quá trình đấu tranh giai cấp</strong> quyết liệt của nhân dân lao động dưới sự lãnh đạo của giai cấp công nhân. Đây là hình thái dân chủ cao nhất, phản ánh quyền lực thực sự của đại đa số nhân dân."
                  </p>
                </div>
              </div>

              {/* Section 1: Quy luật ra đời */}
              <div className="space-y-8">
                <h3 className="flex items-center gap-4 text-3xl font-bold text-blue-900 border-b-2 border-gray-200 pb-4">
                  <History className="w-8 h-8 text-blue-600" />
                  1. Quá trình ra đời và sự phát triển tất yếu
                </h3>
                <p className="text-lg text-gray-600 italic mb-6">Nền dân chủ xã hội chủ nghĩa không xuất hiện từ hư vô mà tuân theo quy luật kế thừa và phát triển lịch sử:</p>

                <div className="grid md:grid-cols-2 gap-10">
                  <div className="space-y-6">
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-blue-100 hover:border-blue-300 transition-colors" data-aos="fade-up" data-aos-delay="100">
                      <h4 className="font-bold text-blue-800 mb-3 text-xl">🌱 Giai đoạn phôi thai</h4>
                      <p className="text-base text-gray-600">Ý tưởng và thực tiễn sơ khai về quyền làm chủ của công nhân đã được hình thành từ <strong>Công xã Pari năm 1871</strong>.</p>
                    </div>
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-red-100 hover:border-red-300 transition-colors" data-aos="fade-up" data-aos-delay="200">
                      <h4 className="font-bold text-red-800 mb-3 text-xl">🚩 Sự xác lập</h4>
                      <p className="text-base text-gray-600">Phải đến khi <strong>Cách mạng Tháng Mười Nga (1917)</strong> thành công, nhà nước XHCN đầu tiên ra đời, nền dân chủ này mới chính thức được thiết lập, mở ra một thời đại mới cho nhân dân lao động giành lấy quyền quyết định vận mệnh của mình.</p>
                    </div>
                  </div>
                  <div className="space-y-6">
                    <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200" data-aos="fade-up" data-aos-delay="300">
                      <h4 className="font-bold text-gray-800 mb-3 text-xl">📈 Quy luật vận động</h4>
                      <p className="text-base text-gray-600">Đi từ thấp đến cao, từ chưa hoàn thiện đến hoàn thiện. Kế thừa có chọn lọc giá trị tiến bộ của các nền dân chủ trước đó nhưng bổ sung giá trị mới về chất.</p>
                    </div>
                    <div className="bg-blue-50 p-8 rounded-2xl border border-blue-100" data-aos="fade-up" data-aos-delay="400">
                      <h4 className="font-bold text-blue-800 mb-3 text-xl">⚖️ Vai trò của dân chủ</h4>
                      <p className="text-base text-gray-600"><strong>V.I. Lênin</strong> khẳng định: Giai cấp vô sản không thể chiến thắng nếu không thực hiện đầy đủ các quyền dân chủ. Càng hoàn thiện, nền dân chủ càng thu hút đông đảo nhân dân tham gia quản lý.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 2: Bản chất toàn diện */}
              <div className="space-y-10">
                <h3 className="flex items-center gap-4 text-3xl font-bold text-red-900 border-b-2 border-gray-200 pb-4">
                  <Award className="w-8 h-8 text-red-600" />
                  2. Bản chất toàn diện
                </h3>
                <p className="text-lg text-gray-600 italic mb-6">Dân chủ xã hội chủ nghĩa là một chỉnh thể bao quát mọi lĩnh vực đời sống:</p>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                  {/* Politics */}
                  <div className="group bg-white rounded-3xl p-6 shadow-md border-t-4 border-red-600 hover:shadow-xl transition-all" data-aos="flip-left" data-aos-delay="100">
                    <div className="mb-6">
                      <span className="text-sm font-bold uppercase tracking-widest text-red-600 bg-red-50 px-3 py-1.5 rounded">Chính trị</span>
                    </div>
                    <h4 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-red-700">Quyền lực nhân dân</h4>
                    <ul className="space-y-4 text-base text-gray-700">
                      <li className="flex gap-3"><span className="text-red-500">•</span> <span><strong>Sự lãnh đạo:</strong> Đặt dưới sự lãnh đạo duy nhất của <strong>Đảng Cộng sản</strong>. Đảng không chỉ đại diện cho trí tuệ của giai cấp công nhân mà còn đại diện cho lợi ích của toàn dân tộc.
                      </span></li>
                      <li className="flex gap-3"><span className="text-red-500">•</span> <span><strong>Dân chủ cho đa số:</strong> Khác với dân chủ tư sản (vốn là dân chủ cho thiểu số bóc lột), dân chủ xã hội chủ nghĩa là nền dân chủ dành cho <strong>tuyệt đại đa số nhân dân lao động</strong>.
                      </span></li>
                      <li className="flex gap-3"><span className="text-red-500">•</span> <span><strong>Sức mạnh vượt trội:</strong> Lênin khẳng định chế độ này dân chủ hơn gấp <strong>triệu lần</strong> các nước cộng hòa tư sản vì nó cho phép những người bị áp bức trước đây tham gia trực tiếp vào bộ máy quản lý nhà nước từ trung ương đến địa phương.
                      </span></li>
                    </ul>
                  </div>

                  {/* Economics */}
                  <div className="group bg-white rounded-3xl p-6 shadow-md border-t-4 border-blue-600 hover:shadow-xl transition-all" data-aos="flip-left" data-aos-delay="200">
                    <div className="mb-6">
                      <span className="text-sm font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-3 py-1.5 rounded">Kinh tế</span>
                    </div>
                    <h4 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-700">Sở hữu chung</h4>
                    <ul className="space-y-4 text-base text-gray-700">
                      <li className="flex gap-3"><span className="text-blue-500">•</span> <span><strong>Cơ sở vật chất:</strong>  Dựa trên chế độ sở hữu xã hội (công hữu) về các tư liệu sản xuất chủ yếu. Điều này loại bỏ nguồn gốc của sự bất công và áp bức.
                      </span></li>
                      <li className="flex gap-3"><span className="text-blue-500">•</span> <span><strong>Động lực phát triển:</strong> Lấy việc thỏa mãn các nhu cầu vật chất và tinh thần của con người làm mục tiêu tối cao. Lợi ích kinh tế của người lao động chính là động lực thúc đẩy sự sáng tạo và năng suất xã hội.
                      </span></li>
                      <li className="flex gap-3"><span className="text-blue-500">•</span> <span><strong>Tính kế thừa kinh tế:</strong> Tiếp thu những thành tựu khoa học - công nghệ hiện đại nhưng lọc bỏ những yếu tố tiêu cực, kìm hãm của các chế độ cũ.
                      </span></li>
                    </ul>
                  </div>

                  {/* Culture/Society */}
                  <div className="group bg-white rounded-3xl p-6 shadow-md border-t-4 border-yellow-500 hover:shadow-xl transition-all" data-aos="flip-left" data-aos-delay="300">
                    <div className="mb-6">
                      <span className="text-sm font-bold uppercase tracking-widest text-yellow-600 bg-yellow-50 px-3 py-1.5 rounded">Văn hóa - Xã hội</span>
                    </div>
                    <h4 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-yellow-700">Giải phóng con người</h4>
                    <ul className="space-y-4 text-base text-gray-700">
                      <li className="flex gap-3"><span className="text-yellow-500">•</span> <span><strong>Hệ tư tưởng:</strong> Lấy chủ nghĩa Mác - Lênin làm nền tảng, đảm bảo định hướng đúng đắn cho sự phát triển của xã hội.
                      </span></li>
                      <li className="flex gap-3"><span className="text-yellow-500">•</span> <span><strong>Văn hóa:</strong>Kế thừa những tinh hoa văn hóa dân tộc và văn minh nhân loại, tạo điều kiện cho cá nhân phát triển toàn diện trí tuệ và đạo đức.
                      </span></li>
                      <li className="flex gap-3"><span className="text-yellow-500">•</span> <span><strong>Hài hòa lợi ích:</strong> Thực hiện sự kết hợp biện chứng giữa lợi ích cá nhân, lợi ích tập thể và toàn xã hội.
                      </span></li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Section 3 & 4 combined row */}
              <div className="grid md:grid-cols-2 gap-10">
                <div className="bg-gray-50 rounded-3xl p-10 border border-gray-200" data-aos="fade-right">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                    <Landmark className="w-6 h-6 text-gray-600" />
                    3. Mối quan hệ với Nhà nước XHCN
                  </h3>
                  <p className="text-gray-700 mb-4 font-medium text-lg">Hai mặt không thể tách rời:</p>
                  <ul className="space-y-4 text-base text-gray-600">
                    <li className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                      <strong>Dân chủ là nền tảng:</strong> Chỉ trong một nền dân chủ thực sự, nhân dân mới có thể bầu ra những người đại diện xứng đáng vào bộ máy nhà nước.
                    </li>
                    <li className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                      <strong>Nhà nước là công cụ:</strong> Nhà nước xã hội chủ nghĩa là công cụ để <strong>thể chế hóa ý chí của nhân dân</strong> thành pháp luật và bảo vệ các quyền dân chủ đó trước sự xâm phạm.

                    </li>
                  </ul>
                </div>

                <div className="bg-gray-50 rounded-3xl p-10 border border-gray-200" data-aos="fade-left">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                    <TrendingUp className="w-6 h-6 text-gray-600" />
                    4. Xu hướng "Tự tiêu vong"
                  </h3>
                  <p className="text-gray-700 mb-4 font-medium text-lg">Một luận điểm quan trọng của chủ nghĩa Mác - Lênin là sự phát triển của dân chủ sẽ dẫn đến một trạng thái cao hơn:</p>
                  <p className="text-gray-700 mb-6 text-justify text-base">
                    Khi xã hội đạt trình độ rất cao, rào cản giai cấp xóa bỏ, dân chủ sẽ trở thành thói quen tự giác.
                  </p>
                  <div className="bg-blue-100/50 text-blue-900 p-6 rounded-xl text-base font-medium italic text-center border-l-4 border-blue-400">
                    "Dân chủ với tư cách thiết chế chính trị cưỡng chế sẽ tự tiêu vong vì không còn cần thiết phải sử dụng nhà nước để quản lý."
                  </div>
                </div>
              </div>

              {/* Metaphor */}
              <div className="mt-16 bg-gradient-to-r from-blue-900 to-indigo-900 rounded-[3rem] p-12 text-white relative overflow-hidden shadow-2xl" data-aos="zoom-in">
                <div className="absolute top-0 right-0 p-10 opacity-10">
                  <Quote size={160} />
                </div>
                <h3 className="text-3xl font-bold mb-8 flex items-center gap-4 relative z-10">
                  <Lightbulb className="w-10 h-10 text-yellow-400" />
                  Phép ẩn dụ: Ngôi trường lớn
                </h3>
                <div className="prose prose-xl text-blue-100 relative z-10 max-w-none">
                  <p className="leading-relaxed">
                    Có thể ví nền dân chủ xã hội chủ nghĩa như một <strong className="text-yellow-300">ngôi trường lớn</strong> nơi tất cả mọi người vừa là học sinh, vừa là người quản lý trường học.
                  </p>
                  <p className="leading-relaxed mt-4">
                    Trong các mô hình cũ, nội quy trường chỉ do một nhóm "con nhà giàu" soạn ra để duy trì quyền lợi của họ. Ở ngôi trường này:
                  </p>
                  <ul className="list-none space-y-4 mt-6">
                    <li className="flex items-center gap-4">
                      <span className="w-2.5 h-2.5 bg-yellow-400 rounded-full shrink-0"></span>
                      Mọi người cùng sở hữu cơ sở vật chất (bản chất kinh tế).
                    </li>
                    <li className="flex items-center gap-4">
                      <span className="w-2.5 h-2.5 bg-yellow-400 rounded-full shrink-0"></span>
                      Cùng thảo luận nội quy dưới sự định hướng của "thầy hiệu trưởng" tâm huyết là Đảng Cộng sản (bản chất chính trị).
                    </li>
                    <li className="flex items-start gap-4">
                      <span className="w-2.5 h-2.5 bg-yellow-400 rounded-full shrink-0 mt-2"></span>
                      <div className="flex flex-col gap-2">
                        <span>Khi mọi người đều đã trở nên thông thái và tự giác sống tốt, thì những hình phạt hay sự giám sát khắt khe sẽ không còn cần thiết nữa.</span>
                        <span className="italic text-yellow-300 font-bold text-2xl mt-2 block">
                          Đó chính là sự tự do hoàn hảo của con người trong tương lai.
                        </span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Practical Connection Section (New Addition) */}
              <div className="mt-20 bg-white rounded-3xl p-10 shadow-lg border border-gray-200" data-aos="fade-up">
                <h3 className="text-3xl font-bold text-gray-900 mb-8 pb-4 border-b border-gray-200 text-center uppercase tracking-wide">
                  Liên hệ lý luận với thực tiễn
                </h3>

                <div className="space-y-10">
                  {/* Practical Issue */}
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-3">
                      1. Vấn đề thực tiễn
                    </h4>
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                      <p className="text-lg font-medium text-gray-800">
                        Phòng, chống tham nhũng và củng cố niềm tin của nhân dân đối với Nhà nước
                      </p>
                    </div>
                  </div>

                  {/* Theory Connection */}
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-3">
                      2. Cơ sở lý luận
                    </h4>
                    <ul className="list-disc pl-6 space-y-2 text-lg text-gray-700">
                      <li>Dân chủ là quyền lực của nhân dân</li>
                      <li>Nhà nước xã hội chủ nghĩa là công cụ bảo vệ quyền dân chủ</li>
                      <li>Dân chủ gắn với Nhà nước pháp quyền</li>
                    </ul>
                  </div>

                  {/* Solution Mechanism */}
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-3">
                      3. Giải quyết vấn đề như thế nào?
                    </h4>
                    <ul className="grid md:grid-cols-2 gap-4">
                      {[
                        "Nhân dân có quyền giám sát hoạt động của cán bộ",
                        "Pháp luật kiểm soát quyền lực, không có vùng cấm",
                        "Người dân được bảo vệ khi tố cáo sai phạm",
                        "Quyền lực nhà nước phải phục vụ nhân dân"
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-lg text-gray-700">
                          <span className="font-bold text-gray-400">{idx + 1}.</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Example */}
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-3">
                      4. Ví dụ thực tiễn
                    </h4>
                    <p className="text-lg text-gray-700 p-4 border-l-4 border-gray-300 bg-gray-50 italic">
                      "Trong những năm gần đây, nhiều vụ việc tham nhũng lớn được xử lý công khai, cho thấy vai trò của pháp luật và sự giám sát của nhân dân trong việc thực hành dân chủ xã hội chủ nghĩa."
                    </p>
                  </div>

                  {/* Conclusion */}
                  <div className="mt-10 bg-gray-100 rounded-2xl p-8 text-center border-2 border-gray-200">
                    <h4 className="text-gray-500 font-bold tracking-widest uppercase mb-4 text-sm">Kết luận</h4>
                    <p className="text-xl md:text-2xl font-bold text-gray-900 leading-relaxed">
                      "Qua đó có thể thấy, dân chủ xã hội chủ nghĩa không chỉ là lý luận trong giáo trình mà còn là cơ chế thực tiễn góp phần giải quyết các vấn đề xã hội, đặc biệt là phòng, chống tham nhũng và củng cố niềm tin của nhân dân đối với Nhà nước hiện nay."
                    </p>
                  </div>
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
