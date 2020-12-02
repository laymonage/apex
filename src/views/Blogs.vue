<template>
  <BaseContainer class="my-32">
    <BaseCard
      v-for="(blogGroup, blogIndex) in blogs.data"
      :key="blogGroup.id"
      :class="{'mt-16': blogIndex !== 0}"
      :anchor="blogGroup.anchor"
    >
      <template v-slot:header>
        {{ `${blogGroup.type}` }}
      </template>
      <BaseCatalog
        v-slot:default="slotProps"
        :items="blogGroup.data"
      >
        <ShowcaseItem :item="slotProps.item" />
      </BaseCatalog>
    </BaseCard>
  </BaseContainer>
</template>

<script>
import Vue from 'vue';
import ShowcaseItem from '@/components/ShowcaseItem.vue';
import blogs from '@/data/blogs';
import { scrollToTarget } from '@/utils/route-utils';

export default Vue.extend({
  name: 'Blogs',
  components: {
    ShowcaseItem,
  },
  data() {
    return {
      blogs,
    };
  },
  mounted() {
    this.$nextTick(() => this.$route.hash && scrollToTarget(this.$route.hash));
  },
});
</script>
