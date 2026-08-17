import React, { Suspense, use, useLayoutEffect, useState } from 'react'

import {
  DateContext,
  type DateContextType,
  GeoLocationContext,
  type GeoLocationContextType,
  createUrl,
  CurrentVisibility,
  CurrentPhase,
  type MoonInfoJson,
  NextFourPhases,
  SkeletonDashboard,
  LocationWithTz,
} from '@repo/ui'

export function HydrateFallback() {
  return <h1 className="h-screen w-screen text-4xl">Loading Game...</h1>
}

const Dashboard = ({
  p,
  l,
}: {
  p: Promise<MoonInfoJson> | undefined
  l: LocationWithTz
}) => {
  if (!p) {
    return <SkeletonDashboard />
  }
  const moonInfo = use(p)
  console.log(`V: ${moonInfo.age}, ${moonInfo.altitude}, ${moonInfo.colong}`)
  return (
    <>
      <div className="flex flex-col py-2">
        <CurrentVisibility
          altitude={moonInfo.altitude}
          azimuth={moonInfo.azimuth}
          coordsGood={l.good}
        />
      </div>
      <div className="py-2">
        <CurrentPhase
          phaseName={moonInfo.phase}
          moonAge={moonInfo.age}
          fraction={moonInfo.fractional_phase}
          colong={moonInfo.colong}
        />
      </div>
      <div className="pt-2">
        <NextFourPhases
          phaseList={moonInfo.next_four_phases}
          timezone={l.timezone}
        />
      </div>
    </>
  )
}

const Home = () => {
  const { date } = use(DateContext) as DateContextType
  const { location } = use(GeoLocationContext) as GeoLocationContextType
  console.log(
    `Z: ${date}, ${location.good}, ${location.latitude}, ${location.longitude}, ${location.timezone}`,
  )
  const [dashboardInfo, setDashboardInfo] = useState<Promise<MoonInfoJson>>()

  useLayoutEffect(() => {
    console.log('Fetching data')
    const fetchData = async () => {
      console.log('QQQ')
      const url = createUrl('moon_info', date, location)
      const response = await fetch(url)
      console.log(`F: ${response.ok}`)
      if (!response.ok) {
        return
      }
      setDashboardInfo(response.json())
    }
    fetchData()
    console.log('LLLL')
  }, [
    date,
    location,
    location.latitude,
    location.longitude,
    location.good,
    location.timezone,
  ])

  return (
    <>
      <Suspense fallback={<SkeletonDashboard />}>
        <Dashboard p={dashboardInfo} l={location} />
      </Suspense>
    </>
  )
}

export default Home
