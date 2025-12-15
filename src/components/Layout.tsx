import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'

interface LayoutProps {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  const [showScrollTop, setShowScrollTop] = useState(false)
  const location = useLocation()

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
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-md">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-party-red">Lịch Sử Việt Nam</span>
              <span className="text-sm text-gray-600">Đổi Mới Toàn Diện 1986-1996</span>
            </Link>
            
            <div className="hidden md:flex items-center space-x-1">
              <NavLink to="/" label="Trang chủ" isActive={isActive('/')} />
              <NavLink to="/background" label="Bối cảnh" isActive={isActive('/background')} />
              <NavLink to="/congress-vi" label="Đại hội VI" isActive={isActive('/congress-vi')} />
              <NavLink to="/implementation-vi" label="Thực hiện ĐH VI" isActive={isActive('/implementation-vi')} />
              <NavLink to="/congress-vii" label="Đại hội VII" isActive={isActive('/congress-vii')} />
              <NavLink to="/achievements" label="Thành tựu" isActive={isActive('/achievements')} />
              <NavLink to="/timeline" label="Timeline" isActive={isActive('/timeline')} />
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
            <div>
              <h3 className="text-xl font-bold mb-4 text-party-yellow">Về trang web</h3>
              <p className="text-gray-400 leading-relaxed">
                Trang web giới thiệu về lịch sử Đảng Cộng sản Việt Nam, giai đoạn Đổi mới toàn diện 1986-1996.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 text-party-yellow">Thông tin</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Lịch sử Đảng Cộng sản Việt Nam</li>
                <li>Giai đoạn Đổi mới 1986-1996</li>
                <li>Tài liệu tham khảo</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 text-party-yellow">Liên hệ</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Email: example@example.com</li>
                <li>Điện thoại: +84 XXX XXX XXX</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Lịch sử Đảng Cộng sản Việt Nam. Tất cả quyền được bảo lưu.</p>
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
      className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
        isActive
          ? 'bg-party-red text-white'
          : 'text-gray-700 hover:bg-gray-100'
      }`}
    >
      {label}
    </Link>
  )
}

export default Layout
