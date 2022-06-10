

export default {

  name: 'auth',
  component: () => import( /**webpackChunkName: "Auth Layout" */ "@/modules/auth/layouts/AuthLayout.vue"),
  children: [
    {
      path: '',
      namne: 'login',
      component: () =>
        import(
      /**webpackChunkName: "LoginView" */ "@/modules/auth/views/LoginView.vue"
        ),
    }
  ]



}