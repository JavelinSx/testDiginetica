<template>
    <div class="category-item-wrapper">
        <div class="category-item" @click="toggle"
            :class="{ 'has-children': category.subcategories && category.subcategories.length }">
            <span class="category-name">{{ category.name ? category.name.toString() : '' }}</span>
            <span v-if="category.subcategories && category.subcategories.length" class="toggle-icon">
                {{ category.subcategories.length }}
            </span>
        </div>
        <ul class="subcategory-list" v-if="category.subcategories && isOpen">
            <li class="subcategory-item" v-for="subcategory in category.subcategories" :key="subcategory.name">
                <CategoryItem :category="subcategory" :parentIsOpen="isOpen" />
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
import { Prop, Vue, Component, Watch } from 'vue-property-decorator';

interface Category {
    name: string;
    subcategories?: Category[];
}

@Component
export default class CategoryItem extends Vue {
    @Prop({ required: true }) readonly category!: Category;
    isOpen: boolean = false;

    @Watch('parentIsOpen')
    onParentOpenChange(newValue: boolean) {
        if (!newValue) {
            this.isOpen = false;
        }
    }

    toggle() {
        console.log(this.category); // Debug the category object structure
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
    min-height: 30px;

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

.subcategory-list {
    list-style-type: none;
    padding-left: 15px;
}

.subcategory-item {
    width: 100%;
    min-height: 30px;
}
</style>
