export interface PhaseIcon {
  [index: string]: string
}

export interface Phase {
  phase: string
  datetime: number[]
}

export interface PhaseInfo {
  id: number
  phase: string
  datetime: number[]
}

export interface PhaseList {
  [index: string]: Phase
}

export interface FormattedPhase {
  phaseName: string | undefined
  phaseDate: string
  phaseTime: string
}

export const FeatureDataInfo = {
  NAME: 0,
  DIAMETER: 1,
  LATITUDE: 2,
  LONGITUDE: 3,
  DELTA_LATITUDE: 4,
  DELTA_LONGITUDE: 5,
  TYPE: 6,
  QUAD_NAME: 7,
  QUAD_CODE: 8,
  CODE_NAME: 9,
  CLUB_TYPE: 10,
} as const

export type FeatureData = (string | number)[]

export interface LunarFeature {
  key: number
  name: string
  latitude: number
  longitude: number
  type: string
  diameter: number
  quadCode: string
  quadName: string
}

export interface FeatureDataSet {
  [index: string]: FeatureData
}

export interface MoonInfoJson {
  age: number
  colong: number
  fractional_phase: number
  libration_lon: number
  libration_lat: number
  libration_phase_angle: number
  altitude: number
  azimuth: number
  ra: number
  dec: number
  magnitude: number
  earth_distance: number
  subsolar_lat: number
  angular_size: number
  elongation: number
  phase: string
  next_four_phases: PhaseList
}

export interface LunarClubSummary {
  time_events: boolean
  phase_events: boolean
  naked_eye: number
  binocular: number
  telescope: number
}

export interface LunarTwoSummary {
  features: number
  landing_sites: number
  altitude_events: boolean
}

export interface DashboardJson {
  age: number
  altitude: number
  azimuth: number
  colong: number
  fractional_phase: number
  phase: string
  next_phase: PhaseInfo[]
  lunar_club: LunarClubSummary
  lunar_two: LunarTwoSummary
}
