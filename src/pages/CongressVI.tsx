import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { images, handleImageError } from '../utils/images'
import Background from './Background'

const quickFacts = [
  { label: 'Thời gian', value: 'Hà Nội, 15–18/12/1986' },
  { label: 'Đại biểu', value: '1.129 đại biểu (gần 2 triệu đảng viên)' },
  { label: 'Quốc tế', value: '32 đoàn quốc tế tham dự' },
  { label: 'Kết quả', value: 'BCHTW 124 • Bộ Chính trị 13' },
  { label: 'Tổng Bí thư', value: 'Nguyễn Văn Linh' },
]

const coreLessons = [
  { title: 'Lấy dân làm gốc', icon: '👥' },
  { title: 'Xuất phát từ thực tế, tôn trọng quy luật', icon: '📊' },
  { title: 'Kết hợp sức mạnh dân tộc & thời đại', icon: '🌍' },
  { title: 'Xây dựng Đảng ngang tầm nhiệm vụ', icon: '🏛️' },
]

const economyPoints = [
  'Phát triển nhiều thành phần kinh tế',
  'Xóa bỏ bao cấp → hạch toán kinh doanh',
  'Bố trí lại cơ cấu kinh tế; mở rộng đối ngoại',
  'Phát huy động lực khoa học – kỹ thuật',
]

const socialPolicies = ['Dân số – việc làm', 'Công bằng & an sinh xã hội', 'Giáo dục – văn hóa – y tế', 'Bảo trợ xã hội']

const defenseDiplomacy = [
  'Giữ vững cảnh giác; sẵn sàng bảo vệ Tổ quốc',
  'Tăng cường quan hệ với Liên Xô và các nước XHCN',
  'Bình thường hóa quan hệ Việt – Trung',
  'Góp phần đấu tranh vì hòa bình, độc lập dân tộc',
]

const partyRenewal = [
  'Đổi mới tư duy, trước hết là tư duy kinh tế',
  '“Dân biết – dân bàn – dân làm – dân kiểm tra”',
  'Tăng cường đoàn kết, giữ vững nguyên tắc tổ chức',
  'Nâng cao hiệu lực quản lý Nhà nước',
]

const adverseInternational = [
  'Khủng hoảng và sụp đổ hệ thống XHCN (1991)',
  'Việt Nam mất nguồn viện trợ, Mỹ tiếp tục cấm vận',
  'Trung Quốc chiếm đảo Gạc Ma (1988); biên giới Bắc căng thẳng',
]

const domesticIssues = [
  'Khủng hoảng kinh tế nặng; nạn đói 1987–1988',
  'Lạm phát cực cao; tem phiếu còn phổ biến',
  'Niềm tin vào con đường XHCN dao động',
]

const breakthroughDecisions = [
  {
    title: 'Hội nghị Trung ương 2 (1987) – “Bốn giảm”',
    detail: 'Giảm bội chi, giảm tăng giá, giảm lạm phát, giảm khó khăn đời sống; cơ chế một giá; DNNN hạch toán.',
  },
  {
    title: 'Quyết định 217-HĐBT (1987)',
    detail: 'Trao quyền tự chủ cho doanh nghiệp nhà nước, tăng tính cạnh tranh và hiệu quả.',
  },
  {
    title: 'Nghị quyết 10 – Khoán 10 (1988)',
    detail: 'Giao ruộng ổn định 15 năm; nông dân tự sản xuất – tự chịu trách nhiệm → bùng nổ sản xuất nông nghiệp.',
  },
  {
    title: 'Luật Đầu tư nước ngoài (1988)',
    detail: 'Lần đầu cho phép FDI, mở cánh cửa thu hút vốn và công nghệ.',
  },
]

const earlyResults = [
  'Lạm phát giảm từ 774% (1986) xuống ~67% (1991)',
  'Xóa bỏ tem phiếu (1988); hàng hóa phong phú',
  'Lương thực từ thiếu → đủ ăn → xuất khẩu (1989)',
  'Hình thành rõ nét kinh tế nhiều thành phần theo cơ chế thị trường',
]

