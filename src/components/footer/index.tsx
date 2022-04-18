import { Col, Row } from 'react-bootstrap';
import styles from './styles.module.scss';

interface Footer extends React.HTMLProps<HTMLElement> {

}


export function Footer(props: Footer) {
    return (
        <footer>
            <Row>
                <Col>
                    <Row>
                        <img
                            src="/images/logo.svg"
                            width="198"
                            height="36"
                            alt="nftlanding"
                        />
                    </Row>
                </Col>
            </Row>

        </footer>
    )
}