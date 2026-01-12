import { useEffect } from 'react'

const members = [
  {
    role: 'Team Leader',
    name: 'Trần Chí Tâm',
    code: 'SE182549',
    initial: 'T',
    icon: '👑',
  },
  {
    role: 'Member',
    name: 'Nguyễn Quốc Anh Khoa',
    code: 'SE184731',
    initial: 'K',
    icon: '📚',
  },
  {
    role: 'Member',
    name: 'Lê Minh Khôi',
    code: 'SE182557',
    initial: 'K',
    icon: '🎯',
  },
]

const tools = [
  {
    category: 'Soạn thảo & quản lý nội dung',
    description: [
      'Lên kịch bản chi tiết cho dòng thời gian giai đoạn 1986–1996.',
      'Rút lọc ý chính, gom nhóm và sắp xếp các sự kiện theo trình tự dễ theo dõi.',
      'Ghi chú, lưu trữ và hệ thống hóa các nguồn tài liệu tham khảo.',
    ],
    ai: 'Notebook / Docs',
    tool: 'AI ghi chép & quản lý tài liệu',
  },
  {
    category: 'Sáng tạo & kiểm chứng thông tin',
    description: [
      'Đề xuất cấu trúc tổng thể website và các tính năng tương tác (quiz, flipbook, hiệu ứng).',
      'Tóm tắt ngắn gọn nội dung các văn kiện Đại hội và nghị quyết Trung ương.',
      'Hỗ trợ tra cứu, đối chiếu nguồn gốc hình ảnh và các mốc sự kiện lịch sử quan trọng.',
      'Gợi ý prompt để tạo hình minh họa khi thiếu tư liệu gốc.',
    ],
    ai: 'Google Gemini',
    tool: 'AI tra cứu & sáng tạo nội dung',
  },
  {
    category: 'Trợ lý lập trình & tối ưu giao diện',
    description: [
      'Gợi ý và hoàn thiện nhanh code ReactJS, tối ưu cách tách nhỏ component.',
      'Phát hiện và gợi ý sửa lỗi logic trong các hiệu ứng, animation và tương tác người dùng.',
      'Đề xuất cách tổ chức Tailwind CSS để giao diện nhất quán, dễ bảo trì.',
      'Hỗ trợ refactor để mã nguồn gọn hơn và trang tải nhanh, mượt hơn.',
    ],
    ai: 'Cursor',
    tool: 'AI hỗ trợ lập trình',
  },
]

const ThongTin = () => {
  useEffect(() => {
    document.title = 'Thông tin nhóm & Phụ lục AI'
  }, [])

  return (
    <section className="min-h-screen bg-gradient-to-b from-white via-party-yellow/5 to-gray-50 py-16 px-4">
      <div className="relative max-w-6xl mx-auto space-y-12">
        <div className="pointer-events-none absolute -top-10 -left-10 h-40 w-40 rounded-full bg-party-yellow/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-10 -right-16 h-48 w-48 rounded-full bg-party-red/10 blur-3xl" />

        {/* Header */}
        <header className="relative text-center space-y-3">
          <p className="text-xs uppercase tracking-[0.28em] text-party-red font-semibold">
            Thông tin dự án
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Thành viên nhóm & Phụ lục AI</h1>
          <p className="text-gray-700 max-w-2xl mx-auto text-sm md:text-base">
            Tổng hợp thông tin các thành viên thực hiện dự án và các công cụ Trí tuệ nhân tạo, kỹ thuật lập trình
            đã sử dụng trong quá trình xây dựng website.
          </p>
        </header>

        {/* Members */}
        <section className="relative bg-white/95 rounded-2xl shadow-xl border border-gray-100 p-6 md:p-8 space-y-6">
          <div className="flex items-center justify-between gap-4 flex-wrap border-b border-gray-100 pb-4">
            <h2 className="text-2xl font-bold text-gray-900">Thành viên nhóm</h2>
            <span className="text-xs uppercase tracking-[0.24em] text-gray-500 font-semibold">
              Lớp IB1807 - MLN131
            </span>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {members.map((m) => (
              <div
                key={m.code}
                className="flex items-center gap-4 rounded-xl border border-gray-100 bg-gray-50/70 p-4 hover:bg-white hover:-translate-y-1 hover:shadow-md transition"
              >
                <div className="flex-shrink-0">
                  <div className="relative h-12 w-12 rounded-full bg-white border border-gray-300 flex items-center justify-center text-party-red font-bold text-xl shadow-sm">
                    <span className="z-10">
                      {(m.initial || m.name.charAt(0)).toUpperCase()}
                    </span>
                    {m.icon && (
                      <span className="absolute -bottom-1 -right-1 h-6 w-6 rounded-full bg-white flex items-center justify-center text-base shadow">
                        {m.icon}
                      </span>
                    )}
                  </div>
                </div>
                <div>
                  <p className="text-sm font-semibold text-party-red">{m.role}</p>
                  <p className="text-base font-bold text-gray-900">{m.name}</p>
                   <p
                     className={`mt-1 font-semibold ${
                       m.code === 'SE182557' ? 'text-sm text-gray-800' : 'text-xs text-gray-500'
                     }`}
                   >
                     {m.code}
                   </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* AI & Technology Appendix */}
        <section className="relative bg-white/95 rounded-2xl shadow-xl border border-gray-100 p-6 md:p-8 space-y-6">
          <div className="space-y-2 md:flex md:items-center md:justify-between">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Phụ lục AI & Công nghệ</h2>
              <p className="text-sm md:text-base text-gray-700">
                Tổng hợp các công cụ Trí tuệ nhân tạo và hỗ trợ lập trình đã áp dụng trong quá trình xây dựng dự án.
              </p>
            </div>
            <span className="mt-2 inline-flex items-center rounded-full bg-party-red/10 px-4 py-1 text-xs font-semibold text-party-red">
              AI-assisted Development
            </span>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {tools.map((t) => (
              <div
                key={t.category}
                className="rounded-2xl border border-gray-100 bg-gray-50/80 p-5 flex flex-col gap-3 hover:bg-white hover:-translate-y-1 hover:shadow-md transition"
              >
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-party-red">
                    {t.ai}
                  </p>
                  <h3 className="mt-1 text-base font-bold text-gray-900">{t.category}</h3>
                  <p className="mt-1 text-[11px] uppercase tracking-[0.16em] text-gray-500">
                    {t.tool}
                  </p>
                </div>
                <ul className="mt-1 list-disc pl-4 space-y-1 text-xs md:text-sm text-gray-700 leading-relaxed">
                  {t.description.map((d) => (
                    <li key={d}>{d}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </div>
    </section>
  )
}

export default ThongTin