const keyConferences = [
  {
    title: 'Hội nghị Trung ương 6 (1989)',
    points: [
      'Lần đầu sử dụng khái niệm hệ thống chính trị',
      'Xác định 6 nguyên tắc chỉ đạo đổi mới',
      'Khẳng định đổi mới không phải từ bỏ mục tiêu XHCN',
    ],
  },
  {
    title: 'Hội nghị Trung ương 8 (1990)',
    points: [
      'Phân tích khủng hoảng Liên Xô – Đông Âu, cảnh báo “diễn biến hòa bình”',
      'Kiên định mục tiêu XHCN; đẩy mạnh đổi mới tư duy kinh tế và tổ chức Đảng',
    ],
  },
]

const foreignPolicy = [
  'Phương châm: “thêm bạn, bớt thù”; từng bước phá thế bao vây, cấm vận',
  'Bình thường hóa với Trung Quốc, Hoa Kỳ, ASEAN, nhiều nước châu Âu',
  'Rút toàn bộ quân tình nguyện khỏi Campuchia (1989)',
]

const meanings = [
  'Khởi xướng đường lối đổi mới toàn diện',
  'Đưa đất nước thoát khỏi khủng hoảng kéo dài',
  'Đặt nền móng kinh tế thị trường định hướng XHCN',
  'Tạo nền tảng cho thành tựu kinh tế – xã hội thập niên 1990 và sau đó',
]

const limitations = [
  'Thiếu giải pháp mạnh cho phân phối – lưu thông',
  'Một số vấn đề tư duy kinh tế còn mới mẻ, triển khai thận trọng',
]

