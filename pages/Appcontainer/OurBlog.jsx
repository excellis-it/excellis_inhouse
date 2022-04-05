import React from "react";
import "./assets/Style.css";
import Typed from "react-typed";
import axios from "axios";
import BlogContent from "../BlogContent";
import { NavLink } from "react-router-dom";

export class OurBlog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Users: [],
    };
  }
  getUsersData() {
    axios
      .get(`/admin/getBlogData/4`, {})
      .then((res) => {
        const data = res.data;
        console.log(data);
        const blogs = data.map((u) => (
          <div className="col-md-6 pl-sm-0 pl-3 pr-sm-0 pr-3">
            <div className="single_devide_blog single_blog">
              <div className="blog_content">
                <h4>{u.Title}</h4>
                <BlogContent BlogDescriptionHome={u.Description} />

                <NavLink to={"/blogDetail/" + u.link} className="read_more">
                  Read More
                </NavLink>
              </div>
              <div className="blog_img">
                <img src={"http://localhost/admin/public/uploads/" + u.Image} />
              </div>
            </div>
          </div>
        ));
        this.setState({
          blogs,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  componentDidMount() {
    this.getUsersData();
  }

  render() {
    return (
      <div>
        <section className="our_blog_sec pt-0">
          <div className="section_typing">
            <Typed strings={["Our Latest Blog"]} typeSpeed={150} />
          </div>
          <div className="container-fluid">
            <div className="row col_position">{this.state.blogs}</div>
          </div>
        </section>
      </div>
    );
  }
}
export default OurBlog;
