import { createRouter, createWebHistory } from "vue-router";
import { getAuth, onAuthStateChanged } from 'firebase/auth';

import Home from '../views/Home.vue';
import Register from '../views/Register.vue';
import SignIn from '../views/SignIn.vue';
import Deck from '../views/Deck.vue';
import Card from '../views/Card.vue';
import Collection from '../views/Collection.vue';
import PageNotFound from '../views/PageNotFound.vue';
import About from '../views/About.vue';
import Collaborate from '../views/Collaborate.vue';
import Onboarding from '../views/Onboarding.vue';

// Navigation object
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/register",
      component: Register,
    },
    {
      path: "/sign-in",
      component: SignIn,
    },
    {
      path: "/about",
      component: About,
    },
    {
      path: "/collaborate",
      component: Collaborate,
    },
    {
      path: "/oracle",
      component: Onboarding,
    },
    {
      path: "/deck",
      component: Deck,
    },
    {
      name: "card",
      path: "/card",
      component: Card,
      props: true
    },
    {
      path: "/collection",
      component: Collection,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/:pathMatch(.*)",
      component: PageNotFound,
    },
  ],
});

// Persist the logged in user among pages
const getCurrentUser = () => {
    return new Promise ((resolve, reject) => {
        const removeListener = onAuthStateChanged(
            getAuth(),
            (user) => {
                removeListener();
                resolve(user);
            },
            reject
        );
    });
};

// Check user permission to see a page
router.beforeEach(async (to, from, next) => {
    window.scrollTo(0, 0);

    if(to.matched.some((record) => record.meta.requiresAuth)) {
        if (await getCurrentUser()) {
            next();
        } else {
            //alert('you dont have acces!');
            next('/');
        }
    } else {
        next();
    }
});

export default router;

