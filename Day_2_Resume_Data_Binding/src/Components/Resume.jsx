import { useState } from "react";


function Resume(){


    const [resumes, setResumes] = useState(
        
        {


            name: "Priyanshu Vijay Gawate",
            phoneNo: "123457892",
            Email :"gawatepriyanshu2004@gmail.com",

            Skill : ["java","css","HTML"],
            education : ["B.Tech Data Science - G H Raisoni College of Engineering] (CGPA 8.63)", "12th Grade - 89.33%", "10th Grade - 87.60%"],

            projct : ["YOLO-Based Lung Cancer Detection",
                    "Bank MIS System",
                    "Mutual Fund Analysis Dashboard"],
                    
            CAREERObj : [
                
                
                "Motivated Software Engineering student with hands-on experience in C, C++, Java, Python, HTML and CSS. Passionate about learning and adapting to emerging technologies. Seeking a Software Developer role in an innovative environment where I can apply my programming expertise to develop efficient, high-performance applications, contribute to impactful projects, and continuously enhance my problem-solving abilities."
                
                
                ]


        }


  
    )




    return(
        <>

      <h2>{resumes.name}</h2>

      {
        resumes.Skill.map((skill, index) => (
            <li key={index}>
                {skill}
            </li>
        ))
      }


        </>
    )
}
export default Resume;