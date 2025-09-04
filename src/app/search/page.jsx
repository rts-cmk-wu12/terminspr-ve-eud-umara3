
"use client";

import { fetchActivities } from "@/action/activities";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Footer from "@/components/footer";
import SearchBar from "@/components/ui/searchbar";
import ActivityCard from "@/components/activity-card";
import "./search.scss"

export default function SearchPage() {
    const searchParams = useSearchParams();
    const query = searchParams.get("search")?.toLocaleLowerCase() || "";
    const [activities, setActivities] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadActivities() {
            try{
                const data = await fetchActivities();
                const filtered = data.filter((activity) =>
                    activity.name.toLocaleLowerCase().includes(query)
             
            );
            setActivities(filtered);
        } catch(error) {
            console.error("failed to fetch ", error);

        }finally{
            setLoading(false);
        }
            }
            loadActivities();
        }, [query]);

        return(
            <div className="page">
                <SearchBar />
            
        <h1 className="page-heading">Søg</h1>

        <div className="list">
            {loading? (
                <p>Loading..</p> 
            ): activities.length > 0 ? (
                activities.map((activity) => (
                <ActivityCard key={activity.id} activity={activity} />
            ))
        ) :(
            <p>ingen aktiviter matcher din søgning.</p>
        )
            }
        </div>
      <Footer/>
      </div>
        );  
}