async function apiCall(param) {
    let option = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(param.body)
    }
    let data = await fetch(import.meta.env.VITE_APP_BACKEND_API + param.route, option)
    let response = await data.json()
    return response
}
export default apiCall;