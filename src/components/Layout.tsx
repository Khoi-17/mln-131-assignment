import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'

interface LayoutProps {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  const [showScrollTop, setShowScrollTop] = useState(false)
  const location = useLocation()
  const hasCongressBg = ['/congress-vi', '/congress-vii', '/midterm-congress-vii'].includes(
    location.pathname
  )

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const isActive = (path: string) => {
    return location.pathname === path
  }

  return (
    <div
      className={`min-h-screen ${hasCongressBg ? '' : 'bg-white'}`}
      style={
        hasCongressBg
          ? {
            backgroundImage: 'url(/download.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }
          : undefined
      }
    >
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-md">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center shadow-md">
                <span className="text-yellow-300 text-lg leading-none">★</span>
              </div>
              <span className="text-2xl font-bold text-party-red">Đổi Mới Toàn Diện 1986-1996</span>
            </Link>

            <div className="hidden md:flex items-center space-x-1">
              <NavLink to="/" label="Trang chủ" isActive={isActive('/')} />
              <NavLink to="/congress-vi" label="Chương III Phần III" isActive={isActive('/congress-vi')} />
              <NavLink to="/congress-vii" label="Chương IV Phần I" isActive={isActive('/congress-vii')} />
              <NavLink to="/midterm-congress-vii" label="Flip book" isActive={isActive('/midterm-congress-vii')} />
              <NavLink to="/video" label="Video" isActive={isActive('/video')} />
              <NavLink to="/thong-tin" label="Thông tin" isActive={isActive('/thong-tin')} />
            </div>

            {/* Mobile menu button */}
            <button className="md:hidden p-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Main content with padding for fixed nav */}
      <main className="pt-16">
        {children}
      </main>

      {/* Scroll to top button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-14 h-14 bg-party-red text-white rounded-full shadow-2xl hover:bg-party-red-dark transition-all duration-300 transform hover:scale-110 z-50 flex items-center justify-center"
          aria-label="Scroll to top"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      )}

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="md:col-span-1 border-r border-gray-800 pr-4">
              <h3 className="text-lg font-bold mb-4 text-party-yellow uppercase tracking-wider">Thông tin đồ án</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                Website phục vụ môn học <strong>Chủ nghĩa xã hội khoa học (MLN131)</strong>.
              </p>

            </div>
            <div className="md:col-span-2 pl-0 md:pl-4">
              <h3 className="text-lg font-bold mb-4 text-party-yellow uppercase tracking-wider">Cơ sở lý luận</h3>
              <div className="text-gray-400 text-sm text-justify leading-relaxed opacity-90">
                <p className="mb-2">
                  <span className="font-semibold text-gray-300">Chủ nghĩa xã hội khoa học</span> là một trong ba bộ phận cấu thành của chủ nghĩa Mác - Lênin.
                </p>
                <p>
                  Dựa trên phương pháp luận duy vật biện chứng và duy vật lịch sử, cùng các quy luật kinh tế, lý luận này giải thích khoa học về sự nảy sinh của cách mạng XHCN, sự hình thành và phát triển của hình thái kinh tế - xã hội cộng sản chủ nghĩa. Nó gắn liền với sứ mệnh lịch sử của giai cấp công nhân nhằm <span className="text-gray-300 italic">"giải phóng con người, giải phóng xã hội"</span>.
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Chủ nghĩa xã hội khoa học . Tất cả quyền được bảo lưu.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

interface NavLinkProps {
  to: string
  label: string
  isActive: boolean
}

const NavLink = ({ to, label, isActive }: NavLinkProps) => {
  return (
    <Link
      to={to}
      className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${isActive
        ? 'bg-party-red/10 text-party-red border border-party-red/60'
        : 'text-gray-700 hover:bg-gray-100'
        }`}
    >
      {label}
    </Link>
  )
}

export default Layout
