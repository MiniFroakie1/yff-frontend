<script>
    import { enhance } from "$app/forms";
    import {browser} from "$app/environment";
    import {onMount} from "svelte";
    import {goto} from "$app/navigation";

    export let form;
    export let data;

    onMount(async () => {
        let URLParams = new URLSearchParams(window.location.search);

        console.log(data)

        if(data.cookie) {
            return  goto(`/${URLParams.get('back') ?? ''}`);
        }
    })
</script>

<div id="main">
    {#if browser}
        <form method="post" use:enhance={() => {
                 return async ({ result }) => {
                console.log(result.data.end);
                window.location.href = `/${result.data.end ?? ""}`
            }
        }}>
            <h2>Login</h2>
            <input type="email" name="email" placeholder="Email" value={form?.email ?? ''} required /><br>
            <input type="password" name="password" placeholder="Password" value={form?.password ?? ''} required /><br>
            <p>
                <button>Submit</button>
                <button><a href="/signup?back={new URLSearchParams(window.location.search).get('back')}">Signup</a></button>
            </p>
        </form>
        {#if form?.success}
            { window.location.href = '/'}
        {/if}
    {/if}
</div>

<style>
    #main {
        display: flex;
        flex: 1 1 auto;
        align-items: center;
        justify-content: center;
        margin-bottom: 50px;
    }
    form {
        background-color: #555;
        padding: 20px;
    }

    input {
        margin: 5px 0;
    }

    button {
        margin-top: 10px;
        background-color: #333;
        border: none;
        padding: 5px 15px;
        border-radius: 3px;
    }

    h2 {
        margin: 0 0 5px;
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    p {
        display: flex;
        justify-content: space-evenly;
    }
</style>
