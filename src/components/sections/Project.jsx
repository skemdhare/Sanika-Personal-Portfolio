import { RevealOnScroll } from "../RevealOnScroll";

export const Project=()=>{
    const skills =["React","TailwindCSS"];
    const skills1=["Arduino", "Sensors", "Embedded C", "IoT Modules"];
    const skills2=["Java", "MySQL", "JDBC"]

    return(
      <section id="projects" className="min-h-screen flex items-center justify-center py-20">
        <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                {" "}
                Featured Projects
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition">
                        <h3 className="text-xl font-bold mb-2">1. Portfolio Website</h3>
                        <p className="text-gray-100 mb-4">
                        A fully responsive personal portfolio website built using React and styled with Tailwind CSS. It showcases my skills, experience, and projects with smooth animations and a clean, modern design.

                        </p>
                        <div className="flex flex-wrap gap-2">
                                {skills.map((tech,key)=>(
                                    <span 
                                    key={key}
                                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition">
                                        {tech}

                                    </span>
                                ))}
                            </div>
                            
                    </div>

                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition">
                        <h3 className="text-xl font-bold mb-2">2. HydroTrack & Automatic Water Dispenser (IoT Project)</h3>
                        
                        <p className="text-gray-100 mb-4">
                         An IoT-based solution for water management that includes:

                              HydroTrack: Monitors water levels in tanks and detects overflow or shortage in real time.

                             Automatic Water Dispenser: Dispenses measured water quantities automatically and tracks water temperature.
                             Aimed at promoting water conservation and automation in households or farms.

                        </p>
                        <div className="flex flex-wrap gap-2">
                                {skills1.map((tech,key)=>(
                                    <span 
                                    key={key}
                                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition">
                                        {tech}

                                    </span>
                                ))}
                            </div>
                            
                    </div>
                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition">
                        <h3 className="text-xl font-bold mb-2">3. Student Management System (Internship Project)</h3>
                       
                        <p className="text-gray-100 mb-4">
                        A simple CRUD-based desktop application developed during my internship. It allows users to Create, Read, Update, and Delete student records using a MySQL database. This project helped strengthen my understanding of database connectivity using JDBC and performing operations without using JSP/Servlets.</p>
                        <div className="flex flex-wrap gap-2">
                                {skills2.map((tech,key)=>(
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
        </RevealOnScroll>   

      </section>  
    );
}