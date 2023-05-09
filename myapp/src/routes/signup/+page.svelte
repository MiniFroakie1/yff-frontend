<script>
    import { enhance } from "$app/forms";
    import {goto} from "$app/navigation";
    import {browser} from "$app/environment";
    import {onMount} from "svelte";

    export let form;
    export let data;

    let URLParams = new URLSearchParams;

    onMount(async () => {
        URLParams = new URLSearchParams(window.location.search);

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
                if(result.data.success) {
                    console.log(result.data.end);
                    await goto(`/${result.data.end ?? ""}`);
                }
            }
        }}>
            <h2>Signup</h2>
            <input type="email" name="email" placeholder="Email" value={form?.email ?? URLParams.get('email') ?? ''} required /><br>
            <input type="text" name="name" placeholder="name" value={form?.name ??  URLParams.get('name') ?? ''} required /><br>
            <input type="password" name="password" placeholder="Create password" value={form?.password ?? ''} maxlength="50" required/><br>
            <input type="password" name="passwordConfirmation" placeholder="Confirm password" value={form?.passwordConfirmation ??   ''} required/><br>
            <p>
                <button>Submit</button>
                {#if URLParams.get('back')}
                    <button><a href="/login?back={URLParams.get('back')}">Login</a></button>
                {:else}
                    <button><a href="/login}">Login</a></button>
                {/if}
            </p>
        </form>
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
