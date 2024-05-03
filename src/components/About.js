import React from 'react'
import Foooter from '../Foooter'

export default function About(props) {
  return (
    <div>
        <div className='container my-3' style={{color : props.mode==='light'? 'black' : 'white', backgroundColor :props.mode==='light'? 'white' : 'black' }}>
            <h1 style={{marginTop: '60px'}}>About Us</h1>
            <div className="accordion" id="accordionExample">
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button" type="button"style={{color : props.mode==='light'? 'grey' : 'white', backgroundColor :props.mode==='light'? 'white' : 'black' }} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    What is VIPS-TC?
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={{color : props.mode==='light'? 'black' : 'white', backgroundColor :props.mode==='light'? 'white' : 'black' }}>
                    <strong>Established in 1997, Vivekananda Institute of Professional Studies (VIPS) is a premier institute located in Delhi, India.</strong> VIPS-TC is known for its excellence in professional education and has evolved into a multidisciplinary institution offering a wide range of undergraduate and postgraduate programs in various fields. It is a vibrant and dynamic institution that is committed to providing quality education and holistic development opportunities to its students and with its emphasis on academic excellence, ethical values, and global perspective, VIPS is shaping the future leaders of tomorrow.
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" style={{color : props.mode==='light'? 'black' : 'white', backgroundColor :props.mode==='light'? 'white' : 'black' }} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Courses offered by VIPS-TC
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={{color : props.mode==='light'? 'black' : 'white', backgroundColor :props.mode==='light'? 'white' : 'black' }}>
                VIPS offers <b>undergraduate programs</b> in fields such as Law, Business, Journalism & Mass Communication, and Computer Applications. <b>Postgraduate programs</b> are available in disciplines like Law, Business Administration, and Journalism & Mass Communication. The institute also offers <b>diploma</b> and <b>certificate</b> courses in specialized areas.
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" style={{color : props.mode==='light'? 'black' : 'white', backgroundColor :props.mode==='light'? 'white' : 'black' }} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    Faculty and Infrastructure in VIPS-TC
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={{color : props.mode==='light'? 'black' : 'white', backgroundColor :props.mode==='light'? 'white' : 'black' }}>
                    <ul>
                        <li>VIPS boasts a modern campus equipped with state-of-the-art facilities, including well-equipped classrooms, libraries, computer labs, and moot courtrooms.</li>
                        <li>It has a dedicated placement cell that assists students in securing internships and placements with leading organizations.</li>
                        <li>It prides itself on its experienced and highly qualified faculty members who are committed to providing a stimulating learning environment.</li>
                        <li>The faculty members are actively involved in research and industry collaborations, enriching the academic experience for students.</li>
                        <li>Other facilities include sports facilities, cafeteria, auditorium, and hostel accommodation for students.</li>
                    </ul>
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" style={{color : props.mode==='light'? 'black' : 'white', backgroundColor :props.mode==='light'? 'white' : 'black' }} data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                    Process of Admissions in VIPS-TC
                </button>
                </h2>
                <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={{color : props.mode==='light'? 'black' : 'white', backgroundColor :props.mode==='light'? 'white' : 'black' }}>
                Admission to VIPS is based on <b>merit and entrance exams</b> conducted at the national or state level, depending on the course. The institute follows a transparent and merit-based admission process, ensuring equal opportunities for all applicants.
                </div>
                </div>
            </div>
            </div>

            <div style={{marginTop:"60px"}}>
                <h1 >A Brief Video About VIPS-TC!</h1>
                <div className="ratio ratio-21x9" style={{marginTop:"60px"}}>
                    <iframe src="https://www.youtube.com/embed/IcPI5g4liHo?si=OyM8ODEJbJVMMtZ8" title="Youtube Video" allowFullScreen> </iframe>
                </div>
                <hr></hr>
            </div>
        </div>
        <div style={{marginTop:"60px", paddingLeft:"0px"}}>
                <Foooter/>
        </div>
    </div>
  )
}
