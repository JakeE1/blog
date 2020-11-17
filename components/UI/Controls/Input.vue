<template>
    <div class="control">
    <label><slot /></label>
    <input
    v-bind="$attrs"
    @input="$emit('input', $event.target.value)"
    :value="value"
    :type="type"
    />
    </div>
</template>

<script>
export default {
   props: {
    value: {
           type: String,
           default: ''
       },
    type: {
           type: String,
           default: 'text'
       }
   } 
}
</script>