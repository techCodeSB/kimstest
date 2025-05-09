import Page from "@/app/conditions/page";


function page({params}) {
  console.log("lang", params.first);
  
  return (
    <Page />
  )
}

export default page;
