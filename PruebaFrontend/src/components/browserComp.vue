<script setup>
import { ref, watch } from 'vue';
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
    modelValue: String
});

const emit = defineEmits(["update:modelValue"]);

const searchTerm = ref(props.modelValue);
watch(searchTerm, newValue => {
    emit("update:modelValue", newValue);
});
</script>
<template>
    <div class="browser">
        <input class="inputBrowser" v-model="searchTerm" type="text" placeholder="Filter your beer!">
    </div>
</template>
<style lang="scss" scoped>
.browser {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90vw;
    height: 30vh;

    .inputBrowser {
        background-color: rgb(32, 32, 32);
        width: 80vw;
        height: 10vh;
        color: rgb(226, 226, 226);
        font-size: 6vh;
    }
}
</style>