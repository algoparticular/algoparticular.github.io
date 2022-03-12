export default {
    props: {
      particle: Object
    },
    template: `
    <div class="column col-6 col-sm-4">
        <a class="drawingWrapper atom particle" v-bind:class="particle.type" v-bind:href="particle.url" target="_blank">
            <img v-bind:src="particle.image"/>
        </a>
        <p class="">
            {{particle.name}}
        </p>
    </div>
    `
  }
  
  