import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Timeline = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      offset: 100,
    })
  }, [])

  return (
    <section id="timeline-section" className="py-20 px-4 relative overflow-hidden">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `url(/timeline-background.png)`,
        }}
      >
        <div className="absolute inset-0 bg-white/85"></div>
      </div>
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-party-yellow/5 rounded-full blur-3xl -mr-48 -mt-48"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-party-red/5 rounded-full blur-3xl -ml-48 -mb-48"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-party-red mb-4">
            9. Timeline
          </h2>
          <div className="w-24 h-1 bg-party-yellow mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Các sự kiện nổi bật trong giai đoạn Đổi mới 1986-1996
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-party-red via-party-yellow to-party-red transform md:-translate-x-1/2"></div>

          {/* Timeline items */}
          <div className="space-y-12">
            {[
              { 
                year: '1986', 
                title: 'Đại hội VI – Bắt đầu Đổi mới', 
                side: 'left',
                description: 'Đại hội đại biểu toàn quốc lần thứ VI khởi xướng đường lối đổi mới toàn diện',
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-wNHez3aWDO64aOc4nYA7r7OiQ7o4fJDbMw&s'
              },
              { 
                year: '1987', 
                title: 'Luật Đầu tư nước ngoài', 
                side: 'right',
                description: 'Lần đầu cho phép đầu tư trực tiếp nước ngoài (FDI) vào Việt Nam',
                image: 'https://cdn-images.vtv.vn/zoom/700_438/2018/9/30/luat-1538313424642605275499.png'

              },
              { 
                year: '1988', 
                title: 'Khoán 10 – Nông nghiệp đổi mới', 
                side: 'left',
                description: 'Nghị quyết 10 giao ruộng ổn định 15 năm, bùng nổ sản xuất nông nghiệp',
                image: 'https://thinhvuongvietnam.com/Content/UploadFiles/EditorFiles/images/2021/Quy2/vnapotal90namdcsvietnamtukhoan10dencuongquocxuatkhaugao-baihoclonvetindantrongdanvaquyettamdoimoicuadan101652228stand05042021053913.jpg'
              },
              { 
                year: '1989', 
                title: 'Rút quân khỏi Campuchia', 
                icon: '🌐', 
                side: 'right',
                description: 'Rút toàn bộ quân tình nguyện, mở ra thời kỳ hòa bình mới',
                image:'https://ngaymoionline.com.vn/stores/news_dataimages/2024/012024/05/22/in_article/c03d7aee-d117-407b-8c36-1fdbcc45631520240105220621.jpg?rt=20240105220622'
              },
              { 
                year: '1991', 
                title: 'Đại hội VII – Thông qua Cương lĩnh', 
                icon: '📜', 
                side: 'left',
                description: 'Thông qua Cương lĩnh xây dựng đất nước trong thời kỳ quá độ lên CNXH',
                image:'https://cdn.baobackan.vn/images/4c9bb5fac88a6adb6aee22ba8ece2b57153657331df800e0c9cf207fcb8fd7603cbf91bd54c02e0de825c63366ed826cd973a04cfc4daa35381ac55e6431b0a5/vii.png.webp'
              },
              { 
                year: '1994', 
                title: 'Hội nghị giữa nhiệm kỳ – Nêu 4 nguy cơ', 
                icon: '⚠️', 
                side: 'right',
                description: 'Xác định 4 nguy cơ đe dọa sự nghiệp đổi mới',
                image: 'https://bcp.cdnchinhphu.vn/Uploaded_VGP/nguyenductuan/20090930/BemacdaihoiVII.jpg'
              },
              { 
                year: '1995', 
                title: 'Gia nhập ASEAN, bình thường hóa với Mỹ', 
                icon: '🤝', 
                side: 'left',
                description: 'Mốc son trong hội nhập quốc tế, phá thế bao vây cấm vận',
                image: 'https://cdn.nbtv.vn/upload/news/11_2020/44_20480229112020.jpg'
              },
              { 
                year: '1996', 
                title: 'Hoàn thiện giai đoạn đầu của Đổi mới', 
                icon: '✅', 
                side: 'right',
                description: 'Kết thúc giai đoạn đầu đổi mới, đặt nền móng cho phát triển tiếp theo',
                image: 'https://baonamdinh.vn/file/e7837c02816d130b0181a995d7ad7e96/dataimages//201607/original/images1274056_1.jpg?gidzl=E1Rm7xDFt3av2VCPlLJQEpO5zXog2uu-BbgZJwfKYpnxNVOVg0pRCNvHz1F_MjepVWVs5ZIoQ1uNk4RMFW'
              },
            ].map((item, index) => (
              <div key={index} className="relative flex items-center">
                {/* Timeline dot */}
                <div className="absolute left-6 md:left-1/2 w-6 h-6 bg-party-red rounded-full border-4 border-white shadow-lg transform md:-translate-x-1/2 z-10"></div>
                
                {/* Content card */}
                <div 
                  className={`w-full md:w-5/12 ml-20 md:ml-0 ${item.side === 'left' ? 'md:mr-auto' : 'md:ml-auto'}`}
                  data-aos={item.side === 'left' ? 'fade-right' : 'fade-left'}
                  data-aos-delay={index * 100}
                >
                  <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-party-red hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                    {item.image && (
                      <div className="mb-4 rounded-lg overflow-hidden">
                        <img 
                          src={item.image} 
                          alt={item.title}
                          className="w-full h-48 object-cover"
                          loading="lazy"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none'
                          }}
                        />
                      </div>
                    )}
                    <div className="flex items-center gap-4 mb-3">
                      {item.icon && <span className="text-3xl">{item.icon}</span>}
                      <div>
                        <div className="text-party-red font-bold text-sm">{item.year}</div>
                        <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                      </div>
                    </div>
                    <p className="text-gray-600 leading-relaxed text-sm">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Timeline
