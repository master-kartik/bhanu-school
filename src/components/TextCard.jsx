import React from 'react'
import CardNew from './CardNew'
const TextCard = () => {
  const data=[{image: "https://assets.vogue.in/photos/5f8687d22ed1c0784ab7b016/master/pass/Sabyasachi%20Ajrakh%20uniforms.jpeg",
    heading: "Vision",
    body: "Our vision is to prepare our children for life by broadening their horizons so that their world encompasses the whole of mankind. Deepening their thoughts so that their learning becomes the means to achieve that."
   },   
   {image: "https://cdn.archilovers.com/projects/159d7485-2f3b-4901-9443-c57d9f83cf49.jpg",
    heading: "Focus",
    body: "To provide pedagogy which will promote the learning of Science & Technology, liberal Arts, language learning according to the aptitude and potential of the students.	To familiarize and equip the students with IT skills."
   },
   {image: "https://www.stirworld.com/images/see/1844_Ratna_1.jpg",
    heading: "Goal",
    body: "To create ‘child safe’ environment , where children are respected, protected, empowered and active in their own protection, where staff are skilled, competent and well supported in meeting their protection."
   },
  ]
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center mb-32 mx-20 ">
        {data.map(({image,heading,body})=>(
          <CardNew image={image} heading={heading} body={body}/>
        ))}

        

        </div>
  )
}

export default TextCard