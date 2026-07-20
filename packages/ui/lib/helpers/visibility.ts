export const direction = (azimuth: number): string => {
  const HALF_SECTOR = 11.25 // degrees
  if (azimuth >= 360.0 - HALF_SECTOR || azimuth < HALF_SECTOR) {
    return 'N'
  } else if (azimuth >= HALF_SECTOR && azimuth < 3 * HALF_SECTOR) {
    return 'NNE'
  } else if (azimuth >= 3 * HALF_SECTOR && azimuth < 5 * HALF_SECTOR) {
    return 'NE'
  } else if (azimuth >= 5 * HALF_SECTOR && azimuth < 7 * HALF_SECTOR) {
    return 'ENE'
  } else if (azimuth >= 7 * HALF_SECTOR && azimuth < 9 * HALF_SECTOR) {
    return 'E'
  } else if (azimuth >= 9 * HALF_SECTOR && azimuth < 11 * HALF_SECTOR) {
    return 'ESE'
  } else if (azimuth >= 11 * HALF_SECTOR && azimuth < 13 * HALF_SECTOR) {
    return 'SE'
  } else if (azimuth >= 13 * HALF_SECTOR && azimuth < 15 * HALF_SECTOR) {
    return 'SSE'
  } else if (azimuth >= 15 * HALF_SECTOR && azimuth < 17 * HALF_SECTOR) {
    return 'S'
  } else if (azimuth >= 17 * HALF_SECTOR && azimuth < 19 * HALF_SECTOR) {
    return 'SSW'
  } else if (azimuth >= 19 * HALF_SECTOR && azimuth < 21 * HALF_SECTOR) {
    return 'SW'
  } else if (azimuth >= 21 * HALF_SECTOR && azimuth < 23 * HALF_SECTOR) {
    return 'WSW'
  } else if (azimuth >= 23 * HALF_SECTOR && azimuth < 25 * HALF_SECTOR) {
    return 'W'
  } else if (azimuth >= 25 * HALF_SECTOR && azimuth < 27 * HALF_SECTOR) {
    return 'WNW'
  } else if (azimuth >= 27 * HALF_SECTOR && azimuth < 29 * HALF_SECTOR) {
    return 'NW'
  } else if (azimuth >= 29 * HALF_SECTOR && azimuth < 31 * HALF_SECTOR) {
    return 'NNW'
  }
  return ''
}
