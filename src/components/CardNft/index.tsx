import 'bootstrap/dist/css/bootstrap.css';
import styles from './styles.module.scss';
import React, { Component } from 'react';

interface CardNft extends React.HTMLProps<HTMLDivElement> {
    src: string;
    width: string;
    height: string;
    series: string;
    price: number;
    name: string;
    code: number;
    countdown: any;
    theme?: 'light' | 'dark';
    slim?: boolean;
}

export function CardNft(props: CardNft) {
    function findTheme() {
        switch (props.theme) {
            case 'light': return "";
            case 'dark': return styles.dark;
        }
    }
    //Removes all writing from var
    if ((Number(props.width.replace(/\D+/g, '')) < 300) || (props.slim == true)) {
        var slim = true;
    }
    return (
        <div
            className={`${styles.body} ${findTheme()} ${slim ? styles.slim : ""} ${props.className}`}
            style={{
                height: props.height, maxHeight: props.height,
                width: props.width, minWidth: props.width
            }}>
            <div className={styles.img}
                style={{
                    backgroundImage: `url('${props.src}')`,
                }}
            ></div>
            <div className={styles.content}>
                <div>
                    <span>{props.series}</span>
                    <span>TOP BID</span>
                </div>
                <div>
                    <span>{props.name}</span>
                    <span>
                        <img src="./images/icons/currency.png" />
                        {(props.price / 100) + " ETH"}
                    </span>
                </div>
                <div>
                    <span>{"#" + props.code}</span>
                    <span>{props.countdown + " day left"}</span>
                </div>
            </div>
        </div>
    )
}