const navLinks = [
  { label: 'Thông tin nhanh', href: '#facts' },
  { label: 'Tinh thần & Bài học', href: '#spirit' },
  { label: 'Đường lối', href: '#comprehensive' },
  { label: 'Thực hiện', href: '#implementation' },
  { label: 'HNTW', href: '#conferences' },
  { label: 'Đối ngoại', href: '#foreign' },
  { label: 'Ý nghĩa', href: '#significance' },
]

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
    backgroundAttachment: 'fixed' as const,
  }

  return (
    <div className="relative">
      <div className="absolute inset-0" style={backgroundStyle} aria-hidden />
      <div className="absolute inset-0 bg-white/40 backdrop-blur-[2px]" aria-hidden />
      <div className="relative z-10">
        <Background />

        {/* Hero section */}
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
              Đại hội VI • 1986
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
              Khởi xướng công cuộc Đổi mới toàn diện
            </h1>
            <p className="text-lg text-gray-700 leading-relaxed">
              Đại hội đại biểu toàn quốc lần thứ VI của Đảng Cộng sản Việt Nam đánh dấu bước ngoặt: nhìn thẳng vào sự
              thật, đề ra đường lối đổi mới kinh tế – xã hội, mở cửa hội nhập và đặt nền móng cho mô hình kinh tế thị
              trường định hướng XHCN.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <span className="px-4 py-2 rounded-full bg-party-red/10 text-party-red text-sm font-semibold">Hà Nội</span>
              <span className="px-4 py-2 rounded-full bg-party-yellow/20 text-party-red text-sm font-semibold">15–18/12/1986</span>
              <span className="px-4 py-2 rounded-full bg-gray-900/5 text-gray-700 text-sm font-semibold">Đổi mới</span>
            </div>
          </div>
          <div data-aos="fade-left" className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl ring-1 ring-white/40">
              <img
                src={images.congress}
                alt="Đại hội VI của Đảng Cộng sản Việt Nam - 1986"
                className="w-full h-80 object-cover"
                onError={(e) => handleImageError(e, 'congress')}
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-6 left-6 bg-white rounded-2xl shadow-xl p-4 border border-gray-100">
              <p className="text-sm font-semibold text-gray-900">Hà Nội, 15–18/12/1986</p>
              <p className="text-xs text-gray-600">1.129 đại biểu • 32 đoàn quốc tế • Tổng Bí thư: Nguyễn Văn Linh</p>
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
      <section id="facts" className="py-16 px-4 bg-white/60 scroll-mt-20">
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="text-center" data-aos="fade-up">
            <p className="text-xs uppercase tracking-[0.28em] text-party-red font-semibold">Thông tin nhanh</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-gray-900">Đại hội VI (1986)</h2>
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

      {/* Tinh thần đổi mới & Bốn bài học */}
      <section id="spirit" className="py-16 px-4 bg-gradient-to-b from-white/40 via-white/30 to-white/40 scroll-mt-20">
        <div className="max-w-6xl mx-auto space-y-6">
          <div className="grid md:grid-cols-2 gap-6 items-start">
            <div
              className="rounded-2xl bg-white shadow-lg p-8 border border-gray-100"
              data-aos="fade-right"
            >
              <p className="text-xs uppercase tracking-[0.28em] text-party-yellow font-semibold mb-2">Tinh thần đổi mới</p>
              <h3 className="text-3xl font-bold text-gray-900 mb-3">“Nhìn thẳng vào sự thật”</h3>
              <div className="rounded-xl bg-yellow-50 p-5 border-l-4 border-party-yellow mb-4">
                <p className="text-lg font-semibold text-gray-900 italic">
                  “Nhìn thẳng vào sự thật – đánh giá đúng sự thật – nói rõ sự thật”
                </p>
              </div>
              <p className="text-sm text-gray-700 font-semibold mb-3">Kiểm điểm sai lầm 1975–1986:</p>
              <ul className="space-y-2 text-gray-700 text-sm leading-relaxed list-disc list-inside">
                <li>Sai lầm chiến lược, duy ý chí, nóng vội</li>
                <li>Tư tưởng tiểu tư sản, tả – hữu khuynh</li>
                <li>Nguyên nhân sâu xa: công tác tư tưởng, tổ chức, cán bộ yếu kém</li>
              </ul>
            </div>
            <div
              className="rounded-2xl bg-white shadow-md p-8 border border-gray-100"
              data-aos="fade-left"
            >
              <p className="text-xs uppercase tracking-[0.28em] text-party-red font-semibold mb-2">Bài học lớn</p>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">4 bài học rút ra</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {coreLessons.map((lesson) => (
                  <div
                    key={lesson.title}
                    className="rounded-xl border border-gray-100 bg-gray-50/70 p-4 shadow-sm hover:shadow-md transition"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{lesson.icon}</span>
                      <p className="text-base font-semibold text-gray-900">{lesson.title}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Đường lối đổi mới toàn diện */}
      <section id="comprehensive" className="py-18 px-4 bg-white/50 scroll-mt-20">
        <div className="max-w-6xl mx-auto space-y-10">
          <div className="text-center" data-aos="fade-up">
            <p className="text-xs uppercase tracking-[0.28em] text-party-red font-semibold">Đường lối đổi mới toàn diện</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-gray-900">Nội dung chủ chốt</h2>
            <p className="mt-3 text-gray-600 max-w-3xl mx-auto">
              Bao trùm kinh tế, xã hội, quốc phòng – an ninh – đối ngoại và xây dựng Đảng, hướng tới mô hình kinh tế thị trường định hướng XHCN.
            </p>
          </div>

          <div className="space-y-8 ">
          <div
  className="relative overflow-hidden rounded-2xl border border-gray-200 p-8 
  bg-white shadow-md hover:shadow-lg transition-shadow duration-300"
  data-aos="fade-up"
