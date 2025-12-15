import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Video = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true })
  }, [])

  return (
    <section className="min-h-screen bg-gradient-to-b from-white via-party-yellow/5 to-gray-50 py-16 px-4">
      <div className="max-w-5xl mx-auto space-y-10" data-aos="fade-up">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.28em] text-party-red font-semibold">Tổng hợp</p>
          <h1 className="mt-3 text-3xl md:text-4xl font-bold text-gray-900">Video tư liệu</h1>
          <p className="mt-3 text-gray-700">
            Xem video tổng hợp về giai đoạn Đổi mới 1986-1996.
          </p>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white/95 p-4 md:p-6 shadow-lg max-w-3xl mx-auto">
          <div className="aspect-video w-full overflow-hidden rounded-xl bg-black">
            <video
              className="h-full w-full"
              controls
              preload="metadata"
            >
              <source src="/VNR202-Vid.mp4" type="video/mp4" />
              Trình duyệt của bạn không hỗ trợ video.
            </video>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Video

