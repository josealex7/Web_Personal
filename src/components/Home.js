import { Button, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import '../styles/home.css'
import Projects from './Projects';
import Typewriter from 'typewriter-effect';
import Contact from './Contact';


const Home = () => {

    return (
        <div>
            <div className='contenedorPerfil' id='miperfil'>
                <div>
                    <Typography variant='h3' sx={{mb:3}} className='descripcionPerfil bold'>
                        <label className='reducirTamanio'>
                            <Typewriter
                             onInit={(typewriter)=>{
                                typewriter
                                .typeString("Hi, I'm Alexander Tavera, Ruby on Rails Developer")
                                
                                .start()
                            }}
                            />
                        </label>
                    </Typography>
                    <Typography variant='h5' className='descripcionPerfil' sx={{mt:3}}>
                        As a Ruby on Rails developer, I specialize in developing scalable and high-quality web applications. I have experience working on various projects using Ruby on Rails, and I enjoy collaborating with other developers, designers, and business specialists to create innovative technological solutions. In addition to Ruby on Rails, I also have experience in other web development technologies, and I am always looking for ways to improve my skills and stay up-to-date with the latest trends.
                    </Typography>
                    <Typography variant='h5' className='descripcionPerfil' sx={{mt:3}}>
                        If you're looking for a passionate and dedicated Ruby on Rails developer, don't hesitate to contact me! I'm excited to hear about new projects and collaboration opportunities.
                    </Typography>
                </div>
            </div>
            <div className='contenedorSkills' id='miskill'>
                <div className='contenedorSkillRelative'>
                    <div className='contenedorSkillTitulo'>
                        <Typography variant='h3' sx={{mb:2}} className='bold'>My Skills</Typography>
                        <Typography variant='h4'sx={{mb:2, mt:2}}>
                            Languages and technologies I have experience with
                        </Typography>
                    </div>
                    <div className='contedorSkillImagenes'>
                        <div className='contenedorImagenesSkills'>
                            <Typography variant='h5' className='colorBlue' sx={{mb:2, mt:2}}>Fullstack</Typography>
                            <img src='https://res.cloudinary.com/dxnn5sbsz/image/upload/v1670297299/1_MtuURq-9Fe3MZM5IZqQgyw_pxzzkz.png'/>
                            <img src='https://res.cloudinary.com/dxnn5sbsz/image/upload/v1682515899/api-rest_pzqyzr.png'/>
                            <img src='https://res.cloudinary.com/dxnn5sbsz/image/upload/v1643148114/7946470_nlwl4i.png'/>
                        </div>
                        <div className='contenedorImagenesSkills'>
                            <Typography variant='h5' className='colorBlue' sx={{mb:2, mt:2}}>Databases</Typography>
                            <img src='https://res.cloudinary.com/dxnn5sbsz/image/upload/v1643149129/MySQL_mnnpzt.png'/>
                            <img src='https://res.cloudinary.com/dxnn5sbsz/image/upload/v1682515577/Postgresql_elephant.svg_chuue7.png'/>
                            <img src='https://res.cloudinary.com/dxnn5sbsz/image/upload/v1670297853/mongodb_ww4dks.png'/>
                        </div>
                        <div className='contenedorImagenesSkills'>
                            <Typography variant='h5' className='colorBlue' sx={{mb:2, mt:2}}>Cloud native</Typography>
                            <img src='https://res.cloudinary.com/dxnn5sbsz/image/upload/v1682516385/image-docker_hwgj45.png'/>
                            <img src='https://res.cloudinary.com/dxnn5sbsz/image/upload/v1682516526/microservices_guaz0m.png'/>
                            <img src='https://res.cloudinary.com/dxnn5sbsz/image/upload/v1682516326/AWS_Simple_Icons_AWS_Cloud.svg_awl9ak.png'/>
                        </div>
                        <div className='contenedorImagenesSkills'>
                            <Typography variant='h5' className='colorBlue' sx={{mb:2, mt:2}}>Client side</Typography>
                            <img src='https://res.cloudinary.com/dxnn5sbsz/image/upload/v1643147777/IconoHtml_pkwr9y.png'/>
                            <img src='https://res.cloudinary.com/dxnn5sbsz/image/upload/v1643147845/732190_oosjww.png'/>
                            <img src='https://res.cloudinary.com/dxnn5sbsz/image/upload/v1643148553/javascript-icon-png-23_kgh9xf.png'/>
                        </div>
                    </div>
                </div>
            </div>
            <div className='divCertificaciones' id='misCertificaciones'>
                <Typography variant='h3' sx={{mb:4, mt:2}} className='bold'>My certifications</Typography>
                <div className='contenedorCertificaciones-Flex'>
                    <div className='Certificaciones'>
                        <div className='imgCertificacion'>
                            <img src="https://res.cloudinary.com/dxnn5sbsz/image/upload/v1682517372/udemy-new-20212512_ghmo0d.jpg"/>
                        </div>
                        <div>
                            <Typography variant='h5' sx={{ml:2, mt:1}} className='colorBlanco'>The Complete Ruby on Rails Developer Course</Typography>
                            <Typography variant='body1' sx={{ml:2}}>
                                <a target="_blank" className='links' href="https://www.udemy.com/certificate/UC-70d339d9-9fdf-4a6c-a6bc-4adfd66f8fb9/">To view credential</a>
                            </Typography>
                        </div>
                    </div>
                    <div className='Certificaciones'>
                        <div className='imgCertificacion'>
                            <img src="https://res.cloudinary.com/dxnn5sbsz/image/upload/v1670298290/AWS-Certified-Cloud-Practitioner_badge.634f8a21af2e0e956ed8905a72366146ba22b74c_p83x7p.png"/>
                        </div>
                        <div>
                            <Typography variant='h5' sx={{ml:2, mt:1}} className='colorBlanco'>AWS Certified Cloud Practitioner</Typography>
                            <Typography variant='body1' sx={{ml:2}}>
                                <a target="_blank" className='links' href="https://www.credly.com/badges/beafc1fa-eee1-4be3-ba97-df3e0ac83973/linked_in?t=rkklaz">To view credential</a>
                            </Typography>
                        </div>
                    </div>
                    <div className='Certificaciones'>
                        <div className='imgCertificacion'>
                            <img className='imagenAcademia' src="https://res.cloudinary.com/dtdopreaf/image/upload/v1644365056/Logo-AG-2021_wivnqq.png"/>
                        </div>
                        <div>
                            <Typography variant='h5' sx={{ml:2, mt:1}} className='colorBlanco'>Desarrollo Front-End en ReactJs</Typography>
                            <Typography variant='body1' sx={{ml:2}}>
                                <a target="_blank" className='links' href="https://res.cloudinary.com/dtdopreaf/image/upload/v1644367121/20220202_CERTIFICADO_Jose_Alexander_Tavera_page-0001_newn6r.jpg">To view credential</a>
                            </Typography>
                        </div>
                    </div>
                    <div className='Certificaciones'>
                        <div className='imgCertificacion'>
                            <img src="https://res.cloudinary.com/dxnn5sbsz/image/upload/v1670298404/University_of_Los_Andes_logo.svg_nvuknu.png"/>
                        </div>
                        <div>
                            <Typography variant='h5' sx={{ml:2, mt:1}} className='colorBlanco'>Basic Concepts in the Cloud - AWS</Typography>
                            <Typography variant='body1' sx={{ml:2}} >
                                <a target="_blank" className='links' href="https://wallet.xertify.co/certificates/5A7A3D18A001">To view credential</a>
                            </Typography>
                        </div>
                    </div>
                </div>
            </div>
            <div className='MisProyectos' id='misProyectos'>
                        <Projects/>
            </div>
            <div className='ContenedorContactoHome' id='contactame'>
                        <Typography variant='h3' sx={{mt:5, mb:2}} className='contenedorTituloFinal'>Contactame</Typography>
                        <Typography variant='h5' className='contenedorMensajeFinal'>
                                Si deseas puedes comunicarte conmigo por medio del siguiente formulario
                        </Typography>
                        <Contact/>
            </div>
            <div className='Proyectos'>
                <div>
                    <Typography variant='h4'>Proyectos</Typography>
                </div>
                <div>
                    <Typography variant='h6'>
                        Si deseas ver mas de mis proyectos puedes hacer clic en el siguiente boton
                    </Typography>
                </div>
                <div>
                    <Button variant='outlined' className='botonIr'>
                            <Typography variant='h6'>
                                <a target="_blank" className='linkButton' href="https://github.com/josealex7">
                                    Ir ahora
                                </a>
                            </Typography>
                    </Button>
                </div>
            </div>

        </div>
      );
};

export default Home;
