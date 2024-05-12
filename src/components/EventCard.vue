<script setup>
defineProps({
  event: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <RouterLink :to="{name: 'event-details', params: {id: event.id}}">
    <div class="event-card">
      <h2>{{ event.title }}</h2>
      <span>on {{ event.date }}</span>
    </div>
  </RouterLink>
</template>

<style scoped>
.event-card {
  width: 350px;
  padding: 20px;
  cursor: pointer;
  border: solid 1px #5784b2;
  margin-bottom: 18px;
}

.event-card:hover {
  background-color: #f0f0f0;
  transform: scale(1.02);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}
</style>
