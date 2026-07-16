import { FeatureData, FeatureDataInfo, LunarFeature } from '../definitions'

export const createFeatureArray = (features: FeatureData[]) => {
  const featureArray: LunarFeature[] = []
  let key = 0
  for (const feature of features) {
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
