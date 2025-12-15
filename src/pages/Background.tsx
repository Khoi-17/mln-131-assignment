import { useEffect, useState } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { images, handleImageError } from '../utils/images'

type ContextHighlight = {
  title: string
  subtitle: string
  summary: string
  icon: string
  gradient: string
  accent: string
  stats?: { label: string; value: string }[]
  bullets: string[]
}

const contextHighlights: ContextHighlight[] = [
  {
    title: 'Bối cảnh quốc tế',
    subtitle: 'Xu thế toàn cầu thay đổi',
    summary:
      'Trật tự thế giới dần chuyển từ đối đầu sang đối thoại; cuộc cách mạng khoa học – kỹ thuật thúc đẩy cải tổ và tư duy mới trên phạm vi toàn cầu.',
    icon: '🌍',
    gradient: 'from-rose-100 via-rose-50 to-amber-100',
    accent: 'text-party-red',
    bullets: [
      'Cách mạng khoa học – kỹ thuật phát triển mạnh, phá vỡ mô hình cũ.',
      'Liên Xô và các nước XHCN đồng loạt cải tổ.',
      'Đổi mới trở thành xu thế chung của thời đại.',
    ],
  },
  {
    title: 'Bối cảnh trong nước',
    subtitle: 'Khó khăn bủa vây',
    summary:
      'Việt Nam bị bao vây, cấm vận; kinh tế – xã hội rơi vào khủng hoảng trầm trọng, đời sống nhân dân thiếu thốn và tiềm ẩn bất ổn.',
    icon: '🇻🇳',
    gradient: 'from-amber-100 via-orange-50 to-rose-100',
    accent: 'text-party-yellow',
    stats: [{ label: 'Lạm phát 1986', value: '774%' }],
    bullets: [
      'Lương thực, hàng tiêu dùng khan hiếm, sản xuất trì trệ.',
      'Tiêu cực xã hội, vượt biên trái phép gia tăng.',
      'Đòi hỏi cấp bách phải đổi mới toàn diện.',
    ],
  },
]

