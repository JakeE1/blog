<template>
    <div class="control">
    <label><slot /></label>
    <input
    v-bind="$attrs"
    @input="$emit('input', $event.target.value)"
    :value="value"
    :required="required"
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
       },
    required: {
           type: Boolean,
           default: true
       }   
   } 
}
</script>