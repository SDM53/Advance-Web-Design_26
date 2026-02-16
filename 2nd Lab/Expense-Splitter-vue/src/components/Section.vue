<script setup>
    const props = defineProps({
        title: {
            type: String,
            default: 'Section'
        }
    })
</script>

<template>
    <selection>
      <h3>{{title}}</h3>
     <slot></slot>
    </selection>
</template>

<style scoped>
section {
    margin-top: 16px;
}

section h3 {
    margin: 0 0 6px;
    font-size: 14px;
    color: #00a86b;
}
</style>