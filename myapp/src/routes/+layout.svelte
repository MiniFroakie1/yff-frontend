<script>
    function logout() {
        fetch("/api/logout")
        window.location.reload();
    }
</script>
<main>
    <nav id="navbar">
        <a href="/" >Home</a>
        <a href="/all_users">All Users</a>
        <button on:click={logout}>Logout</button>
        <a href="/user"><img src="/user-solid.svg" alt=":(" height="20px"></a>
    </nav>
    <slot />
</main>
