import React, { useState } from "react";

export default function Form({ onAddActivity }) {
  const [activity, setActivity] = useState("");
  const [price, setPrice] = useState(0);
  const [type, setType] = useState("education");
  const [bookings, setBookings] = useState(false);
  const [accessibility, setAccessibility] = useState(0);

  function handleSubmit(e) {
    e.preventDefault();
    if (!activity) return;
    const newActivity = {
      activity: activity,
      price: price,
      type: type,
      bookings: bookings,
      accessibility: accessibility,
    };
    onAddActivity(newActivity);

    setActivity("");
    setPrice(0);
    setType("");
    setBookings(false);
    setAccessibility(0);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Activity:
        <input
          type="text"
          placeholder="Activity"
          value={activity}
          onChange={(e) => setActivity(e.target.value)}
        />
      </label>
      <label>
        Price:
        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(parseFloat(e.target.value))}
        />
      </label>
      <label>
        Type:
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="education">Education</option>
          <option value="recreational">Recreational</option>
          <option value="social">Social</option>
          <option value="diy">DIY</option>
          <option value="charity">Charity</option>
          <option value="cooking">Cooking</option>
          <option value="relaxation">Relaxation</option>
          <option value="music">Music</option>
          <option value="busywork">Busywork</option>
        </select>
      </label>
      <label>
        Bookings:
        <input
          type="checkbox"
          checked={bookings}
          onChange={(e) => setBookings(e.target.checked)}
        />
      </label>
      <label>
        Accessibility:
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={accessibility}
            onChange={(e) => setAccessibility(parseFloat(e.target.value))}
          />
          <span>{accessibility.toFixed(2)}</span>
        </div>
      </label>

      <button>Add</button>
    </form>
  );
}
