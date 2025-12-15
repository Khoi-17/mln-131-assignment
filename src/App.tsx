import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import CongressVI from './pages/CongressVI'
import CongressVII from './pages/CongressVII'
import Achievements from './pages/Achievements'
import Timeline from './pages/Timeline'
import Video from './pages/Video'
import ThongTin from './pages/ThongTin'

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/congress-vi" element={<CongressVI />} />
          <Route path="/congress-vii" element={<CongressVII />} />
          <Route path="/midterm-congress-vii" element={<Achievements />} />
          <Route path="/timeline" element={<Timeline />} />
          <Route path="/video" element={<Video />} />
          <Route path="/thong-tin" element={<ThongTin />} />
        </Routes>
        <div id="webchat-container"></div>
        <script src="https://cdn.botpress.cloud/webchat/v3.5/inject.js"></script>
<script src="https://files.bpcontent.cloud/2025/12/12/01/20251212012920-0750N3RW.js" defer></script>
      </Layout>
    </BrowserRouter>
  )
}

export default App
