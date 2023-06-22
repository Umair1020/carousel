import React from 'react';

const TestiMonialsDetails = ({ testiMonialDetail, index, centerCardIndex }) => {
    const isCenterCard = index === centerCardIndex;
    const cardStyle = isCenterCard ? { border: '25px solid #ff0000'  } : {};
    const { name, title, description, img } = testiMonialDetail;
    console.log("testiMonialDetail" + testiMonialDetail)
    return (
        <div className="item cardStyle" style={cardStyle}>
        <div className="shadow-effect">
          <img className="img-circle" src={testiMonialDetail.img} />
        </div>
        <div className="testimonial-name">
          <h5 className="h5">{testiMonialDetail.name}</h5>
          <p className="small">{testiMonialDetail.title}</p>
        </div>
      </div>
    );
};

export default TestiMonialsDetails;