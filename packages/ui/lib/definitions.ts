export interface PhaseIcon {
  [index: string]: string
}

export interface Phase {
  phase: string
  datetime: Array<number>
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
