<template>
    <div class="price-filter">
        <h4 class="price-title">Цена</h4>
        <div class="price-inputs">
            <BaseInput styledType="input-filter-interval" v-model="min" staticPlaceholder="от" type="number"
                @input="emitChange" />
            <BaseInput styledType="input-filter-interval" v-model="max" staticPlaceholder="до" type="number"
                @input="emitChange" />
        </div>
    </div>
</template>

<script lang="ts">
import { Prop, Vue, Component, Watch } from 'vue-property-decorator';
import BaseInput from './ui/BaseInput.vue';

@Component({
    components: { BaseInput }
})
export default class PriceFilter extends Vue {
    @Prop({ default: () => ({ min: '', max: '' }) }) readonly value!: { min: string; max: string };

    min: string = this.value.min;
    max: string = this.value.max;

    @Watch('value')
    onValueChange(newValue: { min: string; max: string }): void {
        this.min = newValue.min;
        this.max = newValue.max;
    }

    emitChange(): void {
        this.$emit('input', { min: this.min, max: this.max });
    }
}
</script>

<style lang="scss" scoped>
.price-filter {
    margin-bottom: 26px;
}

.price-inputs {
    display: flex;
    gap: 10px;
}

.price-title {
    width: 100%;
    text-align: center;
    font-weight: bold;
    margin-top: 26px;
    margin-bottom: 16px;
}
</style>