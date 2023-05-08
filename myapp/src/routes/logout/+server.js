export function GET({ cookies, params }) {
    console.log(params)
    cookies.delete("UUID");
    return new Response();
}
