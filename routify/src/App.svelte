<script lang="ts">
    import "./stores/theme";
    import TailwindCss from "./TailwindCss.svelte";
    import { Router } from "@roxi/routify";
    import { routes } from "../.routify/routes";

    // import Serviceworker from "./Serviceworker.svelte";

    import { FirebaseApp } from "sveltefire";
    import firebase from "firebase/app";
    import "firebase/auth";
    import "firebase/firestore";
    import config from "./firebase/config";
    firebase.initializeApp(config);
</script>

<section id="App" class="px-2 py-2 bg-white-100 md:py-24">
    <div><h1>pages/App.svelte</h1></div>
    <br />
    <FirebaseApp {firebase}>
        <TailwindCss />
        <Router {routes} />
    </FirebaseApp>
</section>

<!--- <Serviceworker /> -->

<style global>
    .btn {
        @apply shadow;
        @apply rounded-md;
        @apply px-4;
        @apply py-2;
        @apply flex;
        @apply justify-center;
        @apply items-center;
    }

    html.dark-mode {
        filter: invert(100%);
        background: white;
    }

    html.dark-mode img,
    html.dark-mode svg,
    html.dark-mode video,
    html.dark-mode canvas {
        filter: invert(100%);
    }
</style>
