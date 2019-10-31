import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Banner from '../images/logo/banner.png'
import BannerKTB from '../images/home/Banner_KTB_Sq.png'
import BannerCGD from '../images/home/Banner_CGD_Sq.png'
import BannerTAT from '../images/home/Banner_TAT_Hotline_Sq.png'
import LogoMOF from '../images/home/brand_logo/MOF.png'
import LogoFPO from '../images/home/brand_logo/FPO.png'
import LogoCGD from '../images/home/brand_logo/CGD.png'
import LogoKTB from '../images/home/brand_logo/KTB.png'
import LogoMOTS from '../images/home/brand_logo/MOTS.png'
import LogoTAT from '../images/home/brand_logo/TAT.png'

export default function IndexPage({data}) {
  const {condition, detail, duration} = data.ywcData
  return (
    <Layout>
      <SEO
        title="มาตรการส่งเสริมการท่องเที่ยวในประเทศ “ชิมช้อปใช้”"
        description="ผู้สนใจเข้าร่วมมาตรการฯ สามารถลงทะเบียน ตั้งแต่ วันที่ 23 ก.ย. - 15 พ.ย. 62" />
      <div className="home-page">
        <div className="banner row no-gutters">
          <div className="col cover cover-eating" />
          <div className="col cover cover-shopping">
            <div className="d-flex h-100 justify-content-center align-items-center">
              <img className="w-100 p-4" src={Banner} alt="banner" />
            </div>
          </div>
          <div className="col cover cover-traveling" />
        </div>
        <div className="duration-container py-4 d-flex flex-column align-items-center">
          <div>ตั้งแต่วันที่</div>
          <div className="duration">{duration}</div>
          <div className="register-box rounded mt-3 mx-3 p-2 px-3 px-sm-5">
            ลงทะเบียนเฟส 2
            <br />
            ตั้งแต่วันที่ 24 ต.ค. 62 วันละ 2 รอบ เวลา 6.00 และ 18.00 น.
            <br />
            (จำกัดจำนวนผู้ลงทะเบียนรอบละ 5 แสนคน รวม 1 ล้านคนต่อวัน)
          </div>
        </div>
        <div className="container py-4">
          <div className="row">
            <div className="detail-container col-md-10">
              <h4 className="d-none d-md-block m-0">
                มาตรการส่งเสริมการบริโภค
                <br />
                ในประเทศ
                <span className="nowrap">"ชิมช้อปใช้"</span>
              </h4>
              <h4 className="d-md-none m-0">
                มาตรการส่งเสริมการบริโภคในประเทศ <span className="nowrap">"ชิมช้อปใช้"</span>
              </h4>
              <div className="detail mt-4" dangerouslySetInnerHTML={{__html: detail}} />
            </div>
            <div className="condition-container col-12 my-4">
              <div className="title">เงื่อนไขการเข้าร่วมมาตรการ</div>
              <div className="condition mt-2" dangerouslySetInnerHTML={{__html: condition}} />
            </div>
          </div>
          <div className="banner-container row mx-0 py-3 px-4 px-md-0">
            <div className="col-md-4">
              <a href="tel:021111144">
                <img className="w-100" src={BannerKTB} alt="BannerKTB" />
              </a>
            </div>
            <div className="col-md-4">
              <a href="tel:022706400">
                <img className="w-100" src={BannerCGD} alt="BannerCGD" />
              </a>
            </div>
            <div className="col-md-4">
              <a href="tel:1672">
                <img className="w-100" src={BannerTAT} alt="BannerTAT" />
              </a>
            </div>
          </div>
          <div className="brand-logo-container row mx-0 py-3">
            <div className="col-4 col-md-2 d-flex justify-content-center">
              <a href="https://www.mof.go.th/th/home" target="_blank">
                <img className="w-100" src={LogoMOF} alt="LogoMOF" />
              </a>
            </div>
            <div className="col-4 col-md-2 d-flex justify-content-center">
              <a href="http://www.fpo.go.th" target="_blank">
                <img className="w-100" src={LogoFPO} alt="LogoFPO" />
              </a>
            </div>
            <div className="col-4 col-md-2 d-flex justify-content-center">
              <a href="https://www.cgd.go.th" target="_blank">
                <img className="w-100" src={LogoCGD} alt="LogoCGD" />
              </a>
            </div>
            <div className="col-4 col-md-2 d-flex justify-content-center">
              <a href="https://www.newcb.ktb.co.th" target="_blank">
                <img className="w-100" src={LogoKTB} alt="LogoKTB" />
              </a>
            </div>
            <div className="col-4 col-md-2 d-flex justify-content-center">
              <a href="https://www.mots.go.th" target="_blank">
                <img className="w-100" src={LogoMOTS} alt="LogoMOTS" />
              </a>
            </div>
            <div className="col-4 col-md-2 d-flex justify-content-center">
              <a href="https://thai.tourismthailand.org/" target="_blank">
                <img className="w-100" src={LogoTAT} alt="LogoTAT" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
    query {
        ywcData {
            condition
            detail
            duration
        }
    }
`;
