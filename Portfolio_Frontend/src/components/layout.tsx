// src/components/Layout.tsx
import { Outlet, Link } from 'react-router-dom';

const Layout = () => {
  return (
    <div className='flex flex-1  flex-col'>
      <nav className='flex  flex-1 gap-2 shadow-lg rounded-b-2xl bg-[#555879] p-4 w-screen top-0 sticky z-10 text-white'>
       
        <a href="#home" >Home</a>
        <a href="#about" >About Me</a>
        <a href="#ed" >Education</a>
        <a href="#skill" >Skill</a>
        <a href="#exp">Experience</a>
        <a href="#contact">Contact</a>
      </nav>

      <main style={{ padding: '20px' }}>
        <Outlet /> {/* ส่วนนี้จะแสดงเนื้อหาของ Route ย่อย */}
      </main>
    </div>
  );
};

export default Layout;
