export default {
    props: {
      show: Boolean,
      card: Object
    },
    template: `
    <transition name="modal">
    <div v-if="show" id="card-modal" class="modal">
        <div class="card-container">
            <div class="drawingWrapper">
                <img v-bind:src="card.image"/>
            </div>
            <div class="textWrapper">
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
            <button class="closeModal" v-on:click="$emit('close')">X</button>
        </div>
    </div>
    </transition>
    `
  }
  
  