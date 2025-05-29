import React from 'react'
import { FaNodeJs } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { DiMsqlServer } from "react-icons/di";
import { IoLogoFirebase } from "react-icons/io5";
import { SiMongodb } from "react-icons/si";
import { TbSql } from "react-icons/tb";



const Backend = () => {
  return (
    <div className="skills_content">
    <h3 className="skills_title">Backend Developer</h3>

    <div className="skills_box">

    <div className="skills_group">
    <div className="skills_data">
        <FaNodeJs />
        <div>
            <h3 className="skills_name">Node JS</h3>
            <span className="skills_level">Intermediate</span>
        </div>
    </div>

    <div className="skills_data">
        <FaPython />
        <div>
            <h3 className="skills_name">Python</h3>
            <span className="skills_level">Beginner</span>
        </div>
    </div>

    <div className="skills_data">
        <TbSql />
        <div>
            <h3 className="skills_name">MySQL</h3>
            <span className="skills_level">Intermediate</span>
        </div>
    </div>
    <div className="skills_data">
        <SiMongodb />
        <div>
            <h3 className="skills_name">MongoDB</h3>
            <span className="skills_level">Intermediate</span>
        </div>
    </div>
    <div className="skills_data">
        <IoLogoFirebase />
        <div>
            <h3 className="skills_name">Firebase</h3>
            <span className="skills_level">Beginner</span>
        </div>
    </div>

    <div className="skills_data">
        <DiMsqlServer />
        <div>
            <h3 className="skills_name">MSSQL</h3>
            <span className="skills_level">Intermediate</span>
        </div>
    </div>
</div>
</div>
</div>
  )
}

export default Backend
