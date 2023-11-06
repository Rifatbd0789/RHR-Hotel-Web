/* eslint-disable react/prop-types */

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
        defaultChecked={Review.rating === "5"}
        className="mask mask-star-2 bg-orange-400"
      />
    </div>
  );
  console.log(typeof Review.rating);
  return (
    <div>
      {Ratings}
      <h2>Comment:{Review.comment}</h2>
    </div>
  );
};

export default DetailReview;
