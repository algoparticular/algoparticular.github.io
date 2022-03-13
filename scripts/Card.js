export default {
    props: {
      card: Object
    },
    template: `
    <div id="card" class="column col-6">
        <div class="drawingWrapper">
            <img v-bind:src="card.image"/>
        </div>
        <h3>
            {{ card.name }}
        </h3>
        <p class="">
            {{ card.description }}
        </p>
        <div class="bottom">
            <div>
                <h4>{{ $t("message.afirmation") }}</h4>
                <p>{{ card.afirmation }}</p>
            </div>
            <div>
                <h4>{{ $t("message.invitation") }}</h4>
                <p>{{ card.invitation }}</p>
            </div>
        </div>
    </div>
    `
  }
  
  