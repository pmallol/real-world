<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import EventService from '../services/EventService.js';
import { EventItem } from '../types'

const event = ref<EventItem>(null)

const props = defineProps({
  id: {
    type: String,
    required: true
  }
})

onMounted(() => {
  EventService.getEventById(props.id)
    .then(response => {
      event.value = response.data
    })
    .catch(error => {
      console.error('There was an error!', error)
    })
})
</script>

<template>
  <div v-if="event" class="event-details">
    <h1>{{ event.title }}</h1>
    <p>{{event.time}} on {{ event.date }} @ {{ event.location }}</p>
    <p>{{ event.description }}</p>
  </div>
</template>