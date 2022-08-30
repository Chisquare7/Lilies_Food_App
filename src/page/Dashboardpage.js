import React from 'react'
import { Link } from 'react-router-dom'
import Lilles_logo from '../assets/Lilles_logo.svg'
import profile_pic from '../assets/profile_pic.svg'
import home_icon from "../assets/home_icon.svg";
import profile_icon from "../assets/profile_icon.svg";
import order_icon from "../assets/order_icon.svg";
import cart_icon from "../assets/cart_icon.svg";

const Dashboardpage = ({ data }) => {
    
  return (
		<div className="whole_dashboard">
			<aside className="side_section">
				<div className="dash_logos">
					<div className="dash_logo">
						<li>
							<Link to="/Dashboardpage">
								<img
									src={Lilles_logo}
									alt="home logo"
									className="lilies_logo"
								/>
							</Link>
						</li>
						<p className="logo_text">Lilies</p>
					</div>
				</div>
				<div className="sidebar_nav">
					<div className="sidebar_links">
						<img src={home_icon} alt="Home" className="dash_icons" />
						<span className="dash_text">Dashboard</span>
					</div>
					<div className="sidebar_links">
						<img src={profile_icon} alt="Your Profile" className="dash_icons" />
						<span className="dash_text">Your Profile</span>
					</div>
					<div className="sidebar_links">
						<img src={order_icon} alt="order" className="dash_icons" />
						<span className="dash_text">Orders</span>
					</div>
					<div className="sidebar_links">
						<img src={cart_icon} alt="cart" className="dash_icons" />
						<span className="dash_text">Your Cart</span>
					</div>
				</div>
			</aside>
			<div className="right_dashboard">
				<header className="menu_header">
					<div className="menu_headings">
						<h3 className="menu_greet">Good morning, Oghenevwede!</h3>
						<p className="head_quest">
							What delicious meal are you craving today?
						</p>
					</div>
					<div>
						<img src={profile_pic} alt="upload pic" />
					</div>
				</header>
				<div className="menu_container">
					<div className="menu_boxes">
						{data &&
							data?.map((item, index) => (
								<div className="main_menu">
									<img
										src={item?.food}
										alt="food types"
										className="food_types"
									/>
									<div className="food_text">
										<h4 className="food_head"> {item?.name} </h4>
										<p className="food_explain"> {item?.text} </p>
									</div>
									<div className="amount_details">
										<span className="amount_text"> {item?.amount} </span>
										<span className="add_text"> {item?.add} </span>
									</div>
								</div>
							))}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Dashboardpage
