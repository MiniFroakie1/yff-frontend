/** @type {import('./$types').RequestHandler} */
export async function GET({ cookies }) {
    cookies.delete("UUID", {path: '/'});
    return new Response();
}
