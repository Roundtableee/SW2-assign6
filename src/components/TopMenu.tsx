import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const TopMenu: React.FC = () => {
  return (
    <nav
      style={{
        display: 'flex',
        justifyContent: 'flex-end', // ดันทุกอย่างไปขวา
        alignItems: 'center',
        padding: '10px 20px',
        backgroundColor: '#ddd',
      }}
    >
      {/* กลุ่มย่อย (ข้อความ + โลโก้) ในแนวนอน */}
      <div 
        style={{
          display: 'flex',
          flexDirection: 'row',     // เรียงในแนวนอน
          alignItems: 'center',
          gap: '20px',             // ช่องว่างระหว่างกลุ่มข้อความกับโลโก้
        }}
      >
        {/* กลุ่มข้อความ (Menu Item + Booking) ในแนวตั้ง */}
        <div 
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end', // ชิดขวาในกล่องนี้
            gap: '4px',
          }}
        >
          <span style={{ fontWeight: 'bold' }}>Menu Item</span>
          <Link href="/booking">
            <span style={{ fontWeight: 'bold', cursor: 'pointer' }}>
              Booking
            </span>
          </Link>
        </div>

        {/* โลโก้ (อยู่ข้าง ๆ ข้อความ) */}
        <Image 
          src="/img/logo.png"  // เปลี่ยนตาม path ของโลโก้จริง
          alt="Logo"
          width={40}
          height={40}
        />
      </div>
    </nav>
  );
};

export default TopMenu;
