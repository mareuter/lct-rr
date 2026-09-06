import React, { Suspense, use, useEffect, useState } from 'react'

import {
  DateContext,
  type DateContextType,
  GeoLocationContext,
  type GeoLocationContextType,
  createUrl,
  CurrentVisibility,
  CurrentPhase,
  type DashboardJson,
  NextPhase,
  SkeletonDashboard,
  LocationWithTz,
  LunarClubCard,
  LunarTwoCard,
} from '@repo/ui'

export function HydrateFallback() {
  return <h1 className="h-screen w-screen text-4xl">Loading Game...</h1>
}

const Dashboard = ({
  p,
  l,
}: {
  p: Promise<DashboardJson> | undefined
  l: LocationWithTz
}) => {
  if (!p) {
    return <SkeletonDashboard />
  }
  const dashboardInfo = use(p)
  console.log(
    `V: ${dashboardInfo.age}, ${dashboardInfo.altitude}, ${dashboardInfo.colong}`,
  )
  return (
    <>
      <div className="flex flex-col py-2">
        <CurrentVisibility
          altitude={dashboardInfo.altitude}
          azimuth={dashboardInfo.azimuth}
          coordsGood={l.good}
        />
      </div>
      <div className="py-2">
        <CurrentPhase
          phaseName={dashboardInfo.phase}
          moonAge={dashboardInfo.age}
          fraction={dashboardInfo.fractional_phase}
          colong={dashboardInfo.colong}
        />
      </div>
      <div className="py-2">
        <NextPhase phaseList={dashboardInfo.next_phase} timezone={l.timezone} />
      </div>
      <div className="py-2">
        <LunarClubCard summary={dashboardInfo.lunar_club} />
      </div>
      <div className="pt-2">
        <LunarTwoCard summary={dashboardInfo.lunar_two} />
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
  const [dashboardInfo, setDashboardInfo] = useState<Promise<DashboardJson>>()

  useEffect(() => {
    console.log('Fetching data')
    const fetchData = async () => {
      console.log('QQQ')
      const url = createUrl('dashboard', date, location)
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
