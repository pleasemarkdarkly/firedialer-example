<script lang="ts">
    import { darkmode } from "../../stores/theme";
    import firebase from "firebase/app";
    import { User } from "sveltefire";
    import { goto } from "@roxi/routify";
    import { user } from "../example/app/_store";
</script>

<section id="Hero" class="px-2 py-2 bg-green-300 md:py-24">
    <div>
        <h1>pages/_components/Header.svelte</h1>
    </div>
    <br />
    <User let:user>        
        <div
            class="flex items-center justify-center gap-2 mr-2 cursor-pointer"
            on:click={$goto("/user")}
        >
            {#if user.photoURL !== null}
                <img
                    src={user.photoURL}
                    alt="User"
                    class="w-8 h-8 rounded-full"
                />{user.displayName} ({user.email})
                <br />
            {:else if user.isAnonymous === true}
                <img
                    src="../../svgs/icons/user.svg"
                    alt="User"
                    class="w-8 h-8 rounded-full"
                />Anonymous
            {:else}
                <img
                    src="../../svgs/icons/user.svg"
                    alt="User"
                    class="w-8 h-8 rounded-full"
                />Anonymous
            {/if}
        </div>

        <div slot="signed-out">
            <a
                class="inline-flex items-end gap-2 px-3 py-1 mx-2 mt-4 text-base bg-gray-100 border-0 rounded shadow focus:outline-none hover:bg-gray-200 lg:mt-0 dark:bg-gray-700"
                href="/auth/login/"
            >
                <i class="fas fa-sign-in-alt" /> Sign In
            </a>
        </div>
        <div>
            <a
                class="inline-flex items-end gap-2 px-3 py-1 mx-2 mt-4 text-base bg-gray-100 border-0 rounded shadow focus:outline-none hover:bg-gray-200 lg:mt-0 dark:bg-gray-700"
                href="/auth/logout"
                on:click|preventDefault={() => {
                    firebase.auth().signOut();
                }}
            >
                <i class="fas fa-sign-out-alt" /> Sign Out
            </a>
        </div>
        <div
            class="inline-flex items-center gap-2 px-3 py-1 mx-2 mt-4 text-base bg-gray-100 border-0 rounded shadow focus:outline-none hover:bg-gray-200 lg:mt-0 dark:bg-gray-700"
            on:click={() => {
                $darkmode = !$darkmode;
            }}
        >
            {#if $darkmode}
                <i class="fas fa-moon" />
            {:else}
                <i class="fas fa-sun" />
            {/if}
            {$darkmode ? "Dark" : "Light"}
        </div>
    </User>
</section>
