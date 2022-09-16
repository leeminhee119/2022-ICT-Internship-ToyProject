import React from "react";
import { navigationBar } from "./styled-components/style";
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const NavBar = () => {
    return (
        <>
        <navigationBar.Box>
            <navigationBar.Item>
                <Link href="/musical"><a>뮤지컬</a></Link>
            </navigationBar.Item>
            <navigationBar.Item>
                <Link href="/concert"><a>콘서트</a></Link>
            </navigationBar.Item>
            <navigationBar.Item>
                <Link href='/carpool'><a>동행구하기</a></Link>
            </navigationBar.Item>
            <navigationBar.Item>
                <Link href="/reviews"><a>공연후기</a></Link>
            </navigationBar.Item>
            <navigationBar.Item>
                <FontAwesomeIcon icon={faBars} size='2x' style={{
                    padding: '0 10px 0 20px'
                }} />
            </navigationBar.Item>

        </navigationBar.Box>
        </>
    )
}

export default NavBar;