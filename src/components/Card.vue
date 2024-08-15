<template>
    <div class="card">
        <div class="card-img-container">
            <div class="card-sales" :class="{ 'hidden': !hitSales, 'animate': hitSales }">
                <span>Хит продаж</span>
                <IconSale class="card-img-sales" />
            </div>
            <IconBox v-if="!img" class="card-img" />
            <img v-else :src="img" class="card-img" alt="Product image">
            <span class="card-discount">{{ discount }}</span>
        </div>
        <p class="card-brand">
            {{ brand }}
        </p>
        <p class="card-description">
            {{ description }}
        </p>
        <div v-if="inStock" class="card-price-container">
            <span class="card-price">{{ price }}₽</span>
            <span class="card-price-past">{{ pastPrice }}₽</span>
        </div>
        <BaseButton v-if="inStock" styledType="small" text="Купить" class="card-button" />
        <BaseButton v-if="!inStock" styledType="full" text="Сообщить о поступлении" class="card-button-not-stock" />
    </div>
</template>

<script lang="ts">
import { Prop, Vue, Component } from 'vue-property-decorator';
import BaseButton from './ui/BaseButton.vue';
import IconBox from '../assets/icon/icon-box.svg'
import IconSale from '../assets/icon/icon-sale.svg'

@Component({
    components: {
        IconBox, IconSale, BaseButton
    }
})
export default class Card extends Vue {
    @Prop({ default: '' }) readonly img?: string;
    @Prop({ required: true, default: '25%' }) readonly discount?: string;
    @Prop({ default: false }) readonly hitSales?: boolean;
    @Prop({ required: true, default: 'Бренд' }) readonly brand!: string;
    @Prop({ required: true, default: 'Полное название товара в несколько строк для вида с обрывом в конце...' }) readonly description!: string;
    @Prop({ required: true }) readonly price!: number;
    @Prop({ required: true }) readonly pastPrice!: number;
    @Prop({ required: true }) readonly inStock!: boolean;
}
</script>

<style lang="scss" scoped>
.card {
    min-height: 365px;
    width: 100%;
    font-size: 14px;
    @include flex-col-center-start;
    transition: 0.3s ease;
    position: relative;

    &:hover {
        .card-description {
            color: $blue500;
        }
    }
}

.card-img-container {
    position: relative;
    height: 200px;
    width: 100%;
    background-color: $grey300;
    padding: 12px;
    margin-bottom: 12px;
    @include flex-col-start-between;
}

.card-img {
    align-self: center;
}

.card-sales {
    @include flex-row-cen;
    height: 32px;
    padding: 8px;
    background-color: $white100;
    border-radius: 4px;

    &.hidden {
        visibility: hidden;
    }

    &.animate {
        animation: moveHighlight 2s linear infinite;
    }
}

@keyframes moveHighlight {
    0% {
        box-shadow: -5px -5px 5px rgba(221, 135, 22, 0.5) inset;
    }

    25% {
        box-shadow: 5px -5px 5px rgba(221, 135, 22, 0.5) inset;
    }

    50% {
        box-shadow: 5px 5px 5px rgba(221, 135, 22, 0.5) inset;
    }

    75% {
        box-shadow: -5px 5px 5px rgba(221, 135, 22, 0.5) inset;
    }

    100% {
        box-shadow: -5px -5px 5px rgba(221, 135, 22, 0.5) inset;
    }
}

.card-img-sales {
    width: 20px;
    height: 20px;
    margin-left: 4px;
}

.card-discount {
    width: 48px;
    height: 26px;
    padding: 6px 10px;
    background-color: $blue500;
    border-radius: 4px;
    color: $white100;
}

.card-brand {
    width: 100%;
    text-align: left;
    color: $grey400;
    margin-bottom: 8px;
}

.card-description {
    height: 48px;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: left;
    hyphens: auto;
    -webkit-hyphens: auto;
    -ms-hyphens: auto;
    margin-bottom: 12px;
    transition: color 0.3s ease;
}

.card-price-container {
    @include flex-row-start;
    width: 100%;
    margin-bottom: 12px;
}

.card-price {
    font-size: 16px;
    font-weight: bold;
    margin-right: 8px;
}

.card-price-past {
    font-size: 12px;
    color: $grey400;
    text-decoration: line-through;
}

.card-button {
    height: 38px;
    width: 75px;
    color: $blue500;
    align-self: flex-start;
}
</style>