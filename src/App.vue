<template>
  <div id="app">
    <Header :categories="dataFilter.categories" :brands="dataFilter.brands" :sizes="dataFilter.sizes" />
    <div class="content-wrapper">
      <mq-layout mq="mobile">
        <div class="layout">
          <GridCard class="grid-card" />
        </div>
      </mq-layout>
      <mq-layout mq="tablet">
        <div class="layout">
          <GridCard class="grid-card" />
        </div>
      </mq-layout>
      <mq-layout mq="desktop">
        <div class="layout desktop-layout">
          <FilterProduct class="filter-sidebar" :categories="dataFilter.categories" :brands="dataFilter.brands"
            :sizes="dataFilter.sizes" />
          <GridCard class="grid-card" />
        </div>
      </mq-layout>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Header from './components/Header.vue';
import GridCard from './components/GridCard.vue';
import FilterProduct from './components/FilterProduct.vue';
import { dataFilter } from '@/utils/dataFilter';

@Component({
  components: {
    Header, GridCard, FilterProduct
  },
})
export default class App extends Vue {
  private dataFilter = dataFilter;
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.content-wrapper {
  width: 100%;
  max-width: 1720px;
  padding: 0 16px;
  box-sizing: border-box;
  margin: 0 auto;
}

.layout {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.desktop-layout {
  flex-direction: row;
  justify-content: space-between;
}

.filter-sidebar {
  width: 25%;
  padding-right: 20px;
}

.grid-card {
  width: 100%;
}

@media (min-width: 900px) {
  .desktop-layout .grid-card {
    width: 75%;
  }
}
</style>