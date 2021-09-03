import React from 'react';

function Footer() {
    return(
        <div id="footer">
            <table>
                <thead>
                    <tr>
                        <th>Company</th>
                        <th>Work with Us</th>
                        <th>Connect</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>About us</td>
                        <td>Advertise</td>
                        <td>
                            <a href="https://github.com/isphinxs"><i className="fab fa-github"></i></a> &nbsp;
                            <a href="http://youtube.com"><i className="fab fa-youtube-square"></i></a> &nbsp; 
                            <a href="https://www.linkedin.com/in/sam-ostrowski/"><i className="fab fa-linkedin"></i></a>
                        </td>
                    </tr>
                </tbody>
            </table>
            <br />
            <span>Banner Credit: Photo by <a href="https://unsplash.com/@alevisionco?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">alevision.co</a> on <a href="https://unsplash.com/s/photos/theater?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></span>
        </div>
    );
}

export default Footer;