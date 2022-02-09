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
                                .typeString('Hola, soy Alexander Tavera')
                                .start()
                            }}
                            />
                        </label>
                    </Typography>
                    <Typography variant='h5' className='descripcionPerfil' sx={{mt:3}}>
                        Soy desarrollador Front-end Jr, cuento con habilidades de resolución de problemas, capacidad de aprendizaje, trabajo en equipo, adaptabilidad a diferentes entornos de manera eficiente y gusto por los retos.
                    </Typography>
                </div>
            </div>
            <div className='contenedorSkills' id='miskill'>
                <div className='contenedorSkillRelative'>
                    <div className='contenedorSkillTitulo'>
                        <Typography variant='h3' sx={{mb:2}} className='bold'>Mis Skills</Typography>
                        <Typography variant='h4'sx={{mb:2, mt:2}}>
                            Estos son los lenguajes y tecnologías que manejo, de los
                            cuales me interesa seguir aprendiendo.
                        </Typography>
                    </div>
                    <div className='contedorSkillImagenes'>
                        <div className='contenedorImagenesSkills'>
                            <Typography variant='h5' className='colorBlue' sx={{mb:2, mt:2}}>Lenguajes y Frameworks</Typography>
                            <img src='https://res.cloudinary.com/dxnn5sbsz/image/upload/v1643148553/javascript-icon-png-23_kgh9xf.png'/>
                            <img src='https://res.cloudinary.com/dxnn5sbsz/image/upload/v1643148114/7946470_nlwl4i.png'/>
                            <img src='https://res.cloudinary.com/dxnn5sbsz/image/upload/v1643148310/redux-harmful_mervf5.png'/>
                            <img src='https://res.cloudinary.com/dxnn5sbsz/image/upload/v1643149435/226777_vgjykh.png'/>
                        </div>
                        <div className='contenedorImagenesSkills'>
                            <Typography variant='h5' className='colorBlue' sx={{mb:2, mt:2}}>Maquetado y estilos</Typography>
                            <img src='https://res.cloudinary.com/dxnn5sbsz/image/upload/v1643147777/IconoHtml_pkwr9y.png'/>
                            <img src='https://res.cloudinary.com/dxnn5sbsz/image/upload/v1643147845/732190_oosjww.png'/>
                            <img src='https://res.cloudinary.com/dxnn5sbsz/image/upload/v1643147968/Bootstrap_logo.svg_clae9s.png'/>
                            <img src='https://res.cloudinary.com/dxnn5sbsz/image/upload/v1643148407/material-ui_fyjtyg.png'/>
                        </div>
                        <div className='contenedorImagenesSkills'>
                            <Typography variant='h5' className='colorBlue' sx={{mb:2, mt:2}}>Bases de datos</Typography>
                            <img src='https://res.cloudinary.com/dxnn5sbsz/image/upload/v1643149129/MySQL_mnnpzt.png'/>
                            <img src='https://res.cloudinary.com/dxnn5sbsz/image/upload/v1643148181/firebase_sjyp2k.png'/>
                            <img src='https://res.cloudinary.com/dxnn5sbsz/image/upload/v1643149310/mariadb_xs2ftb.png'/>
                        </div>
                        <div className='contenedorImagenesSkills'>
                            <Typography variant='h5' className='colorBlue' sx={{mb:2, mt:2}}>Otras Tecnologias</Typography>
                            <img src='https://res.cloudinary.com/dtdopreaf/image/upload/v1644364492/logo_git_icon_fbd99p.png'/>
                            <img src='https://res.cloudinary.com/dtdopreaf/image/upload/v1644364561/descarga_yijggs.png'/>
                            <img src='https://res.cloudinary.com/dtdopreaf/image/upload/v1644364656/images_x7gfvv.png'/>
                            <img src='https://res.cloudinary.com/dtdopreaf/image/upload/v1644364774/descarga_1_feut0i.png'/>

                        </div>
                    </div>
                </div>
            </div>
            <div className='divCertificaciones' id='misCertificaciones'>
                <Typography variant='h3' sx={{mb:4, mt:2}} className='bold'>Mis Certificaciones</Typography>
                <div className='contenedorCertificaciones-Flex'>
                    <div className='Certificaciones'>
                        <div className='imgCertificacion'>
                            <img src="https://res.cloudinary.com/dxnn5sbsz/image/upload/v1643149925/unnamed_lljjsa.png"/>
                        </div>
                        <div>
                            <Typography variant='h5' sx={{ml:2, mt:1}} className='colorBlanco'>Responsive Web Design</Typography>
                            <Typography variant='body1' sx={{ml:2}}>
                                <a target="_blank" className='links' href="https://www.freecodecamp.org/certification/JoseAlex7/responsive-web-design">Ver credencial</a>
                            </Typography>
                        </div>
                    </div>
                    <div className='Certificaciones'>
                        <div className='imgCertificacion'>
                            <img src="https://res.cloudinary.com/dxnn5sbsz/image/upload/v1643149925/unnamed_lljjsa.png"/>
                        </div>
                        <div>
                            <Typography variant='h5' sx={{ml:2, mt:1}} className='colorBlanco'>JavaScript Algorithms and Data Structures</Typography>
                            <Typography variant='body1' sx={{ml:2}} >
                                <a target="_blank" className='links' href="https://www.freecodecamp.org/certification/JoseAlex7/javascript-algorithms-and-data-structures">Ver credencial</a>
                            </Typography>
                        </div>
                    </div>
                    <div className='Certificaciones'>
                        <div className='imgCertificacion'>
                            <img src="https://res.cloudinary.com/dxnn5sbsz/image/upload/v1643149925/unnamed_lljjsa.png"/>
                        </div>
                        <div>
                            <Typography variant='h5' sx={{ml:2, mt:1}} className='colorBlanco'>Front End Development Libraries</Typography>
                            <Typography variant='body1' sx={{ml:2}}>
                                <a target="_blank" className='links' href="https://www.freecodecamp.org/certification/JoseAlex7/front-end-development-libraries">Ver credencial</a>
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
                                <a target="_blank" className='links' href="https://res.cloudinary.com/dtdopreaf/image/upload/v1644367121/20220202_CERTIFICADO_Jose_Alexander_Tavera_page-0001_newn6r.jpg">Ver credencial</a>
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
