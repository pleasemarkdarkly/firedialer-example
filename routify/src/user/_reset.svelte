<script>
    import { goto } from "@roxi/routify";
    import { User } from "sveltefire";
    import UserFooter from "./_components/UserFooter.svelte";
    import UserNav from "./_components/UserNav.svelte";
    import firebase from "firebase/app";
</script>

<User
    let:user
    on:user={() => {
        if (!firebase.auth().currentUser) {
            $goto("/");
        }
    }}
>
    <section id="Pages-Index" class="px-1 py-1 bg-white-100 md:py-10">
        <div>
            <h1>pages/index.svelte</h1>
        </div>

        <UserNav />
        <main>
            <slot />
        </main>
        <UserFooter />
    </section>

    <div slot="signed-out">Loading...</div>
</User>
