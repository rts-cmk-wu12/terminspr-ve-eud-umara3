
const BASE_URL = "http://localhost:4000/api/v1";

export async function getActivityById(id) {
    const response = await fetch(`${BASE_URL}/activities/${id}`);
    if(!response.ok) throw new Error("failed to fetch");
    return response.json();
}

export async function joinActivity(userId, activityId){
    const response = await fetch(`${BASE_URL}/users/${userId}/activities/${activityId}`, {
        method:"POST",
        headers:{
            Authorization:`Bearer`,
        },
    });

    return response.json();
}

export async function leaveActivity(userId, activityId) {
    const response = await fetch(`${BASE_URL}/users/${userId}/activities/${activityId}`, {
        method: "DELETE",
        headers: {
          Authorization:`Bearer`,   
        },
    });
   return response.json(); 
}