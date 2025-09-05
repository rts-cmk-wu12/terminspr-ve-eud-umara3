

"use client"

import { getTokenFromCookie } from "@/components/cookies";
import { useEffect, useState } from "react"


export default function CalendarPage() {
    const [activities, setActivities] = useState([]);
    const [user, setUser] = useState(null);
    const token = getTokenFromCookie();

    useEffect(() => {
        async function fetchUserAndActivities() {
           if (!token) return;

           const userRes = await fetch("http://localhost:4000/api/v1/users", {
            headers: {Authorization: `Bearer ${token}`},
           });
           if (userRes.ok) {
            const userData = await userRes.json();
            setUser(userData);

            if(userData.role === "instructor"){
                const res = await fetch(`http://localhost:4000/api/v1/instructors/${userData.id}/activities`,
                    { headers: { Authorization: `Bearer ${token}` }}
                );
                if (res.ok) {
                    const activitiesData = await res.json();
                    setActivities(activitiesData);
                }
            }else{
                const res = await fetch(
                   `http://localhost:4000/api/v1/users/${userData.id}/roster/${userData.id}`,
                   { headers:{ Authorization: `Bearer ${token}`}} 
                );
                if(res.ok) {
                    const activitiesData = await res.json();
                    setActivities(activitiesData);
                }
            }
           }
           
        }
      fetchUserAndActivities();  
    }, [token]);
    if (!token) return <p>Log ind for at se din tilmild aktivitier.</p>

    return(
        <div>
            <h1>Klender</h1>
            {activities.length === 0 && <p>Du har igen tilmeldte aktiviteter.</p>}
        

        <ul>
            {activities.map((activity) => (
               <li key={activity.id} >
                {activity.name} {activity.weekday} kl. {activity.time}

               </li>
            ))}
        </ul>
        </div>
    );
}
