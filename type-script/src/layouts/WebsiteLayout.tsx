import React from 'react'
import { Outlet } from 'react-router-dom'
import '../index.css'

const WebsiteLayout = () => {
    return (
        <div id='wrapper'>
            <div id="header">
                <a href="/" className="logo">
                    <img src="https://cdn.pizzahut.vn/images/Web_V3/Homepage/bd3555a.png" alt="" width="200" />
                </a>
                <div id="menu">
                    <div className="item">
                        <a href="/">Trang chủ</a>
                    </div>
                    <div className="item">
                        <a href="/">Sản phẩm</a>
                    </div>
                    <div className="item">
                        <a href="/">Blog</a>
                    </div>
                    <div className="item">
                        <a href="/">Liên hệ</a>
                    </div>
                </div>
                <div className='auth'>
                    <a href="/signup">Đăng ký </a>
                    <span>/</span>
                    <a href="/signin">Đăng nhập</a>
                </div>

            </div>
            <div id="banner">
                <div className="box-left">
                    <h2>
                        <span>THỨC ĂN</span>
                        <br />
                        <span>THƯỢNG HẠNG</span>
                    </h2>
                    <p>Chuyên cung cấp các món ăn đảm bảo dinh dưỡng
                        hợp vệ sinh đến người dùng,phục vụ người dùng 1 cái
                        hoàn hảo nhất</p>
                    <button>Mua ngay</button>
                </div>


            </div>
            <div id="wp-products">
                
                <Outlet />
            </div>
            <div id="footer">
                <div className="box">
                    <div className="logo">
                        <img className='logo-ft' src="https://cdn.pizzahut.vn/images/Web_V3/Homepage/bd3555a.png" alt="" />
                    </div>
                    <p>Cung cấp sản phẩm với chất lượng an toàn cho quý khách</p>
                </div>
                <div className="box">
                    <h3>NỘI DUNG</h3>
                    <ul className="quick-menu">
                        <div className="item">
                            <a href="">Trang chủ</a>
                        </div>
                        <div className="item">
                            <a href="">Sản phẩm</a>
                        </div>
                        <div className="item">
                            <a href="">Blog</a>
                        </div>
                        <div className="item">
                            <a href="">Liên hệ</a>
                        </div>
                    </ul>
                </div>
                <div className="box">
                    <h3>LIÊN HỆ</h3>
                    <form action="" />
                    <input type="text" placeholder="Địa chỉ email" />
                    <button>Nhận tin</button>
                    <form />
                </div>
            </div>
        </div>
    )
}

export default WebsiteLayout