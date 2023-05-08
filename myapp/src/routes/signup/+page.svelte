<script>
    import { enhance } from "$app/forms";
    export let form;
    /*import {email, Hint, HintGroup, maxLength, required, useForm, validators} from 'svelte-use-form';
    import { link } from 'svelte-spa-router';


    const form = useForm();

    const passwordMatch = (value, form) => {
        if(value !== form.values.password) {
            return { passwordMatch: true };
        }
    }

    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Authorization", `Basic dXNlcjphYjQyOTFlMi05NTBjLTRhOTYtYTFhNy0yZDY5MTUyZTY3YjQ=`);

    const login = async e => {
        const formData = new FormData(e.target);
        console.log(JSON.stringify({
            "name": formData.get("name"),
            "email": formData.get("email"),
            "password": formData.get("password")
        }));
        let UUID = await fetch('http://localhost:8080/api/signup', {
            method: "POST",
            body: JSON.stringify({
                "name": formData.get("name"),
                "email": formData.get("email"),
                "password": formData.get("password")
            }),
            headers: headers,
            mode: "no-cors"
        }).then(res => res.json());
        if(UUID[0] !== undefined) {
            sessionStorage.setItem("UUID", UUID[0]);
            window.location.href = "/#/user";
        } else {
            document.getElementById("name").value = formData.get("name");
            document.getElementById("email").value = formData.get("email");
            document.getElementById("password").value = formData.get("password");
        }
    }*/
</script>

<div id="main">
    <form method="post" use:enhance={() => {
        console.log("yay?")
             return async ({ result }) => {
            console.log(result.data.end);
            window.location.href = `/${result.data.end ?? ""}`
        }
    }}>
        <h2>Signup</h2>
        <input type="email" name="email" placeholder="Email" value={form?.email ?? ''} required /><br>
        <input type="text" name="name" placeholder="name" value={form?.name ?? ''} required /><br>
        <input type="password" name="password" placeholder="Create password" value={form?.password ?? ''} maxlength="50" required/><br>
        <input type="password" name="passwordConfirmation" placeholder="Confirm password" value={form?.passwordConfirmation ?? ''} required/><br>
        <p>
            <button>Submit</button>
            <button><a href="/login?back={new URLSearchParams(window.location.search).get('back')}">Login</a></button>
        </p>
    </form>
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
