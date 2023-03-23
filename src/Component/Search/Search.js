import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HeadlessTippy from '@tippyjs/react/headless';
import { useEffect, useRef, useState } from 'react';
import 'tippy.js/dist/tippy.css'; // optional
import styles from './Search.module.scss';

import { faCircleXmark as faCircleMark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';

import { AccountItems } from '~/Component/AccountItems';
import { Wrapper as PopperWrapper } from '~/Component/Popper';
import { useDebounce } from '~/hooks';
import * as searchServices from '~/services/searchServices'

console.log(useDebounce);

const cx = classNames.bind(styles);

function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [show, setShow] = useState(true);
    const [loading, setLoading] = useState(false);

    const debounce = useDebounce(searchValue, 500);

    useEffect(() => {
        if (!debounce.trim()) {
            setSearchResult([]);
            return;
        }

        const fetchApi = async () => {
            setLoading(true);
            const result = await searchServices.search(debounce);
            setSearchResult(result);
            setLoading(false);
        };

        fetchApi();
    }, [debounce]);

    const inputRef = useRef();

    const handleSearchValue = () => {
        setSearchValue('');
        inputRef.current.focus();
    };

    const handleHideResult = () => {
        setShow(false);
    };

    const handleDisplayResult = () => {
        setShow(true);
    };

    const handleValue = (e) => {
        const valueInput = e.target.value
        if (!valueInput.startsWith("  ")) {
            setSearchValue(valueInput)
        }
    }

    return (
        <>
            <HeadlessTippy
                interactive
                visible={show && searchResult.length > 0}
                render={(attrs) => (
                    <div className={cx('searchResult')} tabIndex="-1" {...attrs}>
                        <PopperWrapper>
                            <h4 className={cx('searchTitle')}>Accounts</h4>
                            {searchResult.map((data) => (
                                <AccountItems data={data} key={data.id} />
                            ))}
                        </PopperWrapper>
                    </div>
                )}
                onClickOutside={handleHideResult}
            >
                <div className={cx('search')}>
                    <input
                        ref={inputRef}
                        value={searchValue}
                        placeholder="Search accounts and videos"
                        spellCheck={false}
                        onChange={handleValue}
                        onFocus={handleDisplayResult}
                    />

                    {searchValue && !loading && (
                        <button className={cx('clear')} onClick={handleSearchValue}>
                            <FontAwesomeIcon icon={faCircleMark} />
                        </button>
                    )}
                    {loading && (
                        <button className={cx('loading')}>
                            <FontAwesomeIcon icon={faSpinner} />
                        </button>
                    )}

                    <button className={cx('search-btn')} onMouseDown={e => e.preventDefault()}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>
            </HeadlessTippy>
        </>
    );
}

export default Search;
