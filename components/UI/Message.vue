<template>
    <div class="message" :class="mesClass">
        <p> {{ message }}</p>
    </div>
</template>

<script>
export default {
    props: {
        mesClass: {
            type: String,
            default: 'success'
        },
        message: {
            type: String,
            required: true
        },
    }
}
</script>

<style lang="scss">
.message {
    font-size: 22px;
    &.success {
        color:#188658;
    }
    &.error {
        color:#750505;
    }
}
</style>