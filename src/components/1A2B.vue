<template>
  <div class="body">
    <br />
    <!-- <div><el-button type="primary">Click me</el-button></div> -->
    <el-button class="practice" @click="practiceButton">Practice</el-button>
    <el-button @click="challengeButton">Challenge</el-button>
    <h1 class="header">1 A 2 B</h1>
    <p class="color">Enter four different numbers:</p>
    <!-- <div> -->
    <el-row :gutter="24" justify="space-evenly">
      <el-col :span="13">
        <el-input
          type="text"
          id="guess"
          class="inputClass"
          name="guess"
          maxlength="4"
          placeholder="Ex:1234"
          @keyup.enter="handleEnterKey"
          v-model="inputValue"
        />
      </el-col>
      <el-col :span="1" style="margin-left: -10%">
        <el-button id="confirm" @click="guessButton">Enter</el-button>
        <el-button
          id="challengeConfirm"
          @click="challengeGuessButton"
          v-if="isButtonVisible"
          >Enter</el-button
        >
      </el-col>
      <el-col :span="1" style="margin-left: -8%">
        <el-button @click="resetButton">Restart</el-button>
      </el-col>
      <el-col :span="1" style="margin-left: -8%">
        <el-button id="answer" @click="answerButton">Answer</el-button>
      </el-col>
    </el-row>
    <!-- </div> -->

    <div id="main" class="color"></div>
  </div>
</template>

<script>
const array = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const answer = [];
for (let i = 0; i < 4; i++) {
  let num = Math.floor(Math.random() * array.length);
  answer.push(array[num]);
  array.splice(num, 1);
}
// let times = 0;

export default {
  data() {
    return {
      inputValue: "",
      times: 0,
      hasShownChallengeAlert: false,
      maxGuesses: 3,
      isButtonVisible: false,
      a: 0,
      b: 0,
    };
  },
  methods: {
    check() {
      let guessNumber = document.getElementById("guess").value;
      const distinct = new Set(Array.from(guessNumber));
      const distinctToArray = [...distinct];

      if (isNaN(parseFloat(guessNumber))) {
        alert("請輸入數字");
        return false;
      }
      if (distinctToArray.length != 4) {
        alert("請輸入四個不同的數字");
        return false;
      }
      return true;
    },
    guessButton() {
      // this.enter(enterEvent == 1);
      let guessNumber = document.getElementById("guess").value;
      if (!this.check()) {
        return;
      }
      this.a = 0;
      this.b = 0;
      for (let i = 0; i < 4; i++) {
        var index = answer.indexOf(Array.from(guessNumber)[i]);
        if (index != -1) {
          if (index == i) {
            this.a++;
          } else {
            this.b++;
          }
        }
      }
      if (this.a == 4) {
        this.times++;
        alert(`
        恭喜答對!!
        總共猜了${this.times}次`);
        history.go(0);
        return;
      }
      let main = document.getElementById("main");
      main.innerHTML += `${guessNumber}  ${this.a}A${this.b}B<br>`;
      // document.getElementById("guess").value = "";
      this.inputValue = "";
      this.times++;
    },
    answerButton() {
      alert(answer.join(""));
    },
    resetButton() {
      history.go(0);
    },
    challengeGuessButton() {
      this.guessButton();
      if (this.times == 10 && this.a != 4) {
        alert(`
        挑戰失敗
        答案是${answer.join("")}`);
        history.go(0);
      }
    },
    challengeButton() {
      // location.reload();
      let enter = document.getElementById("confirm");
      // let challengeEnter = document.getElementById("challengeConfirm");
      enter.style.display = "none";
      // challengeEnter.style.display = "inline";
      this.isButtonVisible = true;
      let answerButton = document.getElementById("answer");
      answerButton.style.display = "none";

      if (!this.hasShownChallengeAlert) {
        alert(`
      挑戰模式:
      在10次之內猜對即挑戰成功`);
        this.hasShownChallengeAlert = true;
      }
    },
    practiceButton() {
      // let answer = document.getElementById("answer");
      // answer.style.display = "inline";

      history.go(0);
    },
    handleEnterKey() {
      if (this.isButtonVisible == true) {
        this.challengeGuessButton();
      } else {
        this.guessButton();
      }
    },
  },
};
</script>

<style scoped>
.body {
  background-color: aliceblue;
  text-align: center;
  min-height: 70vh;
}
.header {
  color: #ffbf00;
  border-style: double;
  border-color: #4b0080;
  font-family: Comic Sans MS;
  text-shadow: 3px 3px #6495ed, -2px -2px #6495ed, 2px -2px #6495ed,
    -2px 2px #6495ed;
}
.color {
  color: #24367d;
  font-family: Comic Sans MS, Comic Sans, cursive;
}
/*.inputClass {
  max-width: 300px;
}*/
input {
  border-radius: 6px;
  border-color: #888;
}
button {
  margin-left: 10px;
  border: none;
  color: #3c3c3c;
  border-radius: 6px;
}
button:hover {
  background-color: #d0d0d0;
}
</style>
