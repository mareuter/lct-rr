import { it, describe, expect } from 'vitest'

import { getAverageTimezoneCoordinates } from '../helpers/average_timezone_coordinates'

describe('Retreiving Lat/Long by Timezone Name', () => {
  it('String Access', () => {
    const coordinates = getAverageTimezoneCoordinates('America/Phoenix')
    expect(coordinates).toEqual([35.4744606301, -111.481638946])
  })

  it("Timezone Doesn't Exist", () => {
    const coordinates = getAverageTimezoneCoordinates('NoContinent/ImNotHere')
    expect(coordinates).toEqual([0, 0])
  })
})
