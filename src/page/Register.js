import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import register_hero from "../assets/register_hero.svg";
import Button from "../components/Button";

const Register = () => {

  const [show, setShow] = useState(false)
  const handleShow = () => {
    setShow(!show)
  }

  const { register, formState: { errors }, handleSubmit, } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
		<div className="overall_container overall_section">
			<div className="left_container">
				<img src={register_hero} alt="Register Hero" />
			</div>
			<div className="right_container">
				<div className="testing" onSubmit={handleSubmit(onSubmit)}>
					<div className="account_title">
						<h3 className="account_head">Welcome to Lilies!</h3>
					</div>
					<div>
						<input
							name="first name"
							placeholder="Your First Name"
							className="detail_field"
							{...register("name", { required: true })}
						/>
						<error>
							{errors.name?.type === "required" && "Name is required"}
						</error>
					</div>
					<div>
						<input
							name="email"
							placeholder="Your Email address"
							className="detail_field"
							{...register("email", {
								required: true,
								pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i,
							})}
						/>
						<error>
							{errors.email?.type === "required" && "Email is required"}
							{errors.email?.type === "pattern" &&
								"Entered Email is in wrong format"}
						</error>
					</div>
					<div className="valid_input">
						<input
							type={show ? "text" : "password"}
							name="password"
							placeholder="Your Password"
							className="detail_field"
							{...register("password", {
								required: true,
								minLength: 5,
								maxLength: 20,
							})}
						/>
						<span className="show_field" onClick={handleShow}>
							{show ? "Hide" : "show"}
						</span>
						<error>
							{errors.password?.type === "minLength" && "Entered password is less than 5 characters"}
							{errors.password?.type === "maxLength" &&
								"Entered password is more than 20 characters"}
						</error>
					</div>
					<li>
						<Link to="/Dashboardpage">
							<Button text={"SIGN UP"} />
						</Link>
					</li>
					<div className="detail_button">
						<span className="quest_text">Already have an account.</span>
						<li>
							<Link to="/Login" className="go_login">
								LOGIN
							</Link>
						</li>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Register
