// src/components/Layout.tsx
import { Outlet, Link } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <nav style={{ padding: '10px', background: '#eee' }}>
        <Link to="/" style={{ marginRight: '10px' }}>Home</Link>
        <Link to="/portfolio">Portfolio</Link>
      </nav>

      <main style={{ padding: '20px' }}>
        <Outlet /> {/* ส่วนนี้จะแสดงเนื้อหาของ Route ย่อย */}
      </main>
    </div>
  );
};

export default Layout;
