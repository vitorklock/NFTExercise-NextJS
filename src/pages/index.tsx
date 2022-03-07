// import '../styles/global.scss';
import Head from 'next/head';
import { Col, Container, Row } from 'react-bootstrap';
import { SignUpButton } from '../components/SignUpButton';
import styles from './main.module.scss'

export default function Home() {

  return (
    <>
      <Head>
        <title>Home | nftlanding</title>
      </Head>
      <body>
        <section className={styles.banner}>
          <Row className={`${styles.row} mx-3 mx-lg-5`}>
            <Row>
              <span>launching soon</span>
            </Row>
            <Row>
              <Col xs="9" sm="10" md="10" lg="8" xxl="6">
                <h2>
                  An NFT like
                  <br className="d-none d-md-block" /> no other</h2>
              </Col>
            </Row>
            <Row>
              <Col
                xs="9" sm="7" md="7" lg="5" xxl="4"
                className="pe-0">
                <p>
                  {`Don't miss out on the release of our new NFT.
                  Sign up below to receive updates when we go live.`}
                  </p>
              </Col>
            </Row>
            <SignUpButton />
            <div className={`${styles.imgDiv}`}>
              <img src="/images/section_1/robot.png" alt="New NFT!" />
              <img src="/images/section_1/robotBg.svg" alt="New NFT!" aria-hidden />
            </div>
          </Row>
        </section>
        <section>
          <div className={`${styles.earlyBirdsRow} row`}>

          </div>
        </section>
      </body>
    </>
  )
}
