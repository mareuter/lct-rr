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
