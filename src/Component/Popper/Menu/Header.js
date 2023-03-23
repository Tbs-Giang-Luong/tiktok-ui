import PropTypes from 'prop-types';
import { faChevronCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import styles from './Menu.module.scss'

const cx = classNames.bind(styles)


function Header({ onBack, title }) {
    return (

        <header className={cx("header")}>
            <button className={cx("backBtn")} onClick={onBack}>
                <FontAwesomeIcon icon={faChevronCircleLeft} />
            </button>
            <h4 className={cx("headerTitle")}>{title}</h4>

        </header>


    );
}

Header.propTypes = {
    onBack: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,

}
export default Header;