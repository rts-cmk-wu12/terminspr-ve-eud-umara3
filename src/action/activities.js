
const BASE_URL = "http://localhost:4000/api/v1";

export async function fetchActivities() {
    const response = await fetch(`${BASE_URL}/activities`, {
    method: "GET",    
    });
    if (!response.ok) throw new Error("Fail to fetch");
    return response.json();
}

export async function login(username,password) {
    const response = await fetch("http://localhost:4000/auth/token", {
        method: "POST",
        headers: {"Content-Type" : "application/json"},
        body: JSON.stringify({username,password}),
    });

    if (!response.ok) throw new Error("login failed");
    return response.json();
}