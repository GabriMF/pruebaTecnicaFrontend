<script setup>

</script>
<template>
    <section class="browserSection">
        <div>
            <input class="browserInput" type="text">
        </div>
    </section>
</template>
<style lang="scss" scoped>
.browserSection {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90vw;
    height: 90vh;

    .browserInput {
        background-color: rgb(32, 32, 32);
        width: 80vw;
        height: 10vh;
        color: rgb(226, 226, 226);
        font-size: 6vh;
    }
}
</style>