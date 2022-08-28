import React from "react";
import { Link } from "react-router-dom";
import login_hero from "../assets/login_hero.svg";
import Button from '../components/Button'

const Login = () => {
	return (
		<div className="overall_container overall_section">
			<div className="left_container">
				<img src={login_hero} alt="Login Hero" />
			</div>
			<div className="right_container">
				<div className="testing">
					<div className="account_title">
						<h3 className="account_head">Welcome Back!</h3>
					</div>

					<input
						type="email"
						name="email"
						placeholder="Your Email address"
						className="detail_field"
					/>
					<input
						type="password"
						name="password"
						placeholder="Your Password"
						className="detail_field"
					/>
					<li>
						<Link to="/Dashboardpage">
							<Button text={"LOGIN"} />
						</Link>
					</li>
					<div className="entry_button">
						<li>
							<Link to="/Register" className="point_action">
								Create an account
							</Link>
						</li>
						<li>
							<Link to="/Login" className="point_action">
								Forgot Password
							</Link>
						</li>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
