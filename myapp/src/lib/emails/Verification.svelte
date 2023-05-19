<script>
    import { Heading, Html, Text } from "svelte-email";

    export let name;
    export let email;
    export let number = (Math.floor(Math.random * 10000) + 10000).toString().substring(1);
</script>

<Html lang="en">
    <Heading>
        Verify your email
    </Heading>
    <Text>
        To verify your email go to <link href="http://localhost:5173/verify/{email}">
    </Text>
</Html>
