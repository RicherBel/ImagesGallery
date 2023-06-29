<script>
    import { page } from '$app/stores';
    import ErrorHandle from "$lib/util/ErrorHandle.svelte"
</script>

<ErrorHandle status = {$page.status} msg = {$page.error.message} />