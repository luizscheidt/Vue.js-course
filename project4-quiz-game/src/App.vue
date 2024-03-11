<template>
  <div>
    <template v-if="this.question">
      <h1 v-html="this.question"></h1>

      <template v-for="answer in this.answers" :key="answer">
        <input
          :disabled="this.answerSubmitted"
          type="radio"
          name="answer"
          id="value"
          :value="answer"
          v-model="this.selectedAnswer"
        />
        <label for="answer" v-html="answer"></label><br />
      </template>

      <button
        v-if="!answerSubmitted"
        class="send"
        type="button"
        @click="submitAnswer()"
      >
        Send
      </button>

      <section class="result" v-if="answerSubmitted">
        <h4 v-if="selectedAnswer !== correctAnswer">
          &#10060; I'm sorry, you chose the wrong option. The correct answer
          was:
          {{ this.correctAnswer }}
        </h4>

        <h4 v-else>
          &#9989; Congratulations! The answer "{{ this.correctAnswer }}" is
          correct
        </h4>

        <button class="send" type="button">Next question</button>
      </section>
    </template>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      question: undefined,
      incorrectAnswers: undefined,
      correctAnswer: undefined,
      selectedAnswer: undefined,
      answerSubmitted: false,
    };
  },

  methods: {
    submitAnswer() {
      if (!this.selectedAnswer) {
        alert("You cant submit without choosing a answer");
      } else {
        this.answerSubmitted = true;
      }
    },
  },

  computed: {
    answers() {
      var answers = [...this.incorrectAnswers];
      answers.splice(Math.floor(Math.random() * 4), 0, this.correctAnswer);
      return answers;
    },
  },
  created() {
    this.axios
      .get("https://opentdb.com/api.php?amount=1&type=multiple")
      .then((response) => {
        this.question = response.data.results[0].question;
        this.incorrectAnswers = response.data.results[0].incorrect_answers;
        this.correctAnswer = response.data.results[0].correct_answer;
      });
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 60px auto;
  max-width: 960px;
}

#app input[type="radio"] {
  margin: 12px 4px;
}

button.send {
  margin-top: 12px;
  height: 40px;
  min-width: 120px;
  padding: 0 16px;
  color: #fff;
  background-color: #1867c0;
  border: 1px solid #1867c0;
  cursor: pointer;
}
</style>
