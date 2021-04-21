<script lang="ts">
	import { goto } from "@roxi/routify";
	import { onMount } from "svelte";
	import firebase from "firebase/app";

	onMount(() => {
		if (firebase.auth().currentUser) {
			firebase
				.auth()
				.currentUser.delete()
				.then(() => {
					$goto("/auth/register");
				});
		}
	});
</script>
