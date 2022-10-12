import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import 'swiper/css/pagination'
import {TopBanner} from './style'
import { ADBanner } from './style';
import { StrategyBtns } from './style';
import convertViewCount from './convertViewCount';
import { Badges } from './Badges';
import styled from 'styled-components'

interface TopBannerSectionInterface {
    banner_items: any,
}
export const TopBannerSection = (props: TopBannerSectionInterface) => {
    return(
        <>
        <Swiper
        slidesPerView={1}
        spaceBetween={0}
        className="mySwiper"
        >
            {
                (props.banner_items).map((work:any, index:number) => {
                    let cnt = 0
                    if (work.service_property !== undefined) {
                        cnt = work.service_property.view_count
                    }
                    return(
                        <SwiperSlide key={index}>
                        <TopBanner.ItemImg>
                        <img src={"https://dn-img-page.kakao.com/download/resource?kid=" + work.thumbnail}/>
                            {
                                work.title_img !== undefined
                                ? <img className="title" src={"https://dn-img-page.kakao.com/download/resource?kid=" + work.title_img}/>
                                : null
                            }
                            <TopBanner.ItemInfo>
                                <div className='banner_caption'>{work.caption}</div>
                                {/* {
                                    work.operator_property.is_event
                                    ? <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCA0MCAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTAgM0MwIDEuMzQzMTUgMS4zNDMxNSAwIDMgMEgzN0MzOC42NTY5IDAgNDAgMS4zNDMxNSA0MCAzVjEzQzQwIDE0LjY1NjkgMzguNjU2OSAxNiAzNyAxNkgzQzEuMzQzMTUgMTYgMCAxNC42NTY5IDAgMTNWM1oiIGZpbGw9IiNGRjJEMkQiLz4KPHBhdGggZD0iTTYuMjAwOTMgNS42ODQ3M1Y3LjM2NDlIOC40OTIxOVY4LjYwMDMxSDYuMjAwOTNWMTAuMzE1MUg5LjE5MjU4VjExLjU5OTlINC41VjQuMzk5OUg5LjE5MjU4VjUuNjg0NzNINi4yMDA5M1oiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0xNi43NzQyIDQuMzk5OUwxMy44NTI2IDExLjU5OTlIMTIuMzIxN0w5LjQwMDExIDQuMzk5OUgxMC43NjA5QzEwLjkwNzYgNC4zOTk5IDExLjAyNiA0LjQzNDQ5IDExLjExNjEgNC41MDM2OEMxMS4yMDYxIDQuNTY5NTcgMTEuMjc0NSA0LjY1NTIyIDExLjMyMTIgNC43NjA2NEwxMi43MzE5IDguNjE1MTRDMTIuNzk4NiA4Ljc4MzE2IDEyLjg2MzcgOC45Njc2NCAxMi45MjcgOS4xNjg2QzEyLjk5MDQgOS4zNjYyNyAxMy4wNTA0IDkuNTczODIgMTMuMTA3MSA5Ljc5MTI1QzEzLjE1MzggOS41NzM4MiAxMy4yMDU1IDkuMzY2MjcgMTMuMjYyMiA5LjE2ODZDMTMuMzIyMyA4Ljk2NzY0IDEzLjM4NTYgOC43ODMxNiAxMy40NTIzIDguNjE1MTRMMTQuODUzMSA0Ljc2MDY0QzE0Ljg4OTggNC42Njg0IDE0Ljk1NDggNC41ODYwNCAxNS4wNDgyIDQuNTEzNTZDMTUuMTQ0OSA0LjQzNzc5IDE1LjI2MzMgNC4zOTk5IDE1LjQwMzQgNC4zOTk5SDE2Ljc3NDJaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNMTkuMDQ5OCA1LjY4NDczVjcuMzY0OUgyMS4zNDFWOC42MDAzMUgxOS4wNDk4VjEwLjMxNTFIMjIuMDQxNFYxMS41OTk5SDE3LjM0ODlWNC4zOTk5SDIyLjA0MTRWNS42ODQ3M0gxOS4wNDk4WiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTI5LjQ0NzkgNC4zOTk5VjExLjU5OTlIMjguNTY3NEMyOC40Mzc0IDExLjU5OTkgMjguMzI3MyAxMS41ODAxIDI4LjIzNzIgMTEuNTQwNkMyOC4xNTA1IDExLjQ5NzggMjguMDYzOCAxMS40MjUzIDI3Ljk3NzEgMTEuMzIzMkwyNC41NDAyIDcuMDI4ODdDMjQuNTUzNiA3LjE1NzM1IDI0LjU2MTkgNy4yODI1NCAyNC41NjUyIDcuNDA0NDNDMjQuNTcxOSA3LjUyMzAzIDI0LjU3NTIgNy42MzUwNCAyNC41NzUyIDcuNzQwNDdWMTEuNTk5OUgyMy4wODQ0VjQuMzk5OUgyMy45NzQ5QzI0LjA0ODMgNC4zOTk5IDI0LjExIDQuNDAzMiAyNC4xNiA0LjQwOTc5QzI0LjIxIDQuNDE2MzcgMjQuMjU1MSA0LjQyOTU1IDI0LjI5NTEgNC40NDkzMkMyNC4zMzUxIDQuNDY1NzkgMjQuMzczNSA0LjQ5MDUgMjQuNDEwMSA0LjUyMzQ0QzI0LjQ0NjggNC41NTYzOSAyNC40ODg1IDQuNjAwODYgMjQuNTM1MiA0LjY1Njg3TDI4LjAwMjEgOC45ODA4MkMyNy45ODU0IDguODQyNDUgMjcuOTczOCA4LjcwOTAzIDI3Ljk2NzEgOC41ODA1NUMyNy45NjA0IDguNDQ4NzcgMjcuOTU3MSA4LjMyNTIzIDI3Ljk1NzEgOC4yMDk5MlY0LjM5OTlIMjkuNDQ3OVoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0zNi4xIDUuNzI0MjdIMzQuMDQ4OVYxMS41OTk5SDMyLjM1NzlWNS43MjQyN0gzMC4zMDY4VjQuMzk5OUgzNi4xVjUuNzI0MjdaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K" />
                                    : work.is_all_free
                                    ? <><img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAyNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTAgM0MwIDEuMzQzMTUgMS4zNDMxNSAwIDMgMEgyM0MyNC42NTY5IDAgMjYgMS4zNDMxNSAyNiAzVjEzQzI2IDE0LjY1NjkgMjQuNjU2OSAxNiAyMyAxNkgzQzEuMzQzMTUgMTYgMCAxNC42NTY5IDAgMTNWM1oiIGZpbGw9ImJsYWNrIiBmaWxsLW9wYWNpdHk9IjAuOCIvPgo8cGF0aCBkPSJNMTIuMjE2NCAzLjcwMDJWNy44ODUwNkg0LjgxODJWMy43MDAySDEyLjIxNjRaTTYuMTQyNTEgNi42NzM2NUgxMC44OTIxVjQuOTExNkg2LjE0MjUxVjYuNjczNjVaTTEyLjYzNDYgOC45NjYzMlYxMC4xODc3SDkuMjE5MjlWMTIuMzAwMkg3LjgxNTMyVjEwLjE4NzdINC40VjguOTY2MzJIMTIuNjM0NloiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0yMS4yNzE0IDcuODc1MDVWOS4wMjYzOUgxMy43ODM2VjUuNzgyNjJIMTkuODU3NVY0Ljg0MTUySDEzLjc4MzZWMy43MDAySDIxLjE4MThWNi44OTM5MUgxNS4xMDc5VjcuODc1MDVIMjEuMjcxNFpNMjEuNiAxMC42NjgzVjExLjg3OTdIMTMuMzY1NFYxMC42NjgzSDE1LjA4OFY5LjMyNjc0SDE2LjQxMjNWMTAuNjY4M0gxOC41NjNWOS4zMjY3NEgxOS44Nzc0VjEwLjY2ODNIMjEuNloiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo=" />
                                    <img src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAyMCAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTAgM0MwIDEuMzQzMTUgMS4zNDMxNSAwIDMgMEgxN0MxOC42NTY5IDAgMjAgMS4zNDMxNSAyMCAzVjEzQzIwIDE0LjY1NjkgMTguNjU2OSAxNiAxNyAxNkgzQzEuMzQzMTUgMTYgMCAxNC42NTY5IDAgMTNWM1oiIGZpbGw9ImJsYWNrIiBmaWxsLW9wYWNpdHk9IjAuOCIvPgo8cGF0aCBkPSJNNi45NDY2MyAxMC40MDg1QzcuMTg4OSAxMC40MDg1IDcuNDA2MjggMTAuMzY4MSA3LjU5ODc3IDEwLjI4NzRDNy43OTEyNiAxMC4yMDMzIDcuOTUzODggMTAuMDg1NiA4LjA4NjYzIDkuOTM0M0M4LjIxOTM4IDkuNzgyOTcgOC4zMjA2IDkuNTk5NjkgOC4zOTAzIDkuMzg0NDdDOC40NTk5OSA5LjE2OTI0IDguNDk0ODQgOC45MjcxMiA4LjQ5NDg0IDguNjU4MDlWNC4yOTk4SDkuOTg4MjhWOC42NTgwOUM5Ljk4ODI4IDkuMTAxOTkgOS45MTY5MyA5LjUxMDU4IDkuNzc0MjIgOS44ODM4NUM5LjYzNDgzIDEwLjI1MzggOS40MzQwNSAxMC41NzMyIDkuMTcxODcgMTAuODQyM0M4LjkwOTY4IDExLjExMTMgOC41OTEwOCAxMS4zMjE1IDguMjE2MDYgMTEuNDcyOEM3Ljg0MTA0IDExLjYyNDEgNy40MTc5IDExLjY5OTggNi45NDY2MyAxMS42OTk4QzYuNDc1MzcgMTEuNjk5OCA2LjA1MDU2IDExLjYyNDEgNS42NzIyMiAxMS40NzI4QzUuMjk3MiAxMS4zMjE1IDQuOTc4NiAxMS4xMTEzIDQuNzE2NDIgMTAuODQyM0M0LjQ1NDIzIDEwLjU3MzIgNC4yNTE3OSAxMC4yNTM4IDQuMTA5MDggOS44ODM4NUMzLjk2OTY5IDkuNTEwNTggMy45IDkuMTAxOTkgMy45IDguNjU4MDlWNC4yOTk4SDUuMzkzNDVWOC42NTgwOUM1LjM5MzQ1IDguOTI3MTIgNS40MjgyOSA5LjE2OTI0IDUuNDk3OTkgOS4zODQ0N0M1LjU2NzY4IDkuNTk5NjkgNS42Njg5IDkuNzgyOTcgNS44MDE2NSA5LjkzNDNDNS45MzQ0MSAxMC4wODU2IDYuMDk3MDMgMTAuMjAzMyA2LjI4OTUxIDEwLjI4NzRDNi40ODIgMTAuMzY4MSA2LjcwMTA0IDEwLjQwODUgNi45NDY2MyAxMC40MDg1WiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTEzLjg0NzUgNy45NDE3OUMxNC4zMTU1IDcuOTQxNzkgMTQuNjU3MyA3LjgyNzQ2IDE0Ljg3MyA3LjU5ODc4QzE1LjA5MjEgNy4zNzAxMSAxNS4yMDE2IDcuMDU3MzYgMTUuMjAxNiA2LjY2MDU0QzE1LjIwMTYgNi40Nzg5NSAxNS4xNzM0IDYuMzE0MTcgMTUuMTE2OSA2LjE2NjJDMTUuMDYzOCA2LjAxNDg3IDE0Ljk4MDkgNS44ODcwOCAxNC44NjggNS43ODI4M0MxNC43NTg1IDUuNjc1MjIgMTQuNjE5MSA1LjU5MjgzIDE0LjQ0OTkgNS41MzU2NkMxNC4yODA2IDUuNDc4NDkgMTQuMDc5OCA1LjQ0OTkxIDEzLjg0NzUgNS40NDk5MUgxMi45MDE3VjcuOTQxNzlIMTMuODQ3NVpNMTMuODQ3NSA0LjI5OThDMTQuMzQyIDQuMjk5OCAxNC43Njg1IDQuMzU4NjYgMTUuMTI2OSA0LjQ3NjM2QzE1LjQ4ODYgNC41OTQwNiAxNS43ODU3IDQuNzU4ODQgMTYuMDE4IDQuOTcwN0MxNi4yNTAzIDUuMTc5MiAxNi40MjEyIDUuNDI4MDUgMTYuNTMwNyA1LjcxNzI2QzE2LjY0MzYgNi4wMDY0NiAxNi43IDYuMzIwODkgMTYuNyA2LjY2MDU0QzE2LjcgNy4wMjAzNyAxNi42NDE5IDcuMzQ5OTMgMTYuNTI1OCA3LjY0OTIzQzE2LjQwOTYgNy45NDg1MiAxNi4yMzM3IDguMjA1NzggMTUuOTk4MSA4LjQyMTAxQzE1Ljc2MjQgOC42MzYyMyAxNS40NjU0IDguODA0MzcgMTUuMTA3IDguOTI1NDRDMTQuNzQ4NiA5LjA0MzE0IDE0LjMyODcgOS4xMDE5OSAxMy44NDc1IDkuMTAxOTlIMTIuOTAxN1YxMS42MTkxSDExLjQwODJWNC4yOTk4SDEzLjg0NzVaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K'/></>
                                    : work.is_waitfree
                                    ? <><img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTAgM0MwIDEuMzQzMTUgMS4zNDMxNSAwIDMgMEgxM0MxNC42NTY5IDAgMTYgMS4zNDMxNSAxNiAzVjEzQzE2IDE0LjY1NjkgMTQuNjU2OSAxNiAxMyAxNkgzQzEuMzQzMTUgMTYgMCAxNC42NTY5IDAgMTNWM1oiIGZpbGw9ImJsYWNrIiBmaWxsLW9wYWNpdHk9IjAuOCIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTE0IDhDMTQgNC42ODM2NCAxMS4zMTY0IDIgOCAyQzQuNjgzNjQgMiAyIDQuNjgzNjQgMiA4QzIgMTEuMzE2NCA0LjY4MzY0IDE0IDggMTRDMTEuMzE2NCAxNCAxNCAxMS4zMTY0IDE0IDhaTTcuNzI3MjkgNC43MDAwMkM4LjE1Mjc0IDQuNzAwMDIgOC41MDE4MyA1LjAyNzI5IDguNTQwMDIgNS40NDE4NEg4LjU0NTQ3VjcuOTA3MjlMMTAuMjE0NiA5LjU3NjM5QzEwLjUxNDYgOS44NzYzOCAxMC41MzA5IDEwLjM1MDkgMTAuMjY5MSAxMC42NzI3TDEwLjIxNDYgMTAuNzMyN0M5LjkxNDU2IDExLjAzMjcgOS40NDAwMiAxMS4wNDkxIDkuMTE4MiAxMC43ODczTDkuMDU4MiAxMC43MzI3TDcuMTQ5MTEgOC44MjM2NkM3LjAxMjc0IDguNjkyNzUgNi45MzA5MyA4LjUxMjc1IDYuOTA5MTEgOC4zMjcyOVY1LjUxODJDNi45MDkxMSA1LjA2NTQ3IDcuMjc0NTYgNC43MDAwMiA3LjcyNzI5IDQuNzAwMDJaIiBmaWxsPSIjRkZCQzAwIi8+Cjwvc3ZnPgo=" />
                                    <img src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAyMCAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTAgM0MwIDEuMzQzMTUgMS4zNDMxNSAwIDMgMEgxN0MxOC42NTY5IDAgMjAgMS4zNDMxNSAyMCAzVjEzQzIwIDE0LjY1NjkgMTguNjU2OSAxNiAxNyAxNkgzQzEuMzQzMTUgMTYgMCAxNC42NTY5IDAgMTNWM1oiIGZpbGw9ImJsYWNrIiBmaWxsLW9wYWNpdHk9IjAuOCIvPgo8cGF0aCBkPSJNNi45NDY2MyAxMC40MDg1QzcuMTg4OSAxMC40MDg1IDcuNDA2MjggMTAuMzY4MSA3LjU5ODc3IDEwLjI4NzRDNy43OTEyNiAxMC4yMDMzIDcuOTUzODggMTAuMDg1NiA4LjA4NjYzIDkuOTM0M0M4LjIxOTM4IDkuNzgyOTcgOC4zMjA2IDkuNTk5NjkgOC4zOTAzIDkuMzg0NDdDOC40NTk5OSA5LjE2OTI0IDguNDk0ODQgOC45MjcxMiA4LjQ5NDg0IDguNjU4MDlWNC4yOTk4SDkuOTg4MjhWOC42NTgwOUM5Ljk4ODI4IDkuMTAxOTkgOS45MTY5MyA5LjUxMDU4IDkuNzc0MjIgOS44ODM4NUM5LjYzNDgzIDEwLjI1MzggOS40MzQwNSAxMC41NzMyIDkuMTcxODcgMTAuODQyM0M4LjkwOTY4IDExLjExMTMgOC41OTEwOCAxMS4zMjE1IDguMjE2MDYgMTEuNDcyOEM3Ljg0MTA0IDExLjYyNDEgNy40MTc5IDExLjY5OTggNi45NDY2MyAxMS42OTk4QzYuNDc1MzcgMTEuNjk5OCA2LjA1MDU2IDExLjYyNDEgNS42NzIyMiAxMS40NzI4QzUuMjk3MiAxMS4zMjE1IDQuOTc4NiAxMS4xMTEzIDQuNzE2NDIgMTAuODQyM0M0LjQ1NDIzIDEwLjU3MzIgNC4yNTE3OSAxMC4yNTM4IDQuMTA5MDggOS44ODM4NUMzLjk2OTY5IDkuNTEwNTggMy45IDkuMTAxOTkgMy45IDguNjU4MDlWNC4yOTk4SDUuMzkzNDVWOC42NTgwOUM1LjM5MzQ1IDguOTI3MTIgNS40MjgyOSA5LjE2OTI0IDUuNDk3OTkgOS4zODQ0N0M1LjU2NzY4IDkuNTk5NjkgNS42Njg5IDkuNzgyOTcgNS44MDE2NSA5LjkzNDNDNS45MzQ0MSAxMC4wODU2IDYuMDk3MDMgMTAuMjAzMyA2LjI4OTUxIDEwLjI4NzRDNi40ODIgMTAuMzY4MSA2LjcwMTA0IDEwLjQwODUgNi45NDY2MyAxMC40MDg1WiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTEzLjg0NzUgNy45NDE3OUMxNC4zMTU1IDcuOTQxNzkgMTQuNjU3MyA3LjgyNzQ2IDE0Ljg3MyA3LjU5ODc4QzE1LjA5MjEgNy4zNzAxMSAxNS4yMDE2IDcuMDU3MzYgMTUuMjAxNiA2LjY2MDU0QzE1LjIwMTYgNi40Nzg5NSAxNS4xNzM0IDYuMzE0MTcgMTUuMTE2OSA2LjE2NjJDMTUuMDYzOCA2LjAxNDg3IDE0Ljk4MDkgNS44ODcwOCAxNC44NjggNS43ODI4M0MxNC43NTg1IDUuNjc1MjIgMTQuNjE5MSA1LjU5MjgzIDE0LjQ0OTkgNS41MzU2NkMxNC4yODA2IDUuNDc4NDkgMTQuMDc5OCA1LjQ0OTkxIDEzLjg0NzUgNS40NDk5MUgxMi45MDE3VjcuOTQxNzlIMTMuODQ3NVpNMTMuODQ3NSA0LjI5OThDMTQuMzQyIDQuMjk5OCAxNC43Njg1IDQuMzU4NjYgMTUuMTI2OSA0LjQ3NjM2QzE1LjQ4ODYgNC41OTQwNiAxNS43ODU3IDQuNzU4ODQgMTYuMDE4IDQuOTcwN0MxNi4yNTAzIDUuMTc5MiAxNi40MjEyIDUuNDI4MDUgMTYuNTMwNyA1LjcxNzI2QzE2LjY0MzYgNi4wMDY0NiAxNi43IDYuMzIwODkgMTYuNyA2LjY2MDU0QzE2LjcgNy4wMjAzNyAxNi42NDE5IDcuMzQ5OTMgMTYuNTI1OCA3LjY0OTIzQzE2LjQwOTYgNy45NDg1MiAxNi4yMzM3IDguMjA1NzggMTUuOTk4MSA4LjQyMTAxQzE1Ljc2MjQgOC42MzYyMyAxNS40NjU0IDguODA0MzcgMTUuMTA3IDguOTI1NDRDMTQuNzQ4NiA5LjA0MzE0IDE0LjMyODcgOS4xMDE5OSAxMy44NDc1IDkuMTAxOTlIMTIuOTAxN1YxMS42MTkxSDExLjQwODJWNC4yOTk4SDEzLjg0NzVaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K'/></>
                                    : null
                                } */}
                                <Badges is_event={work.operator_property.is_event}
                                is_all_free={work.is_all_free}
                                is_waitfree={work.is_waitfree}
                                is_waitfree_plus={work.is_waitfree_plus} />

                                {
                                    work.operator_property.is_view_count!==undefined
                                    ? work.operator_property.is_view_count
                                    ? <span className='banner_subinfo'>
                                        {work.category+' · '+work.sub_category+' · '+convertViewCount(cnt)}
                                        </span>
                                    : <span className='banner_subinfo'>
                                    {work.category+' · '+work.sub_category}
                                    </span>
                                    : null
                                }
                            </TopBanner.ItemInfo>
                        </TopBanner.ItemImg>
                        </SwiperSlide>
                    )
                })
            }
        </Swiper>
        </>
    )
}

export const TopADBannerSection = () => {
    return (
        <ADBanner></ADBanner>
    )
}
interface TopStrategyBtnSectionInterface {
    btn_items: any
}
export const TopStrategyBtnSection = (props:TopStrategyBtnSectionInterface) => {
    return (
        <StrategyBtns.BtnBox>
        {
            props.btn_items.map((btn:any, index:number) => {
                return (
                    <StrategyBtns.Btn>
                        {btn.title}
                        <span style={{
                            color: '#ebc634',
                            fontWeight: '100',
                            marginLeft: '5px'
                        }}>
                            {
                                btn.count !== undefined
                                ? btn.count
                                : null
                            }
                        </span>
                    </StrategyBtns.Btn>
                )
            })
        }
        </StrategyBtns.BtnBox>
    )
}