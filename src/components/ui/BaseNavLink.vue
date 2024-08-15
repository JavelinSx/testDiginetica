<template>
    <a :href="link" class="link-nav">{{ text }}</a>
</template>
<script lang="ts">
import { Prop, Vue, Component } from 'vue-property-decorator';

@Component({
    props: {
        link: String,
        text: String
    }
})
export default class BaseNavLink extends Vue {
    @Prop() readonly link!: string;
    @Prop() readonly text!: string;
}
</script>
<style lang="scss" scoped>
.link-nav {
    color: $primary-color;
    text-decoration: none;
    font-size: 14px;
    font-weight: 500;
    transition: all 0.3s ease;
    padding: 5px;
    border-radius: 5px;

    &:hover {
        background-color: $hover-background;
        color: $primary-color;
    }

}
</style>