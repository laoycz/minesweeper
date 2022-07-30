<template>
  <div>
    <div @click="newGame()" class="face"></div>
    <div @contextmenu.prevent class="zone">
      <div v-for="(row, i) in zone" :key="i" style="display: contents">
        <div
          v-for="(cell, j) in row"
          :key="j"
          class="cell"
          :style="getCellStyle(cell)"
          @click="open([j, i])"
          @click.right="flag([j, i])"
        ></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import type { StyleValue } from "vue";
import { defineComponent } from "vue";
import Matrix from "./Matrix";
import { distribute, fill, fillStatus } from "./Zone";
import type { status } from "./Zone";
import Game from "./Game";

// const matrix = new Matrix(distribute(99, 30, 16));
// const zone = fillStatus(fill(matrix));

export default defineComponent({
  data() {
    const game = new Game();
    return { zone: game.zone.matrix, game };
  },
  methods: {
    getCellStyle([value, status]: [number, status]): StyleValue {
      if (this.game.status == "lose") {
        if (value == -1 && status == "open")
          return { backgroundPosition: "-48px -59px" };
        if (value == -1) return { backgroundPosition: "-96px -59px" };
      }

      if (status == "close") return { backgroundPosition: "0 -59px" };

      if (status == "flag") return { backgroundPosition: "-24px -59px" };

      if (value == -1) return { backgroundPosition: "-96px -59px" };

      return { backgroundPosition: `-${value * 24}px -35px` };

      // return {
      //   backgroundPositionX: `-${value * 24}px`,
      //   backgroundPositionY: "-35px",
      // };

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

    newGame() {
      this.game = new Game();
      this.zone = this.game.zone.matrix;
    },

    open([x, y]: [number, number]) {
      this.game.open([x, y]);
      this.zone = this.game.zone.matrix;
    },
    flag([x, y]: [number, number]) {
      this.game.flag([x, y]);
      this.zone = this.game.zone.matrix;
    },
  },
});
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

.face {
  background-image: url(./assets/sprite150.gif);
  width: 39px;
  height: 39px;
  background-position: 0 -83px;
}

.face:active {
  background-position: -39px -83px;
}
</style>
