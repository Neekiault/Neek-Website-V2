<script setup lang="ts">
import {useNeekStore} from "/store/neekStore.ts"
import {useEventListener} from "@vueuse/core"

const neekStore = useNeekStore()
const { headerMoods } = neekStore
const { currentMood } = storeToRefs(neekStore)

onMounted(()=>{
    document.addEventListener('keydown', (e)=>{
        if(e.key === ' '){
            if(currentMood.value === headerMoods.length - 1){
                currentMood.value = 0
                return
            }
            currentMood.value++
        }
    })
})
</script>
<template>
<div>
    <section class="intro">
        <component :is="headerMoods[currentMood].component" />
        <!-- <IndexIntroText /> -->
        <footer>
            <p v-html="$t('index.intro.footerText')"></p>
            <UiMainButton :to="'#test'" :style="{width: '425px', height: '70px'}">
                <template #text>
                    {{ $t('index.intro.spacebarText') }}
                </template>
            </UiMainButton>
        </footer>
    </section>
</div>
</template>
<style lang="scss" scoped>
.intro{
    background: var(--main-purple);
    height: 100svh;
    padding: 40px 60px;

    display: flex;
    align-items: center;
    justify-content: center;

    footer{
        position: absolute;
        bottom: 0px;
        
        width: 100%;
        padding: 40px 60px;

        display: flex;
        justify-content: space-between;
        align-items: center;

        p{
            font-family: 'gotu', sans-serif;
            font-size: 1.1em;
            line-height: 1.5em;
            text-transform: uppercase;
            color: var(--main-grey);
        }
    }
}
</style>