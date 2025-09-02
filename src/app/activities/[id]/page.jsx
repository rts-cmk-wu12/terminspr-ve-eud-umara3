
"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function ActivityDetailPage() {
    const {id} = useParams();
    const [activity, setActivity] = useState(null);
    const [user, setUser] = useState(null);
    const [joined, setJoined] = useState(false);

    useEffect(() => {
        async function fetchData() {
            const data = await getActivityById(id);
            setActivity(data);

            const currentUser = {id:7, age:21};
            setUser(currentUser);

            const isJoined = data.user.some(u => u.id === currentUser.id);
            setJoined(isJoined);
        }
        fetchData();
    }, [id]);

    const handleJoin = async () => {
        if (!user) return;
        await joinActivity(user.id, activity.id);
        setJoined(true);

    };

    const handleLeave = async () => {
       if (!user) return;
        await leaveActivity(user.id, activity.id);
        setJoined(false); 
    };

    if (!activity) return<p>loading..</p>

    const isEligible = 
    user &&
    user.age >= activity.minAge &&
    user.age <= activity.maxAge &&
    !joined &&
    !userHasActivityOnSameWeekDay(user, activity, weekday);

    return(
        <div className="deatail-page">
            <h1>{activity.name}</h1>


            <p><strong>Weekday:</strong> {activity.weekday}</p>
      <p><strong>Time:</strong> {activity.time}</p>
      <p><strong>Description:</strong> {activity.description}</p>
      <p><strong>Age:</strong> {activity.minAge}–{activity.maxAge} years</p>

      { user && (
        <button className="detail-button" onClick={joined? handleLeave : handleJoin}
        disabled={!isEligible && !joined}>

        </button>

      )}

        </div>

    );
   }
    
