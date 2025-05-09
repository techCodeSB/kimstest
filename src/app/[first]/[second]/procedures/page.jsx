import Page from "@/app/procedures/page";


function page({ params }) {
  console.log("lang", params.lang);

  return (
    <Page />
  )
}

export default page;
