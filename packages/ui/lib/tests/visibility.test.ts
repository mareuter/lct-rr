import { describe, it, expect } from 'vitest'

import { direction } from '../helpers/visibility'

describe('Azimuth direction at North', () => {
  it('Test North to West', () => {
    expect(direction(355.0)).toBe('N')
  })
  it('Test North', () => {
    expect(direction(0.0)).toBe('N')
  })
  it('Test North to East', () => {
    expect(direction(8.5)).toBe('N')
  })
})

describe('Azimuth direction at North-Northeast', () => {
  it('Test North-Northeast to West', () => {
    expect(direction(15.43)).toBe('NNE')
  })
  it('Test North-Northeast', () => {
    expect(direction(22.5)).toBe('NNE')
  })
  it('Test North-Northeast to East', () => {
    expect(direction(27.64)).toBe('NNE')
  })
})

describe('Azimuth direction at Northeast', () => {
  it('Test Northeast to West', () => {
    expect(direction(36.53)).toBe('NE')
  })
  it('Test Northeast', () => {
    expect(direction(45.0)).toBe('NE')
  })
  it('Test Northeast to East', () => {
    expect(direction(51.64)).toBe('NE')
  })
})

describe('Azimuth direction at East-Northeast', () => {
  it('Test East-Northeast to West', () => {
    expect(direction(59.54)).toBe('ENE')
  })
  it('Test East-Northeast', () => {
    expect(direction(67.5)).toBe('ENE')
  })
  it('Test East-Northeast to East', () => {
    expect(direction(70.15)).toBe('ENE')
  })
})

describe('Azimuth direction at East', () => {
  it('Test East to West CCW', () => {
    expect(direction(81.95)).toBe('E')
  })
  it('Test East', () => {
    expect(direction(90.0)).toBe('E')
  })
  it('Test East to West CW', () => {
    expect(direction(97.28)).toBe('E')
  })
})

describe('Azimuth direction at East-Southeast', () => {
  it('Test East-Southeast to East', () => {
    expect(direction(103.53)).toBe('ESE')
  })
  it('Test East-Southeast', () => {
    expect(direction(112.5)).toBe('ESE')
  })
  it('Test East-Southeast to West', () => {
    expect(direction(123.7)).toBe('ESE')
  })
})

describe('Azimuth direction at Southeast', () => {
  it('Test Southeast to East', () => {
    expect(direction(126.19)).toBe('SE')
  })
  it('Test Southeast', () => {
    expect(direction(135.0)).toBe('SE')
  })
  it('Test Southeast to West', () => {
    expect(direction(140.75)).toBe('SE')
  })
})

describe('Azimuth direction at South-Southeast', () => {
  it('Test South-Southeast to East', () => {
    expect(direction(146.5)).toBe('SSE')
  })
  it('Test South-Southeast', () => {
    expect(direction(157.5)).toBe('SSE')
  })
  it('Test South-Southeast to West', () => {
    expect(direction(167.95)).toBe('SSE')
  })
})

describe('Azimuth direction at South', () => {
  it('Test South to East', () => {
    expect(direction(169.19)).toBe('S')
  })
  it('Test South', () => {
    expect(direction(180.0)).toBe('S')
  })
  it('Test South to West', () => {
    expect(direction(189.75)).toBe('S')
  })
})

describe('Azimuth direction at South-Southwest', () => {
  it('Test South-Southwest to East', () => {
    expect(direction(193.61)).toBe('SSW')
  })
  it('Test South-Southwest', () => {
    expect(direction(202.5)).toBe('SSW')
  })
  it('Test South-Southwest to West', () => {
    expect(direction(210.63)).toBe('SSW')
  })
})

describe('Azimuth direction at Southwest', () => {
  it('Test Southwest to East', () => {
    expect(direction(214.82)).toBe('SW')
  })
  it('Test Southwest', () => {
    expect(direction(225.0)).toBe('SW')
  })
  it('Test Southwest to West', () => {
    expect(direction(234.05)).toBe('SW')
  })
})

describe('Azimuth direction at West-Southwest', () => {
  it('Test West-Southwest to East', () => {
    expect(direction(236.53)).toBe('WSW')
  })
  it('Test West-Southwest', () => {
    expect(direction(247.5)).toBe('WSW')
  })
  it('Test West-Southwest to West', () => {
    expect(direction(258.61)).toBe('WSW')
  })
})

describe('Azimuth direction at West', () => {
  it('Test West to East CCW', () => {
    expect(direction(261.95)).toBe('W')
  })
  it('Test West', () => {
    expect(direction(270.0)).toBe('W')
  })
  it('Test West to East CW', () => {
    expect(direction(278.28)).toBe('W')
  })
})

describe('Azimuth direction at West-Northwest', () => {
  it('Test West-Northwest to West', () => {
    expect(direction(283.83)).toBe('WNW')
  })
  it('Test West-Northwest', () => {
    expect(direction(292.5)).toBe('WNW')
  })
  it('Test West-Northwest to East', () => {
    expect(direction(301.62)).toBe('WNW')
  })
})

describe('Azimuth direction at Northwest', () => {
  it('Test Northwest to West', () => {
    expect(direction(303.83)).toBe('NW')
  })
  it('Test Northwest', () => {
    expect(direction(315.0)).toBe('NW')
  })
  it('Test Northwest to East', () => {
    expect(direction(321.105)).toBe('NW')
  })
})

describe('Azimuth direction at North-Northwest', () => {
  it('Test North-Northwest to West', () => {
    expect(direction(328.53)).toBe('NNW')
  })
  it('Test North-Northwest', () => {
    expect(direction(337.5)).toBe('NNW')
  })
  it('Test North-Northwest to East', () => {
    expect(direction(348.7)).toBe('NNW')
  })
})
