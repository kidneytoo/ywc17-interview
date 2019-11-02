import React from "react"

import SEO from "../components/seo"
import LogoFooter from '../images/logo/footer.png'
import '../styles/index.scss'

export default function NotFoundPage() {

  return (
    <div className="not-found-page d-flex flex-column align-items-center justify-content-center">
      <SEO title="404: Not found"/>
      <img className="mb-2" src={LogoFooter} alt="LogoFooter" />
      <h1>404</h1>
      <h2>PAGE NOT FOUND</h2>
      <p className="mb-4">ขออภัย..ไม่พบหน้านี้</p>
      <a className="rounded-pill px-3 py-1" href="https://kidneytoo.github.io/ywc17-interview">กลับสู่หน้าหลัก</a>
    </div>
  )
}
