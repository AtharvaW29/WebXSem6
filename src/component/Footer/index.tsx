import React from 'react';
import Link from 'next/link';
import styles from './footer.module.scss';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={['row', styles.footerNav].join(' ')}>
                    <div className="col-md-4">
                        <Link href="/">
                            <a>
                                <img src="data:image/png;base64,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" alt="logo" className={styles.logo} />
                            </a>
                        </Link>
                    </div>
                    <div className="col-md-4">
                        <ul>
                            <li className={styles.footerNavTitle}>PAGES</li>
                            <li>
                                <Link href="/resume-builder">
                                    <a>Resume Builder</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <ul>

                        </ul>
                    </div>
                </div>
            </div>

            <div className={styles.footerCopyright}>resumebuilderA_69AtharvaWagh</div>
        </footer>
    );
}
