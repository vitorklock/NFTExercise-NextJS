import { Col, Row } from 'react-bootstrap';
import styles from './styles.module.scss';

interface SectionExibit extends React.HTMLProps<HTMLDivElement> {
    name: string;
    series: string;
    code: number;
    releaseDate: string;
    card?: boolean;
    src: string;
}

export function SectionExibit(props: SectionExibit) {
    if (props.card) {
        return (
            <h1>card</h1>
        )
    } else {
        return (
            <section className={`${styles.section} ${styles.sectionCol}`}>
                <Row className={styles.row}>
                    <Col xs="5" xl="6" className={`${styles.imgCol} order-last`}>
                        {/* <Col xs="8">
                            <img src={props.src} alt="A new NFT!" />
                        </Col>
                        <Col xs="4" className="d-flex align-items-end">
                            <div className="mb-5">
                                <span className={styles.series}>{props.series}</span>
                                <h4>{props.name}</h4>
                                <span className={styles.code}>{props.code}</span>
                            </div>
                        </Col> */}
                        <img src={props.src} alt="A new NFT!" />
                        <div className="mb-5">
                            <span className={styles.series}>{props.series}</span>
                            <h4>{props.name}</h4>
                            <span className={styles.code}>{props.code}</span>
                        </div>
                    </Col>
                    <Col xs="7" xl="6" className="d-flex flex-column justify-content-center pe-5">
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
    }
}