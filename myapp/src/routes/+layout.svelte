<main>
    <nav id="navbar">
        <a href="/" >Home</a>
        <a href="/all_users">All Users</a>
        <button onclick="fetch('/logout'); window.location.reload();">Logout</button>
        <a href="/user"><img src="/user-solid.svg" alt=":(" height="20px"></a>
    </nav>
    <slot />
</main>
