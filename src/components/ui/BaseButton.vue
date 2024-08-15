<template>
    <button :class="['base-button', styledType]" :disabled="disabled" @click="onClick">
        <span class="button-primary">{{ text }}</span>
    </button>
</template>

<script lang="ts">
import { Prop, Vue, Component } from 'vue-property-decorator';

@Component
export default class BaseButton extends Vue {

    @Prop({ required: true }) readonly styledType!: 'big' | 'small';
    @Prop({ required: true }) readonly text!: string;
    @Prop({ default: false }) readonly disabled!: boolean;

    onClick(event: Event): void {
        this.$emit('click', event);
    }
}
</script>

<style lang="scss" scoped>
.base-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-weight: 500;
    transition: all 0.3s ease;
    border: 1px solid $border-color;
    background-color: inherit;

    &:hover {
        background-color: $border-color;
        color: $white-color;
        border: 1px solid $secondary-color;
    }

    &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
        background-color: $secondary-color;
        color: $primary-color;
        border: 1px solid $secondary-color;
    }

    // Размеры
    &.big {
        height: 48px;
        border-radius: 8px;
        padding: 15px 24px;
        font-size: 14px;
    }

    &.small {
        height: 38px;
        padding: 12px 16px;
        font-size: 14px;
    }

}

.button-primary {
    white-space: nowrap;
}
</style>