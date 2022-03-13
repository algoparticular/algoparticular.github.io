export default {
    props: {
      message: Object
    },
    template: `
    <div class="column">
        <div class="drawingWrapper">
            <img v-bind:src="message.src"/>
        </div>
        <p class="">
            {{message.title}}
        </p>
    </div>
    `
  }
  
  