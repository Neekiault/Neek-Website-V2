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
    color: var(--main-purple);
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

    transition: border .3s ease-in-out, background .3s ease-in-out, color .3s linear;

    &.main-purple{
        background: var(--main-grey);
        color: var(--main-purple);
    }

    &.secondary-green{
        background: var(--main-purple);
        color: var(--secondary-green);
    }

    &.secondary-purple{
        background: var(--main-green);
        color: var(--main-purple);
    }
}
.icon{
    position: absolute;
    display: block;
    
    width: 12px;
    height: 12px;

    top: 7px;
    right: 8px;
}

@media (hover:hover){
    a:hover{
        background: var(--main-purple);
        color: var(--main-grey);
        border-color: var(--main-purple);

        &.main-purple{
            background: var(--main-green);
            color: var(--main-purple);
            border-color: var(--main-purple);
        }
        
        &.secondary-green{
            background: var(--secondary-purple);
            color: var(--main-black);
            border-color: var(--main-black);
        }

        &.secondary-purple{
            background: var(--secondary-grey);
            color: var(--main-purple);
            border-color: var(--main-purple);
        }
    }
}
</style>