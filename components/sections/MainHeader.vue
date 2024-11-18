<script setup lang="ts">
import {useMoodStore} from "@/store/moodStore"

const neekStore = useMoodStore()
const { moodClass } = storeToRefs(neekStore)
</script>
<template>
    <header>
        <div id="neek" :class="[moodClass]">
            <IconsNeekLogo :height="58" />
        </div>
        <div class="menu">
            <UiMainButton :to="'#test'" :class="[moodClass]">
                <template #icon>
                    <IconsSmiley class="button-icon" />
                </template>
                <template #text>
                    {{ $t('menu.projects') }}
                </template>
            </UiMainButton>
            <UiMainButton :to="'#test'" :class="[moodClass]">
                <template #icon>
                    <IconsMouse class="button-icon" />
                </template>
                <template #text>
                    {{ $t('menu.about') }}
                </template>
            </UiMainButton>
            <UiMainButton :to="'#test'" :class="[moodClass]">
                <template #icon>
                    <IconsComputer class="button-icon" />
                </template>
                <template #text>
                    {{ $t('menu.contact') }}
                </template>
            </UiMainButton>
        </div>
    </header>
</template>
<style lang="scss" scoped>
header{
    position: absolute;
    width: 100%;
    display: flex;
    justify-content: space-between;

    padding: 40px 60px;

    z-index: 5;
}

#neek{
    color: var(--main-grey);
    height: 58px;

    transition: color .5s ease-in-out;

    &.main-purple{
        color: var(--main-grey);
    }
    
    &.secondary-green{
        color: var(--main-purple);
    }

    &.secondary-purple{
        color: var(--main-black);
    }
}

.menu{
    display: flex;
    gap: 8px;
}

svg{
    height: auto;
    width: auto;
}
</style>