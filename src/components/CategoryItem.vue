<template>
    <div class="category-item-wrapper">
        <div class="category-item" @click="toggle">
            <span class="category-name">{{ category.name }}</span>
            <span v-if="category.subcategories && category.subcategories.length" class="toggle-icon">
                {{ category.subcategories.length }}
            </span>
        </div>
        <SubcategoryItem v-if="category.subcategories && isOpen" :subcategories="category.subcategories" />
    </div>
</template>

<script lang="ts">
import { Prop, Vue, Component } from 'vue-property-decorator';
import SubcategoryItem from './SubcategoryItem.vue';

interface Category {
    name: string;
    subcategories?: Category[];
}

@Component({
    components: { SubcategoryItem }
})
export default class CategoryItem extends Vue {
    @Prop({ required: true }) readonly category!: Category;
    isOpen: boolean = false;

    toggle() {
        this.isOpen = !this.isOpen;
    }
}
</script>

<style lang="scss" scoped>
.category-item-wrapper {
    width: 100%;
}

.category-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    padding: 5px;
    line-height: 30px;

    &:hover {
        background-color: #f0f0f0;
    }
}

.category-name {
    flex-grow: 1;
}

.toggle-icon {
    margin-left: 5px;
}
</style>
