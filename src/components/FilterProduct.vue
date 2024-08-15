<template>
    <div class="filter-product">
        <CategoryTree :categories="categories" />
        <PriceFilter v-model="priceRange" />
        <BrandFilter :brands="brands" v-model="selectedBrands" />
        <SizeFilter :sizes="sizes" v-model="selectedSizes" />
    </div>
</template>

<script lang="ts">
import { Prop, Vue, Component } from 'vue-property-decorator';
import CategoryTree from './CategoryTree.vue';
import PriceFilter from './PriceFilter.vue';
import BrandFilter from './BrandFilter.vue';
import SizeFilter from './SizeFilter.vue';

interface FilterItem {
    name: string;
    count: number;
}

@Component({
    components: {
        CategoryTree,
        PriceFilter,
        BrandFilter,
        SizeFilter
    }
})
export default class FilterProduct extends Vue {
    @Prop({ required: true }) readonly categories!: any[];
    @Prop({ required: true }) readonly brands!: FilterItem[];
    @Prop({ required: true }) readonly sizes!: FilterItem[];

    priceRange: { min: string; max: string } = { min: '', max: '' };
    selectedBrands: string[] = [];
    selectedSizes: string[] = [];
}
</script>

<style lang="scss" scoped>
.filter-product {
    padding: 1rem;
    border-radius: 4px;
    max-width: 280px;
}

@media (max-width: 768px) {
    .filter-product {
        max-height: 80vh;
        overflow-y: auto;
    }
}
</style>