<template>
  <div class="zone">
    <div v-for="(row, i) in zone" :key="i" style="display: contents">
      <div
        v-for="(cell, j) in row"
        :key="j"
        class="cell"
        :style="getCellStyle(cell)"
      ></div>
    </div>
  </div>
</template>

<script lang="ts">
import type { StyleValue } from "vue";
import Matrix from "./Matrix";
import { distribute, fill } from "./Zone";

const matrix = new Matrix(distribute(99, 30, 16));
const zone = fill(matrix);

export default {
  data() {
    return { zone: zone };
  },
  methods: {
    getCellStyle(value: number): StyleValue {
      if (value == -1) return { backgroundPosition: "-96px -59px" };

      return {
        backgroundPositionX: `-${value * 24}px`,
        backgroundPositionY: "-35px",
      };

      // if (value == 0) return { backgroundPosition: "0 -35px" };
      // if (value == 1) return { backgroundPosition: "-24px -35px" };
      // if (value == 2) return { backgroundPosition: "-48px -35px" };
      // if (value == 3) return { backgroundPosition: "-72px -35px" };
      // if (value == 4) return { backgroundPosition: "-96px -35px" };
      // if (value == 5) return { backgroundPosition: "-120px -35px" };
      // if (value == 6) return { backgroundPosition: "-144px -35px" };
      // if (value == 7) return { backgroundPosition: "-168px -35px" };
      // if (value == 8) return { backgroundPosition: "-192px -35px" };
      // return {};    //同上
    },
  },
};
</script>

<style scoped>
.zone {
  display: grid;
  grid-template-columns: repeat(30, 24px);
  grid-auto-rows: 24px;
  justify-content: start;
}
.cell {
  background-image: url(assets/sprite150.gif);
}
</style>
