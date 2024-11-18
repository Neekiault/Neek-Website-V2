<script setup lang="ts">
const introText = ref<HTMLElement>()
const {t} = useI18n()

watch(introText, async ()=>{
    if(introText.value){
        console.log(t("index.intro.moodIntroText"))
        introText.value.innerHTML = t("index.intro.moodIntroText")
        const icons: HTMLCollectionOf<Element> = introText.value.getElementsByClassName('icon')

        for (let i = 0; i < icons.length; i++) {
            const iconClasses = [...icons[i].classList].filter(iconClass => iconClass !== 'icon')
            iconClasses.forEach(async iconClass => {
                const response = await fetch("/assets/icons/" + iconClass + ".svg")
                icons[i].innerHTML = await response.text()
            });
        }

        console.log(introText.value.getElementsByClassName('neek-bonhomme'))
    }
})
</script>
<template>
    <div id="intro-mood-wrapper" class="wrapper" ref="introText" v-html="$t('index.intro.moodIntroText')">
    </div>
</template>
<style lang="scss">
#intro-mood-wrapper{
    position: absolute;
    color: white;

    max-width: 800px;
    

    h1{
        font-family: 'Cardo', serif;
        font-size: 8em;
        line-height: 1.1em;
        svg{
            width: 1.75em;
            height: 1.75em;
        }
    }

    p{
        font-size: 2.7em;
        .icon{
            position: relative;
            top: .1em;
            font-size: .8em;
            display: inline-flex;
            align-items: center;
            justify-content: center;
        }
    }
}
</style>