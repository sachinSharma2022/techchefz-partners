import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { ImageCustom } from "@/components/ui/imageCustom";
import { cn } from "@/lib/utils";
import Link from "next/link";
import styles from "./style.module.scss";
import { Input } from "@/components/ui/inputCustom";

const Footer = () => {
  return (
    <footer className={styles.footerSection}>
      <div className={cn("container mx-auto")}>
        <div className={styles.footLogoFlex}>
          <div className={styles.footLogo}>
            <ImageCustom
              src="/images/logo-white.svg"
              width={143}
              height={48}
              alt="tcz logo"
            />
          </div>
        </div>

        <div className="lg:grid grid-cols-2">
          <div className={styles.footLeftPanel}>
            <p className={styles.description}>
              Stay at the forefront of innovation, trends, and industry insights
              by subscribing to our newsletter.
            </p>

            <div className={styles.partnerCard}>
              <div className={styles.partnerCols}>
                <Link href="/">
                  Become our Partner <Icons.ArrowRight size={16} />
                </Link>
                <p>Join our partnership network now!</p>
              </div>
              <ImageCustom
                src="/images/partner.jpg"
                width={294}
                height={198}
                alt="partner-img"
              />
            </div>

            <div className={styles.subscribe}>
              <h4 className="mb-3">Stay Ahead of the Tech Curve</h4>
              <div className={styles.formFlex}>
                <Input
                  inputFloatingStyle={styles.inputFloatingStyle}
                  inputStyle={styles.inputStyle}
                  placeholder="Business Email Address"
                />
                <div className="d-flex align-items-center">
                  <Button variant="lightBlueBtn" size="lg">
                    Subscribe <Icons.ArrowRight size={15} />
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className={styles.footSocial}>
              <h4 className="mb-3">Follow Us on Social Media</h4>
              <div className={styles.footSocialLinks}>
                <Link href="/">
                  <Icons.facebook size={16} /> <span>Linkedin</span>
                </Link>
                <Link href="/">
                  <Icons.linkedin size={16} /> <span>Facebook</span>
                </Link>
                <Link href="/">
                  <Icons.twitter size={16} /> <span>Twitter</span>
                </Link>
              </div>
            </div>

            <div className={styles.footerBox}>
              <div className={styles.footerCols}>
                <ul>
                  <li>
                    <Link href="/about">About us</Link>
                  </li>
                  <li>
                    <Link href="/solutions">Solutions</Link>
                  </li>
                  <li>
                    <Link href="/portfolio">Portfolio</Link>
                  </li>
                  <li>
                    <Link href="/">Contact Us</Link>
                  </li>
                </ul>
              </div>
              <div className={styles.footerCols}>
                <h5>
                  <Link href="/technology">Technology</Link>
                </h5>
                <ul className={styles.fadeLink}>
                  <li>
                    <Link href="/technology/cms">CMS</Link>
                  </li>
                  <li>
                    <Link href="/">Commerce</Link>
                  </li>
                  <li>
                    <Link href="/">Microservices</Link>
                  </li>
                  <li>
                    <Link href="/">Cloud & DevSecOps</Link>
                  </li>
                  <li>
                    <Link href="/">Data Intelligence</Link>
                  </li>
                  <li>
                    <Link href="/">Analysis Automation</Link>
                  </li>
                </ul>
              </div>
              <div className={styles.footerCols}>
                <h5>More</h5>
                <ul className={styles.fadeLink}>
                  <li>
                    <Link href="/careers">Careers</Link>
                  </li>
                  <li>
                    <Link href="/">Insights</Link>
                  </li>
                  <li>
                    <Link href="/">Center of Excellence</Link>
                  </li>
                  <li>
                    <Link href="/">Accelerators</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.footCopyright}>
          <p>© 2023 TCZ Digital Pvt. Ltd. All rights reserved.</p>
          <ul>
            <li>
              <Link href="/privacy-policy">Privacy Policy</Link>
            </li>
            <li>
              <Link href="/sitemap">Sitemap</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
