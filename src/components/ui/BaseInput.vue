<template>
    <div class="input-wrapper">
        <label v-if="label" :for="id">{{ label }}</label>
        <div class="input-container">
            <component v-if="icon" :is="icon" class="input-icon" />
            <input :id="id" v-model="innerValue" :type="type" :placeholder="placeholder" :value="value" @input="onInput"
                :class="['base-input', styledType, { 'with-icon': icon }]">
            <span v-if="staticPlaceholder" class="static-placeholder">{{ staticPlaceholder }}</span>
            <component v-if="iconReset" :is="iconReset" class="input-icon-reset" @click="onReset" />
        </div>
    </div>
</template>

<script lang="ts">
import { Prop, Vue, Component, Watch } from 'vue-property-decorator';
import { v4 as uuidv4 } from 'uuid';

@Component
export default class BaseInput extends Vue {
    private readonly inputId: string = uuidv4();
    private innerValue: string = '';
    @Prop({ required: true }) readonly styledType!: 'input-nav-search' | 'input-filter-search' | 'input-filter-interval';
    @Prop({ required: false }) readonly label?: string;
    @Prop({ required: false }) readonly placeholder?: string;
    @Prop({ required: false }) readonly icon?: object;
    @Prop({ required: false }) readonly iconReset?: object;
    @Prop({ required: false }) readonly staticPlaceholder?: string;
    @Prop({ default: 'text' }) readonly type!: string;
    @Prop({ required: false }) readonly value?: string;

    @Watch('value', { immediate: true })
    onValueChange(newValue: string): void {
        this.innerValue = newValue || '';
    }

    get id(): string {
        return `input-${this.inputId}`;
    }

    onInput(event: Event): void {
        const target = event.target as HTMLInputElement;
        if (target) {
            this.innerValue = target.value;
            this.$emit('input', this.innerValue);
        }
    }

    onReset(): void {
        this.innerValue = '';
        this.$emit('input', this.innerValue);
    }
}
</script>

<style lang="scss" scoped>
label {
    display: block;
    margin-bottom: 0.5rem;
}

.input-wrapper {
    width: 100%;
}

.input-container {
    position: relative;
    display: flex;
    align-items: center;
}

.base-input {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;

    &.with-icon {
        padding-left: 2rem;
    }

    &.input-nav-search {
        height: 48px;
        border-radius: 10px;
        border: 1px solid $border-color;
        outline: none;
        transition: .3s;
        padding: 16px 16px 12px 0px;
        font-size: 16px;

        &:focus-visible {

            box-shadow: 0 0 3px 0 $border-color inset;

        }

        @media screen and (max-width: 480px) {

            border: none;

            &:focus-visible {

                box-shadow: none
            }
        }

    }


    &.input-filter-search {
        // Специфические стили для input-filter-search
    }

    &.input-filter-interval {
        // Специфические стили для input-filter-interval
    }
}

.input-icon {
    position: absolute;
    left: 16px;
    width: 24px;
    height: 24px;

    @media screen and (min-width: 320px) and (max-width: 480px) {
        width: 20px;
        height: 20px;
    }


    &:hover {
        cursor: pointer;
    }
}

.static-placeholder {
    position: absolute;
    right: 0.5rem;
    color: #999;
    pointer-events: none;
}
</style>