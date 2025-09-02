


"use client";
import "./activities.scss";

import { fetchActivities } from "@/action/activities";
import { useEffect,useState } from "react";
import ActivityCard from "@/components/activity-card";
import Footer from "@/components/footer";


export default function ActivitiesPage() {
    const [activities, setActivities] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchActivities()
        .then(setActivities)
        .catch(console.error)
        .finally(() => setLoading(false));
    }, []);

    return(
        <div className="page">
            <h1 className="page-heading">Aktiviteter</h1>
            <div className="list">
                {loading? (
                    <p>Loading..</p>

                ) :(
                    activities.map((activity) => (
                        <ActivityCard key={activity.id} activity={activity} />

                    ))
                )

                }
            </div>
            <Footer />
        </div>
    )
}