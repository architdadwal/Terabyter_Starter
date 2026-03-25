const year = new Date().getFullYear()
import { SocialIcon } from 'react-social-icons'
export default function SiteFooter() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footerGrid">
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <span className="brandMark" aria-hidden="true" />
              <div>
                <div style={{ fontWeight: 700, color: 'rgba(255,255,255,0.92)' }}>
                  Terabyte
                </div>
                <div className="muted" style={{ fontSize: 13, marginTop: 2 }}>
                  Websites, web apps, and marketing — built to convert.
                </div>
              </div>
            </div>
            <div className="muted" style={{ fontSize: 13, marginTop: 14 }}>
              © {year} Terabyte. All rights reserved.
            </div>
          </div>

          <div className="footerLinks" aria-label="Footer links">
            {/* <a href="#/services">Services</a>
            <SocialIcon network="github" /> */}
            <SocialIcon href="https://www.linkedin.com/in/terabyte-technologies-44469a3b9/" network="linkedin" />
            <SocialIcon network="instagram" />
            {/* <a href="#/work">Work</a>
            <a href="#/about">About</a>
            <a href="#/contact">Contact</a> */}
          </div>
        </div>
      </div>
    </footer>
  )
}

