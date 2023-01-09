import React, { useState } from 'react';


import classes from "./Header.module.css";

import Arrow from './Arrow';
import { AiOutlineUser } from "react-icons/Ai";
import Popup from '../popup/Popup';

import Link from 'next/link';

const Header = () => {

    const [agahi, setAgahi] = useState(false);


    const sabtAgahiHandler = () => {

        setAgahi((prev) => !prev);

    }


    return (
        <>
            <header className={classes.header}>
                <div className={classes.controls}>
                    <div className={classes.left}>

                        <ul className={classes.list}>

                            <li>
                                <img src='/images/logo.png' />
                                {/* <p>جیلیز</p> */}
                            </li>
                            <li>
                                <img src='/images/home.png' />
                            </li>

                            <li>
                                <a>خرید</a>
                            </li>

                            <li className={classes.hoverlist}>
                                <a>
                                    <span>سایر خدمات</span>
                                    <span><Arrow /></span>
                                </a>
                                <ul className={classes.one}>
                                    <li>خرید خدمات مرتبط صنفی</li>
                                    <li>فروش خدمات مرتبط صنفی</li>
                                    <li>نصب و تعمیرات</li>
                                    <li>طراحی و راه اندازی منو</li>
                                    <li>استخدام نیروی کار</li>
                                    <li>نیرو های آماده بکار</li>
                                    <li>لیست مقالات</li>
                                </ul>

                            </li>

                            <li className={classes.hoverlist}>
                                <a>
                                    بیشتر
                                    <Arrow />
                                </a>
                                <ul className={classes.two}>
                                    <li>لیست مقالات وبسایت</li>
                                    <li>راهنمای استفاده از وبسیات</li>
                                    <li>تیزر تبلیغاتی وبسایت جیلیز</li>
                                    <li>درباره ما</li>
                                    <li>سوابق ما</li>
                                    <li>تماس با ما</li>
                                    <li>ثبت شکایات</li>
                                    <li>قوانین سایت</li>
                                    <li>راهنمای خرید امن</li>
                                    <li>تبلیغات اسپانسری</li>
                                    <li>تعرفه های درج آگهی</li>
                                </ul>

                            </li>

                        </ul>

                    </div>
                    <div className={classes.rigth}>
                        <p onClick={sabtAgahiHandler}>
                            ثبت آگهی رایگان
                        </p>
                        <button className={classes.login}>
                            <Link href="/register">ورود</Link>
                            <span>
                                <AiOutlineUser />
                            </span>
                        </button>
                    </div>
                </div>

                {agahi && <Popup agahi={agahi} />}

            </header>

        </>
    )
}

export default Header