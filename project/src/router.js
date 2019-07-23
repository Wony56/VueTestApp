import VueRouter from "vue-router";
import PostPage from "@/views/PostPage";
import PortfolioPage from "@/views/PortfolioPage";
import UserPage from "@/views/UserPage";
import UserPosts from "@/components/UserPosts";
import UserProfile from "@/components/UserProfile";

const routes = [
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
    },
    beforeEnter: (to, from, next) => {
      if (to.matched.some(record => record.meta.requiresAuth)) {
        if (true) {
          alert("로그인이 필요한 서비스입니다.");
          next("/");
        } else {
          next();
        }
      } else {
        next();
      }
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
