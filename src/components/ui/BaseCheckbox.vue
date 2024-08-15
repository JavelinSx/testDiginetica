<template>
    <div class="base-checkbox">
        <input type="checkbox" :id="id" :value="value" :checked="checked" @change="handleChange">
        <label :for="id">
            <span class="checkbox-icon"></span>
            {{ label }}
        </label>
    </div>
</template>

<script lang="ts">
import { Prop, Vue, Component } from 'vue-property-decorator';

@Component
export default class BaseCheckbox extends Vue {
    @Prop({ required: true }) readonly id!: string;
    @Prop({ required: true }) readonly label!: string;
    @Prop({ required: true }) readonly value!: any;
    @Prop({ required: true }) readonly checked!: boolean;

    handleChange(event: Event): void {
        const target = event.target as HTMLInputElement;
        if (target) {
            this.$emit('change', target.checked);
        }
    }
}
</script>

<style lang="scss" scoped>
.base-checkbox {
    display: flex;
    align-items: center;

    input[type="checkbox"] {
        display: none;
    }

    label {
        display: flex;
        align-items: center;
        cursor: pointer;
    }

    .checkbox-icon {
        width: 20px;
        height: 20px;
        border: 2px solid #ccc;
        border-radius: 4px;
        margin-right: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.2s ease;
        position: relative;

        &::after {
            content: '';
            position: absolute;
            display: none;
            width: 5px;
            height: 10px;
            border: solid white;
            border-width: 0 2px 2px 0;
            transform: rotate(45deg);
            top: 2px;
            left: 6px;
        }
    }

    input[type="checkbox"]:checked+label .checkbox-icon {
        background-color: #7397F5;
        border-color: #7397F5;

        &::after {
            display: block;
        }
    }
}
</style>