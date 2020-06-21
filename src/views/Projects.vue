<template>
  <BaseContainer class="my-32">
    <BaseCard
      v-for="(projectGroup, projectIndex) in projects.data"
      :key="projectGroup.id"
      :class="{'mt-16': projectIndex !== 0}"
      :anchor="projectGroup.anchor"
    >
      <template v-slot:header>
        {{ `${projectGroup.type} Projects` }}
      </template>
      <BaseCatalog
        v-slot:default="slotProps"
        :items="projectGroup.data"
      >
        <ShowcaseItem :item="slotProps.item" />
      </BaseCatalog>
    </BaseCard>
  </BaseContainer>
</template>

<script>
import ShowcaseItem from '@/components/ShowcaseItem.vue';
import projects from '@/data/projects';
import { scrollToTarget } from '@/utils/route-utils';

export default {
  name: 'Projects',
  components: {
    ShowcaseItem,
  },
  data() {
    return {
      projects,
    };
  },
  mounted() {
    this.$nextTick(() => this.$route.hash && scrollToTarget(this.$route.hash));
  },
};
</script>
