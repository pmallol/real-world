<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import EventService from '../services/EventService.js'
import EventCard from '../components/EventCard.vue'
import { EventList } from '../types'


const events = ref<EventList>(null)

onMounted(() => {
  EventService.getEvents()
    .then((response) => {
      events.value = response.data
    })
    .catch((error) => {
      console.error('There was an error!', error)
    })
})
</script>

<template>
  <h1>Events for Good</h1>
    <div class="events">
      <EventCard v-for="event in events" :key="event.id" :event="event" />
    </div>
</template>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
