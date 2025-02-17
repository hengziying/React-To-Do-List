import React, { useEffect, useState } from "react";
import ActivityList from "./Component/ActivityList";
import Form from "./Component/Form";

export default function App() {
  const savedActivities = JSON.parse(localStorage.getItem("activities")) || [];
  const [activities, setActivities] = useState(savedActivities);

  useEffect(() => {
    localStorage.setItem("activities", JSON.stringify(activities));
  }, [activities]);

  function handleAddActivity(newActivity) {
    setActivities((prevActivities) => [newActivity, ...prevActivities]);
  }

  function handleDltActivity(Activity) {
    setActivities((prevActivities) =>
      prevActivities.filter((a) => a !== Activity)
    );
  }

  return (
    <div>
      <h1>To-Do List📝</h1>
      <Form onAddActivity={handleAddActivity} />
      <div className="total-activities">
        Total Activities: {activities.length}
      </div>
      <div className="grid-container">
        {activities.map((activity) => (
          <ActivityList
            key={activity.activity}
            activity={activity}
            onDltActivity={handleDltActivity}
          />
        ))}
      </div>
    </div>
  );
}
