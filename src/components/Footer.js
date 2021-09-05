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
                        <td><a href="https://medium.com/@isphinxs/setting-up-jwt-on-a-react-redux-front-end-8b4b6c351bb4">About us</a></td>
                        <td><a href="https://github.com/isphinxs/theater-client">Advertise</a></td>
                        <td>
                            <a href="https://github.com/isphinxs/theater-client"><i className="fab fa-github"></i></a> &nbsp;
                            <a href="https://youtu.be/sqfp5cil7Gs"><i className="fab fa-youtube-square"></i></a> &nbsp; 
                            <a href="https://www.linkedin.com/in/sam-ostrowski/"><i className="fab fa-linkedin"></i></a> &nbsp;
                            <a href="https://medium.com/@isphinxs/setting-up-jwt-on-a-react-redux-front-end-8b4b6c351bb4"><i class="fab fa-medium"></i></a>
                        </td>
                    </tr>
                </tbody>
            </table>
            <br />
            <span>Banner Credit: Photo by <a className="gr-link" href="https://unsplash.com/@alevisionco?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">alevision.co</a> on <a className="gr-link" href="https://unsplash.com/s/photos/theater?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></span>
        </div>
    );
}

export default Footer;