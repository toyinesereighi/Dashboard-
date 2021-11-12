import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import GridViewIcon from '@mui/icons-material/GridView';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ChatIcon from '@mui/icons-material/Chat';
import SettingsIcon from '@mui/icons-material/Settings';
import DehazeIcon from '@mui/icons-material/Dehaze';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import Doughpie from './Doughpie';
import Doughpie2 from './Doughpie2';
import Doughpie3 from './Doughpie3';
import Doughpie4 from './Doughpie4';
import Linechart from './Linechart';
import { Pole } from './Pole';
import Progressbar from './Progressbar';


export const Home = () => {
    return (
        <div className='home'>
            <div className='aside'>
                <div className='logo'>
                    <HomeIcon className='logo-icon' />
                    <p>AMROLE ADMIN</p>
                </div>
                {/* Main Menu             */}
                <div className='main'>
                    <p>Main Menu</p>
                    <ul>
                        <li className='dash'><GridViewIcon /> Dashboard</li>
                        <li><img src="/images/grid.png" alt="" /> Drivers</li>
                        <li><img src="/images/car.png" alt="" /> Car Types</li>
                        <li className='finance'><ShoppingCartIcon /> Finance <p className='num'>27</p></li>
                        <li><img src="/images/pie.png" alt="" /> Analytics</li>
                    </ul>
                </div>
                <div className="main">
                    <p>Others</p>
                    <ul>
                        <li><PersonOutlineIcon /> Customer</li>
                        <li><ChatIcon /> Messages</li>
                        <li><SettingsIcon /> Settings</li>
                    </ul>
                </div>
                <div className="copy">
                    <p>Amrole Admin Dashboard</p>
                    &copy;2021 All Rights Reserved
                </div>
                <p className='foot'>Made with  by </p>
            </div>
            <div className="main-page">
                <nav>
                    <DehazeIcon />
                    <h2 className='dash-text'> Dashboard</h2>
                    <button className='search-btn'>Search here... <SearchIcon className='search-icon' /></button>
                    <NotificationsNoneIcon />
                    <MailOutlineIcon className='mail' />
                    <CalendarTodayIcon />
                    <div className='empty'></div>
                    <div>
                        <p>Erwin Smith</p>
                        <p>Super Admin</p>
                    </div>
                </nav>
                <div className="container">
                    <div className="box">
                        <div className="box-1">
                            <div className='text'>
                                <div >
                                    <h3>684</h3>
                                    <p>Pending Drivers</p>
                                </div>
                                <div style={{ width: 90 }}>
                                    <Doughpie />

                                </div>
                            </div>
                        </div>
                        <div className="box-1 green">
                            <div className='text'>
                                <div>
                                    <h3>546</h3>
                                    <p>Active Drivers</p>
                                </div>
                                <div style={{ width: 90 }}>
                                    <Doughpie2 />
                                </div>
                            </div>
                        </div>
                        <div className="box-1 orange">
                            <div className='text'>
                                <div>
                                    <h3>3,672</h3>
                                    <p>Total Passengers</p>
                                </div>
                                <div style={{ width: 80 }}>
                                    <Doughpie3 />
                                </div>
                            </div>
                        </div>
                        <div className="box-1 gray">
                            <div className='text'>
                                <div>
                                    <h3>75</h3>
                                    <p>Total Cities</p>
                                </div>
                                <div style={{ width: 110 }}>
                                    <Doughpie4 />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="cards">
                        <div className="card-1">
                            <div className="card-text">
                                <h5>Total Revenue</h5>
                                <h2>...</h2>
                            </div>
                            <div className="total-num">
                                <h3>$678,345</h3>
                                <h6>last month $563,443</h6>
                            </div>
                            <div className="increase">
                                <img src="/images/Vector 2.png" alt="" />7% <img src="/images/Vector (15).png" alt="" />
                            </div>
                            <Linechart />
                        </div>
                        <div className="card-1 total">
                            <h5>Total Payouts</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit psu olor</p>
                            <Pole />
                        </div>
                    </div>
                    <section>
                        <div className="small-boxes">
                            <div className="progress">
                                <div className="small-box-1">
                                    <div className="box-text">
                                        <h6>Product Viewed</h6>
                                        <p>561/days</p>
                                    </div>
                                    <Progressbar bgcolor='#00695E' progress='70' height={10} />
                                    <div className="box-text">
                                        <h6>Product Listed</h6>
                                        <p>3,456 Unit</p>
                                    </div>
                                    <div style={{ paddingBottom: 30 }}>
                                        <Progressbar bgcolor='#00695E' progress='90' height={10} /></div>
                                </div>
                            </div>
                            <div className="reviews">
                                <h6>Passenger’s Reviews</h6>
                                <div className="name">
                                    <div className='photo'></div>
                                    <div>
                                        <h6>Bella Smith</h6>
                                        <p>20m ago</p>
                                    </div>
                                </div>
                                <div className="star">
                                        <img src="/images/star.png" alt="" />
                                        <img src="/images/star.png" alt="" />
                                        <img src="/images/star.png" alt="" />
                                        <img src="/images/star.png" alt="" />
                                        <img src="/images/star2.png" alt=""/>
                                    </div>
                                    <p className='par'>Dealing with Syamsudin and Bakri was a <br /> joy. I got in touch with Just Property after <br /> seeing a couple of properties that caught <br /> my eye. Both Syamsudin and Bakri strive <br /> to deliver a professional service and <br /> surpassed my expectations - they were not <br /> only helpful but extremely approachable <br /> and not at all bumptious...</p>
                                <div className="name">
                                    <div className='photo'></div>
                                    <div>
                                        <h6>Samantha William</h6>
                                        <p>5m ago</p>
                                    </div>
                                </div>
                                <div className="star">
                                        <img src="/images/star.png" alt="" />
                                        <img src="/images/star.png" alt="" />
                                        <img src="/images/star.png" alt="" />
                                        <img src="/images/star2.png" alt="" />
                                        <img src="/images/star2.png" alt=""/>
                                    </div>
                                    <p className='par'>I viewed a number of properties with Just <br /> Property and found them to be <br /> professional, efficient, patient, courteous <br /> and helpful every time.</p>
                                <div className="name">
                                    <div className='photo'></div>
                                    <div>
                                        <h6>John Doe</h6>
                                        <p>4h ago</p>
                                    </div>
                                </div>
                                <div className="star">
                                        <img src="/images/star.png" alt="" />
                                        <img src="/images/star.png" alt="" />
                                        <img src="/images/star.png" alt="" />
                                        <img src="/images/star.png" alt="" />
                                        <img src="/images/star.png" alt=""/>
                                    </div>
                                    <p className='par'>Friendly service Josh, Lunar and everyone <br /> at Just Property in Hastings deserved a big <br /> Thank You from us for moving us from <br /> Jakarta to Medan during the lockdown.</p>
                      <button>See More Reviews</button>
                       </div>
                            
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}
export default Home