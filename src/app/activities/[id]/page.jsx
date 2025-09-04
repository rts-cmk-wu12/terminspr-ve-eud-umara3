
"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { getActivityById, joinActivity,leaveActivity } from "@/action/details";
import { useRouter } from "next/navigation";
import "./detail.scss";

/*export const metadata ={
  title: "Aktivitetsdetaljer",
}*/


export default function ActivityDetailPage() {
    const {id} = useParams();
     const router = useRouter();
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

            const isJoined = data.user?.some(user => user.id === currentUser.id) || false ;
            setJoined(isJoined);
        } catch (error) {
            console.error("error fetching data", error)
        }
    }
        fetchData();
    }, [id]);

    const handleJoin = async () => {
        if (!user || !activity?.id) return;
        try{
         await joinActivity(user.id, activity.id);
         setJoined(true);
         alert("Successfully joined the activity!");
        } catch(error){
            console.error("faild to join activity", error);
        }
       /* await joinActivity(user.id, activity.id);
        setJoined(true);*/

    };

   /* const handleLeave = async () => {
       if (!user) return;
        await leaveActivity(user.id, activity.id);
        setJoined(false); 
    };

    if (!activity) return<p>loading..</p>*/

    

   

    const handleLeave = async () => {
        if (!user) {
            router.push("/login-form");
            return;
        }
        if(!activity?.id) return;

        try{
        await leaveActivity(user.id, activity.id);
        setJoined(false);
        alert("you have left the activity");
        }catch(error){
        console.error("failed to leave activity", error);
        }
        

        
    };
    const isEligible = 
    user &&
    user.age >= activity.minAge &&
    user.age <= activity.maxAge &&
    !joined;
    if (!activity) return<p>loading..</p>
    

    return(
        <div className="detail-page">
        <div className="image-container">
        <img src={activity.asset.url} alt={activity.name} className="activity-image"/>
        <button className="tilmeld-button" onClick={joined ? handleLeave : handleJoin}>
          tilmild
        </button>
        </div>

        <div className="activity-info">
            <h2>{activity.name}</h2>
            <p><strong>{activity.minAge} {activity.maxAge}</strong></p>
            <p>{activity.time}</p>
            <p>{activity.description}</p>

        </div>

           

      { user && (
        <button className="detail-button" onClick={joined? handleLeave : handleJoin}
        disabled={!isEligible && !joined}>
         {joined? "Leave Activity" : "Register"}
        </button>

      )}

        </div>

    );
   
} 
