import React from "react";
import style from "./style.module.css"
import { StaticQuery, graphql } from "gatsby";
import Dateicon from '../../images/date_icon.png'
import locationicon from '../../images/location_icon.png'

import Img from 'gatsby-image'
import { Link } from "gatsby"


const event_card = props => (
    <div className={style.card_holder}>
        <div className={style.container}>
            <div className={style.card_content}>

                <Img
                    className={style.card_cover_image}
                    alt="Card Image Text"
                    fluid={props.cover.childImageSharp.fluid}
                />
                <div className={style.card_text_holder}>
                    <div className={style.card_text}>
                        <Link to={props.slug} className={style.linktitle} ><p className={style.event_title}>{props.title}</p></Link>
                        <div className={style.event_info}>
                            <img src={Dateicon} className={style.event_date_icon} alt="date icon" />
                            <p className={style.event_date}>{props.date}</p>
                        </div>
                        <p className={style.card_discription}>{props.caption}</p>
                        <div className={style.button_div}>
                            <Link className={style.herobutton}>Read More</Link></div>

                    </div>

                </div>
            </div>

        </div>

    </div>
);

export default event_card;
