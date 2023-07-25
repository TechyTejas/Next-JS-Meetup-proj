// pages/aboutus/[id].js

import { useRouter } from 'next/router';

const details = [
  { id: 1, name: 'Yash', role: 'Senior Developer' },
  { id: 2, name: 'Vaibhav', role: 'Backend Developer' },
  { id: 3, name: 'Suresh', role: 'Frontend Developer' }
];

function latestnews ()  {
  const router = useRouter();
  const { id } = router.query;
  const teamMember = details.find((member) => member.id === parseInt(id));

  if (!teamMember) {
    return <h1>Developer doesn't exist</h1>;
  }

  return (
    <div>
      <h1>{teamMember.name}</h1>
      <h1>{teamMember.role}</h1>
    </div>
  );
};
export default latestnews

//[] giving name in square bracker it allows dyanmic path 
// what does dynamic path means it means we can reach to this path after defing any path "/news/anything-path"

// Saving the file name with an id (e.g., "[id].js") is important because it enables dynamic routing in Next.js. When you use square 
// brackets in the file name, like "[id]", it indicates that this page file can handle dynamic values for the "id" parameter in the URL. 
// This way, you can create pages that respond to different URLs and display content based on the provided parameters. In the example we 
// discussed, we used dynamic routing to show the details of different team members based on their IDs in the URL.

// router.query is a property provided by Next.js that allows you to access the query parameters present in the current URL. Query 
// parameters are the parts of the URL that come after the "?" symbol and are used to pass data to the page. For example, in the URL 
// "/aboutus/1", the "1" is a query parameter. The router.query object gives you access to these parameters, so you can extract the values 
// and use them in your components.