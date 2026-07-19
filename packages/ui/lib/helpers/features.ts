import {
  type FeatureDataSet,
  FeatureDataInfo,
  type LunarFeature,
} from '../definitions'

export const createFeatureArray = (
  features: FeatureDataSet,
): LunarFeature[] => {
  const featureArray: LunarFeature[] = []
  let key = 0
  for (const index in features) {
    const feature = features[index]!
    featureArray.push({
      key: key,
      name: feature[FeatureDataInfo.NAME] as string,
      latitude: feature[FeatureDataInfo.LATITUDE] as number,
      longitude: feature[FeatureDataInfo.LONGITUDE] as number,
      diameter: feature[FeatureDataInfo.DIAMETER] as number,
      type: feature[FeatureDataInfo.TYPE] as string,
      quadCode: feature[FeatureDataInfo.QUAD_CODE] as string,
      quadName: feature[FeatureDataInfo.QUAD_NAME] as string,
    })
    key = key + 1
  }
  featureArray.sort((a, b) => {
    if (a.latitude > b.latitude) {
      return -1
    } else {
      return 1
    }
  })
  return featureArray
}
