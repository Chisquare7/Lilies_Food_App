import React from "react";
import { Link } from "react-router-dom";
import Lilles_logo from "../assets/Lilles_logo.svg";
import google_play from "../assets/google_play.svg";
import app_store from "../assets/app_store.svg";
import hero_img from "../assets/hero_img.svg";
import food_one from "../assets/foodone.svg";
import food_two from "../assets/foodtwo.svg";
import food_three from "../assets/foodthree.svg";
import instagram from "../assets/instagram.svg";
import twitter from "../assets/twitter.svg";
import youtube from "../assets/youtube.svg";


const Landingpage = () => {
    return (
			<div>
				<div className="top_container">
					<div className="main_container">
						<div className="nav_container">
							<div className="main_logo">
								<li>
									<Link to="/">
										<img
											src={Lilles_logo}
											alt="home logo"
											className="lilies_logo"
										/>
									</Link>
								</li>
								<p>Lilies</p>
							</div>
							<div className="right_nav">
								<li className="each_nav">
									<Link to="/" className="nav_text">
										Home
									</Link>
								</li>
								<li className="each_nav">
									<Link to="Login" className="nav_text">
										Login
									</Link>
								</li>
								<li className="each_nav">
									<Link to="Register">
										<button className="signup_button">Sign Up</button>
									</Link>
								</li>
							</div>
						</div>
						<div className="first_row">
							<div className="hero_text">
								<h1 className="hero_head">
									Order <span className="foods_text">food</span> anytime,
									anywhere
								</h1>
								<p className="hero_content">
									Browse from our list of specials to place your order and have
									food delivered to you in no time. Affordable, tasty and fast!
								</p>
								<div className="playstore">
									<img
										src={google_play}
										alt="Google play"
										className="play_store"
									/>
									<img src={app_store} alt="App store" className="play_store" />
								</div>
							</div>
							<div className="hero_image">
								<img src={hero_img} alt="hero" className="firstrow_img" />
							</div>
						</div>
						<div className="second_row">
							<h3 className="meals_head">Special Meals of the day!</h3>
							<p className="meals_text">
								Check our sepecials of the day and get discounts on all our
								meals and swift delivery to what ever location within Ilorin.
							</p>
						</div>
						<div className="third_row">
							<div className="food_class left_food">
								<div className="food_icon">
									<img src={food_one} alt="food one" />
								</div>
								<div className="food_contents">
									<h4 className="food_head">Stir fry Pasta</h4>
									<p className="food_text">
										Stir fry pasta yada yada yada because of Sesan
									</p>
								</div>
							</div>
							<div className="food_class">
								<div className="food_icon">
									<img src={food_two} alt="food two" />
								</div>
								<div className="food_contents">
									<h4 className="food_head">Meat Balls</h4>
									<p className="food_text">
										Stir fry pasta yada yada yada because of Sesan
									</p>
								</div>
							</div>
							<div className="food_class right_food">
								<div className="food_icon">
									<img src={food_three} alt="food three" />
								</div>
								<div className="food_contents">
									<h4 className="food_head">Burger Meal</h4>
									<p className="food_text">
										Stir fry pasta yada yada yada because of Sesan
									</p>
								</div>
							</div>
						</div>
						<div className="fourth_row">
							<div className="notify_content">
								<h3 className="mail_head">Get notified when we update!</h3>
								<div className="mail_content">
									<p className="mail_text">
										Get notified when we add new items to our specials menu,{" "}
										<br className="for_mobile" /> update our price list of have
										promos!
									</p>
								</div>
							</div>
							<div className="notify_field">
								<input
									type="email"
									name="email"
									placeholder="gregphillips@gmail.com"
									className="text_field field_info"
								/>
								<input
									type="submit"
									value="Get notified"
									className="notify_button field_info"
								/>
							</div>
						</div>
					</div>
				</div>
				<div className="footer_container">
					<div className="footer_section footer_content">
						<div className="footer_one each_foot">
								<h4 className="foot_head">Company</h4>
								<li className="foot_link">
									<Link to="/" className="foot_text">
										About Us
									</Link>
								</li>
								<li className="foot_link">
									<Link to="/" className="foot_text">
										Careers
									</Link>
								</li>
								<li className="foot_link">
									<Link to="/" className="foot_text">
										Contact Us
									</Link>
								</li>
						</div>
						<div className="footer_two each_foot">
								<h4 className="foot_head">Support</h4>
								<li className="foot_link">
									<Link to="/" className="foot_text">
										Help Center
									</Link>
								</li>
								<li className="foot_link">
									<Link to="/" className="foot_text">
										Safety Center
									</Link>
								</li>
						</div>
						<div className="footer_three each_foot">
								<h4 className="foot_head">Legal</h4>
								<li className="foot_link">
									<Link to="/" className="foot_text">
										Cookies Policy
									</Link>
								</li>
								<li className="foot_link">
									<Link to="/" className="foot_text">
										Privacy Policy
									</Link>
								</li>
								<li className="foot_link">
									<Link to="/" className="foot_text">
										Terms of Service
									</Link>
								</li>
								<li className="foot_link">
									<Link to="/" className="foot_text">
										Dispute resolution
									</Link>
								</li>
						</div>
						<div className="footer_four each_foot">
								<h4 className="foot_head">Install App</h4>
								<li>
									<Link to="/">
										<img
											src={google_play}
											alt="Google play"
											className="download_play"
										/>
									</Link>
								</li>
								<li>
									<Link to="/">
										<img
											src={app_store}
											alt="App store"
											className="download_play"
										/>
									</Link>
								</li>
						</div>
					</div>
					<hr className="hr_divider" />
					<div className="footer_ext ext_foot">
						<div className="copyright_content">
							<small className="copyright">
								© 2021 LILIES, All rights reserved
							</small>
						</div>
						<div className="social_icons">
							<li className="each_social">
								<Link to="/">
									<img
										src={instagram}
										alt="instagram icon"
										className="social_links"
									/>
								</Link>
							</li>
							<li className="each_social">
								<Link to="/">
									<img
										src={twitter}
										alt="twitter icon"
										className="social_links"
									/>
								</Link>
							</li>
							<li className="each_social">
								<Link to="/">
									<img
										src={youtube}
										alt="youtube icon"
										className="social_links"
									/>
								</Link>
							</li>
						</div>
					</div>
				</div>
			</div>
		);
};

export default Landingpage;
