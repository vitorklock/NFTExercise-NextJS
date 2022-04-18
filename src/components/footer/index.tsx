import { Col, Container, Row } from 'react-bootstrap';
import styles from './styles.module.scss';

interface Footer extends React.HTMLProps<HTMLElement> {

}


export function Footer(props: Footer) {
    return (
        <footer className={styles.footer}>
            <Row>
                <Col xs="12" md="4" className="d-flex justify-content-center">
                    <Container className={styles.container}>
                        <Row>
                            <img
                                src="/images/logo.svg"
                                width="198"
                                height="36"
                                alt="nftlanding"
                            />
                        </Row>
                        <Row className="my-4">
                            Exclusive NFT Collection
                        </Row>
                        <Row className={styles.iconRow}>
                            <a href="" className={styles.facebook}>
                                <img src="./images/icons/facebook.svg" alt="facebook" />
                            </a>
                            <a href="" className={styles.instagram}>
                                <img src="./images/icons/instagram.svg" alt="instagram" />
                            </a>
                            <a href="" className={styles.tiktok}>
                                <img src="./images/icons/tiktok.svg" alt="tiktok" />
                            </a>
                            <a href="" className={styles.twitter}>
                                <img src="./images/icons/twitter.svg" alt="twitter" />
                            </a>
                        </Row>
                    </Container>
                </Col>
                <Col xs="6" md="2" className={styles.col}>
                    <Row className={styles.footerSection}>
                        <a href="">
                            ABOUT
                        </a>
                    </Row>
                    <Row><a href="">About</a></Row>
                    <Row><a href="">Terms</a></Row>
                    <Row><a href="">Legal</a></Row>
                </Col>
                <Col xs="6" md="2" className={styles.col}>
                    <Row className={styles.footerSection}>
                        <a href="">NFT</a>
                    </Row>
                    <Row><a href="">OpenSea</a></Row>
                    <Row><a href="">Maker</a></Row>
                    <Row><a href="">Learn</a></Row>
                </Col>
                <Col xs="6" md="2" className={styles.col}>
                    <Row className={styles.footerSection}>
                        <a href="">CONTACT</a>
                    </Row>
                    <Row><a href="">Press</a></Row>
                    <Row><a href="">Support</a></Row>
                </Col>
                <Col xs="6" md="2" className={styles.col}>
                    <Row className={styles.footerSection}>
                        <a href="">SOCIAL</a>
                    </Row>
                    <Row><a href="">Twitter</a></Row>
                    <Row><a href="">Instagram</a></Row>
                </Col>
            </Row>
            <Row className={styles.footerLower}>
                <span>
                    © Copyright 2022 NFTlanding
                </span>
                <span>
                    Launching August 2022
                </span>
            </Row>
        </footer>
    )
}