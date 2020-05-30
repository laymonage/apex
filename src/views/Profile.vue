<template>
  <BaseContainer class="my-32">
    <BaseCard
      v-for="(profileGroup, profileIndex) in profile.data"
      :key="profileGroup.id"
      :class="{'mt-16': profileIndex !== 0}"
    >
      <template v-slot:header>
        {{ profileGroup.type }}
      </template>
      <BaseCatalog
        v-slot:default="slotProps"
        :items="profileGroup.data"
        :divider-class="['block', 'md:hidden']"
      >
        <TimelineItem
          :item="slotProps.item"
          :show-line="slotProps.itemIndex !== profileGroup.data.length - 1"
        />
      </BaseCatalog>
    </BaseCard>
  </BaseContainer>
</template>

<script>
import TimelineItem from '@/components/TimelineItem.vue';
import profile from '@/data/profile';

export default {
  name: 'Profile',
  components: {
    TimelineItem,
  },
  data() {
    return {
      profile,
    };
  },
};
</script>
