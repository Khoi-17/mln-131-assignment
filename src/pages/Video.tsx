import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Video = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true })
  }, [])

  return (
    <section className="min-h-screen bg-gradient-to-b from-white via-party-yellow/5 to-gray-50 py-16 px-4">
      <div className="max-w-5xl mx-auto space-y-8" data-aos="fade-up">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.28em] text-party-red font-semibold">Tổng hợp</p>
          <h1 className="mt-3 text-3xl md:text-4xl font-bold text-gray-900">Video tư liệu</h1>
          <p className="mt-3 text-gray-700">
            Nội dung video đang được cập nhật. Vui lòng quay lại sau.
          </p>
        </div>
        <div className="rounded-2xl border border-dashed border-gray-200 bg-white/90 p-10 text-center text-gray-600">
          <p className="text-sm md:text-base">Chúng tôi sẽ bổ sung danh sách video và trình phát sớm nhất.</p>
        </div>
      </div>
    </section>
  )
}

export default Video

