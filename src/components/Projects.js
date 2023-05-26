import { Button, Typography } from '@mui/material';
import React from 'react';
import '../styles/projects.css'

const Projects = () => {
    return (
        <div>
            <div>
                <div className='tituloProyectos'>
                    <Typography variant='h3'>Mis proyectos personales</Typography>
                    <Typography variant='h5' sx={{mb:6  }}>Aquí hay algunos proyectos en los que 
                    he trabajado para adquirir nuevas habilidades.</Typography>
                </div>
                <div className='ContenedorProyectos'>
                    <div className='proyectoIndividual colorBlueFondo'>
                        <div className='proyectoIndividualImg'>
                            <img src='https://res.cloudinary.com/dxnn5sbsz/image/upload/v1685112085/WhatsApp_Image_2023-05-26_at_9.40.58_AM_mtrnbw.jpg' />
                            <div className='contenedorBotonesImagenes'>
                                <div className='contenedorBotonesImagenesSub'>
                                    <Button className='BotonesImagen' variant='contained' sx={{mt:2}}
                                    target="_blank" href="https://github.com/josealex7/Rails-Page-facebook">
                                        Ver  en GitHub
                                    </Button>
                                </div>
                            </div>
                        </div>
                        <div className='contenedorDescripcion'>
                            <Typography variant='h4'>SmyleFace</Typography>
                            <Typography variant='body1' className='listadoFunciones'>SmyleFace es una página web con un diseño
                            inspirado en Facebook, las funciones implementadas fueron: 
                            <ul >
                                <li>Registro de usuario e inicio de sesión</li>
                                <li>Personalización del perfil, con imagen de portada y perfil, agregar amigos, publicar historias</li>
                                <li>Crear, ver, comentar, reaccionar y compartir publicaciones</li>
                                <li>Chat en tiempo real entre usuarios y paginas</li>
                                <li>Crear paginas web y realizar cambio de usuario entre perfiles</li>
                                <li>Realizar compras, administrar compras</li>
                            </ul>
                            Las tecnologias implementadas fueron:  
                                <label className='bold'>
                                    Ruby on Rails, MySQL, UniTest, Api Rest, Javascript, Jquery, Bootstrap, SCSS.
                                </label>
                            </Typography>
                        </div>
                    </div>
                    <div className='proyectoIndividual'>
                        <div className='contenedorDescripcion'>
                        <Typography variant='h4'>Amazonas</Typography>
                            <Typography variant='body1' className='listadoFunciones'>Amazonas es una página web con un diseño
                            inspirado en Amazon, las funciones implementadas fueron: 
                            <ul >
                                <li>Registrarse y acceder con gmail o facebook</li>
                                <li>Ver el detalle de los productos, seleccionar las imagenes y ampliarlas</li>
                                <li>Si el usuario se autentica permite agregar, editar y eliminar productos</li>
                                <li>Cuenta con un carrito de compras y un formulario que simula un proceso de pago, entre otras.</li>
                            </ul>
                            Las tecnologias implementadas fueron:  
                                <label className='bold'>
                                     HTML, CSS, JavaScript, React JS, Material UI, Styled Componets, Redux, Firebase.
                                </label>
                            </Typography>
                        </div>
                        <div className='proyectoIndividualImg'>
                            <img src='https://res.cloudinary.com/dxnn5sbsz/image/upload/v1643210185/Anotaci%C3%B3n_2022-01-26_101600_ucvwhu.png' />
                            <div className='contenedorBotonesImagenes'>
                                <div className='contenedorBotonesImagenesSub'>
                                    <Button className='BotonesImagen' variant='contained'
                                    target="_blank" href="https://as-5672a.web.app/"
                                    >
                                        Ver pagina web
                                    </Button>
                                    <Button className='BotonesImagen' variant='contained' sx={{mt:2}}
                                    target="_blank" href="https://github.com/josealex7/Amazonas"
                                    >
                                        Ver  en GitHub
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='proyectoIndividual colorBlueFondo'>
                        <div className='proyectoIndividualImg'>
                            <img src='https://res.cloudinary.com/dxnn5sbsz/image/upload/v1682519160/WhatsApp_Image_2023-04-26_at_9.25.46_AM_ijx0jh.jpg' />
                            <div className='contenedorBotonesImagenes'>
                                <div className='contenedorBotonesImagenesSub'>
                                    <Button className='BotonesImagen' variant='contained' sx={{mt:2}}
                                    target="_blank" href="https://github.com/josealex7/FireWork"
                                    >
                                        Ver  en GitHub
                                    </Button>
                                </div>
                            </div>
                        </div>
                        <div className='contenedorDescripcion'>
                            <Typography variant='h4'>FireWork</Typography>
                            <Typography variant='body1' className='listadoFunciones'>La página FireWork tiene el fin 
                            de conectar freelance con clientes y sus proyectos,
                            las funciones implementadas fueron: 
                            <ul >
                                <li>Registrarse como freelance para postular a proyectos aptos a su nivel</li>
                                <li>Publicar proyectos como cliente y encontrar al profesional adecuado para su necesidad</li>
                                <li>Presentar pruebas de conocimiento para aumentar sus probabilidades de ser escogido para un proyecto</li>
                                <li>Acompañamiento continuo en el contrato freelance - cliente para generar seguridad y confianza entre las dos partes</li>
                            </ul>
                            Las tecnologias implementadas fueron:  
                                <label className='bold'>
                                     React, Redux, Material UI, FireBase, JavaScript, HTML, CSS, Bootstrap, Json-Server.
                                </label>
                            </Typography>
                        </div>
                    </div>
                </div>  
            </div>
        </div>
      );
};

export default Projects;
