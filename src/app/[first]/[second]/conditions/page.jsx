import Page from "@/app/conditions/page";


function page({params}) {
  console.log("lang", params.lang);
  
  return (
    <Page />
  )
}

export default page;
