export default function ActivityList({ activity, onDltActivity }) {
  return (
    <div className="activity-card">
      <div className="card-header">
        <h2>{activity.activity}</h2>
        <div className="card-header-buttons">
          <button className="dlt-btn" onClick={() => onDltActivity(activity)}>
            ✖
          </button>
        </div>
      </div>

      <p>Price: {activity.price}</p>
      <p>Type: {activity.type}</p>
      <p>Bookings: {activity.bookings ? "Yes" : "No"}</p>
      <p>Accessibility: {activity.accessibility}</p>
    </div>
  );
}
