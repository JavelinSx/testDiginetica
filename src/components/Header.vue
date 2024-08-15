<template>
    <header class="header-wrapper">
        <div class="header">
            <mq-layout mq="tablet+" class="header-mq">
                <BaseLogo />
                <BaseButton styledType="big" text="Каталог" />
                <BaseInput :icon="searchIcon" :iconReset="resetIcon" placeholder="Поиск по 100 000 товаров"
                    styledType="input-nav-search" class="header-search" />
                <div class="header-link-container">
                    <BaseNavLink link="/info" text="Информация о компании" />
                    <BaseNavLink link="/info" text="Контакты" />
                    <BaseNavLink link="/info" text="Полезные ссылки" />
                </div>
            </mq-layout>
            <mq-layout mq="mobile" class="header-mq">
                <button @click="toggleFilter" class="filter-toggle">
                    <IconFilter class="header-menu-filter" />
                </button>
                <div class="header-search-wrapper">
                    <div class="header-search-container">
                        <BaseInput :iconReset="resetIcon" placeholder="Поиск по 100 000 товаров"
                            styledType="input-nav-search" />
                        <BaseButton styledType="small" text="Найти" class="button-search" />
                    </div>
                    <BaseDivider class="header-divider" />
                </div>
            </mq-layout>
        </div>
        <FilterProduct v-show="isFilterVisible" class="filter" :categories="categories" :brands="brands"
            :sizes="sizes" />
    </header>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import searchIcon from '../assets/icon/icon-search.svg';
import resetIcon from '../assets/icon/icon-close.svg'
import IconFilter from '../assets/icon/icon-filter.svg'
import BaseNavLink from './ui/BaseNavLink.vue';
import BaseInput from './ui/BaseInput.vue';
import BaseButton from './ui/BaseButton.vue';
import BaseLogo from './ui/BaseLogo.vue';
import BaseDivider from './ui/BaseDivider.vue';
import FilterProduct from './FilterProduct.vue';

@Component({
    components: {
        BaseNavLink, BaseInput, BaseButton, BaseLogo, BaseDivider, IconFilter, FilterProduct
    }
})
export default class Header extends Vue {
    @Prop({ required: true }) readonly categories!: any[];
    @Prop({ required: true }) readonly brands!: string[];
    @Prop({ required: true }) readonly sizes!: string[];

    private searchIcon: string = searchIcon;
    private resetIcon: string = resetIcon;
    private isFilterVisible: boolean = false;

    toggleFilter() {
        this.isFilterVisible = !this.isFilterVisible;
    }
}
</script>

<style lang="scss" scoped>
.header-wrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 16px;
    margin-top: 12px;

}

.header {
    width: 100%;
    max-width: 1720px;
    padding-right: 24px;
    padding-left: 24px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media (max-width: 480px) {
        width: 100%;
    }

    @media (min-width: 481px) and (max-width: 1024px) {
        max-width: 964px;
    }

    @media (min-width: 1025px) and (max-width: 1440px) {
        max-width: 1164px;
    }

    @media (min-width: 1441px) {
        max-width: 1720px;
    }
}

.header-mq {
    position: relative;
    width: 100%;
    @include flex-row-start;
    gap: 24px;
}

.header-search {}

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
    width: 40px;
    height: 40px;
    opacity: 0.7;
}

.header-divider {
    position: relative;
    bottom: -6px;
}

.button-search {
    margin-left: 16px;
    background-color: $blue500;
    color: $white100;
}

.filter-toggle {
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
    width: 40px;
    height: 40px;
}

.filter {
    width: 100%;
    max-width: 1720px;
    margin-top: 1rem;
    padding: 0 16px;
    box-sizing: border-box;
}
</style>