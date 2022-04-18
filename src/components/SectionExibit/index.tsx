import { Col, Row } from 'react-bootstrap';
import { CardNft } from '../CardNft';
import styles from './styles.module.scss';

interface SectionExibit extends React.HTMLProps<HTMLDivElement> {
    name: string;
    series: string;
    code: number;
    releaseDate: string;
    card?: boolean;
    src: string;
    bgImage: string;
    bgColor?: string;
    cardPrice?: string | number;
    cardCountdown?: string;
    cardSlim?: boolean;
    cardWidth?: string;
    cardHeight?: string;
}

export function SectionExibit(props: SectionExibit) {
    if (props.card) {
        return (
            <section className={`${styles.section}`}>
                <Row className={styles.row} style={{ backgroundImage: `${props.bgImage}`, backgroundColor: `${props.bgColor}` }}>
                    <Col xs="12" lg="5" xl="6" className={`${styles.cardCol} order-first order-lg-last`}>
                        <CardNft className={`${styles.CardNft}`}
                            src={props.src}
                            width={props.cardWidth ? props.cardWidth : "300px"}
                            height={props.cardHeight ? props.cardHeight : "400px"}
                            series={props.series} price={Number(props.cardPrice)}
                            name={props.name} code={props.code}
                            countdown={props.cardCountdown} theme="dark"
                            slim={props.cardSlim}
                        />
                    </Col>
                    <Col xs="12" lg="7" xl="6" className="d-flex flex-column justify-content-center px-5 ps-lg-0">
                        <h5>Initial Release {props.releaseDate}</h5>
                        <p>
                            We have released four limited edition NFTs early which can be bid on via <em>OpenSea</em>.
                            <br /><br />
                            These will be the only four of these NFTs we ever make, so be sure not to miss out!
                            <br /><br />
                            50% of proceeds go to charity.
                        </p>
                        <a href="#" className="pb-5">
                            Check them out
                            <span className="ps-3">
                                <img src="./images/icons/arrowRightPink.png" aria-hidden />
                            </span>
                        </a>
                    </Col>
                </Row>
            </section>
        )
    } else {
        return (
            <section className={`${styles.section}`}>
                <Row className={styles.row} style={{ backgroundImage: `${props.bgImage}`, backgroundColor: `${props.bgColor}` }}>
                    <Col xs="12" lg="5" xl="6" className={`${styles.imgCol} order-first order-lg-last`}>
                        <img src={props.src} alt="A new NFT!" />
                        <div className={`${styles.info} mb-5 d-none d-xl-block`}>
                            <span className={styles.series}>{props.series}</span>
                            <h4>{props.name}</h4>
                            <span className={styles.code}>{props.code}</span>
                        </div>
                    </Col>
                    <Col xs="12" lg="7" xl="6" className="d-flex flex-column justify-content-center px-5 ps-lg-0 mt-5 mt-lg-0">
                        <h5>Initial Release {props.releaseDate}</h5>
                        <p>
                            We have released four limited edition NFTs early which can be bid on via <em>OpenSea</em>.
                            <br /><br />
                            These will be the only four of these NFTs we ever make, so be sure not to miss out!
                            <br /><br />
                            50% of proceeds go to charity.
                        </p>
                        <a href="#" className="pb-5">
                            Check them out
                            <span className="ps-3">
                                <img src="./images/icons/arrowRightPink.png" aria-hidden />
                            </span>
                        </a>
                    </Col>
                </Row>
            </section >
        )
    }
}