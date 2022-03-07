import { Container, Nav, Navbar } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css';
import styles from './styles.module.scss';

export function Header() {
    return (
        <header className={styles.header}>
            <Navbar expand="lg" className={`position-fixed vw-100 ${styles.nav}`}>
                <h1 className={styles.hiddenH1}>nftlanding</h1>
                <Container className={styles.container}>
                    <Navbar.Brand className={styles.navBrand} href="#home">
                        <img
                            src="/images/logo.png"
                            width="198"
                            height="36"
                            className="d-inline-block align-top"
                            alt="nftlanding"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbar-simples" />
                    <Navbar.Collapse id="navbar-simples" className={`${styles.navbarLinks} me-lg-5`}>
                        <Nav className="ms-auto me-lg-5">
                            <Nav.Link key="0" href="#" className="text-center">Features</Nav.Link>
                            <Nav.Link key="1" href="#" className="text-center">About</Nav.Link>
                            <Nav.Link key="2" href="#" className="text-center">Launch</Nav.Link>
                            <Nav.Link key="3" href="#" className={`${styles.signUp} text-center`}>Sign Up</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}