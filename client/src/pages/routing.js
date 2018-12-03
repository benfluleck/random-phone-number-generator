/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Pages - routing
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */
const routing = [
  {
    key: 'home',
    name: 'Home',
    path: '/',
  },
  {
    key: 'results',
    name: 'Results',
    path: '/results'
  }
]


export const routingAsObject = {}
routing.forEach(({ key, name, path }) => {
  routingAsObject[key] = {
    key,
    name,
    path,
  }
})

export default routing
