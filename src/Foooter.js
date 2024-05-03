import React from 'react'
import './Foooter.css';

export default function Foooter() {
  return (
    <>
    <head><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossorigin="anonymous" referrerpolicy="no-referrer" /></head>
        <footer >
            <div class="footerContainer">
                <div class="socialIcons">
                    <a href="https://www.facebook.com/DelhiVIPS/"><i class="fa-brands fa-facebook"></i></a>
                    <a href="https://www.instagram.com/vipsengineering?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="><i class="fa-brands fa-instagram"></i></a>
                    <a href="https://twitter.com/vipsEngineering/status/1717444108648698254"><i class="fa-brands fa-twitter"></i></a>
                    <a href="https://www.linkedin.com/uas/login?session_redirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2F90875265%2Fadmin%2Ffeed%2Fposts%2F"><i class="fa-brands fa-linkedin"></i></a>
                    <a href="https://youtube.com/@vipstc_engineering?si=5N1nfpRqeTZr4xfk"><i class="fa-brands fa-youtube"></i></a>
                </div>
                <div class="footerNav">
                    <ul><li><a href="/">Home</a></li>
                        <li><a href="http://ipu.ac.in/exam_notices.php">Exam Notices</a></li>
                        <li><a href="/About">About</a></li>
                        <li><a href="/ContactUs">Contact Us</a></li>
                        <li><a href="/">Our Team</a></li>
                    </ul>
                </div>
                
            </div>
            <div class="footerBottom">
                <p>Copyright &copy;2023</p>
            </div>
        </footer>
    </>
  )
}
