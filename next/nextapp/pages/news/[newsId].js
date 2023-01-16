import {useRouter} from 'next/router'

function DetailPage() {

    const router = useRouter();

   const newsId = router.query.newId;

   //send a requerst to backen API to fetch news item with newsID

    return (
      <h1>The Detail Page</h1>
    )
  }
  
  export default DetailPage