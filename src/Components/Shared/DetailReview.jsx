/* eslint-disable react/prop-types */

import moment from "moment";

const DetailReview = ({ Review }) => {
  const Ratings = (
    <div className="rating">
      <input
        type="radio"
        name="rating-1"
        disabled
        defaultChecked={Review.rating === "1"}
        className="mask mask-star-2 bg-orange-400"
      />
      <input
        type="radio"
        name="rating-2"
        disabled
        defaultChecked={Review.rating === "2"}
        className="mask mask-star-2 bg-orange-400"
      />
      <input
        type="radio"
        name="rating-3"
        disabled
        defaultChecked={Review.rating === "3"}
        className="mask mask-star-2 bg-orange-400"
      />
      <input
        type="radio"
        name="rating-4"
        disabled
        defaultChecked={Review.rating === "4"}
        className="mask mask-star-2 bg-orange-400"
      />
      <input
        type="radio"
        name="rating-5"
        disabled
        defaultChecked={Review.rating >= "5"}
        className="mask mask-star-2 bg-orange-400"
      />
    </div>
  );
  const createdAt = moment(Review?.created).format("lll");
  return (
    <div className="text-center">
      <h1>{Review.userName}</h1>
      <div>{Ratings}</div>
      <h2>{Review.comment}</h2>
      <p>{createdAt}</p>
    </div>
  );
};

export default DetailReview;
