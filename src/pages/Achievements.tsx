import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { images, handleImageError } from '../utils/images'

const navLinks = [
  { label: 'Tổng quan', href: '#overview' },
  { label: 'Nguy cơ & thách thức', href: '#risks' },
  { label: 'Thời cơ & sức mạnh', href: '#strengths' },
  { label: 'Nhà nước pháp quyền', href: '#rule-of-law' },
  { label: 'Con người trung tâm', href: '#human' },
]

const significancePoints = [
  'Lần đầu tổ chức Hội nghị giữa nhiệm kỳ trong bối cảnh biến động nhanh.',
  'Đổi mới là sự nghiệp khó khăn, chưa có tiền lệ nhưng đã đạt thắng lợi quan trọng.',
  'Đảng giữ vững vai trò lãnh đạo duy nhất; phát huy độc lập, tự chủ, sáng tạo.',
  'Đường lối phù hợp quy luật và thực tiễn Việt Nam; đại đoàn kết và hợp tác quốc tế là động lực.',
]

const riskItems = [
  {
    title: 'Nguy cơ tụt hậu xa hơn về kinh tế',
    detail: 'Điểm xuất phát thấp, tăng trưởng chưa vững; cạnh tranh quốc tế gay gắt.',
  },
  {
    title: 'Nguy cơ chệch hướng XHCN',
    detail: 'Nếu không khắc phục lệch lạc trong chủ trương, chính sách, chỉ đạo thực hiện.',
  },
  { title: 'Tham nhũng, quan liêu', detail: 'Làm suy giảm niềm tin, kìm hãm phát triển.' },
  { title: '“Diễn biến hòa bình”', detail: 'Nguy cơ từ các thế lực thù địch; liên quan mật thiết với các nguy cơ khác.' },
]

const strengthItems = [
  'Đảng có đường lối đúng, đoàn kết, thống nhất.',
  'Nhân dân cần cù, thông minh, yêu nước, tin tưởng vào Đảng.',
  'Lực lượng vũ trang tuyệt đối trung thành với sự nghiệp cách mạng.',
  'Thành tựu đổi mới tạo thế và lực mới cho đất nước.',
  'Khoa học – kỹ thuật phát triển, hợp tác quốc tế mở rộng đem lại nguồn lực quan trọng.',
]

const ruleOfLawPoints = [
  'Nhà nước pháp quyền XHCN của nhân dân, do nhân dân, vì nhân dân dưới sự lãnh đạo của Đảng.',
  'Quyền lực nhà nước thống nhất; có phân công, phối hợp giữa lập pháp – hành pháp – tư pháp.',
  'Tăng cường pháp chế XHCN; quản lý bằng pháp luật gắn với giáo dục đạo đức và nâng cao dân trí.',
  'Hội nghị TW8 (1/1995): chủ trương hoàn thiện Nhà nước, cải cách hành chính, cụ thể hóa Nhà nước pháp quyền.',
]

const humanCentered = {
  intro: 'Con người là nhân tố quyết định, động lực lớn nhất và chủ thể sáng tạo mọi giá trị vật chất, tinh thần; hạnh phúc con người là mục tiêu cao nhất.',
  resolutions: ['Giáo dục – đào tạo', 'Văn hóa – văn nghệ', 'Chăm sóc, bảo vệ sức khỏe nhân dân', 'Chính sách dân số & KHHGĐ', 'Công tác thanh niên'],
}

