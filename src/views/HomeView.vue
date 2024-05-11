<script setup>
import {ref} from 'vue'
import EventCard from '@/components/EventCard.vue'

const events = ref([
  { id: '1', title: 'Vue.js Global Summit', date: 'September 2021' },
  { id: '2', title: 'Vue.js London', date: 'October 2021' },
  { id: '3', title: 'Vue.js Amsterdam', date: 'February 2022' }
])
</script>

<template>
  <h1>Vue.js Events</h1>
  <div class="events">
    <EventCard v-for="event in events" :key="event.id" :event="event"/>
  </div>
</template>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
