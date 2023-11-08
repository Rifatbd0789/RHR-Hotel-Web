/* eslint-disable react/prop-types */
const BookedRoom = ({
  Room,
  handleUpdateDate,
  handleCancel,
  handlePostReview,
}) => {
  return (
    <div className="card bg-base-100 shadow-xl mx-auto">
      <figure>
        <img src={Room.image} alt="Shoes" />
      </figure>
      <div className="card-body text-center md:text-left px-2 md:px-8">
        <p>
          Check In date: <span className="font-bold">{Date}</span>
        </p>
        <p>
          Seat: <span className="font-bold">{Room.seat}</span>
        </p>

        <p>{Room.short_description}</p>
        <p
          onClick={handlePostReview}
          className="text-blue-600 link link-hover mx-1"
        >
          Post a review!
        </p>
        <div className="card-actions justify-between">
          <button
            onClick={() => handleUpdateDate(Room._id)}
            className="btn btn-outline btn-warning"
          >
            Update Date
          </button>
          <button
            onClick={() => handleCancel(Room.num)}
            className="btn btn-outline btn-error"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookedRoom;
