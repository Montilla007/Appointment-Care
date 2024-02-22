import React from 'react'
import '../../css/DoctorCard.css'
import { NavLink } from 'react-router-dom';
import axios from 'axios';


const DoctorCard = () => {
    const [info, setInfo] = React.useState([]);
    const [search, setSearch] = React.useState('');

    React.useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://appointment-care-api.vercel.app/api/v1/person/users');
                setInfo(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const handleViewProfile = (id) => {
        const token = localStorage.getItem('token');
        if (token) {
            // If token exists, user is authenticated, proceed to view profile
        } else {
            window.location.href = "/login";
        }
    };

    const doctorCard = info.filter((item) => {
        return search.toLowerCase() === ''
            ? item
            : item.Fname.toLowerCase().includes(search)

    }).map((x) => {
        if (x.role === "Doctor" && x.status === "Accepted") {
            return (
                <div key={x._id} className='container'>
                    <div className='doctor-container'>
                        <div className="first-half">
                            <div className="avatar-container">
                                <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                                    alt="avatar"
                                />
                            </div>
                            <div className="details-container">
                                <div className="personal-details">
                                    <h2 className='text text-capitalize'>{x.Fname} {x.Lname}</h2>
                                    <span className='speciality text-capitalize'>{x.specialty}</span>
                                    <br />
                                    <span>MD since {x.md}</span>
                                </div>
                                <div className="other-details">
                                    <div className="svg-component">
                                        <svg width="20" height="20" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon-logo">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M4 4.42664C4 3.32207 4.89543 2.42664 6 2.42664H14C15.1046 2.42664 16 3.32207 16 4.42664V16.4266C16.5523 16.4266 17 16.8744 17 17.4266C17 17.9789 16.5523 18.4266 16 18.4266H13C12.4477 18.4266 12 17.9789 12 17.4266V15.4266C12 14.8744 11.5523 14.4266 11 14.4266H9C8.44772 14.4266 8 14.8744 8 15.4266V17.4266C8 17.9789 7.55228 18.4266 7 18.4266H4C3.44772 18.4266 3 17.9789 3 17.4266C3 16.8744 3.44772 16.4266 4 16.4266V4.42664ZM7 5.42664H9V7.42664H7V5.42664ZM9 9.42664H7V11.4266H9V9.42664ZM11 5.42664H13V7.42664H11V5.42664ZM13 9.42664H11V11.4266H13V9.42664Z" fill="#9CA3AF" className="tw-fill-current tw-text-gray-600"></path>
                                        </svg>
                                        <span style={{ textTransform: "capitalize" }}>{x.hn} {x.barangay} {x.municipality}, {x.province}</span>
                                    </div>
                                    <div className="svg-component">
                                        <svg width="20" height="20" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon-logo">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M5.05025 4.47689C7.78392 1.74322 12.2161 1.74322 14.9497 4.47689C17.6834 7.21056 17.6834 11.6427 14.9497 14.3764L10 19.3261L5.05025 14.3764C2.31658 11.6427 2.31658 7.21056 5.05025 4.47689ZM10 11.4266C11.1046 11.4266 12 10.5312 12 9.42664C12 8.32207 11.1046 7.42664 10 7.42664C8.89543 7.42664 8 8.32207 8 9.42664C8 10.5312 8.89543 11.4266 10 11.4266Z" fill="#9CA3AF" className="tw-fill-current tw-text-gray-600"></path>
                                        </svg>
                                        <span style={{ textTransform: "capitalize" }}>{x.municipality}, {x.province}</span>
                                    </div>
                                    <div className="svg-component">
                                        <svg width="20" height="20" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon-logo">
                                            <g id="money" clipPath="url(#clip0_7289_10544)">
                                                <path d="M17.529 5.78812C16.5592 5.38137 15.5887 5.22662 14.6187 5.22662C11.5395 5.22637 8.4605 6.78512 5.38125 6.78512C4.609 6.78512 3.83725 6.68712 3.065 6.44212C2.97825 6.41462 2.89125 6.40162 2.80625 6.40162C2.376 6.40162 2 6.73462 2 7.19687V15.1284C2 15.4441 2.18075 15.7434 2.471 15.8649C3.44075 16.2719 4.41125 16.4266 5.38125 16.4266C8.4605 16.4266 11.5398 14.8679 14.619 14.8679C15.3912 14.8679 16.163 14.9659 16.9352 15.2109C17.022 15.2384 17.109 15.2514 17.194 15.2514C17.6242 15.2514 18.0002 14.9184 18.0002 14.4561V6.52487C18 6.20887 17.8192 5.90987 17.529 5.78812ZM3.2 8.57622C3.2 8.15076 3.59264 7.82864 4.01445 7.8842C4.407 7.9359 4.70216 8.31727 4.4582 8.62912C4.29673 8.83553 4.08602 9.00125 3.84382 9.10838C3.50914 9.25642 3.2 8.94218 3.2 8.57622ZM3.66911 15.0053C3.38389 14.9283 3.2 14.6604 3.2 14.365C3.2 13.9771 3.52941 13.6487 3.87976 13.8153C4.10143 13.9206 4.29484 14.076 4.446 14.2668C4.7788 14.687 4.31736 15.1663 3.79688 15.0383C3.7541 15.0278 3.71151 15.0168 3.66911 15.0053ZM10 13.2266C8.89525 13.2266 8 12.1519 8 10.8266C8 9.50112 8.8955 8.42662 10 8.42662C11.1045 8.42662 12 9.50112 12 10.8266C12 12.1524 11.1042 13.2266 10 13.2266ZM16.8 13.1949C16.8 13.5637 16.4583 13.837 16.0933 13.7838C15.7534 13.7342 15.506 13.4002 15.7083 13.1225C15.8314 12.9537 15.9867 12.8102 16.1653 12.7008C16.4719 12.513 16.8 12.7962 16.8 13.1558V13.1949ZM16.8 7.26287C16.8 7.66383 16.4312 7.97914 16.1002 7.75284C15.9307 7.637 15.7849 7.48935 15.671 7.3183C15.4103 6.92642 15.8253 6.52052 16.2815 6.63678C16.306 6.64303 16.3305 6.64945 16.3549 6.65602C16.6255 6.72881 16.8 6.98269 16.8 7.26287Z"
                                                    fill="#9CA3AF" className="tw-fill-current tw-text-gray-600"></path>
                                            </g>
                                        </svg>
                                        <span>₱{x.consultPrice}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="second-half">
                            <hr />
                            <div className="availability-consultation">
                                <div className='svg-row'>
                                    <div className="svg-component">
                                        <svg width="20" height="20" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon-logo">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M6.26701 3.88159C6.91008 3.83027 7.52057 3.5774 8.01158 3.15897C9.15738 2.18252 10.8426 2.18252 11.9884 3.15897C12.4794 3.5774 13.0899 3.83027 13.733 3.88159C15.2336 4.00135 16.4253 5.19299 16.545 6.69365C16.5964 7.33672 16.8492 7.94721 17.2677 8.43821C18.2441 9.58401 18.2441 11.2693 17.2677 12.4151C16.8492 12.9061 16.5964 13.5166 16.545 14.1596C16.4253 15.6603 15.2336 16.8519 13.733 16.9717C13.0899 17.023 12.4794 17.2759 11.9884 17.6943C10.8426 18.6707 9.15738 18.6707 8.01158 17.6943C7.52057 17.2759 6.91008 17.023 6.26701 16.9717C4.76636 16.8519 3.57471 15.6603 3.45496 14.1596C3.40364 13.5166 3.15077 12.9061 2.73234 12.4151C1.75589 11.2693 1.75589 9.58401 2.73234 8.43821C3.15077 7.94721 3.40364 7.33672 3.45496 6.69365C3.57471 5.19299 4.76636 4.00135 6.26701 3.88159ZM13.7071 9.13374C14.0976 8.74322 14.0976 8.11005 13.7071 7.71953C13.3166 7.329 12.6834 7.329 12.2929 7.71953L9 11.0124L7.70711 9.71953C7.31658 9.329 6.68342 9.329 6.29289 9.71953C5.90237 10.1101 5.90237 10.7432 6.29289 11.1337L8.29289 13.1337C8.68342 13.5243 9.31658 13.5243 9.70711 13.1337L13.7071 9.13374Z" fill="#10B981"></path>
                                        </svg>
                                        <span>Face to Face Consultation</span>
                                    </div>
                                    {x.online && <div className="svg-component">
                                        <svg width="20" height="20" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon-logo">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M6.26701 3.88159C6.91008 3.83027 7.52057 3.5774 8.01158 3.15897C9.15738 2.18252 10.8426 2.18252 11.9884 3.15897C12.4794 3.5774 13.0899 3.83027 13.733 3.88159C15.2336 4.00135 16.4253 5.19299 16.545 6.69365C16.5964 7.33672 16.8492 7.94721 17.2677 8.43821C18.2441 9.58401 18.2441 11.2693 17.2677 12.4151C16.8492 12.9061 16.5964 13.5166 16.545 14.1596C16.4253 15.6603 15.2336 16.8519 13.733 16.9717C13.0899 17.023 12.4794 17.2759 11.9884 17.6943C10.8426 18.6707 9.15738 18.6707 8.01158 17.6943C7.52057 17.2759 6.91008 17.023 6.26701 16.9717C4.76636 16.8519 3.57471 15.6603 3.45496 14.1596C3.40364 13.5166 3.15077 12.9061 2.73234 12.4151C1.75589 11.2693 1.75589 9.58401 2.73234 8.43821C3.15077 7.94721 3.40364 7.33672 3.45496 6.69365C3.57471 5.19299 4.76636 4.00135 6.26701 3.88159ZM13.7071 9.13374C14.0976 8.74322 14.0976 8.11005 13.7071 7.71953C13.3166 7.329 12.6834 7.329 12.2929 7.71953L9 11.0124L7.70711 9.71953C7.31658 9.329 6.68342 9.329 6.29289 9.71953C5.90237 10.1101 5.90237 10.7432 6.29289 11.1337L8.29289 13.1337C8.68342 13.5243 9.31658 13.5243 9.70711 13.1337L13.7071 9.13374Z" fill="#10B981"></path>
                                        </svg>
                                        <span>Online Consultation</span>
                                    </div>}
                                </div>
                                <div className='button-request'>
                                    <NavLink to={`/DoctorProfile/${x._id}`} onClick={handleViewProfile}><button className='btn-viewprofile'>View Profile</button></NavLink>
                                    <button className='btn-appointment mx-2'>Request an Appointment</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    })
    return (
        <div>
            <div className='container'>
                <div className='inputBox_container'>
                    <svg className='search_icon' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48' alt='search icon'>
                        <path d='M46.599 46.599a4.498 4.498 0 0 1-6.363 0l-7.941-7.941C29.028 40.749 25.167 42 21 42 9.402 42 0 32.598 0 21S9.402 0 21 0s21 9.402 21 21c0 4.167-1.251 8.028-3.342 11.295l7.941 7.941a4.498 4.498 0 0 1 0 6.363zM21 6C12.717 6 6 12.714 6 21s6.717 15 15 15c8.286 0 15-6.714 15-15S29.286 6 21 6z'></path>
                    </svg>
                    <input className='inputBox' id='inputBox' type='text'
                        placeholder='Search for Doctors'
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>
            </div>
            {doctorCard}
        </div>
    )
}

export default DoctorCard