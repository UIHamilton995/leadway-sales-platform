import React from 'react'
import EarningsHeader from '../components/EarningsHeader'
import ReportTable from '../components/ReportTable'

type Props = {}

const Reports = (props: Props) => {
  return (
    <div>
        <EarningsHeader />
        <ReportTable /> 
    </div>
  )
}

export default Reports;