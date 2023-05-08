<script>
    export let data;
</script>

{#await data.data}
    <p>loading ...</p>
    {:then value}
    <table>
        <tr>
            <th>UUID</th>
            <th>Name</th>
            <th>Email</th>
        </tr>
        {#each value as user}
            <tr>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
            </tr>
        {/each}
    </table>
{/await}

<style>
    table, th, td {
        border:1px solid white;
    }
    table {
        width: 500px;
    }
    td {
        text-align: start;
    }
</style>
