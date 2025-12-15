import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { images, handleImageError } from '../utils/images'

const navLinks = [
  { label: 'Thông tin nhanh', href: '#facts-vii' },
  { label: 'Bối cảnh & Đại hội', href: '#context-vii' },
  { label: 'Cương lĩnh 1991', href: '#platform-vii' },
  { label: 'Chiến lược 1991–2000', href: '#strategy-vii' },
  { label: 'Triển khai 1991–1995', href: '#implementation-vii' },
  { label: 'Đối ngoại & QP-AN', href: '#foreign-vii' },
  { label: 'Đổi mới Đảng', href: '#party-vii' },
  { label: 'Ý nghĩa', href: '#meaning-vii' },
]

const quickFacts = [
  { label: 'Thời gian', value: 'Hà Nội, 24–27/6/1991' },
  { label: 'Đại biểu', value: '1.176 đại biểu • >2 triệu đảng viên' },
  { label: 'Kết quả', value: 'BCHTW 146 • Bộ Chính trị 13' },
  { label: 'Tổng Bí thư', value: 'Đỗ Mười' },
  { label: 'Văn kiện', value: 'Cương lĩnh 1991 • Chiến lược 2000' },
]

const socialistTraits = [
  'Nhân dân lao động làm chủ',
  'Kinh tế hiện đại, công hữu tư liệu sản xuất chủ yếu',
  'Văn hóa tiên tiến, đậm đà bản sắc',
  'Con người được giải phóng, ấm no – tự do – hạnh phúc',
  'Các dân tộc bình đẳng, đoàn kết cùng tiến bộ',
  'Quan hệ hữu nghị hợp tác với tất cả các nước',
]

const socialistDirections = [
  'Xây dựng Nhà nước XHCN của nhân dân',
  'Phát triển lực lượng sản xuất, CNH–HĐH',
  'Thiết lập quan hệ sản xuất XHCN, đa dạng sở hữu',
  'Kinh tế hàng hóa nhiều thành phần, thị trường có quản lý',
  'Cách mạng tư tưởng – văn hóa; vai trò chủ đạo Mác – Lênin, Hồ Chí Minh',
  'Đại đoàn kết dân tộc',
  'Xây dựng & bảo vệ Tổ quốc',
]

const strategyGoals = [
  'Ra khỏi khủng hoảng vào năm 2000',
  'Ổn định kinh tế – xã hội',
  'GDP 2000 gấp đôi 1990',
]

const strategyPrinciples = [
  'Độc lập dân tộc gắn với CNXH',
  'Kinh tế hàng hóa nhiều thành phần, thị trường có quản lý',
  'Lấy con người làm trung tâm, khơi dậy mọi tiềm năng',
  'Bảo hộ quyền sở hữu & tự do kinh doanh theo pháp luật',
]

const renewalLessons = [
  'Kiên định định hướng XHCN + linh hoạt sách lược',
  'Đổi mới toàn diện, đồng bộ, bước đi phù hợp',
  'Kinh tế nhiều thành phần gắn quản lý Nhà nước',
  'Phát huy dân chủ XHCN có lãnh đạo',
  'Dự báo tốt, xử lý vấn đề mới nảy sinh',
]

const implementationResults = [
  'GDP bình quân 8,2% (1991–1995), vượt kế hoạch',
  'Lạm phát 67,1% (1991) → 12,7% (1995)',
  'Khẳng định kinh tế thị trường định hướng XHCN',
]

const foreignHighlights = [
  '1991: Bình thường hóa quan hệ Việt Nam – Trung Quốc',
  'Tăng cường quan hệ đặc biệt Việt Nam – Lào – Campuchia',
  '1994: Tham gia Công ước Luật Biển 1982 (UNCLOS)',
  '1995: Gia nhập ASEAN; thiết lập quan hệ ngoại giao Việt – Mỹ',
  'Mở rộng quan hệ với 160 nước; hơn 50 nước đầu tư vào Việt Nam',
]

const partyRenewal = [
  'Xây dựng Đảng về chính trị – tư tưởng',
  'Chỉnh đốn tổ chức, tập trung công tác cán bộ',
  'Đổi mới công tác dân vận',
  'Đổi mới phương thức lãnh đạo',
]

