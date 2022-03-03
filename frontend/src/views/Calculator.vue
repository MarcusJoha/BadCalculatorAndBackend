<template>
  <AppNav />
  <h1>My Calculator</h1>
  <div>
    <div class="container">
      <div class="display">
        <input
          type="text"
          id="calculator-input"
          v-model="currentNumber"
          disabled
        />
        <p>Current number = {{ currentNumber }} input = {{ input }}</p>
      </div>
      <!-- Må fikse på layout her, plasser i midten -->
      <div>
        <Buttons @target-value="pressedValue" class="buttons" />
      </div>
      <Log class="logBox" :equations="equations" />
    </div>
  </div>
</template>

<script>
import Buttons from "../components/Buttons.vue";
import Log from "../components/Log.vue";
import AppNav from "@/components/AppNav.vue";
import { calculate, getLog } from "@/services/api";

export default {
  name: "Calculator",
  components: {
    Buttons,
    Log,
    AppNav,
  },
  data() {
    return {
      input: "",
      currentNumber: "",
      prevNumber: null,
      operator: null,

      equations: [],
    };
  },
  methods: {
    clearDisplay() {
      this.input = "";
      this.currentNumber = 0;
      this.prevNumber = null;
    },

    pressedValue(value) {
      this.input += value; // Skal egentlig ikke ha denne

      if (isNaN(value) && value !== ".") {
        this.handle(value);
        console.log("value is not a number", value);
        return;
      }
      if (this.currentNumber === "0" || isNaN(this.currentNumber)) {
        this.currentNumber = "";
      }

      this.currentNumber += value;
    },

    handle(value) {
      switch (value) {
        case "CA":
          this.clearDisplay();
          break;

        case "DEL":
          this.deleteStuff();
          break;
        case "+":
        case "-":
        case "*":
        case "/": {
          this.prevNumber = this.currentNumber;
          this.currentNumber = value;
          this.operator = value;
          break;
        }
        case "=": {
          this.equals();
          break;
        }

        default: {
          console.warn("Something wrong here");
          break;
        }
      }
    },

    async equals() {
      let answer = await calculate(
        this.prevNumber,
        this.currentNumber,
        this.operator
      );

      console.log("Answer fra calculator", answer);

      if (isNaN(answer)) {
        this.currentNumber = "Invalid";
        return;
      }
      this.currentNumber = answer;
      this.fetchLog();
    },
    deleteStuff() {
      this.currentNumber = this.currentNumber.slice(0, -1);
      if (!this.currentNumber) {
        this.currentNumber = "0";
      }
    },
    async fetchLog() {
      console.log("Ja blir dette rett?", await getLog());

      let equations = await getLog();
      equations.forEach(element => {
        this.equations.push(element);  
      });
    }
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.container {
  max-width: 700px;
  margin: 20px auto;
  min-height: 500px;
  border: 1px solid black;
  overflow: auto;
  border-radius: 5px;
  background-color: lightblue;
}

.buttons {
  border: none;
  background-color: #123456;
  position: none;
  display: inline-block;
  align-content: center;
}

#calculator-input {
  min-width: 300px;
  max-width: 400px;
  min-height: 50px;
  border: 1px black solid;
  margin-top: 20px;
  margin-bottom: 20px;
  background-color: lightgray;

  font-size: 35px;
}

.logBox {
  padding: 10px;
  background-color: lightgray;
  margin: 10px 0 5px 10px;
}
</style>