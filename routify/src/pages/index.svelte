<script>
    import ForkMe from "./_components/ForkMe.svelte";
    import { metatags } from "@roxi/routify";
    import Hero from "./_components/Hero.svelte";
    import About from "./_components/About.svelte";
    import Placeholder from "./_components/Placeholder.svelte";
    metatags.title = "My Routify app";
    metatags.description = "Description coming soon...";
</script>

<section id="Pages-Index" class="px-1 py-1 bg-white-100 md:py-10">
    <div>
        <h1>pages/index.svelte</h1>
    </div>

    <ForkMe />
    <Hero />
    <About />
    <Placeholder />
</section>