>
              <div className="flex items-start justify-between gap-4 flex-wrap">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-party-red font-semibold">Kinh tế</p>
                  <h3 className="text-2xl font-bold text-gray-900 mt-1">Đổi mới kinh tế</h3>
                </div>
                <div className="rounded-full bg-white/80 px-4 py-2 text-sm text-party-red font-semibold shadow-sm">Ba chương trình: lương thực – tiêu dùng – xuất khẩu</div>
              </div>
              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <ul className="space-y-3 text-gray-700">
                  {economyPoints.map((point) => (
                    <li key={point} className="flex items-start gap-2">
                      <span className="text-party-red font-bold">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                <div className="pl-4 border-l-2 border-party-yellow/60 space-y-2 text-sm text-gray-700">
                  <h4 className="font-semibold text-gray-900">Ba chương trình kinh tế lớn</h4>
                  <p>🌾 Lương thực – thực phẩm</p>
                  <p>🛒 Hàng tiêu dùng</p>
                  <p>📦 Hàng xuất khẩu</p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-8 rounded-2xl border border-gray-100 bg-white" data-aos="fade-up" data-aos-delay="50">
                <p className="text-xs uppercase tracking-[0.2em] text-party-yellow font-semibold">Chính sách xã hội</p>
                <h3 className="text-xl font-bold text-gray-900 mt-1">4 nhóm chính</h3>
                <div className="grid sm:grid-cols-2 gap-3 mt-5 text-sm text-gray-800">
                  {socialPolicies.map((p) => (
                    <div key={p} className="px-4 py-3 rounded-lg bg-party-yellow/10 border border-party-yellow/30">
                      {p}
                    </div>
                  ))}
                </div>
              </div>
              <div className="p-8 rounded-2xl border border-gray-100 bg-white" data-aos="fade-up" data-aos-delay="100">
                <p className="text-xs uppercase tracking-[0.2em] text-party-red font-semibold">Quốc phòng – an ninh – đối ngoại</p>
                <h3 className="text-xl font-bold text-gray-900 mt-1">Giữ vững chủ quyền</h3>
                <ul className="mt-4 space-y-2 text-gray-700 text-sm">
                  {defenseDiplomacy.map((p) => (
                    <li key={p}>• {p}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="p-8 rounded-2xl border border-gray-100 bg-white" data-aos="fade-up" data-aos-delay="150">
              <p className="text-xs uppercase tracking-[0.2em] text-party-yellow font-semibold">Xây dựng Đảng</p>
              <h3 className="text-xl font-bold text-gray-900 mt-1">Đổi mới tổ chức và tư duy</h3>
              <ul className="mt-4 space-y-2 text-gray-700 text-sm">
                {partyRenewal.map((p) => (
                  <li key={p}>• {p}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Thực hiện Nghị quyết Đại hội VI */}
      <section id="implementation" className="py-18 px-4 bg-gradient-to-b from-white/40 via-white/30 to-white/40 scroll-mt-20">
        <div className="max-w-6xl mx-auto space-y-10">
          <div className="text-center" data-aos="fade-up">
            <p className="text-xs uppercase tracking-[0.28em] text-party-red font-semibold">1986 – 1991</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-gray-900">Thực hiện Nghị quyết Đại hội VI</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl border border-gray-100 bg-white shadow-sm" data-aos="fade-right">
              <p className="text-xs uppercase tracking-[0.2em] text-party-red font-semibold">Tác động quốc tế</p>
              <ul className="mt-3 space-y-2 text-gray-700 text-sm leading-relaxed">
                {adverseInternational.map((p) => (
                  <li key={p} className="pl-3 border-l-2 border-party-red/50">• {p}</li>
                ))}
              </ul>
            </div>
            <div className="p-6 rounded-2xl border border-gray-100 bg-white shadow-sm" data-aos="fade-left">
              <p className="text-xs uppercase tracking-[0.2em] text-party-yellow font-semibold">Tình hình trong nước</p>
              <ul className="mt-3 space-y-2 text-gray-700 text-sm leading-relaxed">
                {domesticIssues.map((p) => (
                  <li key={p} className="pl-3 border-l-2 border-party-yellow/60">• {p}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-md" data-aos="fade-up">
            <div className="flex items-center justify-between flex-wrap gap-3">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-party-red font-semibold">Quyết sách đột phá</p>
                <h3 className="text-2xl font-bold text-gray-900 mt-1">Đặt nền móng chuyển đổi</h3>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6 mt-6">
              {breakthroughDecisions.map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-gray-100 bg-gray-50/80 p-5 shadow-sm hover:shadow-md transition"
                >
                  <h4 className="text-base font-semibold text-gray-900">{item.title}</h4>
                  <p className="mt-2 text-sm text-gray-700 leading-relaxed">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>

          <div
  className="rounded-2xl border border-gray-200 bg-white p-8 
  shadow-md hover:shadow-lg transition-shadow duration-300"
  data-aos="fade-up"
>

            <p className="text-xs uppercase tracking-[0.2em] text-party-red font-semibold">Thành tựu ban đầu</p>
            <div className="grid md:grid-cols-2 gap-4 mt-4 text-gray-800 text-sm">
              {earlyResults.map((r) => (
                <div key={r} className="flex items-start gap-2">
                  <span className="text-party-red font-bold">•</span>
                  <span>{r}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Hội nghị Trung ương */}
      <section id="conferences" className="py-16 px-4 bg-white/50 scroll-mt-20">
      <div className="max-w-6xl mx-auto">
  <div className="text-center mb-12" data-aos="fade-up">
    <p className="text-xs uppercase tracking-[0.28em] text-party-red font-semibold">
      1989 – 1990
    </p>
    <h2 className="mt-3 text-3xl md:text-4xl font-bold text-gray-900">
      Các hội nghị Trung ương quan trọng
    </h2>
  </div>

  <div className="relative max-w-5xl mx-auto" data-aos="fade-up">
    {/* line */}
    <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-party-red via-gray-300 to-party-yellow" />

    <div className="space-y-10">
      {keyConferences.map((item) => (
        <div key={item.title} className="pl-12 relative">
          {/* dot */}
          <span className="absolute left-2 top-8 h-3 w-3 rounded-full bg-party-red 
          shadow-[0_0_0_6px_rgba(239,68,68,0.12)]" />

          {/* CARD */}
          <div className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 
          shadow-md hover:shadow-lg hover:-translate-y-1 
          transition-all duration-300">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900">
              {item.title}
            </h3>

            <ul className="mt-4 space-y-2 text-gray-700 text-sm leading-relaxed">
              {item.points.map((p) => (
                <li key={p}>• {p}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>

      </section>

      {/* Đường lối đối ngoại */}
      <section id="foreign" className="py-16 px-4 bg-gradient-to-b from-white/40 via-white/30 to-white/40 scroll-mt-20">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 items-center">
          <div data-aos="fade-right">
            <p className="text-xs uppercase tracking-[0.28em] text-party-red font-semibold">Đổi mới đối ngoại</p>
            <h2 className="mt-3 text-3xl font-bold text-gray-900">“Thêm bạn, bớt thù”</h2>
            <ul className="mt-4 space-y-2 text-gray-700 text-sm leading-relaxed">
              {foreignPolicy.map((p) => (
                <li key={p}>• {p}</li>
              ))}
            </ul>
          </div>
          <div data-aos="fade-left" className="p-6 rounded-2xl border border-gray-100 bg-white/90">
            <p className="text-sm text-gray-600 leading-relaxed">
              Rút quân khỏi Campuchia (1989), bình thường hóa quan hệ với Trung Quốc, mở đàm phán với Hoa Kỳ và gia nhập
              ASEAN, Việt Nam dần phá thế bao vây cấm vận, mở rộng hợp tác kinh tế – ngoại giao, tạo môi trường hòa bình
              cho phát triển.
            </p>
          </div>
        </div>
      </section>

      {/* Ý nghĩa & Hạn chế */}
      <section id="significance" className="py-16 px-4 bg-white/50 scroll-mt-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="p-8 rounded-2xl border border-gray-100 bg-white" data-aos="fade-right">
            <p className="text-xs uppercase tracking-[0.28em] text-party-red font-semibold">Ý nghĩa</p>
            <h3 className="text-2xl font-bold text-gray-900 mt-2">Nền tảng cho giai đoạn mới</h3>
            <ul className="mt-4 space-y-2 text-gray-800 text-sm leading-relaxed">
              {meanings.map((m) => (
                <li key={m}>• {m}</li>
              ))}
            </ul>
          </div>
          <div className="p-8 rounded-2xl border border-gray-100 bg-white" data-aos="fade-left">
            <p className="text-xs uppercase tracking-[0.28em] text-party-yellow font-semibold">Hạn chế</p>
            <h3 className="text-2xl font-bold text-gray-900 mt-2">Những điểm cần hoàn thiện</h3>
            <ul className="mt-4 space-y-2 text-gray-700 text-sm leading-relaxed">
              {limitations.map((l) => (
                <li key={l}>• {l}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      </div>
    </div>
  )
}

export default CongressVI
