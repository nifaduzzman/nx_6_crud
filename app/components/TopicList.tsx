import React from 'react'
import TopicCard from './TopicCard'

function TopicList() {
  return (
    <div className='flex flex-col gap-4 divide-y divide-slate-500/50 mt-8'>
      <TopicCard/>
      <TopicCard/>
      <TopicCard/>
      <TopicCard/>
      <TopicCard/>
      <TopicCard/>
      <TopicCard/>
      <TopicCard/>
    </div>
  )
}

export default TopicList
