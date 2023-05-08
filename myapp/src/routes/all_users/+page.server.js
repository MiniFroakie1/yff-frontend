/** @type {import('./$types').PageLoad} */
export async function load({}) {
    const res = await fetch('http://localhost:8080/api', {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Basic dXNlcjphYjQyOTFlMi05NTBjLTRhOTYtYTFhNy0yZDY5MTUyZTY3YjQ=",
            "Access-Control-Allow-Origin": "http://localhost:8080"
        }
    }).then(res => res.json());
    return {
        data: res
    }
}
