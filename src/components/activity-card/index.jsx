
import "./activity-card.scss";
//import Image from "next/image";

export default function ActivityCard({activity}) {
    return(
        <div className="wrapper">
        <div className="card">
            <img src={activity.asset.url} alt={activity.name} className="image" />
            <div className="description">
                <h3>{activity.name}</h3>
                <p>{` ${activity.minAge}–${activity.maxAge}år`}</p>
            </div>
        </div>
        </div>
    )
}