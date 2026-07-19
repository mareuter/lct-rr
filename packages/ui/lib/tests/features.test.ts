import { it, describe, expect } from 'vitest'

import { createFeatureArray } from '../helpers/features'
import lunarInfo from '../data/query/lunar_club.json' with { type: 'json' }

const FEATURE_LIST = lunarInfo.naked_eye_features

describe('Parse and Check Featues', () => {
  const features = createFeatureArray(FEATURE_LIST)

  it('Right Length', () => {
    expect(features.length).toBe(10)
  })

  it('First Feature Name', () => {
    expect(features[0]!.name).toBe(FEATURE_LIST['9']![0]!)
  })

  it('First Feature Diameter', () => {
    expect(features[0]!.diameter).toBe(FEATURE_LIST['9']![1]!)
  })

  it('Second Feature Latitude', () => {
    expect(features[1]!.latitude).toBe(FEATURE_LIST['10']![2]!)
  })

  it('Second Feature Longitude', () => {
    expect(features[1]!.longitude).toBe(FEATURE_LIST['10']![3]!)
  })

  it('Second Feature Type', () => {
    expect(features[1]!.type).toBe(FEATURE_LIST['10']![6]!)
  })

  it('Third Feature Quad Name', () => {
    expect(features[2]!.quadName).toBe(FEATURE_LIST['6']![7]!)
  })

  it('Third Feature Quad Code', () => {
    expect(features[2]!.quadCode).toBe(FEATURE_LIST['6']![8]!)
  })

  it('Third Feature Key', () => {
    expect(features[2]!.key).toBe(5)
  })
})
