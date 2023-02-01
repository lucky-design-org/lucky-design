export default () => {
  const routes = []
  const modules = import.meta.glob('/src/views/*.vue')

  for (const key in modules) {
    routes.push({
      path: `/${(key.split('/')[3].split('.')[0]).toLowerCase()}`,
      component: modules[key],
    })
  }
  return routes
}
