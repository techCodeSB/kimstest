import React from 'react'
import Page from '@/app/conditions/[details]/page';


function page({params}) {
  console.log("lang", params.lang);
  
  return (
    <Page />
  )
}

export default page;
