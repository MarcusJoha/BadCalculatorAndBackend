<template>
    <button class="button">
        <slot />
    </button>
</template>


<style>
    .button {
        font-size: 18px;
    }

    button:hover {
        background-color: rgb(184, 17, 17)
    }

</style>