const midtermRisks = [
  'Nguy cơ tụt hậu xa hơn về kinh tế',
  'Nguy cơ chệch hướng XHCN',
  'Tham nhũng, quan liêu',
  '“Diễn biến hòa bình” từ các thế lực thù địch',
]

const midtermStrengths = [
  'Đường lối đúng, Đảng đoàn kết',
  'Nhân dân cần cù, yêu nước, tin Đảng',
  'Lực lượng vũ trang tuyệt đối trung thành',
  'Thành tựu đổi mới tạo thế và lực mới',
  'Khoa học – kỹ thuật và hợp tác quốc tế mở rộng',
]

const CongressVII = () => {
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
    backgroundAttachment: 'fixed' as const,
  }

  return (
    <div className="relative">
      <div className="absolute inset-0" style={backgroundStyle} aria-hidden />
      <div className="absolute inset-0 bg-white/40 backdrop-blur-[2px]" aria-hidden />
      <div className="relative z-10">
        {/* Bối cảnh & Đại hội */}
        <section id="context-vii" className="py-16 px-4 bg-gradient-to-b from-white/70 via-white/60 to-white/70 scroll-mt-20">
          <div className="max-w-6xl mx-auto space-y-8">
            <div className="text-center" data-aos="fade-up">
              <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-party-red/5 text-party-red text-xs font-semibold tracking-[0.18em] uppercase mb-4">
                <span className="h-1.5 w-1.5 rounded-full bg-party-red" />
                Bối cảnh trước Đại hội VII
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Bối cảnh trước Đại hội VII (1991)</h2>
              <div className="w-24 h-1 bg-party-yellow mx-auto mb-6"></div>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Đổi mới được hơn 4 năm, kinh tế – xã hội ổn định bước đầu, nhưng chưa thoát khủng hoảng. Nhiều vấn đề nóng
                về kinh tế – xã hội vẫn tồn tại, đòi hỏi một đường lối chiến lược rõ ràng cho thời kỳ quá độ lên CNXH.
              </p>
            </div>

            <div
              className="relative overflow-hidden rounded-3xl bg-white/85 border border-white/40 shadow-xl hover:shadow-2xl transition-all duration-500"
              data-aos="fade-up"
            >
              <div className="absolute -left-16 top-0 h-full w-32 rotate-12 bg-party-yellow/20 blur-3xl opacity-60" aria-hidden />
              <div className="absolute -right-16 bottom-0 h-full w-32 -rotate-12 bg-party-red/15 blur-3xl opacity-60" aria-hidden />
              <div className="relative z-10 p-8 md:p-10 text-gray-900">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">📌</span>
                  <p className="text-[0.7rem] font-semibold uppercase tracking-[0.26em] text-gray-500">Bối cảnh</p>
                </div>
                <p className="text-base md:text-lg leading-relaxed text-gray-800 font-semibold mb-4">
                  Đổi mới đã hơn 4 năm, kinh tế – xã hội ổn định bước đầu nhưng chưa thoát khủng hoảng.
                </p>
                <ul className="space-y-3 text-gray-700 text-sm md:text-base leading-relaxed">
                  <li className="flex items-start gap-3">
                    <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-party-red" />
                    <span>Nhiều vấn đề nóng về kinh tế – xã hội vẫn tồn tại.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-party-yellow" />
                    <span>Cần có một đường lối chiến lược rõ ràng cho thời kỳ quá độ lên CNXH.</span>
                  </li>
                </ul>
              </div>
            </div>

            <div
              className="rounded-3xl overflow-hidden bg-white/85 border border-white/50 shadow-xl"
              data-aos="zoom-in-up"
            >
              <div className="bg-black/5 flex items-center justify-center">
                <img
                  src={images.congressVII}
                  alt="Tổng Bí thư Đỗ Mười và các đại biểu dự Đại hội VII"
                  className="w-full max-h-[520px] object-contain"
                  onError={(e) => handleImageError(e, 'congressVII')}
                  loading="lazy"
                />
              </div>
              <div className="px-6 py-4 bg-white/85 border-t border-gray-100 text-sm text-gray-700">
                Tổng Bí thư Đỗ Mười và các đại biểu dự Đại hội VII Đảng Cộng sản Việt Nam (Ảnh: Xuân Lâm/TTXVN)
              </div>
            </div>
          </div>
        </section>

        {/* Hero */}
        <section className="relative overflow-hidden bg-gradient-to-b from-white/70 via-white/60 to-white/70 py-16 px-4">
          <div className="absolute top-0 right-0 w-72 h-72 bg-party-red/5 blur-3xl -mr-32 -mt-32" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-party-yellow/10 blur-3xl -ml-36 -mb-36" />
          <div
            className="absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, rgba(0,0,0,0.35) 1px, transparent 0)",
              backgroundSize: '32px 32px',
            }}
          />
          <div className="max-w-6xl mx-auto relative z-10 grid md:grid-cols-2 gap-10 items-center">
            <div data-aos="fade-right">
              <p className="text-xs md:text-sm uppercase tracking-[0.28em] text-party-red font-semibold mb-4">
                Đại hội VII • 1991
              </p>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
                Đại hội của trí tuệ – đổi mới, dân chủ – kỷ cương – đoàn kết
              </h1>
              <p className="text-lg text-gray-700 leading-relaxed">
                Hoạch định Cương lĩnh 1991 và Chiến lược kinh tế – xã hội 2000, củng cố con đường quá độ lên CNXH trong
                bối cảnh thế giới biến động sau khủng hoảng hệ thống XHCN.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <span className="px-4 py-2 rounded-full bg-party-red/10 text-party-red text-sm font-semibold">Hà Nội</span>
                <span className="px-4 py-2 rounded-full bg-party-yellow/20 text-party-red text-sm font-semibold">
                  24–27/6/1991
                </span>
                <span className="px-4 py-2 rounded-full bg-gray-900/5 text-gray-700 text-sm font-semibold">Cương lĩnh 1991</span>
              </div>
            </div>
            <div data-aos="fade-left" className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl ring-1 ring-white/40">
                <img
                  src={images.congress1}
                  alt="Đại hội VII của Đảng Cộng sản Việt Nam - 1991"
                  className="w-full h-80 object-cover"
                  onError={(e) => handleImageError(e, 'congress')}
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-6 left-6 bg-white rounded-2xl shadow-xl p-4 border border-gray-100">
                <p className="text-sm font-semibold text-gray-900">Hà Nội, 24–27/6/1991</p>
                <p className="text-xs text-gray-600">1.176 đại biểu • Tổng Bí thư: Đỗ Mười</p>
              </div>
            </div>
          </div>
        </section>

        {/* Quick nav */}
        <section className="py-6 px-4 bg-white/60">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-2 text-xs text-gray-500 mb-3">
              <span className="h-1.5 w-1.5 rounded-full bg-party-red" />
              <span>Đi đến nhanh</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-50 hover:bg-party-red/10 text-sm font-semibold text-gray-800 border border-gray-200 transition"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-party-red" />
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Thông tin nhanh */}
        <section id="facts-vii" className="py-16 px-4 bg-white/60 scroll-mt-20">
          <div className="max-w-6xl mx-auto space-y-8">
            <div className="text-center" data-aos="fade-up">
              <p className="text-xs uppercase tracking-[0.28em] text-party-red font-semibold">Thông tin nhanh</p>
              <h2 className="mt-3 text-3xl md:text-4xl font-bold text-gray-900">Đại hội VII (1991)</h2>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 text-gray-900" data-aos="fade-up">
              {quickFacts.map((item) => (
                <div key={item.label} className="relative pl-4 border-l-2 border-party-red/40">
                  <p className="text-[0.72rem] uppercase tracking-[0.3em] text-party-red font-semibold">{item.label}</p>
                  <p className="mt-2 text-lg md:text-xl font-bold leading-snug">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Cương lĩnh 1991 */}
        <section id="platform-vii" className="py-16 px-4 bg-white/60 scroll-mt-20">
          <div className="max-w-6xl mx-auto space-y-10">
            <div className="text-center" data-aos="fade-up">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Cương lĩnh 1991</h2>
              <p className="mt-3 text-xs uppercase tracking-[0.28em] text-party-red font-semibold">Nội dung chính</p>
            </div>

            <div className="rounded-2xl bg-white shadow-lg p-8 border border-gray-100 space-y-8" data-aos="fade-up">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-party-yellow font-semibold mb-2">Tổng kết</p>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">60 năm lãnh đạo cách mạng</h3>
                  <p className="text-gray-700 mb-3 text-sm">Chỉ ra thắng lợi, hạn chế, sai lầm; rút ra 5 bài học lớn:</p>
                  <ul className="space-y-2 text-gray-700 text-sm leading-relaxed">
                    <li>• Giữ vững mục tiêu độc lập dân tộc & CNXH.</li>
                    <li>• Cách mạng là của dân – do dân – vì dân.</li>
                    <li>• Tăng cường đoàn kết (Đảng – dân – dân tộc – quốc tế).</li>
                    <li>• Kết hợp sức mạnh dân tộc & sức mạnh thời đại.</li>
                    <li>• Đảng lãnh đạo đúng đắn là nhân tố quyết định thắng lợi.</li>
                  </ul>
                </div>
                <div className="p-6 rounded-xl bg-party-yellow/10 border border-party-yellow/30">
                  <p className="text-xs uppercase tracking-[0.2em] text-party-red font-semibold mb-2">Đặc trưng CNXH</p>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">6 đặc trưng ở Việt Nam</h3>
                  <div className="grid sm:grid-cols-2 gap-3 text-sm text-gray-800">
                    {socialistTraits.map((item) => (
                      <div key={item} className="flex items-start gap-2">
                        <span className="text-party-red font-bold">•</span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-[0.8rem] text-gray-600 italic mt-3">
                    
                  </p>
                </div>
              </div>

              <div
                className="rounded-2xl overflow-hidden border border-gray-100 bg-white shadow-sm"
                data-aos="fade-up"
                data-aos-delay="50"
              >
                <div className="bg-black/5 flex items-center justify-center">
                  <img
                    src={images.constitutionDraft}
                    alt="Dự thảo Cương lĩnh xây dựng đất nước trong thời kỳ quá độ"
                    className="w-full max-h-[380px] object-contain"
                    onError={(e) => handleImageError(e, 'constitutionDraft')}
                    loading="lazy"
                  />
                </div>
                <div className="px-5 py-3 text-sm text-gray-700">
                  Dự thảo Cương lĩnh xây dựng đất nước trong thời kỳ quá độ đăng báo Nhân Dân năm 1990 xin ý kiến nhân dân
                  (Ảnh tư liệu)
                </div>
              </div>

              <div className="p-8 rounded-2xl border border-gray-100 bg-gradient-to-r from-party-red/5 to-party-yellow/10">
                <p className="text-xs uppercase tracking-[0.2em] text-party-red font-semibold">Phương hướng lớn</p>
                <h3 className="text-2xl font-bold text-gray-900 mt-1 mb-4">7 phương hướng xây dựng CNXH</h3>
                <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-800">
                  {socialistDirections.map((item) => (
                    <div key={item} className="flex items-start gap-2">
                      <span className="text-party-red font-bold">•</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-gray-100 bg-white p-8">
                <p className="text-xs uppercase tracking-[0.2em] text-party-yellow font-semibold">Hệ thống chính trị</p>
                <h3 className="text-xl font-bold text-gray-900 mt-1 mb-3">Quan điểm chủ đạo</h3>
                <ul className="space-y-2 text-gray-700 text-sm leading-relaxed">
                  <li>• Xây dựng Nhà nước pháp quyền XHCN.</li>
                  <li>• Mặt trận Tổ quốc và các đoàn thể giữ vai trò quan trọng.</li>
                  <li>• Đảng lãnh đạo, lấy Mác – Lênin & tư tưởng Hồ Chí Minh làm nền tảng.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Chiến lược 1991–2000 & tổng kết đổi mới */}
        <section id="strategy-vii" className="py-16 px-4 bg-gradient-to-b from-white/40 via-white/30 to-white/40 scroll-mt-20">
          <div className="max-w-6xl mx-auto space-y-10">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-8 rounded-2xl border border-gray-100 bg-white shadow-sm" data-aos="fade-right">
                <p className="text-xs uppercase tracking-[0.2em] text-party-red font-semibold">Chiến lược 1991–2000</p>
                <h3 className="text-2xl font-bold text-gray-900 mt-1 mb-4">Mục tiêu & Quan điểm</h3>
                <div className="space-y-4 text-sm text-gray-800">
                  <div>
                    <p className="font-semibold text-gray-900">Mục tiêu tổng quát</p>
                    <ul className="mt-2 space-y-1">
                      {strategyGoals.map((item) => (
                        <li key={item}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Quan điểm chỉ đạo</p>
                    <ul className="mt-2 space-y-1">
                      {strategyPrinciples.map((item) => (
                        <li key={item}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div
  className="p-8 rounded-2xl border border-green-100 
  bg-gradient-to-r from-green-50 to-green-100 
  shadow-sm"
  data-aos="fade-left"
>

                <p className="text-xs uppercase tracking-[0.2em] text-green-600 font-semibold">Tổng kết 5 năm đổi mới</p>
                <h3 className="text-2xl font-bold text-gray-900 mt-1 mb-4">1986–1991: 5 bài học</h3>
                <ul className="space-y-2 text-gray-700 text-sm leading-relaxed">
                  {renewalLessons.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Triển khai 1991–1995 */}
        <section id="implementation-vii" className="py-16 px-4 bg-white/60 scroll-mt-20">
          <div className="max-w-6xl mx-auto space-y-10">
            <div className="text-center" data-aos="fade-up">
              <p className="text-xs uppercase tracking-[0.28em] text-party-red font-semibold">1991 – 1995</p>
              <h2 className="mt-3 text-3xl md:text-4xl font-bold text-gray-900">Triển khai sau Đại hội VII</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-8 rounded-2xl border border-gray-100 bg-white shadow-sm" data-aos="fade-right">
                <p className="text-xs uppercase tracking-[0.2em] text-party-yellow font-semibold">Nông nghiệp</p>
                <h3 className="text-xl font-bold text-gray-900 mt-1 mb-3">Mặt trận hàng đầu</h3>
                <p className="text-gray-700 text-sm mb-3">
                  Nghị quyết Trung ương 5 (1993): xây dựng nông thôn mới; phát huy nội lực nông dân; phát triển nông
                  nghiệp – nông thôn toàn diện.
                </p>
                <p className="text-sm text-gray-700"><strong>3 mục tiêu:</strong> kinh tế – văn hóa – ổn định chính trị xã hội.</p>
                <div className="mt-4 space-y-3">
                  <figure className="overflow-hidden rounded-xl border border-gray-200 bg-white/80 shadow-sm">
                    <div className="aspect-[4/3] bg-gray-50">
                      <img
                        src={images.farm}
                        alt="Ngày mùa trên sân kho hợp tác xã An Lâm (Hải Hưng), năm 1992"
                        className="h-full w-full object-cover"
                        onError={(e) => handleImageError(e, 'farm')}
                        loading="lazy"
                      />
                    </div>
                    <figcaption className="px-4 py-3 text-xs text-gray-600 italic">
                      Ngày mùa trên sân kho hợp tác xã An Lâm (Hải Hưng), năm 1992. (Ảnh: Trung Dung/TTXVN)
                    </figcaption>
                  </figure>
                </div>
              </div>
              <div className="p-8 rounded-2xl border border-gray-100 bg-white shadow-sm" data-aos="fade-left">
                <p className="text-xs uppercase tracking-[0.2em] text-party-red font-semibold">Công Nghiệp Hóa – Hiện Đại Hóa</p>
                <h3 className="text-xl font-bold text-gray-900 mt-1 mb-3">Trọng tâm công nghiệp</h3>
                <p className="text-gray-700 text-sm">
                  Trung ương 7 (1994): mục tiêu CNH–HĐH; xây dựng giai cấp công nhân hiện đại, có trình độ, bản lĩnh chính trị.
                </p>
                <div className="mt-4 space-y-4">
                  <figure className="overflow-hidden rounded-xl border border-gray-200 bg-white/80 shadow-sm">
                    <div className="aspect-[4/3] bg-gray-50">
                      <img
                        src={images.industry}
                        alt="Thủ tướng Võ Văn Kiệt thăm công nhân Công ty Xây lắp điện 3, tuyến 500KV Hà Tĩnh - Đắc Lây, 1993"
                        className="h-full w-full object-cover"
                        onError={(e) => handleImageError(e, 'industry')}
                        loading="lazy"
                      />
                    </div>
                    <figcaption className="px-4 py-3 text-xs text-gray-600 italic">
                      Thủ tướng Võ Văn Kiệt thăm cán bộ, công nhân Công ty Xây lắp điện 3 đang thi công tuyến đường dây 500KV Hà Tĩnh - Đắc Lây, tháng 5/1993. (Ảnh: Minh Đạo/TTXVN)
                    </figcaption>
                  </figure>
                  <figure className="overflow-hidden rounded-xl border border-gray-200 bg-white/80 shadow-sm">
                    <div className="aspect-[4/3] bg-gray-50">
                      <img
                        src={images.industry1}
                        alt="Thủ tướng Võ Văn Kiệt thăm công trường xây dựng Nhà máy thủy điện Thác Mơ (Sông Bé), 1993"
                        className="h-full w-full object-cover"
                        onError={(e) => handleImageError(e, 'industry1')}
                        loading="lazy"
                      />
                    </div>
                    <figcaption className="px-4 py-3 text-xs text-gray-600 italic">
                      Ngày 14/11/1993, Thủ tướng Võ Văn Kiệt đến thăm và làm việc tại công trường xây dựng Nhà máy thủy điện Thác Mơ (Sông Bé). (Ảnh: Minh Đạo/TTXVN)
                    </figcaption>
                  </figure>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-green-200 bg-green-50 p-8 shadow-sm" data-aos="fade-up">
              <p className="text-xs uppercase tracking-[0.2em] text-green-700 font-semibold">Kết quả</p>
              <h3 className="text-2xl font-bold text-gray-900 mt-1 mb-4">Kinh tế 1991–1995</h3>
              <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-800">
                {implementationResults.map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <span className="text-green-700 font-bold">•</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Đối ngoại & quốc phòng – an ninh */}
        <section id="foreign-vii" className="py-16 px-4 bg-gradient-to-b from-white/40 via-white/30 to-white/40 scroll-mt-20">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 items-center">
          <div
  data-aos="fade-right"
  className="p-8 rounded-2xl bg-white border border-gray-200 
  shadow-md hover:shadow-lg transition-all duration-300"
>
  <p className="text-xs uppercase tracking-[0.28em] text-party-red font-semibold">
    Đối ngoại & QP-AN
  </p>

  <h2 className="mt-3 text-3xl font-bold text-gray-900">
    3 quyết sách lớn (TW6-1992)
  </h2>

  <ul className="mt-4 space-y-2 text-gray-700 text-sm leading-relaxed">
    <li>• Củng cố quốc phòng an ninh.</li>
    <li>• Mở rộng quan hệ đối ngoại.</li>
    <li>• Đổi mới, chỉnh đốn Đảng.</li>
  </ul>
</div>

            <div data-aos="fade-left" className="p-6 rounded-2xl border border-gray-100 bg-white/90 shadow-sm">
              <p className="text-sm text-gray-600 font-semibold mb-3">Đối ngoại nổi bật</p>
              <ul className="space-y-2 text-gray-700 text-sm leading-relaxed">
                {foreignHighlights.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
              <div className="mt-6 grid sm:grid-cols-2 gap-4">
                <figure className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
                  <div className="aspect-[4/3] bg-gray-50">
                    <img
                      src={
                        'https://media.vietnamplus.vn/images/7255a701687d11cb8c6bbc58a6c807858dc4190ce796e1f4f54a2d8523a52d70dd7d2ddc57f1eddc181646b2462b3c75865f8b0d35f8f3d51c64f0b0f6958181/Vietnam_Trung_Quoc_003.jpg'
                      }
                      alt="Lễ ký Hiệp định thương mại và thỏa thuận biên giới Trung - Việt, 7/11/1991 tại Bắc Kinh"
                      className="h-full w-full object-cover"
                      onError={(e) => handleImageError(e, 'foreign1')}
                      loading="lazy"
                    />
                  </div>
                  <figcaption className="px-4 py-3 text-xs text-gray-600 italic">
                    Lễ ký Hiệp định thương mại Trung - Việt và Hiệp định tạm thời về biên giới tại Bắc Kinh, 7/11/1991. (Ảnh: TTXVN)
                  </figcaption>
                </figure>
                <figure className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
                  <div className="aspect-[4/3] bg-gray-50">
                    <img
                      src={
                        'https://vnanet.vn/Data/Articles/2025/09/20/8286276/vna_potal_50_nam_quan_he_ngoai_giao_viet_nam_%E2%80%93_chlb_duc_doi_tac_chien_luoc_vi_tuong_lai_stand.jpg'
                      }
                      alt="Thủ tướng Võ Văn Kiệt thăm Nhà máy lắp ráp Airbus tại Hamburg, CHLB Đức, 6/1993"
                      className="h-full w-full object-cover"
                      onError={(e) => handleImageError(e, 'foreign2')}
                      loading="lazy"
                    />
                  </div>
                  <figcaption className="px-4 py-3 text-xs text-gray-600 italic">
                    Tháng 6/1993: Thủ tướng Võ Văn Kiệt thăm Nhà máy lắp ráp máy bay Airbus tại Hamburg, CHLB Đức. (Ảnh: Minh Đạo/TTXVN)
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
        </section>

        {/* Đổi mới và chỉnh đốn Đảng */}
        <section id="party-vii" className="py-16 px-4 bg-white/60 scroll-mt-20">
          <div className="max-w-6xl mx-auto space-y-8">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-8 rounded-2xl border border-gray-100 bg-white shadow-sm" data-aos="fade-right">
                <p className="text-xs uppercase tracking-[0.2em] text-party-red font-semibold">Đổi mới Đảng</p>
                <h3 className="text-2xl font-bold text-gray-900 mt-1 mb-3">Mục tiêu & nội dung</h3>
                <p className="text-sm text-gray-700 mb-3">Lần đầu nêu tại Trung ương 6 (1992): nâng cao năng lực lãnh đạo, làm trong sạch đội ngũ.</p>
                <ul className="space-y-2 text-gray-700 text-sm leading-relaxed">
                  {partyRenewal.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
              <div
  className="p-8 rounded-2xl border border-gray-200 
  bg-white shadow-md hover:shadow-lg 
  transition-shadow duration-300"
  data-aos="fade-left"
>

                <p className="text-xs uppercase tracking-[0.2em] text-party-yellow font-semibold">Đại đoàn kết</p>
                <h3 className="text-2xl font-bold text-gray-900 mt-1 mb-3">Nghị quyết 07 (1993)</h3>
                <p className="text-gray-700 text-sm">
                  Củng cố Mặt trận Tổ quốc; phát huy sức mạnh tổng hợp toàn dân; mở rộng hợp tác quốc tế; xây dựng khối đoàn kết bền vững.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Ý nghĩa & Hội nghị giữa nhiệm kỳ */}
        <section id="meaning-vii" className="py-16 px-4 bg-gradient-to-b from-white/40 via-white/30 to-white/40 scroll-mt-20">
          <div className="max-w-6xl mx-auto space-y-10">
            <div className="p-8 rounded-2xl border border-gray-100 bg-white shadow-sm" data-aos="fade-up">
              <p className="text-xs uppercase tracking-[0.2em] text-party-red font-semibold">Ý nghĩa tổng thể</p>
              <h3 className="text-2xl font-bold text-gray-900 mt-1 mb-4">Đại hội của trí tuệ – đổi mới – kỷ cương</h3>
              <ul className="space-y-2 text-gray-700 text-sm leading-relaxed">
                <li>• Hoạch định con đường quá độ lên CNXH phù hợp đặc điểm Việt Nam.</li>
                <li>• Cương lĩnh 1991 trở thành nền tảng chính trị – tư tưởng cho giai đoạn tiếp theo.</li>
                <li>• Củng cố niềm tin và đoàn kết, tạo đà phát triển thập niên 1990.</li>
              </ul>
            </div>

          </div>
        </section>
      </div>
    </div>
  )
}

export default CongressVII
