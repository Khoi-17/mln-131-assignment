export type TimelineItem = {
  year: string
  title: string
  description: string
  side: 'left' | 'right'
  image?: string
  icon?: string
  tag?: string
}

export const timelineData: TimelineItem[] = [
  {
    year: '1986',
    title: 'Đại hội VI – Bắt đầu Đổi mới',
    side: 'left',
    description: 'Đại hội đại biểu toàn quốc lần thứ VI khởi xướng đường lối đổi mới toàn diện.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-wNHez3aWDO64aOc4nYA7r7OiQ7o4fJDbMw&s',
    tag: 'Khởi đầu',
  },
  {
    year: '1988',
    title: 'Luật Đầu tư nước ngoài',
    side: 'right',
    description: 'Lần đầu cho phép đầu tư trực tiếp nước ngoài (FDI) vào Việt Nam, mở cánh cửa hội nhập.',
    image: 'https://cdn-images.vtv.vn/zoom/700_438/2018/9/30/luat-1538313424642605275499.png',
    tag: 'Kinh tế',
  },
  {
    year: '1988',
    title: 'Khoán 10 – Nông nghiệp đổi mới',
    side: 'left',
    description: 'Nghị quyết 10 giao ruộng ổn định 15 năm, tạo bước nhảy vọt cho sản xuất nông nghiệp.',
    image:
      'https://thinhvuongvietnam.com/Content/UploadFiles/EditorFiles/images/2021/Quy2/vnapotal90namdcsvietnamtukhoan10dencuongquocxuatkhaugao-baihoclonvetindantrongdanvaquyettamdoimoicuadan101652228stand05042021053913.jpg',
    tag: 'Nông nghiệp',
  },
  {
    year: '1989',
    title: 'Rút quân khỏi Campuchia',
    icon: '🌐',
    side: 'right',
    description: 'Rút toàn bộ quân tình nguyện, mở ra thời kỳ hòa bình và ngoại giao mới.',
    image:
      'https://ngaymoionline.com.vn/stores/news_dataimages/2024/012024/05/22/in_article/c03d7aee-d117-407b-8c36-1fdbcc45631520240105220621.jpg?rt=20240105220622',
    tag: 'Đối ngoại',
  },
  {
    year: '1991',
    title: 'Đại hội VII – Thông qua Cương lĩnh',
    icon: '📜',
    side: 'left',
    description:
      'Thông qua Cương lĩnh xây dựng đất nước trong thời kỳ quá độ lên CNXH, định hướng chiến lược dài hạn.',
    image:
      'https://cdn.baobackan.vn/images/4c9bb5fac88a6adb6aee22ba8ece2b57153657331df800e0c9cf207fcb8fd7603cbf91bd54c02e0de825c63366ed826cd973a04cfc4daa35381ac55e6431b0a5/vii.png.webp',
    tag: 'Định hướng',
  },
  {
    year: '1994',
    title: 'Hội nghị giữa nhiệm kỳ khóa VII (01/1994): 4 nguy cơ',
    icon: '⚠️',
    side: 'right',
    description:
      'Tụt hậu xa hơn về kinh tế;Chệch hướng xã hội chủ nghĩa;\nTham nhũng, quan liêu; "Diễn biến hòa bình" từ các thế lực thù địch.',
    image: 'https://bcp.cdnchinhphu.vn/Uploaded_VGP/nguyenductuan/20090930/BemacdaihoiVII.jpg',
    tag: 'Cảnh báo',
  },
  {
    year: '1995',
    title: 'Gia nhập ASEAN, bình thường hóa với Mỹ',
    icon: '🤝',
    side: 'left',
    description: 'Mốc son hội nhập quốc tế, phá thế bao vây cấm vận và mở rộng hợp tác.',
    image: 'https://cdn.nbtv.vn/upload/news/11_2020/44_20480229112020.jpg',
    tag: 'Hội nhập',
  },
  {
    year: '1996',
    title: 'Hoàn thiện giai đoạn đầu của Đổi mới',
    icon: '✅',
    side: 'right',
    description: 'Kết thúc giai đoạn đầu đổi mới, đặt nền móng cho phát triển tiếp theo.',
    image:
      'https://baonamdinh.vn/file/e7837c02816d130b0181a995d7ad7e96/dataimages//201607/original/images1274056_1.jpg?gidzl=E1Rm7xDFt3av2VCPlLJQEpO5zXog2uu-BbgZJwfKYpnxNVOVg0pRCNvHz1F_MjepVWVs5ZIoQ1uNk4RMFW',
    tag: 'Tổng kết',
  },
]

