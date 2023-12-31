import Router from 'next/router'
import React, { useEffect, useState } from 'react'
import JobDetailsPage from '../components/jobDetails/JobDetailsPage'
import { fromBinary } from '../utilities/common-utils'

const JobDetails = () => {
  const [jobDetailsData, setJobDetailsData] = useState<string | string[] | null>(null)
  const [encodedJobDetails, setEncodedJobDetails] = useState<string | string[] | undefined>('')

  useEffect(() => {
    const { jobDetails } = Router.query

    if (jobDetails) {
      setEncodedJobDetails(jobDetails)
      setJobDetailsData(JSON.parse(fromBinary(window.atob(jobDetails as string))))
    }
  }, [])

  if (!jobDetailsData || !encodedJobDetails) {
    return <></>
  }

  return (
    <div>
      <JobDetailsPage encodedJobDetails={encodedJobDetails} jobDetails={jobDetailsData as any} />
    </div>
  )
}

export default JobDetails
