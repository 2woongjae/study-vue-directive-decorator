<template>
  <div class="hello">
    <h1 v-my-directive.haha="'green'">{{ msg }}</h1>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import myDirective from "../directives/my-directive";

@Component({
  directives: {
    "my-directive": myDirective
  }
})
export default class HelloWorld extends Vue {
  @Prop() msg!: string;
}
</script>
