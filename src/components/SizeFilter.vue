<template>
    <div class="size-filter">
        <h4 class="size-title">Размер</h4>
        <ul class="size-list">
            <li v-for="size in sizes" :key="size.name" class="size-item">
                <BaseCheckbox :id="'size-' + size.name" :label="size.name" :value="size.name"
                    :checked="selectedSizes.includes(size.name)" @change="onSizeChange(size.name, $event)" />
                <span class="size-count">{{ size.count }}</span>
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
import { Prop, Vue, Component, Watch } from 'vue-property-decorator';
import BaseCheckbox from './ui/BaseCheckbox.vue';

interface FilterItem {
    name: string;
    count: number;
}

@Component({
    components: { BaseCheckbox }
})
export default class SizeFilter extends Vue {
    @Prop({ required: true }) readonly sizes!: FilterItem[];
    @Prop({ required: true }) readonly value!: string[];

    selectedSizes: string[] = this.value;

    @Watch('value')
    onValueChange(newValue: string[]): void {
        this.selectedSizes = newValue;
    }

    emitChange(): void {
        this.$emit('input', this.selectedSizes);
    }

    onSizeChange(sizeName: string, event: Event): void {
        const target = event.target as HTMLInputElement;
        if (target) {
            this.toggleSize(sizeName, target.checked);
        }
    }

    private toggleSize(sizeName: string, checked: boolean): void {
        if (checked) {
            this.selectedSizes.push(sizeName);
        } else {
            const index = this.selectedSizes.indexOf(sizeName);
            if (index !== -1) {
                this.selectedSizes.splice(index, 1);
            }
        }
        this.emitChange();
    }
}
</script>

<style lang="scss" scoped>
.size-filter {
    margin-bottom: 20px;
}

.size-title {
    width: 100%;
    font-weight: bold;
    margin-top: 26px;
    margin-bottom: 16px;
    text-align: center;
}

.size-list {
    max-height: 200px;
    overflow-y: auto;
    padding-left: 0;
    list-style-type: none;
}

.size-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 14px;
}

.size-count {
    color: #888;
    font-size: 0.9em;
    margin-right: 8px;
}
</style>