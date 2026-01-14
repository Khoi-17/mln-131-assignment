import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import {
  BookOpen,
  Scale,
  AlertTriangle,
  Zap,
  Globe,
  Lightbulb,
  CheckCircle2,
  Target,
  Compass,
  Award,
  Users,
  FileText,
  TrendingUp,
  Shield,
  Star
} from 'lucide-react'

const CongressVI = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      offset: 100,
    })
  }, [])

  const backgroundStyle = {
    backgroundImage: 'url("/download.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
  }

  return (
    <div className="relative min-h-screen text-gray-800 font-sans">
      <div className="absolute inset-0" style={backgroundStyle} aria-hidden />
      <div className="absolute inset-0 bg-white/85 backdrop-blur-sm" aria-hidden />

      <div className="relative z-10">
        <div className="max-w-6xl mx-auto py-20 px-8">

          {/* Header */}
          <header className="mb-20 text-center" data-aos="fade-down">
            <div className="flex items-center justify-center gap-4 mb-6">
              <BookOpen className="w-12 h-12 text-blue-900" />
              <h1 className="text-3xl md:text-6xl font-extrabold text-blue-900 uppercase tracking-tight">
                III. Quá độ lên xã hội chủ nghĩa ở Việt Nam
              </h1>
            </div>
            <h2 className="text-2xl md:text-4xl font-semibold text-gray-900 leading-relaxed max-w-4xl mx-auto">
              1. Đặc điểm quá độ lên xã hội chủ nghĩa ở VN là bỏ qua chế độ tư bản chủ nghĩa
            </h2>
          </header>

          {/* Section 1: Thuan loi & Kho khan */}
          <section className="mb-24" data-aos="fade-up">
            <div className="flex items-center gap-4 mb-8 border-b-4 border-blue-200 pb-4">
              <Scale className="w-10 h-10 text-blue-800" />
              <h3 className="text-3xl md:text-4xl font-bold text-blue-800">
                Thuận lợi và khó khăn đan xen
              </h3>
            </div>

            <div className="space-y-10">
              {/* Item 1 */}
              <div className="bg-white p-8 rounded-2xl shadow-lg border-l-8 border-yellow-500 hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-yellow-100 rounded-full shrink-0 mt-1">
                    <AlertTriangle className="w-8 h-8 text-yellow-600" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-gray-900 mb-4">
                      Xuất phát từ xã hội nửa thuộc địa nửa phong kiến, lực lượng sản xuất rất thấp
                    </h4>
                    <ul className="space-y-3 text-lg text-gray-700 ml-2">
                      <li className="flex items-center gap-3">
                        <span className="w-2 h-2 bg-yellow-500 rounded-full" />
                        Chiến tranh ác liệt, kéo dài nhiều thập kỷ, hậu quả nặng nề
                      </li>
                      <li className="flex items-center gap-3">
                        <span className="w-2 h-2 bg-yellow-500 rounded-full" />
                        Còn nhiều tàn dư thực dân, phong kiến
                      </li>
                      <li className="flex items-center gap-3">
                        <span className="w-2 h-2 bg-yellow-500 rounded-full" />
                        Các thế lực thù địch thường xuyên tìm cách chống phá
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Item 2 */}
              <div className="bg-white p-8 rounded-2xl shadow-lg border-l-8 border-blue-500 hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-100 rounded-full shrink-0 mt-1">
                    <Zap className="w-8 h-8 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-gray-900 mb-4">
                      Cách mạng khoa học và công nghệ diễn ra mạnh mẽ
                    </h4>
                    <ul className="space-y-3 text-lg text-gray-700 ml-2">
                      <li className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mt-2.5" />
                        Nền sản xuất vật chất và đời sống xã hội đang quốc tế hóa, ảnh hưởng lên nhịp độ phát triển
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mt-2.5" />
                        Tạo nên thế phát triển nhanh chóng và cạnh tranh, đặt ra nhiều thách thức
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Item 3 */}
              <div className="bg-white p-8 rounded-2xl shadow-lg border-l-8 border-green-500 hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-green-100 rounded-full shrink-0 mt-1">
                    <Globe className="w-8 h-8 text-green-600" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-gray-900 mb-4">
                      Các nước chế độ xã hội chủ nghĩa và trình độ phát triển khác nhau
                    </h4>
                    <ul className="space-y-3 text-lg text-gray-700 ml-2">
                      <li className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-green-500 rounded-full mt-2.5" />
                        Cùng tồn tại, hợp tác đấu tranh gay gắt vì lợi ích quốc gia và dân tộc
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-green-500 rounded-full mt-2.5" />
                        Cuộc đấu tranh của nhân dân các nước vì hòa bình, độc lập dân tộc, dân chủ, phát triển và tiến bộ
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section: Tu tuong moi */}
          <section data-aos="fade-up" className="mb-24">
            <div className="flex items-center gap-4 mb-8 border-b-4 border-blue-200 pb-4">
              <Lightbulb className="w-10 h-10 text-blue-800" />
              <h3 className="text-3xl md:text-4xl font-bold text-blue-800">
                Tư tưởng mới, nhận thức mới, tư duy mới
              </h3>
            </div>

            <p className="text-xl md:text-2xl text-gray-800 mb-10 font-medium italic border-l-4 border-red-500 pl-6">
              "Tư tưởng mới, nhận thức mới, tư duy mới của Đảng về con đường đi lên xã hội chủ nghĩa bỏ qua tư bản chủ nghĩa."
            </p>

            <div className="grid gap-8 md:grid-cols-1">
              {[
                {
                  id: 1,
                  title: "Tính tất yếu",
                  desc: "Con đường cách mạng tất yếu khách quan.",
                  icon: <CheckCircle2 className="w-6 h-6" />
                },
                {
                  id: 2,
                  title: "Bỏ qua chế độ TBCN",
                  desc: "Bỏ qua việc xác lập vị trí thống trị của quan hệ sản xuất và kiến trúc thượng tầng tư bản chủ nghĩa.",
                  icon: <Shield className="w-6 h-6" />
                },
                {
                  id: 3,
                  title: "Kế thừa và phát triển",
                  desc: "Tiếp thu, kế thừa thành tựu KHCN, quản lý phát triển XH dưới TBCN. Xây dựng nền kinh tế hiện đại.",
                  icon: <TrendingUp className="w-6 h-6" />
                },
                {
                  id: 4,
                  title: "Khó khăn và quyết tâm",
                  desc: "Sự nghiệp khó khăn, phức tạp lâu dài. Đòi hỏi sự quyết tâm cao độ của Đảng và toàn dân.",
                  icon: <Users className="w-6 h-6" />
                }
              ].map((item) => (
                <div key={item.id} className="bg-red-50 p-8 rounded-2xl border border-red-100 flex gap-6 hover:bg-red-100 transition-colors">
                  <div className="flex-shrink-0 w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-3xl shadow-lg">
                    {item.id}
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-gray-900 flex items-center gap-3 mb-2">
                      {item.title}
                      <span className="text-red-600">{item.icon}</span>
                    </h4>
                    <p className="text-xl text-gray-700 leading-relaxed font-light">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section 2 */}
          <section data-aos="fade-up" className="mt-24 pt-16 border-t-2 border-gray-200">
            <header className="mb-16 text-center">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                2. Đặc trưng và Phương hướng xây dựng XHCN
              </h2>
              <div className="w-32 h-2 bg-blue-600 mx-auto rounded-full"></div>
            </header>

            <div className="mb-16">
              <h3 className="text-3xl font-bold text-blue-800 mb-8 flex items-center gap-4">
                <span className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xl font-bold">
                  a
                </span>
                Đặc trưng bản chất của XHCN ở Việt Nam
              </h3>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200 hover:border-red-300 transition-colors group">
                  <h4 className="text-xl font-bold text-gray-900 border-b border-gray-100 pb-3 mb-4 flex items-center gap-2 group-hover:text-red-700">
                    <HistoryIcon /> Đại hội IV (1976)
                  </h4>
                  <p className="text-lg text-gray-600">
                    Nhận thức của Đảng về chủ nghĩa xã hội dừng lại ở mức độ <span className="font-bold text-gray-800">định hướng</span>.
                  </p>
                </div>
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200 hover:border-red-300 transition-colors group">
                  <h4 className="text-xl font-bold text-gray-900 border-b border-gray-100 pb-3 mb-4 flex items-center gap-2 group-hover:text-red-700">
                    <HistoryIcon /> Đại hội VII (1991)
                  </h4>
                  <p className="text-lg text-gray-600">
                    Từ chỉ <span className="font-bold text-gray-800">định hướng</span> chuyển sang <span className="font-bold text-red-700">định hình</span> và <span className="font-bold text-red-700">định lượng</span>.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-10">
              {/* 1991 List */}
              <div className="bg-red-50 p-8 rounded-3xl border border-red-100">
                <h4 className="text-2xl font-bold text-red-800 mb-6 flex items-center gap-3">
                  <FileText className="w-6 h-6" />
                  Cương lĩnh 1991 (6 đặc trưng)
                </h4>
                <ol className="list-decimal list-inside space-y-4 text-gray-800 text-lg">
                  <li>Do dân lao động làm chủ</li>
                  <li>Có nền kinh tế phát triển cao</li>
                  <li>Có nền văn hóa tiên tiến đậm đà bản sắc dân tộc</li>
                  <li>Con người được giải phóng, làm theo năng lực</li>
                  <li>Các dân tộc bình đẳng, đoàn kết</li>
                  <li>Quan hệ hữu nghị và hợp tác quốc tế</li>
                </ol>
              </div>

              {/* 2011 List */}
              <div className="bg-yellow-50 p-8 rounded-3xl border border-yellow-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                  <Star className="w-32 h-32 text-yellow-600" />
                </div>
                <h4 className="text-2xl font-bold text-yellow-800 mb-6 flex items-center gap-3">
                  <Award className="w-7 h-7" />
                  Bổ sung năm 2011 (8 đặc trưng)
                </h4>
                <div className="space-y-4">
                  {[
                    "Dân giàu, nước mạnh, dân chủ, công bằng, văn minh",
                    "Do nhân dân làm chủ",
                    "Kinh tế phát triển cao, LLSX hiện đại, QHSX tiến bộ",
                    "Văn hóa tiên tiến, đậm đà bản sắc dân tộc",
                    "Con người ấm no, tự do, hạnh phúc",
                    "Các dân tộc bình đẳng, đoàn kết, giúp nhau phát triển",
                    "Nhà nước pháp quyền XHCN của dân, do dân, vì dân",
                    "Quan hệ hữu nghị và hợp tác quốc tế"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <Star className="w-5 h-5 text-yellow-600 shrink-0 mt-1 fill-yellow-600" />
                      <span className="text-lg text-gray-800">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Subsection b */}
          <div className="mt-24 pt-12 border-t border-gray-200">
            <h3 className="text-3xl font-bold text-blue-800 mb-10 flex items-center gap-4">
              <span className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xl font-bold">
                b
              </span>
              Phương hướng xây dựng chủ nghĩa xã hội
            </h3>

            <div className="grid lg:grid-cols-2 gap-10 mb-16">
              {/* 1991 Directions */}
              <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-md">
                <h4 className="text-2xl font-bold text-gray-900 mb-6 border-b pb-4 flex items-center gap-3">
                  <Compass className="w-7 h-7 text-gray-600" />
                  Cương lĩnh 1991 (7 phương hướng)
                </h4>
                <ol className="list-decimal list-inside space-y-4 text-lg text-gray-700">
                  <li>Xây dựng nhà nước xã hội chủ nghĩa</li>
                  <li>Phát triển lực lượng sản xuất</li>
                  <li>Thiết lập từng bước quan hệ SX XHCN</li>
                  <li>CM XHCN trên lĩnh vực tư tưởng và văn hóa</li>
                  <li>Thực hiện đại đoàn kết dân tộc</li>
                  <li>Xây dựng CNXH và bảo vệ tổ quốc</li>
                  <li>Xây dựng Đảng trong sạch, vững mạnh</li>
                </ol>
              </div>

              {/* 2011 Directions */}
              <div className="bg-red-50 p-8 rounded-3xl border border-red-100">
                <h4 className="text-2xl font-bold text-red-800 mb-6 border-b border-red-200 pb-4 flex items-center gap-3">
                  <Compass className="w-7 h-7 text-red-600" />
                  Bổ sung 2011 (8 phương hướng)
                </h4>
                <ol className="list-decimal list-inside space-y-4 text-lg text-gray-800 font-medium">
                  <li>Đổi mới, ổn định và phát triển</li>
                  <li>Đổi mới kinh tế - đổi mới chính trị</li>
                  <li>Kinh tế thị trường định hướng XHCN</li>
                  <li>Phát triển lực lượng sản xuất</li>
                  <li>Tăng trưởng kinh tế gắn với văn hóa, công bằng XH</li>
                  <li>Xây dựng XHCN và bảo vệ tổ quốc</li>
                  <li>Độc lập, tự chủ và hội nhập quốc tế</li>
                  <li>Đảng lãnh đạo, Nhà nước quản lý, nhân dân làm chủ</li>
                </ol>
              </div>
            </div>

            {/* Goals */}
            <div className="mb-20">
              <h4 className="text-3xl font-bold text-gray-900 mb-10 text-center uppercase tracking-wide flex items-center justify-center gap-3" data-aos="fade-down">
                <Target className="w-10 h-10 text-red-600" />
                Mục tiêu phát triển đất nước (Đại hội XIII)
              </h4>
              <div className="grid md:grid-cols-3 gap-8">
                {/* 2025 Card */}
                <div className="relative group" data-aos="fade-up" data-aos-delay="100">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-300 rounded-[2rem] transform rotate-1 opacity-20 group-hover:rotate-2 transition-transform duration-500"></div>
                  <div className="bg-white p-8 rounded-[2rem] shadow-xl border border-blue-100 relative overflow-hidden h-full transform hover:-translate-y-2 transition-transform duration-300">
                    <div className="absolute top-0 right-0 p-4 opacity-5">
                      <Target size={100} />
                    </div>
                    <div className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 font-bold text-sm mb-6">
                      Giai đoạn 1
                    </div>
                    <div className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-br from-blue-600 to-cyan-500 mb-2">2025</div>
                    <p className="text-blue-900 font-bold mb-4 flex items-center gap-2">
                      50 năm giải phóng MN
                    </p>
                    <div className="w-full h-px bg-gray-200 my-4"></div>
                    <p className="text-gray-700 leading-relaxed font-medium">
                      Là nước đang phát triển, có công nghiệp theo hướng hiện đại, vượt qua mức thu nhập trung bình thấp.
                    </p>
                  </div>
                </div>

                {/* 2030 Card */}
                <div className="relative group" data-aos="fade-up" data-aos-delay="200">
                  <div className="absolute inset-0 bg-gradient-to-r from-red-400 to-orange-300 rounded-[2rem] transform -rotate-1 opacity-20 group-hover:-rotate-2 transition-transform duration-500"></div>
                  <div className="bg-white p-8 rounded-[2rem] shadow-xl border border-red-100 relative overflow-hidden h-full transform hover:-translate-y-2 transition-transform duration-300">
                    <div className="absolute top-0 right-0 p-4 opacity-5">
                      <Award size={100} />
                    </div>
                    <div className="inline-block px-4 py-1.5 rounded-full bg-red-100 text-red-700 font-bold text-sm mb-6">
                      Giai đoạn 2
                    </div>
                    <div className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-br from-red-600 to-orange-500 mb-2">2030</div>
                    <p className="text-red-900 font-bold mb-4 flex items-center gap-2">
                      100 năm thành lập Đảng
                    </p>
                    <div className="w-full h-px bg-gray-200 my-4"></div>
                    <p className="text-gray-700 leading-relaxed font-medium">
                      Là nước đang phát triển, có công nghiệp hiện đại, thu nhập trung bình cao.
                    </p>
                  </div>
                </div>

                {/* 2045 Card */}
                <div className="relative group" data-aos="fade-up" data-aos-delay="300">
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-amber-300 rounded-[2rem] transform rotate-1 opacity-30 group-hover:rotate-2 transition-transform duration-500"></div>
                  <div className="bg-gradient-to-br from-white to-yellow-50 p-8 rounded-[2rem] shadow-xl border border-yellow-200 relative overflow-hidden h-full transform hover:-translate-y-2 transition-transform duration-300">
                    <div className="absolute top-0 right-0 p-4 opacity-10">
                      <Star size={100} className="text-yellow-500" />
                    </div>
                    <div className="inline-block px-4 py-1.5 rounded-full bg-yellow-100 text-yellow-800 font-bold text-sm mb-6 shadow-sm">
                      Tầm nhìn
                    </div>
                    <div className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-br from-yellow-600 to-amber-600 mb-2">2045</div>
                    <p className="text-yellow-900 font-bold mb-4 flex items-center gap-2">
                      100 năm thành lập Nước
                    </p>
                    <div className="w-full h-px bg-yellow-200 my-4"></div>
                    <p className="text-gray-800 leading-relaxed font-bold">
                      Trở thành nước phát triển, thu nhập cao.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 12 Directions 2021-2030 */}
            <div className="bg-gray-50 rounded-[2rem] p-10 border border-gray-200">
              <h4 className="text-3xl font-bold text-center text-gray-900 mb-10 border-b pb-4 inline-block mx-auto w-full">
                12 Định hướng phát triển đất nước (2021 - 2030)
              </h4>
              <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
                <ol className="list-decimal list-outside pl-6 space-y-4 text-lg text-gray-700">
                  <li className="pl-2">Đổi mới tư duy, hoàn thiện thể chế phát triển bền vững</li>
                  <li className="pl-2">Hoàn thiện thể chế kinh tế thị trường định hướng xã hội chủ nghĩa</li>
                  <li className="pl-2">Đột phá giáo dục đào tạo, phát triển nguồn nhân lực</li>
                  <li className="pl-2">Xây dựng văn hóa, con người Việt Nam</li>
                  <li className="pl-2">Quản lý xã hội, an ninh con người, an ninh xã hội</li>
                  <li className="pl-2">Thích ứng biến đổi khí hậu, bảo vệ tài nguyên môi trường</li>
                </ol>
                <ol className="list-decimal list-outside pl-6 space-y-4 text-lg text-gray-700" start={7}>
                  <li className="pl-2">Bảo vệ vững chắc độc lập, chủ quyền, toàn vẹn lãnh thổ</li>
                  <li className="pl-2">Ngoại giao độc lập, tự chủ, đa phương hóa, đa dạng hóa</li>
                  <li className="pl-2">Phát huy dân chủ XHCN, quyền làm chủ của nhân dân</li>
                  <li className="pl-2">Xây dựng nhà nước pháp quyền XHCN</li>
                  <li className="pl-2">Xây dựng, chỉnh đốn Đảng trong sạch, vững mạnh</li>
                  <li className="pl-2">Nắm vững và xử lý tốt các quan hệ lớn</li>
                </ol>
              </div>
            </div>

          </div>
        </div>
      </div >
    </div >
  )
}

function HistoryIcon() {
  return (
    <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  )
}

export default CongressVI
