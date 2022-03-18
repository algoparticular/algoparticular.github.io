export default {
    props: {
      card: Object
    },
    template: `
    <div class="card-container column col-6">
        <div class="drawingWrapper">
            <img v-bind:src="card.image"/>
        </div>
        <h3>
            {{ card.name }}
        </h3>
        <p class="">
            {{ card.description }}
        </p>
        <div class="bottom" v-if="card.name != ''">
            <div>
                <h4>{{ $t("message.cardAfirmation") }}</h4>
                <p>{{ card.afirmation }}</p>
            </div>
            <div>
                <h4>{{ $t("message.cardInvitation") }}</h4>
                <p>{{ card.invitation }}</p>
            </div>
        </div>
    </div>
    `
  }
  
  