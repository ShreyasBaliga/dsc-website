import React from "react";
import style from "./style.module.css";
import Dateicon from "../../images/date_icon.png";

import Img from "gatsby-image";
import { Link } from "gatsby";

class event_card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }
  render() {
    return (
      <Link to={this.props.slug} className={style.linktitle}>
        <div className={style.card_holder}>
          <div className={style.container}>
            <div className={style.card_content}>
              <Img
                className={style.card_cover_image}
                alt="Card Image Text"
                fluid={this.props.cover.childImageSharp.fluid}
              />

              <div className={style.card_text_holder}>
                <div className={style.card_text}>
                  <p className={style.event_title}>{this.props.title}</p>

                  <div className={style.event_info}>
                    <img
                      src={Dateicon}
                      className={style.event_date_icon}
                      alt="date icon"
                    />
                    <p className={style.event_date}>{this.props.date}</p>
                  </div>
                  <p className={style.card_discription}>{this.props.caption}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    );
  }
}

export default event_card;
