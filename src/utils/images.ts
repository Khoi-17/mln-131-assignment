// Hình ảnh lịch sử Việt Nam 1986-1996
export const images = {
  // Hero - Hình ảnh đại diện cho giai đoạn đổi mới (meeting/conference)
  hero: 'https://cdn.thuvienphapluat.vn/uploads/tintuc/2025/02/03/co-dang.jpg',
  
  // Đại hội VI (1986) - Hình ảnh cuộc họp/chính trị
  congress: 'https://cdncongthuong.quangtrung.vn/static_files/duyhien/images/2025/11/04/dh6-9d17.png',
  
  // Kinh tế khó khăn - Tiền tệ, tài chính (old money/currency)
  economy: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  
  // Giao thông Hà Nội những năm 1980 - Xe đạp, đường phố (bicycle/street)
  traffic: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  
  // Bàn đổi tiền - Thị trường, giao dịch (market/trading)
  moneyExchange: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  
  // Thành tựu kinh tế sau đổi mới - Phát triển, xây dựng (construction/building)
  achievement: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  
  // Phát triển đô thị và cơ sở hạ tầng (infrastructure)
  development: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  
  // Tư liệu lịch sử - Sách, tài liệu (old books/documents)
  history: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  
  // Đô thị hóa - Thành phố, nhà cao tầng (city/urban)
  urban: 'https://images.unsplash.com/photo-1449824913935-9a10bd0d0872?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  
  // Tài liệu lịch sử - Văn bản, giấy tờ (documents/papers)
  document: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
}

// Fallback images nếu URL chính không load được
export const fallbackImages = {
  hero: 'https://images.pexels.com/photos/159888/pexels-photo-159888.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
  congress: 'https://images.pexels.com/photos/159832/book-cover-table-of-contents-read-159832.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
  economy: 'https://images.pexels.com/photos/259200/pexels-photo-259200.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
  traffic: 'https://images.pexels.com/photos/163255/bike-bicycle-cycling-cyclist-163255.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
  moneyExchange: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  achievement: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  development: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  history: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  urban: 'https://images.unsplash.com/photo-1449824913935-9a10bd0d0872?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  document: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
}

// Helper function để xử lý lỗi hình ảnh
export const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>, fallbackKey: keyof typeof fallbackImages) => {
  const target = e.currentTarget
  // Thử fallback đầu tiên
  if (target.src !== fallbackImages[fallbackKey]) {
    target.src = fallbackImages[fallbackKey]
  } else {
    // Nếu fallback cũng lỗi, dùng placeholder
    target.src = `https://via.placeholder.com/800x600/DC143C/FFFFFF?text=Vietnam+History+${fallbackKey}`
  }
}
