import React from "react"

import LogoFooter from '../images/logo/footer.png'

export default function Footer({navbarItems}) {
  return (
    <footer>
      <div className="footer-info py-4">
        <div className="container">
          <div className="row mx-0">
            <div className="col-md-3 col-sm-12">
              <img src={LogoFooter} alt="LogoFooter" />
            </div>
            <div className="col-md-3 col-sm-4 mt-2">
              <div className="title">ข้อมูลลงทะเบียนประชาชน</div>
              <div className="info">
                การรับสิทธิ การใช้งานแอปพลิเคชั่น <span className="nowrap">“เป๋าตัง”</span> และ <span className="nowrap">“ถุงเงิน”</span>
              </div>
              <div className="info">
                ติดต่อ ชิมช้อปใช้ Call Center by Krungthai โทร.<a className="ml-1" href="tel:021111144">0 2111 1144</a>
              </div>
            </div>
            <div className="col-md-3 col-sm-4 mt-2">
              <div className="title">ข้อมูลลงทะเบียนผู้ประกอบการ</div>
              <div className="info">
                เงื่อนไขและวิธีการเข้าร่วมมาตรการฯ
                ติดต่อ โทร.<a className="ml-1" href="tel:022706400">0 2270 6400 กด 7</a>
              </div>
            </div>
            <div className="col-md-3 col-sm-4 mt-2">
              <div className="title">ข้อมูลเที่ยวชิมช้อปใช้</div>
              <div className="info">
                ติดต่อ ททท.
              </div>
              <div className="info">
                โทร.<a className="ml-1" href="tel:1672">1672</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-link py-2 py-md-0">
        <div className="container">
          <div className="row mx-0">
            <div className="col-md-3 d-flex align-items-center my-2">
              <div>Copyright @ 2003-2019</div>
            </div>
            <div className="col-md-9">
              <ul className="d-flex row list-unstyled my-0">
                {navbarItems.map((navbarItem, i) => (
                  <li key={i} className="col-sm-4 my-2">
                    <a href={navbarItem.href}>{navbarItem.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}