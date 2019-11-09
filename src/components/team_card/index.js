import React from "react";
import style from "./style.module.css";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import { Link } from "gatsby"
import Web from '../../images/twitter.png'
import Git from '../../images/github.svg'
import Linked from '../../images/linkedin.png'
import mail from '../../images/mail.png'


function MemberCard(props)
{
    return(
        <div className={style.container}>
            <div className={style.card_holder}>
                <div className={style.card}>
                    <div className={style.image}>
                    <img
                        className={style.member_image}
                        alt=""
                        src={`https://avatars1.githubusercontent.com/${props.username}?size=100`}
                        />
                    </div>
                    <span className={style.whitesmk_bg}></span>
                    <div className={style.card_text}>
                        <p className={style.member_name}>{props.full_name}</p>
                        <p className={style.designation}>{props.designation}</p>
                        <div className={style.links}>
                        <img classname={style.contact} src={Web}></img>
                        <img classname={style.linked_images} src={Git}></img>
                        <img classname={style.linked_images} src={Linked}></img>
                        <img classname={style.linked_images} src={mail}></img>
                        </div>
                    </div>


                </div>

            </div>
           
        </div>
    )
}

export default MemberCard;