<template>
    <div class="logo-container">
        <IconLogo class="logo-img" />
        <p>Логотип</p>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import IconLogo from '../../assets/icon/icon-logo.svg';

@Component({
    components: {
        IconLogo
    }
})
export default class Logo extends Vue { }
</script>
<style lang="scss" scoped>
.logo-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 48px;
    min-width: 145px;
    cursor: pointer;
    margin-right: -16px;
}

.logo-img {
    height: 24px;
    width: 24px;
    margin-right: 8px;
}

.logo-text {}
</style>