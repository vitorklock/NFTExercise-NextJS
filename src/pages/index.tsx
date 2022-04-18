// import '../styles/global.scss';
import Head from 'next/head';
import { Col, Row } from 'react-bootstrap';
import { SignUpBtn } from '../components/SignUpBtn';
import { CardNft } from '../components/CardNft';
import styles from './main.module.scss';
import { SectionExibit } from '../components/SectionExibit';


export default function Home() {

  return (
    <>
      <Head>
        <title>Home | nftlanding</title>
      </Head>
      <body>
        <main className={styles.main}>
          <section className={styles.banner}>
            <Row className={`${styles.row} mx-3 mx-lg-5`}>
              <Row>
                <span>launching soon</span>
              </Row>
              <Row>
                <Col xs="9" sm="10" md="10" lg="8" xxl="6">
                  <h2>
                    An NFT like
                    <br className="d-none d-md-block" /> no other
                  </h2>
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
              <SignUpBtn />
              <div className={`${styles.imgDiv}`}>
                <img src="/images/NFTs/robot.png" alt="New NFT!" />
                <img src="/images/section_1/robotBg.svg" alt="New NFT!" aria-hidden />
              </div>
            </Row>
          </section>
          <section className={styles.earlyBirdsSection}>
            <div className={`${styles.earlyBirdsRow} row px-5`}>
              <Row>
                <Col className="mb-4">
                  <img src="./images/section_2/notification.svg" alt="nftlanding logo" />
                </Col>
              </Row>
              <Row>
                <Col className="mb-2">
                  <h2>
                    Free NFT for early birds
                  </h2>
                </Col>
              </Row>
              <Row>
                <Col>
                  <span>
                    {`Sign up today and you’ll get a free NFT when we launch.`}
                  </span>
                </Col>
              </Row>
              <div className={styles.CardsNft}>
                <CardNft className={styles.CardNft}
                  src={'./images/NFTs/womanBeige.png'}
                  width={"230px"} height={"290px"}
                  series="gloop series"
                  price={395}
                  name={'Beige Woman'}
                  code={1094}
                  countdown={2}
                  theme="dark"
                />
                <CardNft className={styles.CardNft}
                  src={'./images/NFTs/manPurple.png'}
                  width={"230px"} height={"290px"}
                  series="gloop series"
                  price={299}
                  name={'Purple Man'}
                  code={12983}
                  countdown={1}
                />
              </div>
            </div>
          </section>

          <section className={styles.sponsorsSection}>
            <Row>
              <img src="./images/section_3/logoBoomerang.png" alt="Boomerang" className="d-none d-lg-block" />
              <img src="./images/section_3/logoBoom.png" alt="Boom" className="d-block d-lg-none" />
              <img src="./images/section_3/logoBlimp.png" alt="Blimp" />
              <img src="./images/section_3/logoQrco.png" alt="qrco" />
              <img src="./images/section_3/logoOpenDoor.png" alt="OpenDoor" className="d-none d-lg-block" />
              <img src="./images/section_3/logoDroplet.png" alt="Droplet" />
            </Row>
          </section>

          <section className={styles.auctionSection}>
            <Row className={`${styles.row} mx-3 mx-md-5`}>
              <h2>
                LE Super Rare Auction
              </h2>
            </Row>
            <Row className={`${styles.row} mx-3 mx-md-5`}>
              <h3>
                We have released four limited edition NFTs early which can be bid on via <em>OpenSea</em>.
              </h3>
            </Row>
            <div className={`${styles.auctionRow} px-5 mb-5`}>
              <CardNft className={styles.CardNft} src={'./images/NFTs/manPurple.png'} width={"300px"}
                height={"400px"} series="gloop series" price={299} name={'Purple Man'} code={12983}
                countdown={1}
              />
              <CardNft className={styles.CardNft} src={'./images/NFTs/womanBeige.png'} width={"300px"}
                height={"400px"} series="gloop series" price={299} name={'Beige'} code={12983}
                countdown={1}
              />
              <CardNft className={styles.CardNft} src={'./images/NFTs/manRed.png'} width={"300px"}
                height={"400px"} series="gloop series" price={299} name={'Red Man'} code={12983}
                countdown={1}
              />
              <CardNft className={styles.CardNft} src={'./images/NFTs/womanGreen.png'} width={"300px"}
                height={"400px"} series="gloop series" price={299} name={'Green'} code={12983}
                countdown={1}
              />
            </div>

            <SectionExibit
              name="Purple Man"
              series="gloop series"
              code={12983}
              releaseDate="20/04"
              src="./images/NFTs/manRedNoBG.png"
              bgImage="url('./images/section_4/bgFirst.svg')"
              bgColor="#FFF0E8"
            />
            <SectionExibit
              name="Brown Woman"
              series="gloop series"
              code={12983}
              releaseDate="20/04"
              src="./images/NFTs/womanBrown.png"
              bgImage="url('./images/section_4/bgSecond.svg')"
              card cardPrice="395" cardCountdown="1" cardWidth="350px"
            />
          </section>
        </main>
      </body>
    </>
  )
}
