
import {useCookies} from "react-cookie";
import {Link, Navigate, useNavigate} from "react-router-dom";



function NavbarMenu() {
    const [cookies, setCookie,removeCookie] = useCookies(["token"]);
    // const userInfo = useAppSelector(SelectUserInfo)
    return (
        <div>

            <nav className="navbar navbar-expand-lg bg-navbar-theme sticky-top" id="layout-navbar">

                <div className="container-fluid" >
                    <a className="navbar-brand text-primary fw-bold navbar-brand-1" href={process.env.PUBLIC_URL + "/"}>
                        <img src={process.env.PUBLIC_URL + "/assets/img/logo/nso-logo.png"} className="w-px-70 h-auto " />
                    </a>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav" >
                            <li className="nav-item nav1">
                                <a className="nav-link active" aria-current="page" href={process.env.REACT_APP_DOMAIN}>
                                    <i className="bx bxs-home me-2"></i>
                                    <span className="align-middle">หน้าหลัก</span>
                                </a>
                            </li>
                            {/*<li className="nav-item nav1">*/}
                            {/*    <a className="nav-link active" aria-current="page" href={process.env.REACT_APP_PORTAL + "/main"}>*/}
                            {/*        <i className="bx bxs-grid-alt me-2"></i>*/}
                            {/*        <span className="align-middle">ระบบงาน</span>*/}
                            {/*    </a>*/}
                            {/*</li>*/}
                        </ul>
                        <ul className="navbar-nav ms-auto">

                            {/*<li className="nav-item nav1">*/}
                            {/*    <a className="nav-link fw-semibold" aria-current="page" >{"userInfo?.username" }</a>*/}
                            {/*</li>*/}
                            <li className="nav-item navbar-dropdown dropdown-user dropdown">
                                <a className="nav-link dropdown-toggle hide-arrow" href='#' onClick={e => e.preventDefault()} data-bs-toggle="dropdown">
                                    <div className="avatar avatar-online">
                                        <img src={process.env.PUBLIC_URL + "/assets/img/avatars/user.png"} className="w-px-40 h-auto rounded-circle" />
                                    </div>
                                </a>
                                <ul className="dropdown-menu dropdown-menu-end">
                                    <li>
                                        <a className="dropdown-item" href='#' onClick={e => e.preventDefault()}>
                                            <div className="d-flex">
                                                <div className="flex-shrink-0 me-3">
                                                    <div className="avatar avatar-online">
                                                        <img src={process.env.PUBLIC_URL + "/assets/img/avatars/user.png"} className="w-px-40 h-auto rounded-circle" />
                                                    </div>
                                                </div>
                                                <div className="flex-grow-1">
                                                    <span className="fw-semibold d-block">{"userInfo?.name" }</span>
                                                    <small className="text-muted d-block">{"userInfo?.roleName"}</small>
                                                    <small className="text-muted d-block">{"userInfo?.cwtName"}</small>
                                                    
                                                    <small className="text-muted d-block">{"userInfo?.ampName "}</small>
                                                    <small className="text-muted d-block">{"userInfo?.tamName"}</small>
                                                    <small className="text-muted d-block">{"userInfo?.vilName "}</small>

                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <div className="dropdown-divider"></div>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href={process.env.PUBLIC_URL + "/profile"}>
                                            <i className="bx bx-user me-2"></i>
                                            <span className="align-middle">ข้อมูลส่วนตัว</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href={process.env.PUBLIC_URL + "/changepassword"}>
                                            <i className="bx bx-lock me-2"></i>
                                            <span className="align-middle">เปลี่ยนรหัสผ่าน</span>
                                        </a>
                                    </li>
                                    <li>
                                        <div className="dropdown-divider"></div>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" to={'/logout'} onClick={event =>  removeCookie("token")}>
                                            <i className="bx bx-power-off me-2"></i>
                                            <span className="align-middle">ออกจากระบบ</span>
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>


                </div>
            </nav>

        </div>
    )
}

export default NavbarMenu