<script setup>
import { computed, defineProps } from "vue";

const props = defineProps(['courses'])

const finishedCourses = computed(() => {
    return props.courses.filter(course => course.done).length
})
</script>

<template>
    <div>
        {{ `${finishedCourses} completed courses out of ${courses.length}` }}

    </div>
</template>