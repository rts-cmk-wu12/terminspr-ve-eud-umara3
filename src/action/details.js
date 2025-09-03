
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
            Authorization:`Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjo3LCJ1c2VybmFtZSI6InVzZXIzIiwicGFzc3dvcmQiOiIkMmEkMTUkT01EVS44ZXRSaGY1N2ZEbVJudS9JdWhpbk5NUUpsSjh1amRVSm94RzRKWXZwdFVMNFdDZW0iLCJmaXJzdG5hbWUiOiJNYXJ0aW4iLCJsYXN0bmFtZSI6IlBvdWxzZW4iLCJhZ2UiOjIxLCJyb2xlIjoiZGVmYXVsdCIsImNyZWF0ZWRBdCI6IjIwMjEtMDktMjNUMDg6MTQ6MzAuNDA2WiIsInVwZGF0ZWRBdCI6IjIwMjEtMDktMjNUMDg6MTQ6MzAuNDA2WiJ9LCJpYXQiOjE2MzIzOTM0MTUsImV4cCI6MTYzMjM5NzAxNX0.WNiaflNk5_6tTOvIaNrOO9XkdG70ptBNt6sJIUBhlJg`,
        },
    });

    return response.json();
}

export async function leaveActivity(userId, activityId) {
    const response = await fetch(`${BASE_URL}/users/${userId}/activities/${activityId}`, {
        method: "DELETE",
        headers: {
          Authorization:`Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjo1LCJ1c2VybmFtZSI6InVzZXIxIiwicGFzc3dvcmQiOiIkMmEkMTUkay5nVzZqT005ZXlWSU1kTEMwRy9MLjdQT0J1bGVWNTYzNWNhejdXaDc5VFRkSTBnVWsuT2UiLCJmaXJzdG5hbWUiOiJNYXRoaWxkZSIsImxhc3RuYW1lIjoiUGV0ZXJzZW4iLCJhZ2UiOjE0LCJyb2xlIjoiZGVmYXVsdCIsImNyZWF0ZWRBdCI6IjIwMjEtMDktMjNUMDg6MTI6MDguMDgyWiIsInVwZGF0ZWRBdCI6IjIwMjEtMDktMjNUMDg6MTI6MDguMDgyWiJ9LCJpYXQiOjE2MzIzODczNzgsImV4cCI6MTYzMjM5MDk3OH0.QKGDS9z1NuACM_AHI9K_Ty3RfxsBenibMvqtK-diEH8`,   
        },
    });
   return response.json(); 
}