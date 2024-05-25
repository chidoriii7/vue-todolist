// MILESTONE 3
// Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.

const { createApp } = Vue;

createApp({
  data() {

    return {
      todolistObj: [
        {
          text: "comprare il pane",
          done: true,
        },
        {
          text: "portare fuori il cane",
          done: false,
        },
        {
          text: "chiamare la nonna per farle gli auguri di compleanno",
          done: true,
        },
        {
          text: "mettere i vestiti in lavatrice",
          done: false,
        },
      ],

      newTask: ''
    };
  },

  methods: {
    deleteButton(index) {

      let emptyObject =

        {
         text: "Hai rimosso questo elemento"
        }

      console.log(emptyObject.text);

      this.todolistObj.splice(index, 1, emptyObject )


    },

    creationTask(myTask) {

      let nuovaTask = 
      {
        text: myTask,
        done: false
      }

      this.newTask = nuovaTask
      this.todolistObj.push(nuovaTask);

      console.log('task creata')


    }

  },
}).mount("#app");
