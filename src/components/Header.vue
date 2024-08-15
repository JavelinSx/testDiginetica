<template>
    <header class="header">

        <mq-layout mq="tablet+" class="header-mq">
            <BaseLogo />
            <BaseButton styledType="big" text="Каталог" />

            <BaseInput :icon="searchIcon" placeholder="Поиск по 100 000 товаров " styledType="input-nav-search" />
            <div class="header-link-container">
                <BaseNavLink link="/info" text="Информация о компании" />
                <BaseNavLink link="/info" text="Контакты" />
                <BaseNavLink link="/info" text="Полезные ссылки" />
            </div>
        </mq-layout>
        <mq-layout mq="mobile" class="header-mq">
            <ArrowIcon class="header-menu-filter" />
            <div class="header-search-wrapper">
                <div class="header-search-container">
                    <BaseInput :iconReset="resetIcon" placeholder="Поиск по 100 000 товаров "
                        styledType="input-nav-search" />
                    <BaseButton styledType="small" text="Найти" class="button-search" />
                </div>

                <BaseDivider class="header-divider" />
            </div>

        </mq-layout>


    </header>
</template>
<script lang="ts">
import searchIcon from '../assets/icon/icon-search.svg';
import resetIcon from '../assets/icon/icon-close.svg'
import { Component, Vue } from 'vue-property-decorator';
import ArrowIcon from '../assets/icon/icon-arrow.svg'
import BaseNavLink from './ui/BaseNavLink.vue';
import BaseInput from './ui/BaseInput.vue';
import BaseButton from './ui/BaseButton.vue';
import BaseLogo from './ui/BaseLogo.vue';
import BaseDivider from './ui/BaseDivider.vue';
@Component({
    components: {
        BaseNavLink, BaseInput, BaseButton, BaseLogo, BaseDivider, ArrowIcon
    }
})
export default class Header extends Vue {
    private searchIcon: string = searchIcon;
    private resetIcon: string = resetIcon
}
</script>
<style lang="scss" scoped>
.header {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 24px;
}

.header-mq {
    position: relative;
    width: 100%;
    @include flex-row-start;
}

.header-search-container {
    width: 100%;
    @include flex-row-between;
}

.header-search-wrapper {
    width: 100%;
}

.header-link-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 20px;

}

.header-menu-filter {
    margin-right: 16px;
}

.header-divider {
    position: relative;
    bottom: -6px;
}

.button-search {
    margin-left: 16px;
}
</style>