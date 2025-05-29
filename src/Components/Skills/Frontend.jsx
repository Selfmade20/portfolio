import React from 'react'
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaBootstrap } from "react-icons/fa";
import { FaGit } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { TbBrandReactNative } from "react-icons/tb";
import { SiBlazor } from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";



const Frontend = () => {
  return (
    <div className="skills_content">
        <h3 className="skills_title">Frontend Developer</h3>
        <div className="skills_box">
            
        <div className="skills_group">
                <div className="skills_data">
                    <FaHtml5 className="text-7xl text-green-500"/>
                    <div>
                        <h3 className="skills_name">HTML</h3>
                        <span className="skills_level">Advanced</span>
                    </div>
        </div>

                <div className="skills_data">
                    <FaCss3 />
                    <div>
                        <h3 className="skills_name">CSS</h3>
                        <span className="skills_level">Intermediate</span>
                    </div>
                </div>

                <div className="skills_data">
                    <IoLogoJavascript />
                    <div>
                        <h3 className="skills_name">Javascript</h3>
                        <span className="skills_level">Intermediate</span>
                    </div>
                </div>

                <div className="skills_data">
                    <FaBootstrap />
                    <div>
                        <h3 className="skills_name">Bootstrap</h3>
                        <span className="skills_level">Intermediate</span>
                    </div>
                </div>

                <div className="skills_data">
                   <FaGit />
                    <div>
                        <h3 className="skills_name">Git</h3>
                        <span className="skills_level">Intermediate</span>
                    </div>
                </div>

                <div className="skills_data">
                    <FaReact />
                    <div>
                        <h3 className="skills_name">React</h3>
                        <span className="skills_level">Intermediate</span>
                    </div>
                </div>

                <div className="skills_data">
                    <TbBrandReactNative />
                    <div>
                        <h3 className="skills_name">React Native</h3>
                        <span className="skills_level">Beginner</span>
                    </div>
                </div>

                  <div className="skills_data">
                    <SiBlazor />
                    <div>
                        <h3 className="skills_name">Blazor</h3>
                        <span className="skills_level">Beginner</span>
                    </div>
                </div>

                  <div className="skills_data">
                    <TbBrandCSharp />
                    <div>
                        <h3 className="skills_name">C#</h3>
                        <span className="skills_level">Beginner</span>
                    </div>
                </div>
        </div>
        </div>
        </div>
  
  )
}

export default Frontend