const Achievements = () => {
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
        {/* Hero */}
        <section className="relative overflow-hidden bg-gradient-to-b from-white/70 via-white/60 to-white/70 py-16 px-4">
          <div className="absolute top-0 right-0 w-72 h-72 bg-party-red/5 blur-3xl -mr-32 -mt-32" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-party-yellow/10 blur-3xl -ml-36 -mb-36" />
          <div
            className="absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage: "radial-gradient(circle at 1px 1px, rgba(0,0,0,0.35) 1px, transparent 0)",
              backgroundSize: '32px 32px',
            }}
          />
          <div className="max-w-6xl mx-auto relative z-10 grid md:grid-cols-2 gap-10 items-center">
            <div data-aos="fade-right">
              <p className="text-xs md:text-sm uppercase tracking-[0.28em] text-party-red font-semibold mb-4">
                Hội nghị giữa nhiệm kỳ • 1994
              </p>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
                Hội nghị giữa nhiệm kỳ: Củng cố đường lối đổi mới
              </h1>
              <p className="text-lg text-gray-700 leading-relaxed">
                Lần đầu tổ chức trong bối cảnh thế giới và trong nước biến đổi nhanh; khẳng định ý chí đổi mới, nhận diện
                nguy cơ – thời cơ và đặt nền tảng xây dựng Nhà nước pháp quyền, coi con người là trung tâm.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <span className="px-4 py-2 rounded-full bg-party-red/10 text-party-red text-sm font-semibold">1994</span>
                <span className="px-4 py-2 rounded-full bg-party-yellow/20 text-party-red text-sm font-semibold">
                  Giữa nhiệm kỳ khóa VII
                </span>
                <span className="px-4 py-2 rounded-full bg-gray-900/5 text-gray-700 text-sm font-semibold">Đổi mới</span>
              </div>
            </div>
            <div data-aos="fade-left" className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl ring-1 ring-white/40">
                <img
                  src={images.congress1}
                  alt="Hội nghị giữa nhiệm kỳ 1994"
                  className="w-full h-80 object-cover"
                  onError={(e) => handleImageError(e, 'congress')}
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-6 left-6 bg-white rounded-2xl shadow-xl p-4 border border-gray-100">
                <p className="text-sm font-semibold text-gray-900">Hội nghị giữa nhiệm kỳ 1994</p>
                <p className="text-xs text-gray-600">Khẳng định quyết tâm đổi mới và các nguy cơ, thời cơ mới</p>
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

        {/* Ý nghĩa hội nghị */}
        <section id="overview" className="py-16 px-4 bg-white/60 scroll-mt-20">
          <div className="max-w-6xl mx-auto space-y-8">
            <div className="text-center" data-aos="fade-up">
              <p className="text-xs uppercase tracking-[0.28em] text-party-red font-semibold">Ý nghĩa</p>
              <h2 className="mt-3 text-3xl md:text-4xl font-bold text-gray-900">Hội nghị giữa nhiệm kỳ (1994)</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="rounded-2xl bg-white shadow-lg p-8 border border-gray-100" data-aos="fade-right">
                <p className="text-sm font-semibold text-party-yellow uppercase tracking-[0.2em] mb-2">Bối cảnh</p>
                <p className="text-gray-700 leading-relaxed">
                  Lần đầu Đảng tổ chức hội nghị giữa nhiệm kỳ khi thế giới biến động, trong nước đổi mới hơn 4 năm, cần tổng
                  kết, nhận diện nguy cơ và củng cố niềm tin.
                </p>
              </div>
              <div
                className="rounded-2xl bg-white shadow-md p-8 
  border border-gray-200 hover:shadow-lg 
  transition-shadow duration-300"
                data-aos="fade-left"
              >
                <p className="text-sm font-semibold text-party-red uppercase tracking-[0.2em] mb-2">Khẳng định</p>
                <ul className="space-y-2 text-gray-800 text-sm leading-relaxed">
                  {significancePoints.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="text-party-red font-bold">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Nguy cơ & thách thức */}
        <section id="risks" className="py-16 px-4 bg-gradient-to-b from-white/40 via-white/30 to-white/40 scroll-mt-20">
          <div className="max-w-6xl mx-auto space-y-8">
            <div className="text-center" data-aos="fade-up">
              <p className="text-xs uppercase tracking-[0.28em] text-party-red font-semibold">Nhận thức mới</p>
              <h2 className="mt-3 text-3xl md:text-4xl font-bold text-gray-900">4 nguy cơ lớn</h2>
              <p className="mt-3 text-gray-600 max-w-3xl mx-auto">
                Các nguy cơ liên quan mật thiết và tác động lẫn nhau; cảnh báo sớm để giữ vững định hướng XHCN.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {riskItems.map((item, idx) => (
                <div
                  key={item.title}
                  className="p-6 rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-md transition"
                  data-aos="fade-up"
                  data-aos-delay={idx * 50}
                >
                  <div className="flex items-start gap-3">
                    <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-party-red" />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                      <p className="text-sm text-gray-700 mt-1 leading-relaxed">{item.detail}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Thời cơ & sức mạnh */}
        <section id="strengths" className="py-16 px-4 bg-white/60 scroll-mt-20">
          <div className="max-w-6xl mx-auto space-y-8">
            <div className="text-center" data-aos="fade-up">
              <p className="text-xs uppercase tracking-[0.28em] text-party-red font-semibold">Thời cơ và sức mạnh</p>
              <h2 className="mt-3 text-3xl md:text-4xl font-bold text-gray-900">Nguồn lực bảo đảm thắng lợi</h2>
            </div>
            <div className="rounded-2xl border border-green-200 bg-green-50 p-8 shadow-sm" data-aos="fade-up">
              <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-800">
                {strengthItems.map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <span className="text-green-700 font-bold">•</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Nhà nước pháp quyền */}
        <section id="rule-of-law" className="py-16 px-4 bg-gradient-to-b from-white/40 via-white/30 to-white/40 scroll-mt-20">
          <div className="max-w-6xl mx-auto space-y-8">
            <div className="text-center" data-aos="fade-up">
              <p className="text-xs uppercase tracking-[0.28em] text-party-red font-semibold">Nhà nước pháp quyền</p>
              <h2 className="mt-3 text-3xl md:text-4xl font-bold text-gray-900">Lần đầu khẳng định rõ</h2>
              <p className="mt-3 text-gray-600 max-w-3xl mx-auto">
                Văn kiện hội nghị nêu xây dựng Nhà nước pháp quyền Việt Nam của nhân dân, do nhân dân, vì nhân dân; TW8
                (1/1995) cụ thể hóa và chủ trương hoàn thiện bộ máy, cải cách hành chính.
              </p>
            </div>
            <div className="rounded-2xl bg-white shadow-lg p-8 border border-gray-100" data-aos="fade-up">
              <ul className="space-y-3 text-gray-800 text-sm leading-relaxed">
                {ruleOfLawPoints.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-party-red font-bold">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Con người trung tâm */}
        <section id="human" className="py-16 px-4 bg-white/60 scroll-mt-20">
          <div className="max-w-6xl mx-auto space-y-10">
            <div className="text-center" data-aos="fade-up">
              <p className="text-xs uppercase tracking-[0.28em] text-party-red font-semibold">Con người là nhân tố quyết định</p>
              <h2 className="mt-3 text-3xl md:text-4xl font-bold text-gray-900">Mục tiêu cao nhất: hạnh phúc con người</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6 items-start">
              <div className="p-8 rounded-2xl border border-gray-100 bg-white shadow-sm" data-aos="fade-right">
                <p className="text-sm text-gray-700 leading-relaxed">{humanCentered.intro}</p>
                <p className="mt-4 text-xs text-gray-500 uppercase tracking-[0.2em] font-semibold">
                  Hội nghị Trung ương 4: 5 nghị quyết về con người
                </p>
              </div>
              <div className="p-8 rounded-2xl border border-white bg-gradient-to-r from-party-yellow/10 to-party-red/10 shadow-sm" data-aos="fade-left">
                <div className="grid sm:grid-cols-2 gap-3 text-sm text-gray-900">
                  {humanCentered.resolutions.map((item) => (
                    <div key={item} className="px-4 py-3 rounded-lg bg-white border border-gray-100 shadow-sm">
                      {item}
                    </div>
                  ))}
                </div>
                <p className="mt-4 text-xs text-gray-600 italic">Tất cả là do con người, tất cả vì hạnh phúc con người.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Achievements
