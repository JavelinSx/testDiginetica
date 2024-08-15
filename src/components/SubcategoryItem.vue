<template>
    <ul class="subcategory-list">
        <li class="subcategory-item" v-for="(subcategory, index) in subcategories" :key="index">
            <div class="subcategory-name" @click="toggle(index)">
                <span>{{ subcategory.name }}</span>
                <span v-if="subcategory.subcategories && subcategory.subcategories.length" class="toggle-icon">
                    {{ subcategory.subcategories.length }}
                </span>
            </div>
            <SubcategoryItem v-if="subcategory.subcategories && isOpen[index]"
                :subcategories="subcategory.subcategories" />
        </li>
    </ul>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

interface Subcategory {
    name: string;
    subcategories?: Subcategory[];
}

@Component
export default class SubcategoryItem extends Vue {
    @Prop({ required: true }) readonly subcategories!: Subcategory[];
    isOpen: boolean[] = [];

    toggle(index: number) {
        // Переключаем состояние только для текущего элемента
        this.$set(this.isOpen, index, !this.isOpen[index]);
    }
}
</script>

<style lang="scss" scoped>
.subcategory-list {
    list-style-type: none;
    padding-left: 15px;
}

.subcategory-item {
    padding-left: 10px;
}

.subcategory-name {
    cursor: pointer;
    line-height: 30px;
    padding: 5px;

    &:hover {
        background-color: #f0f0f0;
    }
}
</style>
