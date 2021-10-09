// {store, route, redirect}
// const routes = ['/sign-in', '/sign-up', '/reset-password', 'confirmation-code']

// export default async function ({route, store}) {
//     if(!routes.includes(route.path)){
//         var res = await store.dispatch('auth/auth')    
//         if(res.data.status != 200){
//             location.replace('/sign-in')
//         }
//     }
// }