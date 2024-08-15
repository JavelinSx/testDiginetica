<template>
    <div class="category">
        <h4 class="category-title">Название категории</h4>
        <ul class="category-list">
            <li class="category-item" v-for="category in categories" :key="category.name">
                <CategoryItem :category="category" />
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
import { Prop, Vue, Component } from 'vue-property-decorator';
import CategoryItem from './CategoryItem.vue';

interface Category {
    name: string;
    subcategories?: Category[];
}

@Component({
    components: { CategoryItem }
})
export default class CategoryTree extends Vue {
    @Prop({ required: true }) readonly categories!: Category[];
}
</script>
<style lang="scss" scoped>
.category-title {
    min-height: 30px;
}

.category-list {
    padding-inline-start: 20px;
    list-style-type: none;
}

.category-item {
    width: 100%;
}
</style>