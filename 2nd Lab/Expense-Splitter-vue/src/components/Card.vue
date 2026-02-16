<template>
    <main class="card">
        <slot />
    </main>
</template>

<style scoped>
.card {
    width: min (600px, 100%);
    background: #a8e4a0;
    padding: 16px;
    box-shadow: 0 10px 24px rgb(4, 41, 3);
}
</style>
