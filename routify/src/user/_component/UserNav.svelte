<script lang="ts">
    import firebase from "firebase/app";
</script>

<section id="UserNave" class="px-2 py-2 bg-orange-300 md:py-24">
    <div>
        <h1>pages/user/_components/UserNav.svelte</h1>
    </div>
    <div>
        <nav>
            <ul>
                <li class="nav-item">
                    <a
                        class="flex items-center px-3 py-2 text-xs font-bold leading-snug text-blue-700 uppercase hover:opacity-75"
                        href="/auth/logout"
                        on:click|preventDefault={() => {
                            firebase.auth().signOut();
                        }}
                    >
                        Logout
                    </a>
                </li>
            </ul>
        </nav>
    </div>
</section>
