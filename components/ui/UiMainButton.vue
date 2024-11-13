<script setup lang="ts">
</script>
<template>
    <NuxtLink>
        <span v-if="$slots.icon" class="icon">
            <slot name="icon" />
        </span>
        <span class="text">
            <slot name="text" />
        </span>
        <slot />
    </NuxtLink>
</template>
<style lang="scss" scoped>
a{
    background: var(--main-grey);
    border-radius: 4px;
    font-size: .95em;
    font-weight: 500;

    padding: 7px 8px;

    height: 58px;
    //to see
    width: 131px;

    position: relative;
    display: inline-flex;
    align-items: end;
    justify-content: flex-start;

    text-decoration: none;

    border: 1px solid var(--main-purple);

    transition: border .3s ease-in-out, background .3s ease-in-out;
}
.icon{
    position: absolute;
    color: var(--main-purple);
    display: block;
    
    width: 12px;
    height: 12px;

    top: 7px;
    right: 8px;

    transition: color .3s ease-in-out;
}

.text{
    color: var(--main-purple);

    transition: color .3s ease-in-out;
}

@media (hover:hover){
    a:hover{
        background: var(--main-purple);

        .text{
            color: var(--main-grey);
        }

        .icon{
            color: var(--main-grey);
        }
    }
}
</style>