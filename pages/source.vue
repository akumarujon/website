<template>
    <div>
        <!-- Your page content here -->
    </div>
</template>

<script>
export default {
    beforeRouteEnter(to, from, next) {
        if (process.client && to.path === '/source') {
            window.location.href = 'https://github.com/akumarujon/website';
        } else {
            next();
        }
    }
};
</script>
  