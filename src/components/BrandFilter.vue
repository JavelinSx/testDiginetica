<template>
    <div class="brand-filter">
        <h4 class="brand-title">Бренд</h4>
        <BaseInput styledType="input-filter-search" v-model="searchQuery" placeholder="Поиск" :icon="SearchIcon" />
        <ul class="brand-list">
            <li v-for="brand in filteredBrands" :key="brand.name" class="brand-item">
                <BaseCheckbox :id="'brand-' + brand.name" :label="brand.name" :value="brand.name"
                    :checked="selectedBrands.includes(brand.name)" @change="onBrandChange(brand.name, $event)" />
                <span class="brand-count">{{ brand.count }}</span>
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
import { Prop, Vue, Component, Watch } from 'vue-property-decorator';
import BaseInput from './ui/BaseInput.vue';
import BaseCheckbox from './ui/BaseCheckbox.vue';
import SearchIcon from '../assets/icon/icon-search.svg';

interface FilterItem {
    name: string;
    count: number;
}

@Component({
    components: { BaseInput, BaseCheckbox }
})
export default class BrandFilter extends Vue {
    @Prop({ required: true }) readonly brands!: FilterItem[];
    @Prop({ required: true }) readonly value!: string[];

    SearchIcon = SearchIcon;
    searchQuery: string = '';
    selectedBrands: string[] = this.value;
    filteredBrands: FilterItem[] = this.brands;

    @Watch('value')
    onValueChange(newValue: string[]): void {
        this.selectedBrands = newValue;
    }

    @Watch('searchQuery')
    onSearchQueryChange(newQuery: string): void {
        this.filterBrands(newQuery);
    }

    @Watch('brands')
    onBrandsChange(): void {
        this.filterBrands(this.searchQuery);
    }

    filterBrands(query: string): void {
        if (query) {
            this.filteredBrands = this.brands.filter(brand =>
                brand.name.toLowerCase().includes(query.toLowerCase())
            );
        } else {
            this.filteredBrands = this.brands;
        }
    }

    emitChange(): void {
        this.$emit('input', this.selectedBrands);
    }

    onBrandChange(brandName: string, event: Event): void {
        const target = event.target as HTMLInputElement;
        if (target) {
            this.toggleBrand(brandName, target.checked);
        }
    }

    private toggleBrand(brandName: string, checked: boolean): void {
        if (checked) {
            this.selectedBrands.push(brandName);
        } else {
            const index = this.selectedBrands.indexOf(brandName);
            if (index !== -1) {
                this.selectedBrands.splice(index, 1);
            }
        }
        this.emitChange();
    }
}
</script>

<style lang="scss" scoped>
.brand-filter {
    margin-bottom: 20px;
}

.brand-title {
    width: 100%;
    font-weight: bold;
    margin-top: 26px;
    margin-bottom: 16px;
}

.brand-list {
    margin-top: 16px;
    max-height: 200px;
    overflow-y: auto;
    padding-left: 0;
    list-style-type: none;
}

.brand-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 14px;
}

.brand-checkbox {
    display: flex;
    align-items: center;
}

.brand-count {
    color: #888;
    font-size: 0.9em;
    margin-right: 8px;
}
</style>