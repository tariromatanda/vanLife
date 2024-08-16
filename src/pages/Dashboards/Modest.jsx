import React, { useState } from 'react'
import DashboardCards from "../../components/DashboardCard";
import cream from "../../assets/cream.png";
import blue from "../../assets/blue.png";
import green from "../../assets/green.png";
import chart from "../../assets/Income Chart.png";
import ModestExplorer from '../../components/ModestExplorer';
import { Link } from 'react-router-dom';

const Modest = () => {
    const [activeTab, setActiveTab] = useState("dashboard");
    return (



        <div id="Container">
            <ul className="Tabs">
                <li onClick={() => setActiveTab("dashboard")}>Dashboard</li>
                <li onClick={() => setActiveTab("income")}>Income</li>
                <li onClick={() => setActiveTab("modest")}>Vans</li>
                <li onClick={() => setActiveTab("reviews")}>Reviews</li>
            </ul>
            {activeTab === "dashboard" && (
                <div>
                    <div className="welcome">
                        <h2>Welcome!</h2>
                        <div className="incomeAndDetails">
                            <p>Income last 30 days</p>
                            <p>Details</p>
                        </div>
                        <h1>$2,260</h1>
                        <div className="reviewScore">
                            <h3>
                                Review score ⭐5.0/<span>5</span>
                            </h3>
                            <p>Details</p>
                        </div>
                    </div>
                    <div className="listedVanContainer">
                        <div className="viewall">
                            <h2>Your listed van</h2>
                            <p>view all</p>
                        </div>
                        <div className="cardWrapper">
                            <DashboardCards
                                pic={cream}
                                vanName={"Modest Explorer"}
                                price={"$60/day"}
                                editText={"Edit"}
                            />

                            <DashboardCards
                                pic={blue}
                                vanName={"Beach Bum"}
                                price={"$80/day"}
                                editText={"Edit"}
                            />
                            <DashboardCards
                                pic={green}
                                vanName={"Green Wonder"}
                                price={"$70/day"}
                                editText={"Edit"}
                            />{" "}
                        </div>
                    </div>
                </div>
            )}

            {activeTab === "income" && (
                <div className="income">
                    <h2>Income</h2>
                    <p>Last <strong>30 days</strong></p>
                    <h3>$2,260</h3>

                    <div className="chart">
                        <img src={chart} alt="" />
                    </div>

                    <section className="transactions">
                        <h3>Your transactions (3)</h3>
                        <p>Last <strong>30 days</strong></p>
                        <div className="transaction">
                            <span>$720</span>
                            <span>1/12/22</span>
                        </div>
                        <div className="transaction">
                            <span>$560</span>
                            <span>10/11/22</span>
                        </div>
                        <div className="transaction">
                            <span>$980</span>
                            <span>23/11/22</span>
                        </div>
                    </section>
                </div>
            )}

            {activeTab === "modest" && (
                <div>
                    <ModestExplorer/>
                    <div className="listedContainer">
                        <div className="viewall">
                            <h2>Your listed van</h2>
                            
                        </div>
                        <Link to='/modest'>
                        
                            <DashboardCards

                                pic={cream}
                                vanName={"Modest Explorer"}
                                price={"$60/day"}
                            /></Link>
                        <DashboardCards
                            pic={blue}
                            vanName={"Beach Bum"}
                            price={"$80/day"}
                        />
                        <DashboardCards
                            pic={green}
                            vanName={"Green Wonder"}
                            price={"$70/day"}
                        />
                    </div>
                </div>
            )}

            {activeTab === "reviews" && (
                <div className="content">

                    <h2>Your reviews <span>last <a href="#">30 days</a></span></h2>
                    <div className="overall-rating">
                        <h3>5.0 <span>★ overall rating</span></h3>
                        <div className="rating-bar">
                            <div className="stars"><span>5 stars</span><div className="bar full" ></div><span>100%</span></div>
                            <div className="stars"><span>4 stars</span><div className="bar"></div><span>0%</span></div>
                            <div className="stars"><span>3 stars</span><div className="bar"></div><span>0%</span></div>
                            <div className="stars"><span>2 stars</span><div className="bar"></div><span>0%</span></div>
                            <div className="stars"><span>1 star</span><div className="bar"></div><span>0%</span></div>
                        </div>
                    </div>
                    <section className="review-list">
                        <h3>Reviews (2)</h3>
                        <div className="review">
                            <div className="stars">★★★★★</div>
                            <h4>Elliot <span>December 1, 2022</span></h4>
                            <p>The beach bum is such an awesome van! Such a comfortable trip. We had it for 2 weeks and there was not a single issue. Super clean when we picked it up and the host is very comfortable and understanding. Highly recommend!</p>
                        </div>
                        <div className="review">
                            <div className="stars">★★★★★</div>
                            <h4>Sandy <span>November 23, 2022</span></h4>
                            <p>This is our third time using the Modest Explorer for our travels and we love it! No complaints, absolutely perfect!</p>
                        </div>
                    </section>

                </div>
            )}

        </div>

    )
}

export default Modest
