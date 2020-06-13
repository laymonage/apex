declare module '*.svg' {}

declare module '*.svg?cmp' {
  import Vue, { VueConstructor } from 'vue';

  const content: VueConstructor<Vue>;
  export default content;
}
