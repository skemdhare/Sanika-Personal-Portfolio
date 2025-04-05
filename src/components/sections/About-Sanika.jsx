export const About=()=>{
    const frontendSkills =[,"HTML","CSS","TailwindCSS","JavaScript","React"];
    const backendSkills =["Mysql","Java","JDBC","Hibernate"];
    return(
        <section id="about" className="min-h-screen flex items-center justify-center py-20 ">
            <div className="max-w-3xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                    {" "}
                    About Me
                    </h2>
                    <div className=" rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
                        <p className="text-gray-300 mb-6 ">
                        I'm a dedicated and curious Web Developer with a strong foundation in front-end and back-end web technologies. 
                        I enjoy creating clean, responsive, and efficient websites that provide great user experiences.
                        I’m currently focused on improving my backend skills with Java and Hibernate, and learning how to build better data-driven applications.

                 


                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
                           <div className="rounded-xl p-6 hover:translate-y-1 transistion-all">
                            <h3 className="text-xl font-bold mb-4"> Frontend</h3>
                            <div className="flex flex-wrap gap-2">
                                {frontendSkills.map((tech,key)=>(
                                    <span 
                                    key={key}
                                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition">
                                        {tech}

                                    </span>
                                ))}
                            </div>

                            </div> 
                            <div className="rounded-xl p-6 hover:translate-y-1 transistion-all">
                            <h3 className="text-xl font-bold mb-4"> Backend</h3>
                            <div className="flex flex-wrap gap-2">
                                {backendSkills.map((tech,key)=>(
                                    <span 
                                    key={key}
                                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition">
                                        {tech}

                                    </span>
                                ))}
                            </div>

                            </div> 
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 ">
                        <div className="p-6 rounded-xl border-white/10 border hover:translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">🎓Education</h3>
                        <ul>
                             <li>
                                <strong>SSC</strong>- Solapur University (2014-2019)
                            </li>
                            <li>
                                <strong>HSC</strong>- Solapur University (2019-2021)
                            </li>
                            <li>
                                <strong>B.E in computer Engineering</strong>- Savitribai phule pune university(2021-2025)
                            </li>
                        </ul>

                        </div>
                        <div className="p-6 rounded-xl border-white/10 border hover:translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">💼 Work Experience</h3>

                        </div>

                    </div>

            </div>

        </section>
    )
}