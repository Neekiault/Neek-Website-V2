<script setup lang="ts">
</script>
<template>
    <header>
        <div id="neek">
            <IconsNeekLogo :height="58" />
        </div>
        <div class="menu">
            <UiMainButton :to="'#test'">
                <template #icon>
                    <IconsSmiley />
                </template>
                <template #text>
                    {{ $t('menu.projects') }}
                </template>
            </UiMainButton>
            <UiMainButton :to="'#test'">
                <template #icon>
                    <IconsMouse />
                </template>
                <template #text>
                    {{ $t('menu.about') }}
                </template>
            </UiMainButton>
            <UiMainButton :to="'#test'">
                <template #icon>
                    <IconsComputer />
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
}

#neek{
    color: var(--main-grey);
    height: 58px;
}

.menu{
    display: flex;
    gap: 8px;
}
</style>