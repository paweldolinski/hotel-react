
import React from 'react';
import starFilled from '../assets/images/001-star.png';
import starShape from '../assets/images/002-star-1.png';

const Rating = (props) => {
  let renderStars = () => {
    let stars = props.stars
    let output = [];
    if (stars) {
      for (let i = 1; i <= 5; i++) {
        if (i <= stars) {
          output.push(`<img class="results__item-star" src=${starShape} />`);
        } else {
          output.push(`<img class="results__item-star"  src=${starFilled} />`);
        }
      }
      return output.join(" ")
    } else {
      output = "<p>niema</p>"
    }
    return output
  }

  return (
    <div className="results__item-ratings" dangerouslySetInnerHTML={{ __html: renderStars(renderStars()) }} />
  )

}



export default Rating;