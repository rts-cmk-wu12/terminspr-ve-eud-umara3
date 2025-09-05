
import Link from "next/link";
import "./activity-card.scss";

export default function ActivityCard({activity}) {
    return(
        <Link href={`/activities/${activity.id}`} className="card-link">
        <div className="wrapper">
        <div className="card">
            <img src={activity.asset.url} alt={activity.name} className="image" />
            <div className="description">
                <h3>{activity.name}</h3>
                <p>{` ${activity.minAge}–${activity.maxAge}år`}</p>
            </div>
        </div>
        </div>
        </Link>
    );
}