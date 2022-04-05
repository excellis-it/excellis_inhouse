import React from 'react';
import Mas_shape from '../Appcontainer/assets/mas_shape.png';
import About_home from '../Appcontainer/assets/about.png';
import { Line } from 'rc-progress';

const HomeAboutsec = () => {
    return(
        <div>            
           
        <section class="about_sec section" id="section1" style={{ backgroundImage: "url(img/about_bg.png)", backgroundSize: "cover", backgroundRepeat: "no-repeat" }}>
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-md-5">
                        <div class="abt_img">
                            <img src={Mas_shape} class="rotate_shape1" />
                            <img src={Mas_shape} class="rotate_shape2" />
                            <img src={About_home} class="img-fluid" />
                            <div class="exp_abt" data-aos="fade-down" data-aos-duration="1500">
                                <div class="exp_inner">
                                    <span>10</span><br/>Years of experiences
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-7">
                        <div class="abt_content">
                            <span class="fixed_title">About Us</span>
                            <h4 data-aos="fade-down" data-aos-duration="1000"><span>We pride</span> ourselves in providing the best services</h4>
                            <p data-aos="fade-down" data-aos-duration="1500">We see our customers as a guest to a party, and we are the hosts. It is our responsibility to make every essential facet of the customer experience a little better.</p>
                            <div class="expert_counter mb-4" data-aos="fade-up" data-aos-duration="1500">
                                <div class="progressBar">
                                    <label>Vision</label>
                                    <div class="">
                                        <div class="speech-bubble html">100%</div>
                                        <Line percent="100" strokeWidth="2" strokeColor="#e85516" />
                                    </div>
                                </div>

                                <div class="progressBar">
                                    <label>Analysis</label>
                                    <div class="">
                                        <div class="speech-bubble css">85%</div>
                                        <Line percent="85" strokeWidth="2"  strokeColor="#e85516" />
                                    </div>
                                </div>

                                <div class="progressBar">
                                    <label>Target and Plan</label>
                                    <div class="">
                                        <div class="speech-bubble javascript">93%</div>
                                        <Line percent="93" strokeWidth="2" strokeColor="#e85516" />
                                    </div>
                                </div>
                            </div>
                            <a href="about.php" class="banner_btn animate__slideInUp animate__animated">Explore More</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

                </div>
     )
    
}
export default HomeAboutsec;