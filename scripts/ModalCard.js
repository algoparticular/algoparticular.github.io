export default {
    props: {
      loading: Boolean,
      show: Boolean,
      card: Object
    },
    template: `
    <transition name="modal">
    <div v-show="loading" id="card-modal" class="modal">
        <div v-if="show" class="card-container modal-content">
            <img v-bind:src="card.image"/>
            
            <div class="textWrapper">
                <h4>
                    {{ card.name }}
                </h4>
                <p class="">
                    {{ card.description }}
                </p>
                <div class="bottom" v-if="card.name != ''">
                    <div>
                        <h5>{{ $t("message.cardAfirmation") }}</h5>
                        <p>{{ card.afirmation }}</p>
                    </div>
                    <div>
                        <h5>{{ $t("message.cardInvitation") }}</h5>
                        <p>{{ card.invitation }}</p>
                    </div>
                </div>
            </div>            
        </div>

        <div v-else>
            <svg id="cardLoader" width="283" height="264" viewBox="0 0 283 264" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M160.8 218.6C160.8 218.6 237.9 226.6 237.9 141.5C237.9 88.2 194.7 45.1 141.5 45.1C88.3 45.1 45.1 88.3 45.1 141.5C45.1 162.8 62.4 180.1 83.7 180.1H160.8C182.1 180.1 199.4 162.8 199.4 141.5C199.4 109.5 173.5 83.6 141.5 83.6C109.5 83.6 83.6 109.5 83.6 141.5" stroke="#E9EDD8" stroke-width="13" stroke-miterlimit="10" stroke-linecap="round" style="stroke-dashoffset: 0px;"/>
                <path d="M83.6 218.6C41 218.6 6.5 184.1 6.5 141.5C6.5 66.9 66.9 6.5 141.5 6.5C216.1 6.5 276.5 66.9 276.5 141.5C276.5 263.1 160.8 257.4 160.8 257.4C139.5 257.4 122.2 240.1 122.2 218.8V218.6V141.5C122.2 130.8 130.9 122.2 141.5 122.2C152.2 122.2 160.8 130.8 160.8 141.5" stroke="#E9EDD8" stroke-width="13" stroke-miterlimit="10" stroke-linecap="round" style="stroke-dashoffset: 0px;"/>
            </svg>
        </div>
        
        <span class="closeModal" v-on:click="$emit('close')">×</span>
    </div>
    </transition>
    `
  }
  
  