const Background = () => {
  const [activeImage, setActiveImage] = useState<{
    src: string
    title: string
    description: string
  } | null>(null)

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      offset: 100,
    })
  }, [])

  return (
    <section
      id="background-section"
      className="py-20 px-4 bg-white/40"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-party-red/5 text-party-red text-xs font-semibold tracking-[0.18em] uppercase mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-party-red" />
            Bối cảnh trước Đại hội VI
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Bối cảnh lịch sử trước Đại hội VI
          </h2>
          <div className="w-24 h-1 bg-party-yellow mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Trước Đại hội VI, Việt Nam đứng trước những thách thức lớn cả về quốc tế và trong nước, đòi hỏi cấp bách
            phải đổi mới toàn diện để đưa đất nước ra khỏi khủng hoảng.
          </p>
        </div>

        {/* Hình ảnh tư liệu - Bối cảnh kinh tế khó khăn */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div
            data-aos="fade-right"
            className="rounded-2xl overflow-hidden shadow-xl bg-gray-900/5 cursor-pointer group"
            onClick={() =>
              setActiveImage({
                src: images.economy,
                title: 'Bộ tiền giấy 1985',
                description: 'Phản ánh khó khăn kinh tế và lạm phát trong giai đoạn trước Đổi mới.',
              })
            }
          >
            <div className="relative h-64">
              <img
                src={images.economy}
                alt="Bộ tiền giấy phát hành năm 1985 - Phản ánh khó khăn kinh tế"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                onError={(e) => handleImageError(e, 'economy')}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
              <div className="absolute bottom-3 left-4 right-4">
                <p className="text-sm font-semibold text-white">Bộ tiền giấy 1985</p>
                <p className="text-xs text-white/80 mt-1">Phản ánh khó khăn kinh tế</p>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-up"
            className="rounded-2xl overflow-hidden shadow-xl bg-gray-900/5 cursor-pointer group"
            onClick={() =>
              setActiveImage({
                src: images.traffic,
                title: 'Giao thông Hà Nội 1980',
                description: 'Không khí đời sống thường ngày với xe đạp và tàu điện những năm 1980.',
              })
            }
          >
            <div className="relative h-64">
              <img
                src={images.traffic}
                alt="Giao thông Hà Nội những năm 1980 - Xe đạp và tàu điện"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                onError={(e) => handleImageError(e, 'traffic')}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
              <div className="absolute bottom-3 left-4 right-4">
                <p className="text-sm font-semibold text-white">Giao thông Hà Nội 1980</p>
                <p className="text-xs text-white/80 mt-1">Xe đạp và tàu điện</p>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-left"
            className="rounded-2xl overflow-hidden shadow-xl bg-gray-900/5 cursor-pointer group"
            onClick={() =>
              setActiveImage({
                src: images.moneyExchange,
                title: 'Bàn đổi tiền 1985',
                description: 'Hoạt động đổi tiền ở Hàng Buồm, Hà Nội – một lát cắt về đời sống kinh tế.',
              })
            }
          >
            <div className="relative h-64">
              <img
                src={images.moneyExchange}
                alt="Bàn đổi tiền ở Hàng Buồm, Hà Nội năm 1985"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                onError={(e) => handleImageError(e, 'moneyExchange')}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
              <div className="absolute bottom-3 left-4 right-4">
                <p className="text-sm font-semibold text-white">Bàn đổi tiền 1985</p>
                <p className="text-xs text-white/80 mt-1">Hàng Buồm, Hà Nội</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-12">
          {contextHighlights.map((highlight, index) => (
            <article
              key={highlight.title}
              data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'}
              className="relative overflow-hidden rounded-3xl bg-white/95 border border-white/50 shadow-xl hover:shadow-2xl transition-all duration-500 group"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${highlight.gradient} opacity-0 group-hover:opacity-70 transition-opacity duration-500`}
              />
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute -left-16 top-0 h-full w-32 rotate-12 bg-white/40 blur-3xl opacity-0 group-hover:opacity-60 transition-opacity duration-500" />
                <div className="absolute -right-16 bottom-0 h-full w-32 -rotate-12 bg-white/40 blur-3xl opacity-0 group-hover:opacity-60 transition-opacity duration-500" />
              </div>
              <div className="relative z-10 p-8 text-gray-900">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-gray-100 flex items-center justify-center text-3xl">
                      {highlight.icon}
                    </div>
                    <div>
                      <p className="text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-gray-400">
                        {index === 0 ? 'Bối cảnh thế giới' : 'Tình hình trong nước'}
                      </p>
                      <h3 className="text-2xl font-bold text-gray-900">{highlight.title}</h3>
                      <p className="text-sm text-gray-500">{highlight.subtitle}</p>
                    </div>
                  </div>
                  <div className="hidden md:flex flex-col items-end text-right text-xs font-semibold tracking-[0.2em]">
                    <span className="uppercase text-gray-400">Giai đoạn</span>
                    <span>1980 - 1986</span>
                  </div>
                </div>

                <p className="mt-6 text-base md:text-lg leading-relaxed text-gray-700">{highlight.summary}</p>

                {highlight.stats && (
                  <div className="mt-6 flex flex-wrap gap-3">
                    {highlight.stats.map((stat) => (
                      <div
                        key={stat.label}
                        className="px-4 py-2 rounded-2xl bg-gray-50 border border-gray-100 text-sm font-semibold flex flex-col"
                      >
                        <span className="text-gray-500 text-xs uppercase tracking-wide">{stat.label}</span>
                        <span className="text-2xl text-gray-900">{stat.value}</span>
                      </div>
                    ))}
                  </div>
                )}

                <div className="mt-6 space-y-3">
                  {highlight.bullets.map((bullet) => (
                    <div key={bullet} className="flex items-start gap-3">
                      <span className="mt-2 inline-block h-2.5 w-2.5 rounded-full bg-gray-300" />
                      <p className="text-sm md:text-base leading-relaxed text-gray-700">{bullet}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex items-center justify-between text-xs uppercase tracking-[0.2em] text-gray-400">
                  <span>Động lực đổi mới</span>
                  <div className="flex items-center gap-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-party-red/60 animate-pulse" />
                    <span>Lịch sử ĐCSVN</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Lightbox xem ảnh lớn */}
      {activeImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4"
          onClick={() => setActiveImage(null)}
        >
          <div
            className="relative max-w-3xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveImage(null)}
              className="absolute right-4 top-4 z-10 rounded-full bg-black/60 text-white w-8 h-8 flex items-center justify-center hover:bg-black/80 transition-colors"
              aria-label="Đóng xem ảnh"
            >
              ✕
            </button>
            <div className="h-72 md:h-[26rem] bg-black">
              <img
                src={activeImage.src}
                alt={activeImage.title}
                className="w-full h-full object-contain md:object-cover"
              />
            </div>
            <div className="p-6 space-y-2">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900">{activeImage.title}</h3>
              <p className="text-gray-600 text-sm md:text-base">{activeImage.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Background
