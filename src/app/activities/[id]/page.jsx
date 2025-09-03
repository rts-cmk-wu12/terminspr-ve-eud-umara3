
"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { getActivityById, joinActivity,leaveActivity } from "@/action/details";
import "./detail.scss";

export default function ActivityDetailPage() {
    const {id} = useParams();
    const [activity, setActivity] = useState(null);
    const [user, setUser] = useState(null);
    const [joined, setJoined] = useState(false);

    useEffect(() => {
        async function fetchData() {
            console.log("Activity ID from useParams:", id);
            try{
            const data = await getActivityById(id);
            setActivity(data);

            const currentUser = {id:7, age:21};
            setUser(currentUser);

            const isJoined = data.user?.some(u => u.id === currentUser.id) || false ;
            setJoined(isJoined);
        } catch (error) {
            console.error("error fetching data", error)
        }
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
    !joined;
    

    return(
        <div className="detail-page">
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
    
