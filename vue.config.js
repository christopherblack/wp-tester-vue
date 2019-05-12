module.exports = {
  pluginOptions: {
    prerenderSpa: {
      registry: undefined,
      renderRoutes: [
        '/',
        '/about',
        '/general',
        '/methods'
      ],
      useRenderEvent: true,
      headless: true,
      onlyProduction: true
    }
  }
}
