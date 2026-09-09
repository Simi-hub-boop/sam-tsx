import type { ReactNode } from 'react'
import { Circle } from 'lucide-react'
import { Footer } from '../components/layout/Footer.js'
import { SiteDocument } from '../components/layout/SiteDocument.js'
import { SiteIcons } from '../components/layout/SiteIcons.js'
import { sitePageCode } from '../content/sitePageCode.js'

const SERVICES = [
  'Cybersecurity',
  'Software Development',
  'Software Products',
  'UAV / IoT',
  'ICT Procurement',
  'Training',
  'Other',
]

function TwitterIcon() {
  return (
    <svg width={13} height={13} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.9 1.9h3.7l-8.1 9.3 9.5 12.6h-7.5l-5.9-7.7-6.7 7.7H0l8.7-10L-.4 1.9h7.7l5.3 7.1zm-1.3 19.6h2L6.5 4h-2.2z" />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg width={13} height={13} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  )
}

function LinkedinIcon() {
  return (
    <svg width={13} height={13} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.85 0-2.14 1.44-2.14 2.94v5.66H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56z" />
    </svg>
  )
}

function SocialBtn({ href, className, children }: { href: string; className: string; children: ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className={`cvh-social-btn ${className}`}>
      {children}
    </a>
  )
}

function PageHead() {
  return (
    <>
      <meta charSet={"utf-8"} />
      <link href={"https://assets-global.website-files.com"} rel={"preconnect"} crossOrigin={"anonymous"} />
      <title>
        {"Contact Us | Maddy Group Ltd"}
      </title>
      <meta content={"Contact Maddy Group Ltd in Accra for cybersecurity, software development and technology services. Call 0551111551 or email info@maddygroupltd.com."} name={"description"} />
      <meta content={"Contact Us | Maddy Group Ltd"} property={"og:title"} />
      <meta content={"Contact Maddy Group Ltd in Accra for cybersecurity, software development and technology services. Call 0551111551 or email info@maddygroupltd.com."} property={"og:description"} />
      <meta content={"Contact Us | Maddy Group Ltd"} name={"twitter:title"} />
      <meta content={"Contact Maddy Group Ltd in Accra for cybersecurity, software development and technology services. Call 0551111551 or email info@maddygroupltd.com."} name={"twitter:description"} />
      <meta property={"og:type"} content={"website"} />
      <meta content={"summary_large_image"} name={"twitter:card"} />
      <meta content={"width=device-width, initial-scale=1"} name={"viewport"} />
      <link href={"/styles/webflow.css"} rel={"stylesheet"} type={"text/css"} />
      <link href={"/styles/maddy-theme.css"} rel={"stylesheet"} type={"text/css"} />
      <link href={"https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Instrument+Serif:ital@0;1&display=swap"} rel={"stylesheet"} />
      <style dangerouslySetInnerHTML={{ __html: sitePageCode.getInTouch[0] }} />
      <script type={"text/javascript"} dangerouslySetInnerHTML={{ __html: sitePageCode.getInTouch[1] }} />
      <SiteIcons />
    </>
  )
}

function GetInTouchContent() {
  return (
    <div>
      <div className={"page-wrapper dark-wrapper touch-hero is-contact-hero"}>
        <div className={"cvh-wrap"}>
          <div className={"cvh-card"}>
            <video
              className={"cvh-video"}
              autoPlay
              muted
              loop
              playsInline
              src={"/images/brand/ctavid.mp4"}
            />
            <div className={"cvh-overlay"}></div>
            <div className={"cvh-inner"}>
              <p className={"cvh-headline"}>
                {"Let's build something"}
                <br />
                {"secure and "}
                <span style={{ fontFamily: "'Instrument Serif', serif", fontStyle: 'italic', fontWeight: 400 }}>
                  {"scalable"}
                </span>
              </p>

              <div className={"cvh-form-card"}>
                <h2 className={"cvh-form-heading"}>
                  {"Say hello! \u{1F44B}"}
                </h2>

                <div className={"cvh-contact-row"}>
                  <div className={"cvh-contact-left"}>
                    <span className={"cvh-contact-label"}>
                      {"Drop us a line"}
                    </span>
                    <a href={"mailto:info@maddygroupltd.com"} className={"cvh-contact-email"}>
                      {"info@maddygroupltd.com"}
                    </a>
                  </div>
                  <div className={"cvh-socials"}>
                    <SocialBtn href={"https://twitter.com"} className={"cvh-social-twitter"}>
                      <TwitterIcon />
                    </SocialBtn>
                    <SocialBtn href={"#"} className={"cvh-social-circle"}>
                      <Circle size={13} />
                    </SocialBtn>
                    <SocialBtn href={"https://instagram.com"} className={"cvh-social-instagram"}>
                      <InstagramIcon />
                    </SocialBtn>
                    <SocialBtn href={"https://linkedin.com"} className={"cvh-social-linkedin"}>
                      <LinkedinIcon />
                    </SocialBtn>
                  </div>
                </div>

                <div className={"cvh-divider"}>
                  <span></span>
                  {"OR"}
                  <span></span>
                </div>

                <form id={"cvh-form"} className={"cvh-form"}>
                  <label className={"cvh-form-label"}>
                    {"Tell us about your vision"}
                  </label>
                  <div className={"cvh-form-row"}>
                    <input className={"cvh-input"} type={"text"} name={"name"} placeholder={"Full name"} required />
                    <input className={"cvh-input"} type={"email"} name={"email"} placeholder={"Email"} required />
                  </div>
                  <textarea className={"cvh-input cvh-textarea"} rows={4} name={"message"} placeholder={"What are you looking to build or improve..."} required></textarea>

                  <div className={"cvh-services"}>
                    <span className={"cvh-form-label"}>
                      {"I need help with..."}
                    </span>
                    <div className={"cvh-tags"}>
                      {SERVICES.map((service) => (
                        <button type={"button"} key={service} className={"cvh-tag"} data-service={service}>
                          {service}
                        </button>
                      ))}
                    </div>
                  </div>

                  <button type={"submit"} id={"cvh-submit"} className={"cvh-submit"}>
                    {"Send my message"}
                  </button>
                </form>

                <div id={"cvh-success"} className={"cvh-success"} hidden>
                  <div className={"cvh-success-check"}>
                    {"✓"}
                  </div>
                  <p className={"cvh-success-heading"}>
                    {"You're all set!"}
                  </p>
                  <p className={"cvh-success-sub"}>
                    {"Expect a reply within 24 hours."}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={"page-wrapper is-overflow-hidden is-no-padding"}>
        <Footer brand="maddy" />
      </div>
    </div>
  )
}

function PageRuntime() {
  return (
    <>
      <script src={"/vendor/jquery.js"} type={"text/javascript"} integrity={"sha256-82hEkGrSMJh3quMSG4f7FbngmAPLTDM63H4eNayS4Us="} crossOrigin={"anonymous"}></script>
      <script src={"/vendor/webflow.js"} type={"text/javascript"}></script>
      <script dangerouslySetInnerHTML={{ __html: sitePageCode.getInTouch[2] }} />
      <script dangerouslySetInnerHTML={{ __html: sitePageCode.getInTouch[3] }} />
      <script dangerouslySetInnerHTML={{ __html: sitePageCode.getInTouch[4] }} />
      <script
        dangerouslySetInnerHTML={{
          __html: `
(function () {
  var form = document.getElementById('cvh-form');
  if (!form) return;

  var tags = form.querySelectorAll('.cvh-tag');
  var selected = [];
  tags.forEach(function (tag) {
    tag.addEventListener('click', function () {
      var service = tag.getAttribute('data-service');
      var index = selected.indexOf(service);
      if (index === -1) {
        selected.push(service);
        tag.classList.add('is-active');
      } else {
        selected.splice(index, 1);
        tag.classList.remove('is-active');
      }
    });
  });

  var submitBtn = document.getElementById('cvh-submit');
  var successEl = document.getElementById('cvh-success');

  form.addEventListener('submit', function (event) {
    event.preventDefault();
    if (!form.reportValidity()) return;

    var data = new FormData(form);
    var lines = [];
    data.forEach(function (value, key) {
      if (String(value).trim()) lines.push(key + ': ' + value);
    });
    if (selected.length) lines.push('Services: ' + selected.join(', '));
    var body = lines.join('\\n');
    var subject = encodeURIComponent('Website enquiry from ' + (data.get('name') || 'Maddy Group site'));

    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending...';

    setTimeout(function () {
      window.location.href = 'mailto:info@maddygroupltd.com?subject=' + subject + '&body=' + encodeURIComponent(body);
      form.style.display = 'none';
      if (successEl) successEl.hidden = false;
    }, 1000);
  });
})();
`,
        }}
      />
    </>
  )
}

export function GetInTouchDocument() {
  return (
    <SiteDocument currentPath={"/get-in-touch"} pageId={"6627b50ad2ace3686c70ddbd"} head={<PageHead />} runtime={<PageRuntime />}>
      <GetInTouchContent />
    </SiteDocument>
  )
}
