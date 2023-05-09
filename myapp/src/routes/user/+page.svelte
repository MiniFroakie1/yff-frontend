<script>
    import { goto } from "$app/navigation";
    import {onMount} from "svelte";
    export let data;

    onMount(async () => {
        if(!await data.cookie) {
            return  goto('/login?back=user')
        }
    })
</script>

{#await data.data}
    <p>loading ...</p>
    {:then value}
    <table>
        <tr>
            <td>id:</td>
            <td>{value.id}</td>
        </tr>
        <tr>
            <td>name:</td>
            <td>{value.name}</td>
        </tr>
        <tr>
            <td>email:&nbsp;&nbsp;</td>
            <td>{value.email}</td>
        </tr>
    </table>
{/await}
