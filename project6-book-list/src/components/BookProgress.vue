<script setup>
import { computed } from 'vue';

const props = defineProps(['books'])

const booksRead = computed(()=>{
    return props.books.filter((book) => book.isRead).length;
})

const booksReadMessage = computed(()=> {
    return booksRead.value === props.books.length ?
    "Parabéns, você leu todos os livros da sua lista" :
    `${ booksRead.value } de ${props.books.length} livros lidos`
})

</script>

<template>
    <div class="books-read">
        <label for="progress">Your progress</label>
        <br>
        <progress :value="booksRead" :max="books.length"></progress>
        <p>{{booksReadMessage}}</p>
    </div>
</template> 