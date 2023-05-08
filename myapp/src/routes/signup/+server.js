/** @type {import('./$types').Action} */
export const actions = {
    default: async ({ request, url, cookies }) => {
        const formData = await request.formData();
        console.log(formData);

        let UUID = await fetch('http://localhost:8080/api/signup', {
            method: "POST",
            body: JSON.stringify({
                "name": formData.get("name"),
                "email": formData.get("email"),
                "password": formData.get("password")
            }),
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Basic dXNlcjphYjQyOTFlMi05NTBjLTRhOTYtYTFhNy0yZDY5MTUyZTY3YjQ=",
                "Access-Control-Allow-Origin": "http://localhost:8080"
            }
        }).then(res => res.json());
        if(UUID) {
            cookies.set("UUID", UUID[0])
            return  {
                end: url.searchParams.get("back"),
            }
        }
    }
}
