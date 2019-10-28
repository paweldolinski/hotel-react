import React, { Component } from 'react';
import Stars from './Stars';
import Buttons from './Buttons'
import Reviews from './Reviews'
import Image from './Image'
import placeholder from '../assets/images/placeholder.png'


class Result extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showReviews: false,
      reviews: [],
      firstLoad: false,
      error: null
    }
  }

  formanDate = (date) => {
    let newDate = new Date(date)
    let year = newDate.getFullYear();

    let month = (1 + newDate.getMonth()).toString();
    month = month.length > 1 ? month : '0' + month;

    let day = newDate.getDate().toString();
    day = day.length > 1 ? day : '0' + day;

    return month + '-' + day + '-' + year;
  }

  showReviews = (id) => {
    this.setState({
      showReviews: !this.state.showReviews,
    })
    if (!this.state.firstLoad) {
      fetch(`http://fake-hotel-api.herokuapp.com/api/reviews?hotel_id=${id}`)
        .then(data => data.json())
        .then(reviews => {
          this.setState({
            reviews,
            firstLoad: true
          })
        })
    }
  }

  render() {
    const { name, country, city, price, images, stars, description, date_end, date_start, id } = this.props;
    const { reviews, showReviews } = this.state

    return (
      <li key={id} className="results__item" >
        <div className="results__item-wrapper">
          <div className="results__item-img-wrapper">
            <div className="results__item-img-wrapper-inner">
              <Image src={images[0]} fallbackSrc={placeholder} alt="/" className="results__item-img" />
            </div>
          </div>
          <div className="results__item-info">
            <div className="results__item-header">
              <div className="results__item-left">
                <h1 className="results__item-title"> {name}</h1>
                <h3 className="results__item-city">{country} - {city} </h3>
              </div>
              <div className="results__item-right">
                <Stars stars={stars} />
              </div>
            </div>
            <p className="results__text">{description}</p>
            <div className="results__item-bottom">
              <Buttons action={() => this.showReviews(id)}>{showReviews ? "Hide reviews" : "Show reviews"}</Buttons>
              <div className="results__item-price-wrapper">
                <div className="results__item-price">
                  {price}&euro;</div>
                <div className="results__item-date">
                  {this.formanDate(date_start)}  - {this.formanDate(date_end)}
                </div>
              </div>
            </div>
          </div>
        </div>
        {showReviews ? <Reviews reviews={reviews} ></Reviews> : null
        }
      </li>
    )
  }
}

export default Result;
