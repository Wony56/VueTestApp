import VueRouter from "vue-router";
import firebase from "firebase";
import { store } from "./store/store";

import HomePage from "@/views/HomePage";
import PostPage from "@/views/PostPage";
import PortfolioPage from "@/views/PortfolioPage";
import UserPage from "@/views/UserPage";
import UserPosts from "@/components/UserPosts";
import UserProfile from "@/components/UserProfile";

const routes = [
  {
    path: "*",
    redirect: "/"
  },
  {
    path: "/",
    component: HomePage
  },
  {
    path: "/post",
    component: PostPage
  },
  {
    path: "/post",
    component: PostPage
  },
  {
    path: "/portfolio",
    component: PortfolioPage
  },
  {
    path: "/user/:id",
    component: UserPage,
    children: [
      {
        path: "",
        component: UserProfile
      },
      {
        path: "posts",
        component: UserPosts
      }
    ],
    meta: {
      requiresAuth: true
    }
  }
];

export const router = new VueRouter({
  mode: "history",
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 };
  }
});

router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser;
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  if (currentUser) {
    store.state.auth.user = currentUser;
    store.state.auth.loggedIn = true;
  } else {
    store.state.auth.user = {};
    store.state.auth.loggedIn = false;
  }

  if (requiresAuth && !currentUser) {
    alert("로그인이 필요한 서비스입니다.");
    next("/");
  } else {
    next();
  }
});
