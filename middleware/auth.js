export default function ({ store, redirect }) {
  if (!store.getters['cookies/GET_role_id']) 
  {
    return redirect({name: "login"})
  }
}