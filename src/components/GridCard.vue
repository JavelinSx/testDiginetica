<template>
    <div class="grid-card">
        <Card v-for="(card, index) in dataCard" :key="index" :discount="card.discount" :hitSales="card.hitSales"
            :brand="card.brand" :description="card.description" :price="card.price" :pastPrice="card.pastPrice"
            :inStock="card.inStock" />
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import Card from './Card.vue';
import { dataCard } from '@/utils/dataCard';

@Component({
    components: { Card }
})
export default class GridCard extends Vue {
    dataCard = dataCard;
}
</script>

<style lang="scss" scoped>
.grid-card {
    display: grid;
    gap: 24px;
    padding: 20px;
    width: 100%;
}

@media (max-width: 480px) {
    .grid-card {
        grid-template-columns: repeat(2, minmax(165px, 1fr));
        gap: 12px;
    }
}

@media (min-width: 481px) and (max-width: 767px) {
    .grid-card {
        grid-template-columns: repeat(3, minmax(165px, 1fr));
        gap: 24px;
    }
}

@media (min-width: 768px) and (max-width: 1024px) {
    .grid-card {
        grid-template-columns: repeat(2, minmax(213px, 1fr));
        gap: 24px;
    }
}

@media (min-width: 1025px) and (max-width: 1440px) {
    .grid-card {
        grid-template-columns: repeat(4, minmax(213px, 1fr));
        gap: 24px;
    }
}

@media (min-width: 1441px) {
    .grid-card {
        grid-template-columns: repeat(4, minmax(333px, 1fr));
        gap: 24px;
    }
}
</style>