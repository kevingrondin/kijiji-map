'use strict'

const getBounds = ({ latNe, lngNe, latSw, lngSw }) => {
  if (!latNe || !lngNe || !latSw || !lngSw) return {}
  return {
    longitude_lte: latNe,
    latitude_lte: lngNe,
    longitude_gte: latSw,
    latitude_gte: lngSw,
  }
}

module.exports = {
  async find(ctx) {
    const { latNe, lngNe, latSw, lngSw, ...query } = ctx.query
    const bounds = getBounds({ latNe, lngNe, latSw, lngSw })
    const params = { ...query, ...bounds }

    const [ads, count] = await Promise.all([
      strapi.services.ad.find(params),
      strapi.services.ad.count(params),
    ])

    return { ads, count }
  },
  scrape() {
    return strapi.services.ad.scrape()
  },
}
