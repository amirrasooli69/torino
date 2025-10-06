import Image from "next/image";
import styles from "@/templates/HomePage.module.css";

import baner from "@/images/baner.png";
import location from "@/images/location.png";
import global from "@/images/global-search.png";
// import DatePickerCustom from "@/modules/DatePickerCustom";

function HomePage() {
  return (
    <div className={styles.container}>
      {/* <div className={styles.baner}> */}
      <Image
        src={baner}
        className={styles.baner}
        width={1440}
        height={350}
        alt="baner"
        priority
      />
      {/* </div> */}
      <div className={styles.detail}>
        <span>تورینو</span> برگزار کننده بهترین تور های داخلی و خارجی
      </div>
      <div className={styles.search}>
        <div className={styles.select}>
          <select className={styles.location}>
            <option>مبدا</option>
          </select>
          <select className={styles.global}>
            <option>مقصد</option>
          </select>
        </div>
        {/* <div className={styles.date}> */}
          {/* <DatePickerCustom className={styles.date}/> */}
        {/* </div> */}
        <button className={styles.btnSearch}>جستجو</button>
      </div>
    </div>
  );
}

export default HomePage;
