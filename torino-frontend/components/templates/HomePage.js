import Image from "next/image"
import styles from "@/templates/HomePage.module.css"

import baner from '@/images/baner.png'

function HomePage() {
  return (
    <div className={styles.container}>
      {/* <div className={styles.baner}> */}
        <Image src={baner} className={styles.baner} width={1440} height={350} alt="baner" priority/>
      {/* </div> */}
    </div>
  )
}

export default HomePage
