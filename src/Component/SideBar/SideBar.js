import classNames from 'classnames/bind';
import styles from './SideBar.module.scss';
import Menu from "~/Component/SideBar/Menu"
import { MenuItem } from './Menu';
import config from '~/config';
import { HomeIcon, HomeActiveIcon, UserGroupIcon, UserGroupActiveIcon, LiveIcon, LiveActiveIcon } from '~/Component/Icons'
import SuggestAccounts from '../SuggestAccounts';

const cx = classNames.bind(styles);

function SideBar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu >
                <MenuItem title="For you" icon={<HomeIcon />} active={<HomeActiveIcon />} to={config.routes.home} />
                <MenuItem title="Following" icon={<UserGroupIcon />} active={<UserGroupActiveIcon />} to={config.routes.following} />
                <MenuItem title="Live" icon={<LiveIcon />} active={<LiveActiveIcon />} to={config.routes.live} />
            </Menu>
            <SuggestAccounts label="SuggestAccounts"></SuggestAccounts>
        </aside>


    );
}

export default SideBar;
