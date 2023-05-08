/** @type {import('./$types').PageServerLoad} */

export async function load ({ cookies }) {
    if(!cookies.get("UUID")) {
        return {
            data: {
                noCookie: "no"
            }
        }
    }
    console.log(cookies.get("UUID"))
    const res = await fetch(`http://localhost:8080/api/${cookies.get("UUID")}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Basic dXNlcjphYjQyOTFlMi05NTBjLTRhOTYtYTFhNy0yZDY5MTUyZTY3YjQ=",
            "Access-Control-Allow-Origin": "http://localhost:8080"
        }
    }).then(res => res.json());
    console.log(res)
    return {
        data: res
    }
}
