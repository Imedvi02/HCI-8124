import styles from './notFound404.module.css';
import Link from "next/link";
import Image from 'next/image';

const NotFound404 = () => {
    return (
        <div className={styles.main}>
            <div className={styles.textContainer}>
                <div className={styles.headerContainer}>
                    <h1 className={styles.header1}>Ova stranica još uvijek nije u funkciji. 😭</h1>
                </div>
                <p className={styles.text}>Obećavamo da će uskoro biti, radimo na tome! 😊</p>
                <Link href="/" className={styles.btn}>Povratak na naslovnicu</Link>
            </div>
            
            {/* <Image src="/images/error404.png" alt="404 Image" width={500} height={500}/> */}
        </div>
    )
    
}

export default NotFound404;