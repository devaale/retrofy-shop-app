import React from 'react'

const Footer = () => {
  return (
    <footer>
        <div class="container">
            <div class="back-to-top">
                <a onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}><i class="fas fa-chevron-up"></i></a>
            </div>
            <div class="footer-content">
                <div class="footer-content-about">
                    <h3>About Retrofy</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent pretium faucibus sem id luctus. Praesent porta eget eros sit amet finibus. Morbi aliquet ac libero sit amet ullamcorper. Nunc interdum vehicula odio, ut rutrum nisi facilisis a.
                    </p>
                </div>
                <div class="footer-content-divider">
                    <div class="social-media">
                        <h4>Follow along</h4>
                        <ul class="social-icons">
                            <li>
                                <a href=""><i class="fab fa-twitter"></i></a>
                            </li>
                            <li>
                                <a href=""><i class="fab fa-facebook-square"></i></a>
                            </li>
                            <li>
                                <a href=""><i class="fab fa-pinterest"></i></a>
                            </li>
                            <li>
                                <a href=""><i class="fab fa-linkedin-in"></i></a>
                            </li>
                            <li>
                                <a href=""><i class="fab fa-instagram"></i></a>
                            </li>
                        </ul>
                    </div>
                    <div class="newsletter-container">
                        <h4>Newsletter</h4>
                        <form action="" class="newsletter-form">
                            <input type="text" class="newsletter-input" placeholder="Your email address..."></input>
                            <button class="newsletter-btn" type="submit">
                                <i class="fas fa-envelope"></i>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer
