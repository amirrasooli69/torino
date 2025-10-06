import Image from "next/image";
import styles from "./header.module.css";
import login from "@/svg/login.png";
import profile from "@/images/profile.png";
import logo from "@/images/logo.png"
import hamberger_menu from "@/svg/hamberger_menu.png";
import Link from "next/link";
function Header() {
  return (
    <div className={styles.header}>
      <Image
        className={styles.register_mobile}
        src={login}
        width={24}
        height={24}
        alt="register"
        priority
      />
      <div className={styles.web}>
        <div className={styles.register_web}>
          <span>ورود | ثبت نام</span>
          <Image src={profile} width={24} height={24} alt="profile" />
        </div>
        <nav>
          <ul className={styles.main_nav}>
            <li>
              <Link href="#">تماس با ما</Link>
            </li>
            <li>
              <Link href="#">درباره ما</Link>
            </li>
            <li>
              <Link href="#">خدمات گردشگری</Link>
            </li>
            <li>
              <Link href="#">صفحه اصلی</Link>
            </li>
          </ul>
        </nav>
        <Image className={styles.logo} src={logo} width={146} height={44} alt="logo" priority/>
      </div>
      <div className={styles.hamberger_menu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
}

export default Header;
